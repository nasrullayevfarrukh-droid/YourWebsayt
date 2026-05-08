import type { FeatureBlock, NavItem, ProcessStep, Stat, TrustPoint } from "@/lib/types";

export const siteConfig = {
  name: "YourWebsayt",
  title: "YourWebsayt | Premium personal veb studio",
  description:
    "YourWebsayt biznesini daha ciddi göstərən sürətli, mobil uyğun və premium veb saytlar hazırlayır.",
  url: "https://yourwebsay.netlify.app",
  email: "nasrullayevfarrukh@gmail.com",
  phone: "+994557809917",
  whatsappHref: "https://wa.me/994557809917",
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
  "Mobil uyğunluq",
  "Sürətli yüklənmə",
  "Premium görünüş",
  "Satış yönümlü struktur"
] as const;

export const credibilityStrip = [
  "Modern və sürətli saytlar",
  "Biznesə uyğun struktur",
  "Premium görünüş və təmiz kod",
  "Müraciətə fokuslanan CTA axını"
] as const;

export const trustPoints: TrustPoint[] = [
  {
    label: "Hazır şablon yox",
    detail: "Sayt biznesinizə və auditoriyanıza uyğun qurulur."
  },
  {
    label: "Mobil fokus",
    detail: "İlk təəssüratın böyük hissəsi telefonda yarandığı üçün əsas prioritet mobildir."
  },
  {
    label: "Sürətli kod",
    detail: "Sayt həm premium görünür, həm də sürətli işləyir."
  },
  {
    label: "Satış yönümlü axın",
    detail: "Başlıqdan CTA-ya qədər hər blok müraciətə xidmət edir."
  },
  {
    label: "Layihədən sonra dəstək",
    detail: "Yayından sonra yeniləmə və kiçik inkişaf üçün dəstək davam edir."
  }
];

export const whyChooseUs: FeatureBlock[] = [
  {
    title: "Biznesə uyğun struktur",
    description: "Saytınız xidmət modelinizə və auditoriyanıza görə qurulur."
  },
  {
    title: "Mobil ön plandadır",
    description: "Telefon ekranında rahat və sürətli təcrübə əsas prioritetdir."
  },
  {
    title: "Təmiz və sürətli kod",
    description: "Performans və gələcək yenilənmələr üçün yüngül baza qurulur."
  },
  {
    title: "Müraciətə fokus",
    description: "Copy və CTA axını sadəcə gözəllik üçün yox, real nəticə üçün qurulur."
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Analiz",
    description: "Biznesinizi, auditoriyanızı və saytın əsas məqsədini müəyyən edirik."
  },
  {
    step: "02",
    title: "Struktur",
    description: "Bölmələr, başlıqlar və CTA-lar aydın axınla qurulur."
  },
  {
    step: "03",
    title: "Dizayn",
    description: "Brendinizi daha ciddi göstərən vizual dil hazırlanır."
  },
  {
    step: "04",
    title: "Kodlaşdırma",
    description: "Sürətli və mobil uyğun frontend qurulur."
  },
  {
    step: "05",
    title: "Yayım və dəstək",
    description: "Son yoxlamalar edilir və sayt yayına verilir."
  }
];

export const impactBlocks: FeatureBlock[] = [
  {
    title: "Daha premium görünüş",
    description: "Sayt brendinizi daha ciddi və daha etibarlı göstərir."
  },
  {
    title: "Daha aydın təqdimat",
    description: "Müştəri nə etdiyinizi daha tez anlayır."
  },
  {
    title: "Daha güclü sorğu axını",
    description: "CTA və struktur əlaqə keçidlərini daha görünən edir."
  }
];

export const aboutStats: Stat[] = [
  { value: 42, suffix: "+", label: "Veb layihə və konsept işi" },
  { value: 11, suffix: " gün", label: "Orta ilkin dizayn istiqaməti" },
  { value: 96, suffix: "%", label: "Mobil fokuslu yanaşma" },
  { value: 8, suffix: " sahə", label: "Fərqli biznes modeli" }
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
