import Link from "next/link"

export default function BtnLinear({ children, href, target = "_self" }) {
    return (
        <Link
            href={href}
            target={target}
            className="flex items-center gap-5 border-4 border-[#262626] text-[#e0e0e0] font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform duration-300"
        >
            {children}
        </Link>
    )
}