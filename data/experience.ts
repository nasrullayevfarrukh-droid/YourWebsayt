import type {
  AudienceSegment,
  DecisionFactor,
  FeatureBlock,
  ProcessStep
} from "@/lib/types";

export const manifestoBlocks: FeatureBlock[] = [
  {
    title: "İlk 5 saniyədə qərar verilir",
    description: "Bir çox biznes üçün sayt sadəcə informasiya yox, ilk etibar nöqtəsidir. Ona görə açılış hissəsi həm premium, həm aydın, həm də yönləndirici olmalıdır."
  },
  {
    title: "Struktur satışın bir hissəsidir",
    description: "CTA-ların yeri, xidmət bloklarının ardıcıllığı və trust content təsadüfi düzülmür. Bunlar conversion üçün planlanır."
  },
  {
    title: "Visual identity ekranda da səviyyə göstərməlidir",
    description: "Offline-da güclü görünən brend online-da zəif hiss verməməlidir. Biz bu boşluğu premium digital identity ilə bağlayırıq."
  }
];

export const industryFocus: AudienceSegment[] = [
  {
    title: "Korporativ şirkətlər",
    fit: "Təqdimat, reputasiya, lead flow",
    description: "Şirkəti daha ciddi göstərən, xidmətləri düzgün çərçivəyə salan və qərarvericilər üçün etibar yaradan saytlar."
  },
  {
    title: "Klinikalar və həkimlər",
    fit: "Etibar, rahat müraciət, aydın xidmətlər",
    description: "Pasiyentin nə etdiyinizi rahat anlaması və sizinlə rahat əlaqə qurması üçün təmiz, peşəkar struktur."
  },
  {
    title: "Restoran və hospitality",
    fit: "Atmosfer, rezervasiya, premium hiss",
    description: "Məkanın keyfiyyətini rəqəmsalda hiss etdirən və rezervasiya axınını sadələşdirən həllər."
  },
  {
    title: "Hüquq və konsaltinq",
    fit: "Authority, aydın xidmət, ciddi imic",
    description: "Reputasiya və inandırıcılıq əsas olan sahələr üçün güclü typographic və trust-heavy layout."
  },
  {
    title: "E-commerce və retail",
    fit: "Məhsul dəyəri, rahat alış, premium vitrin",
    description: "Məhsulu daha ciddi və bahalı göstərən, alış qərarını asanlaşdıran satış təcrübəsi."
  },
  {
    title: "Şəxsi brend və ekspertlər",
    fit: "Mövqelənmə, premium audience, konsultasiya",
    description: "Şəxsi nüfuzu sistemli göstərən və xidmətləri daha yüksək dəyərdə təqdim edən saytlar."
  }
];

export const serviceModel: ProcessStep[] = [
  {
    step: "01",
    title: "Audit və qualification",
    description: "Əvvəl biznesin hazır səviyyəsi, mövcud rəqəmsal boşluqları və hədəf müştəri tipi müəyyən edilir."
  },
  {
    step: "02",
    title: "Message architecture",
    description: "Hero-dan CTA-lara qədər hansı mesajın harada və niyə görünəcəyi planlanır."
  },
  {
    step: "03",
    title: "Premium UI execution",
    description: "Dizayn sistemi, animasiya dili, kart strukturu və vizual ritm brend səviyyəsinə uyğun hazırlanır."
  },
  {
    step: "04",
    title: "Launch və refinement",
    description: "Təhvil sonrası dəstək, xırda optimizasiya və gələcək genişlənmə üçün aydın baza təqdim edilir."
  }
];

export const portfolioCuration: DecisionFactor[] = [
  {
    title: "Curated, not crowded",
    description: "Portfolio qarışıq masonry və təsadüfi mockup kolleksiyası kimi yox, seçilmiş case library kimi təqdim olunur."
  },
  {
    title: "Business context first",
    description: "Hər layihə sadəcə ekran deyil, konkret biznes problemi və onun üçün qurulan premium həll olaraq göstərilir."
  },
  {
    title: "Sector-specific storytelling",
    description: "Hüquq, klinika, restoran, daşınmaz əmlak və şəxsi brend üçün eyni visual language istifadə edilmir."
  }
];

export const pricingFactors: DecisionFactor[] = [
  {
    title: "Səhifə sayı və information depth",
    description: "2 səhifəlik yığcam struktur ilə çox bölməli korporativ arxitektura eyni scope deyil."
  },
  {
    title: "Custom design intensity",
    description: "Art-directed, fərqli section kompozisiyaları və motion language daha böyük istehsal tələb edir."
  },
  {
    title: "Funksional tələblər",
    description: "CMS, rezervasiya, kataloq, form logic və əlavə axınlar layihə ölçüsünü dəyişir."
  },
  {
    title: "Content və positioning work",
    description: "Bəzən iş yalnız design-development olmur; message hierarchy və conversion copy də yenidən qurulur."
  }
];

export const contactJourney: ProcessStep[] = [
  {
    step: "01",
    title: "Sorğu qəbul edilir",
    description: "Form və ya birbaşa əlaqə üzərindən gələn sorğu qısa müddətdə nəzərdən keçirilir."
  },
  {
    step: "02",
    title: "Qısa discovery danışığı",
    description: "Biznes tipi, məqsəd, deadline və scope haqqında ilkin aydınlıq yaradılır."
  },
  {
    step: "03",
    title: "Təklif və istiqamət",
    description: "Uyğun paket və ya tailored estimate ilə yanaşı yaradıcı istiqamət paylaşılır."
  },
  {
    step: "04",
    title: "Layihə startı",
    description: "Brief, timeline və deliverable çərçivəsi təsdiqlənəndən sonra istehsal başlanır."
  }
];
