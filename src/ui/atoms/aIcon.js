import * as LucideIcons from "lucide-react";

export default function AIcon({ data }) {
  const LucideIcon = LucideIcons[data];

  return LucideIcon ? <LucideIcon /> : <span>⚠️</span>;
}
