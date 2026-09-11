import { NextResponse } from "next/server";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const DEFAULT_SUBJECT = "Nieuwe aanvraag via BergTopper";

type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  botcheck?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function trimValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function parsePayload(value: unknown): ContactPayload | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const body = value as Record<string, unknown>;

  return {
    name: trimValue(body.name),
    email: trimValue(body.email),
    subject: trimValue(body.subject),
    message: trimValue(body.message),
    botcheck: trimValue(body.botcheck),
  };
}

function isValidPayload(payload: ContactPayload): boolean {
  const subjectLength = payload.subject?.length ?? 0;

  return (
    payload.name.length >= 2 &&
    payload.name.length <= 120 &&
    payload.email.length >= 5 &&
    payload.email.length <= 254 &&
    EMAIL_PATTERN.test(payload.email) &&
    payload.message.length >= 10 &&
    payload.message.length <= 5000 &&
    subjectLength <= 180
  );
}

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { ok: false, message: "Formulier is niet beschikbaar." },
      { status: 500 },
    );
  }

  let rawBody: unknown;

  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Ongeldige aanvraag." },
      { status: 400 },
    );
  }

  const payload = parsePayload(rawBody);

  if (!payload) {
    return NextResponse.json(
      { ok: false, message: "Ongeldige aanvraag." },
      { status: 400 },
    );
  }

  if (payload.botcheck) {
    return NextResponse.json(
      { ok: false, message: "Aanvraag geweigerd." },
      { status: 400 },
    );
  }

  if (!isValidPayload(payload)) {
    return NextResponse.json(
      { ok: false, message: "Controleer je invoer en probeer opnieuw." },
      { status: 400 },
    );
  }

  const subject = payload.subject || DEFAULT_SUBJECT;

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        from_name: "BergTopper",
        subject,
        name: payload.name,
        email: payload.email,
        message: payload.message,
        replyto: payload.email,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, message: "Versturen is nu niet gelukt." },
        { status: 502 },
      );
    }

    const data = (await response.json()) as { success?: boolean };

    if (!data.success) {
      return NextResponse.json(
        { ok: false, message: "Versturen is nu niet gelukt." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Versturen is nu niet gelukt." },
      { status: 502 },
    );
  }
}
