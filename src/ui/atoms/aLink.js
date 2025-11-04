import Link from 'next/link';
import AText from './aText';

export default function ALink({ children, href, target = '_self' }) {
    return (
        <Link
            href={href}
            target={target}
            className="
                flex items-center gap-1 sm:gap-2 md:gap-3 
                text-[#e0e0e0] font-poppins font-[500]
                text-xs sm:text-sm md:text-base
                hover:scale-106 transition-transform duration-500 ease-in-out
            "
        >
            {children}
        </Link>
    )
}


export function ALinkDoc({ data, href, background = '#121212', color = "#999999" }) {
    return (
        <Link
            className='block p-1 rounded-l-full transition-colors hover:scale-106 transition-scale duration-300'
            style={{ background }}
            href={href}
        >
            <AText
                data={data.title}
                color={color}
            />
        </Link>
    )
}