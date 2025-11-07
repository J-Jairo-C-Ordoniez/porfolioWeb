import Link from "next/link";

export default function ARed({ children, href, target = "_self" }) {
  return (
    <Link
      className="flex items-center justify-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 p-4 transition hover:border-[#00C896] hover:text-[#00C896] hover:shadow-[0_0_10px_#06b6d4]"
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
}
