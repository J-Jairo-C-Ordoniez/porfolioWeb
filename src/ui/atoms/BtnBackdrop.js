import Link from "next/link"

export default function btnBackdrop({ children, href, target = "_self" }) {
    return (
        <Link
            href={href}
            target={target}
            className="flex items-center gap-5 bg-[#121212] text-[#b3b3b3] font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform duration-300"
        >
            {children}
        </Link>
    )
}
