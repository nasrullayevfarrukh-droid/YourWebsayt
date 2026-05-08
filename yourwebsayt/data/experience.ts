import type {
  AudienceSegment,
  DecisionFactor,
  FeatureBlock,
  ProcessStep
} from "@/lib/types";

export const manifestoBlocks: FeatureBlock[] = [
  {
    title: "İlk təəssürat sürətli yaranır",
    description: "Sayt çox vaxt müştərinin brendlə ilk təmas nöqtəsidir."
  },
  {
    title: "Struktur da satışın hissəsidir",
    description: "CTA və bölmə sırası təsadüfi deyil, müraciəti asanlaşdırmaq üçündür."
  },
  {
    title: "Vizual dil səviyyəni göstərməlidir",
    description: "Offline güclü görünən brend online-da da eyni hissi verməlidir."
  }
];

export const industryFocus: AudienceSegment[] = [
  {
    title: "Korporativ şirkətlər",
    fit: "Təqdimat, reputasiya, lead",
    description: "Xidmətləri daha aydın göstərən və etibar yaradan struktur."
  },
  {
    title: "Klinikalar və həkimlər",
    fit: "Etibar, rahat müraciət",
    description: "Pasiyentin sizi rahat anlaması və sürətli əlaqə qurması üçün təmiz axın."
  },
  {
    title: "Restoran və hospitality",
    fit: "Atmosfer, rezervasiya",
    description: "Məkanın hissini onlaynda göstərən və rezervasiyanı önə çıxaran saytlar."
  },
  {
    title: "Hüquq və konsaltinq",
    fit: "Authority, ciddi imic",
    description: "Reputasiya əsas olan sahələr üçün daha güclü tipografiya və trust blokları."
  },
  {
    title: "E-commerce və retail",
    fit: "Məhsul dəyəri, rahat alış",
    description: "Məhsulu daha keyfiyyətli göstərən və satış yolunu sadələşdirən təcrübə."
  },
  {
    title: "Şəxsi brend və ekspertlər",
    fit: "Mövqelənmə, konsultasiya",
    description: "Şəxsi nüfuzu daha ciddi göstərən və xidmətləri aydın təqdim edən saytlar."
  }
];

export const serviceModel: ProcessStep[] = [
  {
    step: "01",
    title: "Audit",
    description: "Biznesin hədəfi və əsas rəqəmsal boşluqları müəyyən edilir."
  },
  {
    step: "02",
    title: "Mesaj arxitekturası",
    description: "Başlıqdan CTA-ya qədər əsas axın planlanır."
  },
  {
    step: "03",
    title: "Premium icra",
    description: "Vizual sistem və frontend birlikdə qurulur."
  },
  {
    step: "04",
    title: "Launch və inkişaf",
    description: "Yayım sonrası dəstək və növbəti addımlar müəyyən edilir."
  }
];

export const portfolioCuration: DecisionFactor[] = [
  {
    title: "Curated, not crowded",
    description: "Portfolio qarışıq kolleksiya kimi yox, seçilmiş case library kimi təqdim olunur."
  },
  {
    title: "Business context first",
    description: "Hər layihə konkret biznes problemi və onun üçün qurulan həll kimi göstərilir."
  },
  {
    title: "Sector-specific storytelling",
    description: "Fərqli sahələr üçün eyni vizual dil istifadə edilmir."
  }
];

export const pricingFactors: DecisionFactor[] = [
  {
    title: "Səhifə sayı və dərinlik",
    description: "Kiçik landing page ilə çox bölməli korporativ sayt eyni scope deyil."
  },
  {
    title: "Custom dizayn intensivliyi",
    description: "Daha art-directed işlər daha böyük istehsal tələb edir."
  },
  {
    title: "Funksional tələblər",
    description: "CMS, rezervasiya, kataloq və əlavə axınlar scope-u dəyişir."
  },
  {
    title: "Content və positioning",
    description: "Bəzi layihələrdə copy və mesaj arxitekturası da yenidən qurulur."
  }
];

export const contactJourney: ProcessStep[] = [
  {
    step: "01",
    title: "Sorğu qəbul edilir",
    description: "Müraciət qısa vaxtda nəzərdən keçirilir."
  },
  {
    step: "02",
    title: "Qısa danışıq",
    description: "Biznes tipi, məqsəd və scope dəqiqləşdirilir."
  },
  {
    step: "03",
    title: "Təklif və istiqamət",
    description: "Uyğun format və ilkin yanaşma paylaşılır."
  },
  {
    step: "04",
    title: "Layihə startı",
    description: "Timeline və deliverable təsdiqlənəndən sonra istehsal başlayır."
  }
];
