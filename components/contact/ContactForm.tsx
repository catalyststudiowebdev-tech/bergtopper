"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  contactEmail: string;
};

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm({ contactEmail }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = form.subject.trim() || "Nieuwe aanvraag via BergTopper";
    const body = [
      `Naam: ${form.name}`,
      `E-mail: ${form.email}`,
      "",
      "Bericht:",
      form.message,
    ].join("\n");

    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
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
          onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
        />
        <Field
          label="E-mail"
          type="email"
          value={form.email}
          required
          onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
        />
      </div>

      <div className="mt-5">
        <Field
          label="Onderwerp"
          value={form.subject}
          onChange={(value) => setForm((prev) => ({ ...prev, subject: value }))}
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
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          className="w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-base text-foreground outline-none transition-colors focus:border-accent"
          placeholder="Waar kunnen we je mee helpen?"
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-hover sm:w-auto"
      >
        Verstuur bericht
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
};

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
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
