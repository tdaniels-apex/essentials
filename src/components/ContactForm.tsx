"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { contact } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

const BUDGET_OPTIONS = [
  "Less than $3,500",
  "$3,500 – $5,000",
  "$5,000 – $8,000",
  "$8,000+",
];

const EMPTY = {
  fullName: "",
  company: "",
  email: "",
  budget: "",
  message: "",
  website: "", // honeypot — must stay empty
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  function update(field: keyof typeof EMPTY, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!values.fullName.trim()) next.fullName = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!emailRe.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.budget) next.budget = "Please select a budget range.";
    if (!values.message.trim()) next.message = "Tell us a little about your project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setValues(EMPTY);
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="text-center">
        <h3 className="text-xl font-bold text-foreground">Application received.</h3>
        <p className="mt-3 text-muted">{contact.microcopy}</p>
        <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>
          Submit another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field label="Full Name" htmlFor="fullName" error={errors.fullName} required>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          value={values.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          aria-invalid={!!errors.fullName}
          className={inputCls(!!errors.fullName)}
        />
      </Field>

      <Field label="Company / Organization" htmlFor="company">
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
          className={inputCls(false)}
        />
      </Field>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Email Address" htmlFor="email" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            className={inputCls(!!errors.email)}
          />
        </Field>

        <Field label="Budget" htmlFor="budget" error={errors.budget} required>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(e) => update("budget", e.target.value)}
            aria-invalid={!!errors.budget}
            className={inputCls(!!errors.budget)}
          >
            <option value="">Select a range…</option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell Us More" htmlFor="message" error={errors.message} required>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={!!errors.message}
          className={inputCls(!!errors.message)}
        />
      </Field>

      {/* Honeypot — visually hidden, off the tab order. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px]">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      {serverError ? (
        <p role="alert" className="text-sm text-apex-red">
          {serverError}
        </p>
      ) : null}

      <div className="pt-1">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : contact.submitLabel}
        </Button>
      </div>

      <p className="text-sm text-muted-foreground">{contact.microcopy}</p>
    </form>
  );
}

function inputCls(invalid: boolean) {
  return [
    "w-full rounded-md border bg-background px-3.5 py-2.5 text-foreground",
    "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-apex-red/40 focus:border-apex-red",
    invalid ? "border-apex-red" : "border-line-strong",
  ].join(" ");
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
        {required ? <span className="ml-0.5 text-apex-red">*</span> : null}
      </label>
      {children}
      {error ? <p className="mt-1.5 text-sm text-apex-red">{error}</p> : null}
    </div>
  );
}
