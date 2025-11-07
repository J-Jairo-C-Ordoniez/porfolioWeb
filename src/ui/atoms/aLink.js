import Link from "next/link";
import AText from "./aText";

export default function ALink({ children, href, target = "_self" }) {
  return (
    <Link
      href={href}
      target={target}
      className="font-poppins flex items-center gap-1 text-xs font-[500] text-[#e0e0e0] transition-transform duration-500 ease-in-out hover:scale-106 sm:gap-2 sm:text-sm md:gap-3 md:text-base"
    >
      {children}
    </Link>
  );
}

export function ALinkDoc({
  data,
  href,
  background = "#121212",
  color = "#999999",
}) {
  return (
    <Link
      className="transition-scale block rounded-l-full p-1 transition-colors duration-300 hover:scale-106"
      style={{ background }}
      href={href}
    >
      <AText data={data.title} color={color} />
    </Link>
  );
}
