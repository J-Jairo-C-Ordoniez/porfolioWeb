import * as Icons from "lucide-react";

export default function AIcon({ data, size = 20, color = "currentColor" }) {
  const Icon = Icons[data];

  return Icon ? (
    <Icon
      size={size}
      color={color}
      className="transition-all duration-300 hover:scale-110 hover:rotate-12"
    />
  ) : null;
}
