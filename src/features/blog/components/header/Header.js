import Link from "next/link";

export default function Header({ title = "", link = "/" }) {
    return (
        <header className="sticky top-0 z-50 w-full bg-background font-inter border-b border-white/5">
            <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-center">
                <Link
                    href={link}
                    aria-label="Blog, J Jairo C Ordoñez"
                    className="text-primary/80 hover:text-primary transition-colors cursor-pointer text-sm tracking-wider font-medium uppercase"
                >
                    <span className="hidden sm:inline">J Jairo | {title}</span>
                    <span className="sm:hidden">JC | {title}</span>
                </Link>
            </div>
        </header>
    );
}
