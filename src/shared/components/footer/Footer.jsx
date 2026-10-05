import Link from "next/link";
import data from "@/shared/data/Footer";
import * as Icon from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-background font-inter min-h-16 py-8 border-t border-primary/20">
      <div className="container mx-auto px-[8vw] h-16 flex items-center justify-between">
          <Link
            href="/"
            aria-label="Inicio, J Jairo C Ordoñez"
            className="text-primary hover:text-primary/80 transition-colors cursor-pointer text-md tracking-wider font-medium"
          >
            <span className="hidden sm:inline">J Jairo C Ordoñez</span>
            <span className="sm:hidden">JC</span>
          </Link>

        <div className="flex gap-10">
          {data.social?.map((red) => {
            const IconComponent = Icon[red.icon];
            return (
              <Link
                key={red.id}
                href={red.href}
                className="text-primary/80 hover:text-primary transition-colors cursor-pointer text-xs tracking-wider uppercase"
              >
                {IconComponent && <IconComponent size={20} />}
              </Link>
            );
          })}
        </div>

        <span className="text-primary text-md tracking-wider font-medium">
          {data.copyright}
        </span>
      </div>
    </footer>
  );
}
