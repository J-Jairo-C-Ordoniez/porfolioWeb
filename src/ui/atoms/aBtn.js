import Link from "next/link"
import AText from "./aText"
import AIcon from "./aIcon"

export function ABtn({ data, onClick, dataId = '', color = '#b3b3b3' }) {
    return (
        <button
            className="flex items-center gap-3 font-light text-[.9rem] py-2 px-3 cursor-pointer rounded-full hover:scale-105 transition-transform duration-300"
            style={{ color }}
            data-id={dataId}
            onClick={onClick}
        >
            <AIcon data={data.icon} />
            <AText
                data={data.text}
                color={color}
                fontSize="1rem"
            />
        </button>
    )
}


export function ABtnLinear({ data }) {
    return (
        <Link
            href={data.href}
            className="flex items-center gap-5 border-4 border-[#262626] text-[#e0e0e0] font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform duration-300"
        >
            <AText
                data={data.text}
                color="#b3b3b3"
                fontSize="1rem"
            />

            <div className="bg-[#262626] p-2 rounded-full text-[#b3b3b3]">
                <AIcon data={data.icon} />
            </div>
        </Link>
    )
}


export function ABtnBold({ data }) {
    return (
        <Link
            href={data.href}
            className="flex items-center gap-5 border-4 border-[#262626] bg-[#262626] text-[#b3b3b3] font-bold py-5 px-10 rounded-full hover:scale-105 transition-transform duration-300"
        >
            <AText
                data={data.text}
                color="#b3b3b3"
                fontSize="1rem"
            />

            <AIcon data={data.icon} />
        </Link>
    )
}


export function ABtnCTA({ data, onClick, dataId = '', color = '#b3b3b3' }) {
    return (
        <button
            className="font-bold py-5 px-10 cursor-pointer rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 shadow-lg shadow-fuchsia-500/20 hover:scale-106 hover:shadow-fuchsia-400/30 transition-all duration-300"
            style={{ color }}
            data-id={dataId}
            onClick={onClick}
        >
            <AText
                data={data.text}
                color="#b3b3b3"
                fontSize="1rem"
            />
        </button>
    )
}

export default function ABtnDoc({ children, onClick, color = '#b3b3b3', background = '#121212' }) {
    return (
        <button
            className='w-full px-10 py-3 rounded-r-full cursor-pointer hover:bg-[#00C89605] transition-all duration-300'
            style={{ background, color }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}