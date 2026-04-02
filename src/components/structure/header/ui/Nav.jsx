import Link from "next/link";

export default function Nav({ data }) {
    return (
        <nav>
            <ul className="flex items-center gap-3 md:gap-6">
                {data && data.map((item) => (
                    <li key={item.id}>
                        <Link
                            href={item.href}
                            aria-label={item.ariaLabel}
                            className="text-primary/80 hover:text-primary transition-colors cursor-pointer text-xs tracking-wider uppercase"
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
