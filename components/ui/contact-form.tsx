"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { contactOptions, siteConfig } from "@/data/site";
import type { ContactPayload } from "@/lib/types";
import { validateContactPayload } from "@/lib/validation";

const initialForm: ContactPayload = {
  name: "",
  company: "",
  email: "",
  phone: "",
  websiteType: "",
  budget: "",
  message: ""
};

function buildWhatsAppMessage(form: ContactPayload) {
  return [
    "Salam, yeni sayt layihəsi üçün müraciət etmək istəyirəm.",
    "",
    `Ad: ${form.name.trim()}`,
    `Şirkət / Brend: ${form.company.trim()}`,
    `Email: ${form.email.trim()}`,
    `Telefon: ${form.phone.trim()}`,
    `Sayt növü: ${form.websiteType.trim()}`,
    `Büdcə aralığı: ${form.budget.trim()}`,
    `Mesaj: ${form.message.trim()}`
  ].join("\n");
}

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (field: keyof ContactPayload, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = validateContactPayload(form);

    if (!result.isValid) {
      setErrors(result.errors);
      setStatus("error");
      setFeedback("Zəhmət olmasa xanaları düzgün doldurun.");
      return;
    }

    setStatus("loading");
    setFeedback("");
    setErrors({});

    try {
      const message = buildWhatsAppMessage(form);
      const whatsappUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
      const openedWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      if (!openedWindow) {
        window.location.href = whatsappUrl;
      }

      setStatus("success");
      setFeedback("WhatsApp açıldı. Mesajı göndərmək üçün davam edin.");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setFeedback("WhatsApp açılarkən xəta baş verdi. Yenidən cəhd edin.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="editorial-card rounded-[32px] p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Ad"
          value={form.name}
          error={errors.name}
          onChange={(value) => handleChange("name", value)}
        />
        <Field
          label="Şirkət / Brend"
          value={form.company}
          error={errors.company}
          onChange={(value) => handleChange("company", value)}
        />
        <Field
          label="Email"
          type="email"
          value={form.email}
          error={errors.email}
          onChange={(value) => handleChange("email", value)}
        />
        <Field
          label="Telefon"
          value={form.phone}
          error={errors.phone}
          onChange={(value) => handleChange("phone", value)}
        />
        <SelectField
          label="Sayt növü"
          value={form.websiteType}
          error={errors.websiteType}
          onChange={(value) => handleChange("websiteType", value)}
          options={contactOptions.websiteTypes}
        />
        <SelectField
          label="Büdcə aralığı"
          value={form.budget}
          error={errors.budget}
          onChange={(value) => handleChange("budget", value)}
          options={contactOptions.budgets}
        />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm text-[var(--color-text)]">Mesaj</label>
        <textarea
          value={form.message}
          onChange={(event) => handleChange("message", event.target.value)}
          rows={6}
          className="w-full rounded-[24px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.82)] px-4 py-4 text-sm text-[var(--color-text)] outline-none transition-colors duration-300 placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent-secondary)]"
          placeholder="Biznesiniz, məqsədiniz və gözləntiniz barədə qısa məlumat yazın."
        />
        {errors.message ? (
          <p className="mt-2 text-sm text-[#ff9a8a]">{errors.message}</p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-[var(--color-muted)]">
          İdeyanı təqdim edin, strukturu və doğru həlli biz quraq.
        </div>
        <Button type="submit" size="lg" disabled={status === "loading"}>
          {status === "loading" ? "WhatsApp açılır..." : "Sorğunu göndər"}
        </Button>
      </div>

      {feedback ? (
        <div
          className={`mt-5 rounded-[18px] px-4 py-3 text-sm ${
            status === "success"
              ? "border border-[var(--color-accent-secondary)]/30 bg-[var(--color-accent-secondary)]/10 text-[var(--color-text)]"
              : "border border-[#ff9a8a]/30 bg-[#ff9a8a]/10 text-[#ffe0d8]"
          }`}
        >
          {feedback}
        </div>
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
};

function Field({ label, value, onChange, error, type = "text" }: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm text-[var(--color-text)]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-[52px] w-full rounded-[20px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.82)] px-4 text-sm text-[var(--color-text)] outline-none transition-colors duration-300 placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent-secondary)]"
      />
      {error ? <p className="mt-2 text-sm text-[#ff9a8a]">{error}</p> : null}
    </div>
  );
}

type SelectFieldProps = FieldProps & {
  options: readonly string[];
};

function SelectField({ label, value, onChange, error, options }: SelectFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm text-[var(--color-text)]">{label}</label>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-[52px] w-full rounded-[20px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.82)] px-4 text-sm text-[var(--color-text)] outline-none transition-colors duration-300 focus:border-[var(--color-accent-secondary)]"
      >
        <option value="">Seçin</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <p className="mt-2 text-sm text-[#ff9a8a]">{error}</p> : null}
    </div>
  );
}
