export default function BtnCTA({ children, color = '#b3b3b3', onClick, dataId = '' }) {
    return (
        <button
            className="py-5 px-10 cursor-pointer rounded-full text-white flex items-center gap-3 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 shadow-lg shadow-fuchsia-500/20 hover:scale-104 hover:shadow-fuchsia-400/30 transition-all duration-500"
            style={{ color }}
            data-id={dataId}
            onClick={onClick}
        >
            {children}
        </button>
    )
}