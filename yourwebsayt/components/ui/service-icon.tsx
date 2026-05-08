import {
  BadgeCheck,
  Building2,
  CalendarRange,
  Gauge,
  MousePointerClick,
  RefreshCw,
  ShieldCheck,
  ShoppingBag
} from "lucide-react";

type ServiceIconProps = {
  icon: string;
  className?: string;
};

const iconMap = {
  building: Building2,
  "mouse-pointer-click": MousePointerClick,
  "shopping-bag": ShoppingBag,
  "badge-check": BadgeCheck,
  "calendar-range": CalendarRange,
  "refresh-cw": RefreshCw,
  gauge: Gauge,
  "shield-check": ShieldCheck
} as const;

export function ServiceIcon({ icon, className }: ServiceIconProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] ?? Building2;
  return <Icon className={className} strokeWidth={1.5} />;
}
