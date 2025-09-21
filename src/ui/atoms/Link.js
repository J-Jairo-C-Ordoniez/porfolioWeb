import Link from 'next/link';

export default function CustomLink({ children, href, target = '_self' }) {
    return (
        <Link
            className='text-[#e0e0e0] text-sm font-poppins font-[500] hover:text-[#b3b3b3b] transition-colors-duration-300'
            href={href}
            target={target}
        >
            {children}
        </Link>
    )
}