export type NavItem = {
  label: string;
  href: string;
};

export type TrustPoint = {
  label: string;
  detail: string;
};

export type FeatureBlock = {
  title: string;
  description: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type StudioService = {
  number: string;
  title: string;
  description: string;
  outcome: string;
  audience: string;
};

export type Service = {
  number: string;
  slug: string;
  title: string;
  icon: string;
  description: string;
  benefit: string;
  audience: string;
  includes: string[];
  businessImpact: string;
  cta: string;
};

export type PortfolioCategory =
  | "İnşaat / tikinti şirkəti saytı"
  | "Rent a car platforması"
  | "Xəbər portalı"
  | "Fitness / idman zalı"
  | "Rent a car saytı"
  | "Daşınmaz əmlak saytı";

export type ProjectStatus = "Hazır və təhvil verilib" | "Portfolio nümunəsi";

export type ProjectGalleryItem = {
  title: string;
  caption: string;
  image: string;
};

export type Project = {
  number: string;
  slug: string;
  title: string;
  category: PortfolioCategory;
  status: ProjectStatus;
  liveUrl: string;
  clientType: string;
  excerpt: string;
  result: string;
  heroImage: string;
  problem: string;
  solution: string;
  siteStructure: string[];
  designDirection: string;
  features: string[];
  mobileNote: string;
  performanceNote: string;
  seoNote: string;
  outcome: string[];
  gallery: ProjectGalleryItem[];
};

export type PricingPlan = {
  name: string;
  priceFrom: string;
  subtitle: string;
  description: string;
  suitedFor: string;
  highlight?: string;
  included: string[];
  cta: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TeamMember = {
  name: string;
  role: string;
  note: string;
};

export type Milestone = {
  year: string;
  title: string;
  description: string;
};

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export type AudienceSegment = {
  title: string;
  fit: string;
  description: string;
};

export type DecisionFactor = {
  title: string;
  description: string;
  detail?: string;
};

export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  websiteType: string;
  budget: string;
  message: string;
};
