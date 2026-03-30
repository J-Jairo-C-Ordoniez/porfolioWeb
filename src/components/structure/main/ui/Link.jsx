import Link from "next/link";
import { AText } from "./Text";

export function ALink({ children, href, target = "_self" }) {
  return (
    <Link
      href={href}
      target={target}
      className="font-sans flex items-center gap-1 text-xs font-medium text-text-main transition-transform duration-500 ease-in-out hover:scale-105 sm:gap-2 sm:text-sm md:gap-3 md:text-base hover:text-accent"
    >
      {children}
    </Link>
  );
}

export function ALinkDoc({
  data,
  href,
  background = "#00000000",
  color = "#999999",
}) {
  return (
    <Link
      className="transition-scale block rounded-l-full p-1 pl-4 transition-colors duration-300 hover:scale-106"
      style={{ background }}
      href={href}
    >
      <AText 
        data={data.title} 
        color={color} 
        fontSize="text-lg"
      />
    </Link>
  );
}
