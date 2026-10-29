import Link from "next/link";
import data from "@/shared/data/Footer";
import { Github, Linkedin, Send } from "lucide-react";

const ICON_MAP = {
  Github,
  Linkedin,
  Send,
};

export default function Footer({ mode = "light" }) {
  const isDark = mode === "dark";

  const footerClass = isDark
    ? "w-full bg-primary border-t border-background/15 py-12 md:py-16 text-background"
    : "w-full bg-background border-t border-primary/10 py-12 md:py-16 text-primary";

  const linkClass = isDark
    ? "text-background hover:text-background/70 transition-colors cursor-pointer text-xl md:text-2xl font-bold tracking-tight"
    : "text-primary hover:text-primary/70 transition-colors cursor-pointer text-xl md:text-2xl font-bold tracking-tight";

  const iconClass = isDark
    ? "group flex h-11 w-11 items-center justify-center rounded-full bg-background/10 border border-background/15 text-background/80 transition-all duration-300 hover:bg-background hover:text-primary hover:scale-105"
    : "group flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 border border-primary/10 text-primary/70 transition-all duration-300 hover:bg-primary hover:text-background hover:scale-105";

  const copyClass = isDark
    ? "text-xs md:text-sm font-light text-background/50 tracking-tight"
    : "text-xs md:text-sm font-light text-primary/50 tracking-tight";

  return (
    <footer className={footerClass}>
      <div className="w-full px-[8vw] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-1">
          <Link
            href="/"
            aria-label="Inicio, J Jairo C Ordóñez"
            className={linkClass}
          >
            J Jairo C Ordoñez
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {data.social?.map((red) => {
            const IconComponent = ICON_MAP[red.icon];
            return (
              <a
                key={red.id}
                href={red.href}
                target="_blank"
                rel="noreferrer"
                aria-label={red.text}
                className={iconClass}
              >
                {IconComponent && <IconComponent size={18} />}
              </a>
            );
          })}
        </div>

        <div className={copyClass}>
          <span>© {new Date().getFullYear()} Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
