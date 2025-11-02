import ALink from "../atoms/aLink";
import AText from "../atoms/aText";

export default function MMenu({ data, isOpen = false, onClose }) {
    return (
        <nav aria-label="Menú principal" className="relative">
            <ul
                className={`
                    flex flex-col md:flex-row
                    gap-6 items-center justify-center
                    fixed md:static
                    top-20 left-0
                    w-full h-full md:h-auto
                    bg-[#121212] md:bg-transparent
                    p-8 md:p-0
                    transition-all duration-500 ease-in-out
                    z-40
                    ${isOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-5 md:opacity-100 md:visible md:translate-y-0"
                    }
                `}
            >
                {data.map(link => (
                    <li key={link.id} onClick={onClose}>
                        <ALink href={link.href}>
                            <AText
                                data={link.text}
                                fontSize=".9rem"
                            />
                        </ALink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}