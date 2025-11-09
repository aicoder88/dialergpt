import { NextResponse } from "next/server";

type QuizAnswers = {
  tool: string;
  toolOther?: string;
  motivation: string;
  motivationOther?: string;
  urgency: string;
};

type QuizSubmission = {
  answers: QuizAnswers;
  email: string;
};

const REQUIRED_FIELDS: Array<keyof QuizAnswers> = [
  "tool",
  "motivation",
  "urgency",
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function validatePayload(payload: unknown): QuizSubmission | null {
  if (!isRecord(payload)) {
    return null;
  }

  const { answers, email } = payload as {
    answers?: unknown;
    email?: unknown;
  };

  if (!isRecord(answers) || !isNonEmptyString(email)) {
    return null;
  }

  const rawAnswers = answers as Record<string, unknown>;

  const normalizedAnswers: QuizAnswers = {
    tool: String(rawAnswers["tool"] ?? ""),
    toolOther: isNonEmptyString(rawAnswers["toolOther"])
      ? String(rawAnswers["toolOther"]).trim()
      : undefined,
    motivation: String(rawAnswers["motivation"] ?? ""),
    motivationOther: isNonEmptyString(rawAnswers["motivationOther"])
      ? String(rawAnswers["motivationOther"]).trim()
      : undefined,
    urgency: String(rawAnswers["urgency"] ?? ""),
  };

  const missingRequired = REQUIRED_FIELDS.filter(
    (field) => !isNonEmptyString(normalizedAnswers[field])
  );

  if (missingRequired.length > 0) {
    return null;
  }

  if (
    normalizedAnswers.tool === "other" &&
    !isNonEmptyString(normalizedAnswers.toolOther)
  ) {
    return null;
  }

  if (
    normalizedAnswers.motivation === "other" &&
    !isNonEmptyString(normalizedAnswers.motivationOther)
  ) {
    return null;
  }

  return {
    answers: normalizedAnswers,
    email: email.trim(),
  };
}

async function sendEmailNotification(submission: QuizSubmission) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.warn("RESEND_API_KEY not set - email notification skipped");
    return;
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
    .answer { color: #333; margin-bottom: 10px; }
    .footer { background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">🎯 New Quiz Response!</h1>
      <p style="margin: 5px 0 0 0;">DialerGPT Community Quiz</p>
    </div>
    <div class="content">
      <p><strong>Submitted:</strong> ${new Date(timestamp).toLocaleString()}</p>
      <p><strong>📧 Respondent Email:</strong> <a href="mailto:${submission.email}">${submission.email}</a></p>

      <div class="section">
        <div class="label">🛠️ QUESTION 1: What should we build first?</div>
        <div class="answer">${submission.answers.tool}</div>
        ${submission.answers.tool === 'other' && submission.answers.toolOther ? `<div class="answer"><em>Details: ${submission.answers.toolOther}</em></div>` : ''}
      </div>

      <div class="section">
        <div class="label">💬 QUESTION 2: Why does your team need this built?</div>
        <div class="answer">${submission.answers.motivation}</div>
        ${submission.answers.motivation === 'other' && submission.answers.motivationOther ? `<div class="answer"><em>Details: ${submission.answers.motivationOther}</em></div>` : ''}
      </div>

      <div class="section">
        <div class="label">⏰ QUESTION 3: How fast do you need this live?</div>
        <div class="answer">${submission.answers.urgency}</div>
      </div>
    </div>
    <div class="footer">
      This response was submitted via the DialerGPT community quiz at ${new Date(timestamp).toLocaleString()}
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
        from: 'DialerGPT Quiz <onboarding@resend.dev>',
        to: ['dialergpt@gmail.com'],
        reply_to: submission.email,
        subject: `🎯 New Quiz Response from ${submission.email}`,
        html: htmlContent,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to send email via Resend:', errorText);
    } else {
      console.info('Quiz notification email sent successfully');
    }
  } catch (error) {
    console.error("Failed to send email notification", error);
  }
}

async function forwardToWebhook(submission: QuizSubmission) {
  if (!process.env.QUIZ_WEBHOOK_URL) {
    return;
  }

  try {
    await fetch(process.env.QUIZ_WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...submission,
        submittedAt: new Date().toISOString(),
        source: "dialergpt-web",
      }),
    });
  } catch (error) {
    console.error("Failed to forward quiz submission", error);
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const submission = validatePayload(payload);

    if (!submission) {
      return NextResponse.json(
        { error: "Invalid quiz submission payload" },
        { status: 400 }
      );
    }

    // Send email notification and forward to webhook (both are non-blocking)
    await Promise.allSettled([
      sendEmailNotification(submission),
      forwardToWebhook(submission),
    ]);

    console.info("Quiz submission received", {
      ...submission,
      email: submission.email.replace(/(.{2}).+(@.*)/, "$1***$2"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to process quiz submission", error);
    return NextResponse.json(
      { error: "Unable to process your submission right now" },
      { status: 500 }
    );
  }
}
