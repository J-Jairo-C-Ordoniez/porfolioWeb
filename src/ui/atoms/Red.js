import Link from 'next/link';

export default function Red({ children, href, target = '_self' }) {
    return (
        <Link
            className="p-4 flex gap-2 items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 hover:border-cyan-500 hover:shadow-[0_0_10px_#06b6d4] transition hover:text-cyan-400"
            href={href}
            target={target}
        >
            {children}
        </Link>
    )
}