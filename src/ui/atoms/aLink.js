import Link from 'next/link';

export default function ALink({ children, href, target = '_self' }) {
    return (
        <Link
            className='flex items-center gap-1 text-[#e0e0e0] text-sm font-poppins font-[500] hover:scale-106 transition-scale duration-300 focus-visible:ring-1 ring-gray-500 transition-colors'
            href={href}
            target={target}
        >
            {children}
        </Link>
    )
}