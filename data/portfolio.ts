import type { Project, ProjectGalleryItem } from "@/lib/types";

function createGallery(baseName: string, subject: string): ProjectGalleryItem[] {
  return [
    {
      title: "Ana görünüş",
      caption: `${subject} üçün premium giriş hissəsi və əsas təqdimat axını.`,
      image: `/images/projects/${baseName}.svg`
    },
    {
      title: "Daxili bloklar",
      caption: `${subject} daxilində xidmət, məzmun və etibar bloklarının düzülüşü.`,
      image: `/images/projects/${baseName}-detail.svg`
    },
    {
      title: "Mobil görünüş",
      caption: `${subject} üçün mobil-first oxunaqlılıq və rahat istifadə təcrübəsi.`,
      image: `/images/projects/${baseName}-mobile.svg`
    }
  ];
}

export const portfolioProjects: Project[] = [
  {
    number: "01",
    slug: "tubel-insaat",
    title: "Tubel İnşaat",
    category: "İnşaat / tikinti şirkəti saytı",
    status: "Hazır və təhvil verilib",
    liveUrl: "https://tubelinsaat.com/",
    clientType: "Tikinti şirkəti",
    excerpt: "Tikinti şirkəti üçün modern, ciddi və peşəkar korporativ veb sayt.",
    result:
      "Şirkətin xidmətlərini, layihə etibarını və əlaqə axınını daha peşəkar göstərən korporativ təqdimat.",
    heroImage: "/images/projects/northpeak-group.svg",
    problem:
      "Tikinti sahəsində sayt həm ciddi görünməli, həm də xidmətləri və layihə yönünü aydın şəkildə təqdim etməlidir.",
    solution:
      "Korporativ ritm, güclü tipografiya, xidmət blokları və aydın əlaqə CTA-ları ilə etibar yönümlü struktur quruldu.",
    siteStructure: ["Ana səhifə", "Haqqımızda", "Xidmətlər", "Layihələr", "Əlaqə"],
    designDirection:
      "Tünd premium fon, nizamlı blok kompozisiyası və ciddi biznes tonu ilə daha inandırıcı korporativ təqdimat xətti saxlanıldı.",
    features: [
      "Xidmət və fəaliyyət istiqaməti təqdimatı",
      "Korporativ etibar hissi verən giriş hissəsi",
      "Layihə və şirkət haqqında aydın informasiya axını",
      "Əlaqə üçün rahat CTA strukturu"
    ],
    mobileNote:
      "Mobil görünüşdə bölmələr qısa bloklara ayrılıb və müraciət düymələri rahat toxunuş ölçüləri ilə verilib.",
    performanceNote:
      "Yüngül struktur və təmiz frontend yanaşması saytın sürətli açılmasına və rahat keçid hissinə fokuslanır.",
    seoNote:
      "Xidmət yönümlü başlıqlar, strukturlaşdırılmış məzmun və aydın səhifə iyerarxiyası axtarış görünürlüğünü dəstəkləyir.",
    outcome: [
      "Daha ciddi və peşəkar ilk təəssürat",
      "Xidmətlərin daha aydın təqdimatı",
      "Müraciət üçün daha rahat yol"
    ],
    gallery: createGallery("northpeak-group", "Tubel İnşaat saytı")
  },
  {
    number: "02",
    slug: "rentacarss-az",
    title: "Rentacarss.az",
    category: "Rent a car platforması",
    status: "Hazır və təhvil verilib",
    liveUrl: "https://rentacarss.az/",
    clientType: "Avtomobil icarəsi biznesi",
    excerpt:
      "Avtomobil icarəsi biznesi üçün elanlar, avtomobil təqdimatı və müştəri yönümlü strukturla hazırlanmış sayt.",
    result:
      "Avtomobil seçimini, əlaqə mərhələsini və müştəri qərarını sadələşdirən rent a car platforma təqdimatı.",
    heroImage: "/images/projects/voyago-travel.svg",
    problem:
      "Rent a car sahəsində istifadəçi avtomobili tez görməli, rahat müqayisə etməli və sürətli şəkildə əlaqəyə keçməlidir.",
    solution:
      "Avtomobil kartları, aydın CTA-lar və rahat skan olunan strukturla seçim və müraciət axını yüngülləşdirildi.",
    siteStructure: ["Ana səhifə", "Avtomobillər", "Elan detalları", "Şərtlər", "Əlaqə"],
    designDirection:
      "Dinamik, amma yenə də premium görünən kart sistemi və tünd fonda təmiz kontrastla müasir xidmət hissi saxlanıldı.",
    features: [
      "Avtomobil elan və təqdimat kartları",
      "Müştəri yönümlü müraciət nöqtələri",
      "Kateqoriya və seçim üçün rahat axın",
      "Mobil uyğun rezervasiya yönümlü struktur"
    ],
    mobileNote:
      "Mobil cihazda kart sıralaması, əsas məlumatlar və əlaqə düymələri sürətli qərar üçün önə çıxarılıb.",
    performanceNote:
      "Yüngül kart arxitekturası və optimallaşdırılmış görüntü axını səhifənin sürətli hiss olunmasına kömək edir.",
    seoNote:
      "Avtomobil icarəsi niyyətinə uyğun məzmun başlıqları və skan edilən struktur biznesin axtarış görünürlüğünü gücləndirir.",
    outcome: [
      "Avtomobil seçimi üçün daha rahat təcrübə",
      "Müraciət qərarını sürətləndirən axın",
      "Daha etibarlı platforma görünüşü"
    ],
    gallery: createGallery("voyago-travel", "Rentacarss.az platforması")
  },
  {
    number: "03",
    slug: "xeber-sayti",
    title: "Xəbər saytı",
    category: "Xəbər portalı",
    status: "Portfolio nümunəsi",
    liveUrl: "https://splendorous-cajeta-e8edc9.netlify.app/",
    clientType: "Media və xəbər platforması",
    excerpt: "Xəbər kontenti üçün sadə, oxunaqlı və strukturlaşdırılmış media sayt nümunəsi.",
    result:
      "Başlıqların, kateqoriyaların və gündəlik kontentin rahat skan olunduğu təmiz xəbər portalı nümunəsi.",
    heroImage: "/images/projects/rauf-mirzayev.svg",
    problem:
      "Xəbər saytında çoxlu məzmun arasında oxucu diqqətini qorumaq və əsas xəbərləri aydın göstərmək vacibdir.",
    solution:
      "Sadə redaksiya ritmi, aydın kateqoriya blokları və oxunaqlılığı gücləndirən layout ilə media yönümlü struktur hazırlandı.",
    siteStructure: ["Ana səhifə", "Kateqoriyalar", "Baş xəbər", "Məqalə səhifəsi", "Əlaqə"],
    designDirection:
      "Kontenti önə çıxaran təmiz vizual dil, geniş boşluqlar və yüksək oxunaqlılıq prinsipi ilə qurulub.",
    features: [
      "Baş xəbər və gündəm blokları",
      "Məqalə kartları üçün rahat grid sistemi",
      "Oxunaqlı mətn axını",
      "Mobil istifadə üçün sadə naviqasiya"
    ],
    mobileNote:
      "Mobil görünüşdə məqalə kartları və xəbər axını tək sütunda daha rahat oxunuş üçün optimallaşdırılıb.",
    performanceNote:
      "Media tipli məzmun üçün yüngül arxitektura və artıq elementlərdən uzaq quruluş saxlanılıb.",
    seoNote:
      "Məqalə və kateqoriya strukturuna uyğun başlıq iyerarxiyası kontentin indekslənməsini dəstəkləyir.",
    outcome: [
      "Daha rahat xəbər oxu axını",
      "Məzmunu önə çıxaran struktur",
      "Təmiz və peşəkar media görünüşü"
    ],
    gallery: createGallery("rauf-mirzayev", "Xəbər portalı nümunəsi")
  },
  {
    number: "04",
    slug: "fitness-zali-sayti",
    title: "Fitness zalı saytı",
    category: "Fitness / idman zalı",
    status: "Portfolio nümunəsi",
    liveUrl: "https://courageous-sable-16c3be.netlify.app/",
    clientType: "Fitness və xidmət biznesi",
    excerpt:
      "Fitness zalı üçün sadə, mobil uyğun və xidmət təqdimatına fokuslanan sayt nümunəsi.",
    result:
      "Zal xidmətlərini, paketləri və qeydiyyat CTA-larını daha aydın göstərən idman yönümlü demo sayt.",
    heroImage: "/images/projects/nova-clinic.svg",
    problem:
      "Fitness biznesində xidmətlər, üzvlük dəyəri və əlaqə nöqtələri aydın olmadıqda istifadəçi tez çıxır.",
    solution:
      "Enerjili, amma səliqəli kart sistemi və qeydiyyat yönümlü CTA-larla xidmət təqdimatı sadələşdirildi.",
    siteStructure: ["Ana səhifə", "Xidmətlər", "Paketlər", "Haqqımızda", "Əlaqə"],
    designDirection:
      "Tünd premium fon üzərində aktiv vurğular və xidmət yönümlü bloklarla daha canlı, amma peşəkar ritm qurulub.",
    features: [
      "Xidmət və paket təqdimatı",
      "Qeydiyyat yönümlü CTA blokları",
      "Sadə və sürətli mobil axın",
      "Təmiz section iyerarxiyası"
    ],
    mobileNote:
      "Mobil istifadəçidə paket və əlaqə hissələri qısa bloklarla göstərilib ki qərar daha tez verilsin.",
    performanceNote:
      "Lazımsız ağırlıqdan uzaq, sürətli və təmiz səhifə quruluşu saxlanılıb.",
    seoNote:
      "Fitness xidməti axtarışlarına uyğun section başlıqları və lokal xidmət copy-si üçün uyğun baza var.",
    outcome: [
      "Xidmətlərin daha aydın təqdimatı",
      "Qeydiyyat üçün daha rahat yol",
      "Mobil uyğun peşəkar demo görünüş"
    ],
    gallery: createGallery("nova-clinic", "Fitness zalı saytı nümunəsi")
  },
  {
    number: "05",
    slug: "rent-a-car-demo",
    title: "Rent a car demo",
    category: "Rent a car saytı",
    status: "Portfolio nümunəsi",
    liveUrl: "https://musical-hamster-f251be.netlify.app/",
    clientType: "Demo rent a car layihəsi",
    excerpt: "Avtomobil icarəsi xidməti üçün hazırlanmış modern demo sayt.",
    result:
      "Rent a car xidməti üçün sürətli seçim, təqdimat və əlaqə axını göstərən modern demo nümunəsi.",
    heroImage: "/images/projects/lunera-store.svg",
    problem:
      "Demo tipli rent a car saytda belə istifadəçi əsas məlumatı tez görməli və xidmətə etibar etməlidir.",
    solution:
      "Avtomobil vitrinləri, qısa məzmun blokları və CTA ritmi ilə demo layihə ciddi biznes tonu ilə təqdim edildi.",
    siteStructure: ["Ana səhifə", "Avtomobil parkı", "Qiymətlər", "FAQ", "Əlaqə"],
    designDirection:
      "Vizual olaraq səliqəli kartlar, geniş boşluq və premium tünd tonlar ilə demo olsa da ciddi görünən sistem qurulub.",
    features: [
      "Avtomobil vitrin kartları",
      "Qiymət və xidmət fokuslu section-lar",
      "Aydın CTA və əlaqə axını",
      "Mobil uyğun xidmət təqdimatı"
    ],
    mobileNote:
      "Mobil görünüşdə avtomobil kartları və CTA-lar baş barmaqla rahat istifadə ediləcək formada saxlanılıb.",
    performanceNote:
      "Demo quruluş sürətli açılış və yüngül UI davranışı üçün optimallaşdırılıb.",
    seoNote:
      "Xidmət yönümlü başlıq strukturu və lokal niyyətə uyğun copy yazmaq üçün baza hazırdır.",
    outcome: [
      "Modern demo görünüş",
      "Xidmət axınını aydın göstərən struktur",
      "Rent a car biznesi üçün güclü təqdimat bazası"
    ],
    gallery: createGallery("lunera-store", "Rent a car demo saytı")
  },
  {
    number: "06",
    slug: "emlak-sayti",
    title: "Əmlak saytı",
    category: "Daşınmaz əmlak saytı",
    status: "Portfolio nümunəsi",
    liveUrl: "https://ornate-twilight-4002bf.netlify.app/",
    clientType: "Əmlak və satış platforması",
    excerpt:
      "Əmlak elanları və satış təqdimatı üçün hazırlanmış modern veb sayt nümunəsi.",
    result:
      "Obyekt təqdimatını, elan axınını və əlaqə nöqtələrini daha premium göstərən əmlak demo saytı.",
    heroImage: "/images/projects/estate-ridge.svg",
    problem:
      "Əmlak saytında vizual etibar, elan kartlarının rahat skanı və sürətli müraciət axını bir yerdə işləməlidir.",
    solution:
      "Premium kart sistemi, seçilmiş elan vitrinləri və əlaqə yönümlü bloklarla satış hissi gücləndirildi.",
    siteStructure: ["Ana səhifə", "Elanlar", "Obyekt detalı", "Haqqımızda", "Əlaqə"],
    designDirection:
      "Daha bahalı hiss verən blok kompozisiyası, sakit vurğular və geniş vizual sahə ilə daşınmaz əmlak tonu qurulub.",
    features: [
      "Elan və obyekt kartları",
      "Əlaqə toplama yönümlü CTA-lar",
      "Vizual etibar verən giriş hissəsi",
      "Mobil uyğun siyahı və detal axını"
    ],
    mobileNote:
      "Mobil cihazlarda elan kartları və obyekt detalları skan olunan ölçü və ritmdə verilib.",
    performanceNote:
      "Ağır hiss yaratmadan premium görünən, axıcı və təmiz frontend yanaşması saxlanılıb.",
    seoNote:
      "Əmlak niyyətinə uyğun səhifə başlıqları və obyekt mərkəzli content strukturu gələcək SEO işi üçün hazırdır.",
    outcome: [
      "Daha premium obyekt təqdimatı",
      "Daha aydın elan axını",
      "Müraciət üçün daha rahat struktur"
    ],
    gallery: createGallery("estate-ridge", "Əmlak saytı nümunəsi")
  }
];

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
