import { NextResponse } from "next/server";

type FeedbackSubmission = {
    type: string;
    description: string;
    email: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null;
}

function isNonEmptyString(value: unknown): value is string {
    return typeof value === "string" && value.trim().length > 0;
}

function validatePayload(payload: unknown): FeedbackSubmission | null {
    if (!isRecord(payload)) {
        return null;
    }

    const { type, description, email } = payload as {
        type?: unknown;
        description?: unknown;
        email?: unknown;
    };

    if (
        !isNonEmptyString(type) ||
        !isNonEmptyString(description) ||
        !isNonEmptyString(email)
    ) {
        return null;
    }

    return {
        type: type.trim(),
        description: description.trim(),
        email: email.trim(),
    };
}

async function sendEmailNotification(submission: FeedbackSubmission) {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
        throw new Error("RESEND_API_KEY not set – cannot send feedback notification email");
    }

    const timestamp = new Date().toISOString();
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
    .section { background: white; margin: 15px 0; padding: 15px; border-left: 4px solid #8B5CF6; border-radius: 4px; }
    .label { font-weight: bold; color: #8B5CF6; margin-bottom: 5px; }
    .answer { color: #333; margin-bottom: 10px; white-space: pre-wrap; }
    .footer { background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">💡 New Feedback Received!</h1>
      <p style="margin: 5px 0 0 0;">DialerGPT User Feedback</p>
    </div>
    <div class="content">
      <p><strong>Submitted:</strong> ${new Date(timestamp).toLocaleString()}</p>
      <p><strong>📧 User Email:</strong> <a href="mailto:${submission.email}">${submission.email}</a></p>

      <div class="section">
        <div class="label">📝 Feedback Type</div>
        <div class="answer">${submission.type}</div>
      </div>

      <div class="section">
        <div class="label">💬 Description</div>
        <div class="answer">${submission.description}</div>
      </div>
    </div>
    <div class="footer">
      This feedback was submitted via DialerGPT at ${new Date(timestamp).toLocaleString()}
    </div>
  </div>
</body>
</html>
  `.trim();

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${resendApiKey}`,
            },
            body: JSON.stringify({
                from: 'DialerGPT Feedback <onboarding@resend.dev>',
                to: ['dialergpt@gmail.com'],
                reply_to: submission.email,
                subject: `💡 New ${submission.type} from ${submission.email}`,
                html: htmlContent,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text().catch(() => "");
            throw new Error(
                errorText
                    ? `Resend API error: ${errorText}`
                    : `Resend API returned status ${response.status}`
            );
        }

        console.info("Feedback notification email sent successfully");
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Unknown error sending feedback email";
        console.error("Failed to send email notification", message);
        throw error instanceof Error ? error : new Error(message);
    }
}

async function forwardToWebhook(submission: FeedbackSubmission) {
    if (!process.env.FEEDBACK_WEBHOOK_URL) {
        return;
    }

    try {
        await fetch(process.env.FEEDBACK_WEBHOOK_URL, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                ...submission,
                submittedAt: new Date().toISOString(),
                source: "dialergpt-web",
            }),
        });
    } catch (error) {
        console.error("Failed to forward feedback submission", error);
    }
}

export async function POST(request: Request) {
    try {
        const payload = await request.json();
        const submission = validatePayload(payload);

        if (!submission) {
            return NextResponse.json(
                { error: "Invalid feedback submission payload" },
                { status: 400 }
            );
        }

        const [emailResult, webhookResult] = await Promise.allSettled([
            sendEmailNotification(submission),
            forwardToWebhook(submission),
        ]);

        if (emailResult.status === "rejected") {
            console.error("Feedback email delivery failed", emailResult.reason);
            return NextResponse.json(
                {
                    error:
                        emailResult.reason instanceof Error
                            ? emailResult.reason.message
                            : "Unable to send feedback email right now",
                },
                { status: 502 }
            );
        }

        if (webhookResult.status === "rejected") {
            console.error("Feedback webhook forwarding failed", webhookResult.reason);
        }

        console.info("Feedback submission received", {
            ...submission,
            email: submission.email.replace(/(.{2}).+(@.*)/, "$1***$2"),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Failed to process feedback submission", error);
        return NextResponse.json(
            { error: "Unable to process your feedback right now" },
            { status: 500 }
        );
    }
}
