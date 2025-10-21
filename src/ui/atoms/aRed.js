import Link from 'next/link';

export default function ARed({ children, href, target = '_self' }) {
    return (
        <Link
            className="p-4 flex gap-2 items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#00C896] hover:shadow-[0_0_10px_#06b6d4] transition hover:text-[#00C896]"
            href={href}
            target={target}
        >
            {children}
        </Link>
    )
}