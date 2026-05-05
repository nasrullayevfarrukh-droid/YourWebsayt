import type { ContactPayload } from "@/lib/types";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(payload: ContactPayload) {
  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  if (payload.name.trim().length < 2) {
    errors.name = "Ad ən azı 2 simvol olmalıdır.";
  }

  if (payload.company.trim().length < 2) {
    errors.company = "Şirkət və ya brend adını qeyd edin.";
  }

  if (!emailRegex.test(payload.email.trim())) {
    errors.email = "Düzgün email ünvanı daxil edin.";
  }

  if (payload.phone.trim().length < 7) {
    errors.phone = "Telefon nömrəsini tam yazın.";
  }

  if (!payload.websiteType.trim()) {
    errors.websiteType = "Sayt növünü seçin.";
  }

  if (!payload.budget.trim()) {
    errors.budget = "Büdcə aralığını seçin.";
  }

  if (payload.message.trim().length < 20) {
    errors.message = "Mesaj hissəsində ehtiyacı bir az daha detallı yazın.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}
