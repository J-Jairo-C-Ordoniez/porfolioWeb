import Link from 'next/link';
import AText from './aText';

export default function ALink({ children, href, target = '_self' }) {
    return (
        <Link
            className='flex items-center gap-1 text-[#e0e0e0] text-sm font-poppins font-[500] hover:scale-106 transition-scale duration-1000 transition-colors'
            href={href}
            target={target}
        >
            {children}
        </Link>
    )
}


export function ALinkDoc({ data, href , background = '#121212', color = "#999999"}) {
    return (
        <Link
            className='block px-2 py-1 rounded-l-full transition-colors hover:scale-106 transition-scale duration-300'
            style={{background}}
            href={href}
        >
            <AText
                data={data.title}
                color={color}
            />
        </Link>
    )
}