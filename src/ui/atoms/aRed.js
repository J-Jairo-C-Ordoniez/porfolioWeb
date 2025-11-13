import Link from "next/link";

export default function ARed({ children, href, target = "_self" }) {
  return (
    <Link
      className="flex items-center justify-center gap-2 rounded-full border border-slate-600/20 ring-1 ring-slate-700/6 bg-[#131d2b] p-4 transition hover:border-[#00C896] hover:text-[#00C896] hover:shadow-[0_0_10px_#06b6d4]"
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
}
