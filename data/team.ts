import type { FeatureBlock, Milestone, TeamMember } from "@/lib/types";

export const aboutIntro = {
  eyebrow: "Studiyanın yanaşması",
  title: "Biz sayt qurmaqdan çox, biznesin rəqəmsal görünüşünü ciddi səviyyəyə qaldırırıq.",
  description:
    "YourWebsayt premium veb dizayn və inkişaf studiyasıdır. Məqsədimiz sadəcə estetik sayt hazırlamaq deyil, brendləri daha etibarlı, daha müasir və daha güclü göstərən rəqəmsal sistem qurmaqdır."
} as const;

export const brandPhilosophy: FeatureBlock[] = [
  {
    title: "Şablon yox, mövqelənmə",
    description: "Hər layihəyə eyni blokları düzmürük. Biznesin nişinə, auditoriyasına və qiymət səviyyəsinə görə struktur qururuq."
  },
  {
    title: "Dizayn biznes alətidir",
    description: "Gözəl görünüş vacibdir, amma əsas məqsəd qərar verməni asanlaşdırmaq və etibarı yüksəltməkdir."
  },
  {
    title: "Kod da premium olmalıdır",
    description: "Sürət, təmizlik, adaptivlik və gələcək genişlənmə potensialı layihənin arxasında görünməsə də hiss olunur."
  }
];

export const milestones: Milestone[] = [
  {
    year: "2022",
    title: "İlk boutique layihələr",
    description: "Kiçik biznes və şəxsi brendlər üçün premium sayt konseptləri ilə başlanğıc edildi."
  },
  {
    year: "2023",
    title: "Niş sektor fokusları",
    description: "Hüquq, klinika, restoran və xidmət biznesləri üçün daha dərin həllər formalaşdırıldı."
  },
  {
    year: "2024",
    title: "Conversion-first yanaşma",
    description: "Vizual keyfiyyətlə yanaşı satış axını və lead generation strukturu daha sistemli quruldu."
  },
  {
    year: "2025",
    title: "Premium studio mövqelənməsi",
    description: "Brendlərin rəqəmsal imicini yüksək dəyər hissi ilə təqdim edən daha seçilmiş layihə modeli quruldu."
  }
];

export const team: TeamMember[] = [
  {
    name: "Aysel",
    role: "Brand & UI Strategist",
    note: "Vizual istiqamət, mövqelənmə və yüksək dəyər hissini formalaşdırır."
  },
  {
    name: "Murad",
    role: "Frontend Lead",
    note: "Sürətli, təmiz və gələcəyə açıq frontend arxitekturasını qurur."
  },
  {
    name: "Tural",
    role: "Conversion Consultant",
    note: "Səhifə strukturu, CTA axını və lead toplama məntiqini gücləndirir."
  }
];
