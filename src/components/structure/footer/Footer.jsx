import Link from "next/link";
import data from "../../../data/home/Footer";
import Text from "../main/ui/Text";
import * as Icon from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-background font-inter min-h-16 py-8 border-t border-primary/5">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div>
          <Link
            href="/"
            aria-label="Inicio, J Jairo C Ordoñez"
            className="text-primary/80 hover:text-primary transition-colors cursor-pointer text-sm tracking-wider font-medium uppercase"
          >
            <span className="hidden sm:inline">J Jairo C Ordoñez</span>
            <span className="sm:hidden">JC</span>
          </Link>
        </div>

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

        <Text
          text={data.copyright}
        />
      </div>
    </footer>
  );
}
