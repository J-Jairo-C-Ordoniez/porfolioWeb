import Link from "next/link";

export function ARed({ children, href, target = "_self", className = "" }) {
  return (
    <Link
      className={`flex items-center justify-center gap-2 rounded-none border border-white/10 bg-white/[0.02] p-4 transition-all duration-500 hover:border-accent hover:text-accent ${className}`}
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
}
