import type { PricingPlan } from "@/lib/types";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Start",
    priceFrom: "2 200 AZN-dən",
    subtitle: "Güclü başlanğıc üçün təmiz və premium əsas sayt",
    description: "Yeni biznes, şəxsi brend və ya yığcam xidmət təqdimatı üçün ideal giriş paketi.",
    suitedFor: "Yeni başlayan brendlər, yığcam xidmət saytları, sadə landing page ehtiyacları",
    included: [
      "1-4 səhifə və ya fokuslanmış landing page",
      "Tam responsive dizayn",
      "Əlaqə forması və CTA blokları",
      "Əsas SEO baza quruluşu",
      "Sürət optimizasiyası",
      "2 reviziya mərhələsi",
      "14 gün təhvil sonrası dəstək"
    ],
    cta: "Start paketini müzakirə et"
  },
  {
    name: "Business",
    priceFrom: "4 800 AZN-dən",
    subtitle: "Böyümək istəyən biznes üçün balanslı premium həll",
    description: "Etibar, xidmət təqdimatı və müraciət axını prioritet olan bizneslər üçün əsas seçim.",
    suitedFor: "Korporativ saytlar, klinika, hüquq, turizm, xidmət biznesləri",
    highlight: "Ən çox seçilən",
    included: [
      "5-8 səhifəlik fərdiləşdirilmiş sayt",
      "Daha dərin UI sistemi və animasiya dili",
      "Lead capture formaları və güclü CTA axını",
      "Xidmət səhifələri və etibar blokları",
      "Əsas CMS və məzmun dəstəyi",
      "Texniki SEO və performans optimizasiyası",
      "3 reviziya mərhələsi",
      "30 gün təhvil sonrası dəstək"
    ],
    cta: "Business paketini planlaşdır"
  },
  {
    name: "Premium",
    priceFrom: "8 500 AZN-dən",
    subtitle: "Tam custom, yüksək səviyyəli və biznesə ciddi təsir edən digital flagship",
    description: "Brend səviyyəsini ciddi şəkildə yüksəltmək istəyən şirkətlər üçün premium istehsal paketi.",
    suitedFor: "Yüksək dəyərli brendlər, e-commerce, böyük təqdimat saytları, art-direkt edilmiş layihələr",
    included: [
      "8+ səhifə və ya kompleks sayt arxitekturası",
      "Art-direkt edilmiş tam custom dizayn",
      "Qabaqcıl animasiya və mikrointeraction sistemi",
      "Portfolio, case və dərin məzmun modulları",
      "CMS və genişlənə bilən məzmun strukturu",
      "Qabaqcıl performans və SEO təməli",
      "4 reviziya mərhələsi",
      "45 gün təhvil sonrası prioritet dəstək"
    ],
    cta: "Premium layihəyə başla"
  }
];

export const pricingExtras = [
  "Əlavə səhifələr və xüsusi bloklar",
  "Çoxdilli struktur",
  "Blog və məzmun modulu",
  "Karyera və vakansiya bölməsi",
  "Rezervasiya inteqrasiyası",
  "Məhsul kataloqu və geniş e-commerce axını",
  "Davamlı texniki dəstək və inkişaf planı"
] as const;
