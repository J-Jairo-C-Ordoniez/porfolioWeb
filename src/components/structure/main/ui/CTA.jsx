import Link from "next/link";
import * as Icons from "lucide-react";

export default function CTA({ href, text, icon }) {
  const Icon = Icons[icon];

  return (
    <Link
      className="group flex items-center gap-4 cursor-pointer rounded-none border-b border-secondary/20 pb-2 transition-all duration-300 hover:border-accent hover:gap-6"
      href={href}
    >
      <span className="font-sans font-caps text-sm font-medium tracking-wider text-primary group-hover:text-accent">
        {text}
      </span>
      <Icon className="text-primary group-hover:text-accent" />
    </Link>
  );
}