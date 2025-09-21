export default function Btn({ children, color = '#b3b3b3', onClick, dataId = '' }) {
    return (
        <button
            className="flex items-center gap-3 font-light text-[.9rem] py-2 px-3 cursor-pointer rounded-full hover:scale-105 transition-transform duration-300"
            style={{ color }}
            data-id={dataId}
            onClick={onClick}
        >
            {children}
        </button>
    )
}