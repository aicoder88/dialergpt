import { NextResponse } from "next/server";

type QuizAnswers = {
  painPoint: string;
  painPointOther?: string;
  tool: string;
  toolOther?: string;
  budget: string;
  urgency: string;
};

type QuizSubmission = {
  answers: QuizAnswers;
  email: string;
};

const REQUIRED_FIELDS: Array<keyof QuizAnswers> = [
  "painPoint",
  "tool",
  "budget",
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
    painPoint: String(rawAnswers["painPoint"] ?? ""),
    painPointOther: isNonEmptyString(rawAnswers["painPointOther"])
      ? String(rawAnswers["painPointOther"]).trim()
      : undefined,
    tool: String(rawAnswers["tool"] ?? ""),
    toolOther: isNonEmptyString(rawAnswers["toolOther"])
      ? String(rawAnswers["toolOther"]).trim()
      : undefined,
    budget: String(rawAnswers["budget"] ?? ""),
    urgency: String(rawAnswers["urgency"] ?? ""),
  };

  const missingRequired = REQUIRED_FIELDS.filter(
    (field) => !isNonEmptyString(normalizedAnswers[field])
  );

  if (missingRequired.length > 0) {
    return null;
  }

  if (
    normalizedAnswers.painPoint === "other" &&
    !isNonEmptyString(normalizedAnswers.painPointOther)
  ) {
    return null;
  }

  if (
    normalizedAnswers.tool === "other" &&
    !isNonEmptyString(normalizedAnswers.toolOther)
  ) {
    return null;
  }

  return {
    answers: normalizedAnswers,
    email: email.trim(),
  };
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

    await forwardToWebhook(submission);

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
