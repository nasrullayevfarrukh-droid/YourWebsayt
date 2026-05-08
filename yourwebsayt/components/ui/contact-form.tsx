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
  return `Salam, yeni sayt layihəsi üçün müraciət etmək istəyirəm.

Ad: ${form.name}
Şirkət / Brend: ${form.company}
Email: ${form.email}
Telefon: ${form.phone}
Sayt növü: ${form.websiteType}
Büdcə aralığı: ${form.budget}
Mesaj: ${form.message}`;
}

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
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

    const message = encodeURIComponent(buildWhatsAppMessage(form));
    const whatsappUrl = `${siteConfig.whatsappHref}?text=${message}`;

    setErrors({});
    setStatus("success");
    setFeedback("WhatsApp açılır. Müraciəti oradan birbaşa göndərə bilərsiniz.");

    const popup = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!popup) {
      window.location.href = whatsappUrl;
    }

    setForm(initialForm);
  };

  return (
    <form onSubmit={handleSubmit} className="editorial-card rounded-[30px] p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
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

      <div className="mt-4 sm:mt-5">
        <label className="mb-2 block text-sm text-[var(--color-text)]">Mesaj</label>
        <textarea
          value={form.message}
          onChange={(event) => handleChange("message", event.target.value)}
          rows={5}
          className="w-full rounded-[22px] border border-white/10 bg-black/20 px-4 py-4 text-sm text-[var(--color-text)] outline-none transition-colors duration-300 placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
          placeholder="Biznesiniz və gözləntiniz barədə qısa məlumat yazın."
        />
        {errors.message ? <p className="mt-2 text-sm text-[#ff9a8a]">{errors.message}</p> : null}
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-[var(--color-muted)]">
          Müraciət birbaşa WhatsApp mesajı kimi açılacaq.
        </div>
        <Button type="submit" size="lg" magnetic={false} className="w-full justify-center sm:w-auto">
          Sorğunu göndər
        </Button>
      </div>

      {feedback ? (
        <div
          className={`mt-5 rounded-[18px] px-4 py-3 text-sm ${
            status === "success"
              ? "border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-text)]"
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
        className="h-[52px] w-full rounded-[18px] border border-white/10 bg-black/20 px-4 text-sm text-[var(--color-text)] outline-none transition-colors duration-300 focus:border-[var(--color-accent)]"
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
        className="h-[52px] w-full rounded-[18px] border border-white/10 bg-black/20 px-4 text-sm text-[var(--color-text)] outline-none transition-colors duration-300 focus:border-[var(--color-accent)]"
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
