import type { FeatureBlock, NavItem, ProcessStep, Stat, TrustPoint } from "@/lib/types";

export const siteConfig = {
  name: "YourWebsayt",
  title: "YourWebsayt | Premium personal veb studio",
  description:
    "YourWebsayt biznesini daha peşəkar göstərmək və daha çox sorğu toplamaq istəyənlər üçün premium, sürətli və mobil-first veb saytlar qurur.",
  url: "https://yourwebsayt.az",
  email: "hello@yourwebsayt.az",
  phone: "+994 50 555 20 25",
  address: "Bakı, Azərbaycan",
  consultation: "Layihəni müzakirə edək",
  socialLinks: [{ label: "Instagram", href: "https://instagram.com" }]
} as const;

export const navigation: NavItem[] = [
  { label: "Ana səhifə", href: "/" },
  { label: "Haqqımda", href: "/about" },
  { label: "Xidmətlər", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Əlaqə", href: "/contact" }
];

export const heroTrustIndicators = [
  "Mobil-first yanaşma",
  "Sürətli frontend",
  "Premium UI sistemi",
  "Satış yönümlü struktur"
] as const;

export const credibilityStrip = [
  "Modern, sürətli və mobil-first saytlar",
  "Biznesə uyğun struktur və təqdimat",
  "Premium görünüş və təmiz kod",
  "Sorğu toplamağa fokuslanan CTA sistemi"
] as const;

export const trustPoints: TrustPoint[] = [
  {
    label: "Hazır şablon yox",
    detail: "Sayt biznesinizə, auditoriyanıza və satış mesajınıza uyğun sıfırdan qurulur."
  },
  {
    label: "Mobil görünüş ön planda",
    detail: "Müştərinin ilk təəssüratını ən çox mobil ekran formalaşdırdığı üçün əsas fokus oradadır."
  },
  {
    label: "Sürətli və təmiz kod",
    detail: "Gözəl görünən, amma ağır işləyən sayt yox; sürətli, təmiz və davamlı baza qurulur."
  },
  {
    label: "Satış yönümlü struktur",
    detail: "Mesaj, CTA və bölmə axını sadəcə dekor üçün yox, real nəticə üçün planlanır."
  },
  {
    label: "Layihədən sonra dəstək",
    detail: "Təhvildən sonra yenilənmə, kiçik düzəliş və inkişaf üçün dəstək modeli saxlanır."
  }
];

export const whyChooseUs: FeatureBlock[] = [
  {
    title: "Hazır şablon kimi yox, biznesə uyğun sayt",
    description: "Hər layihə xidmət modelinə, auditoriyaya və satış məqsədinə uyğun fərdi şəkildə qurulur."
  },
  {
    title: "Mobil görünüşə ciddi fokus",
    description: "Əsas qərarların çoxu telefon ekranında verildiyi üçün mobil təcrübə prioritet kimi hazırlanır."
  },
  {
    title: "Sürətli və təmiz kod",
    description: "Performans, rahat inkişaf və uzunmüddətli istifadə üçün yüngül və səliqəli frontend yazılır."
  },
  {
    title: "Satış yönümlü struktur",
    description: "Başlıqdan CTA-ya qədər hər blok sorğu yaratmaq və etibarı artırmaq üçün düzülür."
  },
  {
    title: "Layihədən sonra dəstək",
    description: "Sayt yayınlandıqdan sonra onu tək buraxmayan, yeniləmə və inkişaf üçün açıq sistem qurulur."
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Analiz",
    description: "Biznesinizi, auditoriyanızı və saytın hansı nəticəni gətirməli olduğunu dəqiq təyin edirik."
  },
  {
    step: "02",
    title: "Struktur",
    description: "Başlıqlar, bölmələr, CTA-lar və istifadəçi axını satış məntiqinə uyğun şəkildə qurulur."
  },
  {
    step: "03",
    title: "Dizayn",
    description: "Brendinizi daha bahalı və ciddi göstərən premium vizual dil hazırlanır."
  },
  {
    step: "04",
    title: "Kodlaşdırma",
    description: "Sürətli, mobil-first və təmiz frontend real istifadəyə hazır şəkildə qurulur."
  },
  {
    step: "05",
    title: "Yayım və dəstək",
    description: "Sayt yayımlanır, son yoxlamalar edilir və sonrakı yenilənmələr üçün dəstək planı qurulur."
  }
];

export const impactBlocks: FeatureBlock[] = [
  {
    title: "Daha premium görünüş",
    description: "Sayt brendinizi daha ciddi və daha etibarlı göstərir."
  },
  {
    title: "Daha aydın təqdimat",
    description: "Müştəri nə etdiyinizi daha tez anlayır və qərar verməsi asanlaşır."
  },
  {
    title: "Daha güclü sorğu axını",
    description: "CTA və struktur sorğu, zəng və əlaqə keçidlərini daha görünən edir."
  }
];

export const aboutStats: Stat[] = [
  { value: 42, suffix: "+", label: "Premium sayt foundation-u və konsept işi" },
  { value: 11, suffix: " gün", label: "Orta ilkin dizayn istiqaməti" },
  { value: 96, suffix: "%", label: "Mobil-first fokuslu yanaşma" },
  { value: 8, suffix: " sahə", label: "Fərqli biznes modeli üçün uyğunlaşma" }
];

export const contactOptions = {
  websiteTypes: [
    "Korporativ sayt",
    "Landing page",
    "E-commerce",
    "Portfolio / şəxsi brend",
    "Rent a car və ya rezervasiya saytı",
    "Redesign və modernləşdirmə"
  ],
  budgets: [
    "1 500 - 3 000 AZN",
    "3 000 - 6 000 AZN",
    "6 000 - 10 000 AZN",
    "10 000+ AZN",
    "Layihəyə görə təklif istəyirəm"
  ]
} as const;
