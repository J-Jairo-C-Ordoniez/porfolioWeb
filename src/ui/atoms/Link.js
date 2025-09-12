import Link from 'next/link';

export default function CustomLink({ children, href, target = '_self' }) {
    return (
        <Link
            className='text-[#4b473ccc] text-sm font-poppins font-[600] hover:text-[#25231c] transition-colors-duration-300'
            href={href}
            target={target}
        >
            {children}
        </Link>
    )
}