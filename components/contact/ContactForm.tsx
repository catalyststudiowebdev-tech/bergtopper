"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  botcheck: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  botcheck: "",
};

type SubmitState = "idle" | "sending" | "success" | "error";

type ContactApiResponse = {
  success?: boolean;
  message?: string;
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitState === "sending") {
      return;
    }

    setSubmitState("sending");
    setSubmitMessage("");

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error("Formulierconfiguratie ontbreekt. Voeg de Web3Forms sleutel toe.");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: "BergTopper",
          name: form.name,
          email: form.email,
          subject: form.subject.trim() || "Nieuwe aanvraag via BergTopper",
          message: form.message,
          botcheck: form.botcheck,
          replyto: form.email,
        }),
      });

      const data = (await response.json()) as ContactApiResponse;

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Versturen is nu niet gelukt.");
      }

      setForm(initialState);
      setSubmitState("success");
      setSubmitMessage("Bericht verstuurd. Alain neemt zo snel mogelijk contact op.");
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Versturen is nu niet gelukt. Probeer het opnieuw of mail direct.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-surface p-7 shadow-sm ring-1 ring-border sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Naam"
          value={form.name}
          required
          disabled={submitState === "sending"}
          onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
        />
        <Field
          label="E-mail"
          type="email"
          value={form.email}
          required
          disabled={submitState === "sending"}
          onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
        />
      </div>

      <div className="mt-5">
        <Field
          label="Onderwerp"
          value={form.subject}
          disabled={submitState === "sending"}
          onChange={(value) => setForm((prev) => ({ ...prev, subject: value }))}
        />
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="contact-botcheck">Laat dit veld leeg</label>
        <input
          id="contact-botcheck"
          name="botcheck"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.botcheck}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, botcheck: event.target.value }))
          }
        />
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-medium text-foreground">
          Bericht
        </span>
        <textarea
          value={form.message}
          required
          rows={6}
          disabled={submitState === "sending"}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          className="w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-base text-foreground outline-none transition-colors focus:border-accent"
          placeholder="Waar kunnen we je mee helpen?"
        />
      </label>

      {submitMessage ? (
        <p
          aria-live="polite"
          className={`mt-4 text-sm ${
            submitState === "success" ? "text-accent" : "text-[#B45309]"
          }`}
        >
          {submitMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitState === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {submitState === "sending" ? "Versturen..." : "Verstuur bericht"}
        <ArrowRight />
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email";
  required?: boolean;
  disabled?: boolean;
};

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  disabled = false,
}: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-base text-foreground outline-none transition-colors focus:border-accent"
      />
    </label>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
