export default function BtnDoc({ children, color = '#b3b3b3', background = '#121212', onClick }) {
    return (
        <button
            onClick={onClick}
            className='w-full px-10 py-3 rounded-r-full transition-all hover:bg-[#00C89605]'
            style={{ background, color }}
        >
            {children}
        </button>
    )
}