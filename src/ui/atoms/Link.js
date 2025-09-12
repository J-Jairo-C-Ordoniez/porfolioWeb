import Link from 'next/link';

export default function CustomLink({ children, href, target = '_self' }) {
    return (
        <Link
            href={href}
            target={target}
        >
            {children}
        </Link>
    )
}