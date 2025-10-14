import Link from "next/link"

export default function BtnBackdrop({ children, href, target = "_self" }) {
    return (
        <Link
            href={href}
            target={target}
            className="flex items-center gap-5 bg-[#262626] text-[#b3b3b3] font-bold py-3 px-10 rounded-full hover:scale-105 transition-transform duration-300"
        >
            {children}
        </Link>
    )
}
