import Link from "next/link"

export default function BtnBackdrop({ children, href, target = "_self" }) {
    return (
        <Link
            href={href}
            target={target}
            className="flex items-center gap-5 border-4 border-[#121212] text-[#121212] font-bold py-4 px-6 rounded-full hover:scale-105 transition-transform duration-300"
        >
            {children}
        </Link>
    )
}