import Link from "next/link";
import data from "@/shared/data/Footer";
import * as Icon from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-primary/10 py-12 md:py-16 text-primary">
      <div className="w-full px-[8vw] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-1">
          <Link
            href="/"
            aria-label="Inicio, J Jairo C Ordóñez"
            className="text-primary hover:text-primary/70 transition-colors cursor-pointer text-xl md:text-2xl font-bold tracking-tight"
          >
            J Jairo C Ordoñez
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {data.social?.map((red) => {
            const IconComponent = Icon[red.icon];
            return (
              <a
                key={red.id}
                href={red.href}
                target="_blank"
                rel="noreferrer"
                aria-label={red.text}
                className="group flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 border border-primary/10 text-primary/70 transition-all duration-300 hover:bg-primary hover:text-background hover:scale-105"
              >
                {IconComponent && <IconComponent size={18} />}
              </a>
            );
          })}
        </div>

        <div className="text-xs md:text-sm font-light text-primary/50 tracking-tight">
          <span>© {new Date().getFullYear()} Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
