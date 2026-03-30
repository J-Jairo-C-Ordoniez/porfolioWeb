import Link from "next/link";
import data from "../../../data/home/Header";
import Nav from "./ui/Nav"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background font-inter">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Nav data={data.menu.left} />

        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <Link
            href="/"
            aria-label="Inicio, J Jairo C Ordoñez"
            className="text-primary/80 hover:text-primary transition-colors cursor-pointer text-md tracking-wider font-semibold uppercase"
          >
            <span className="hidden sm:inline">J Jairo C Ordoñez</span>
            <span className="sm:hidden">JC</span>
          </Link>
        </div>

        <Nav data={data.menu.right} />
      </div>
    </header>
  );
}
