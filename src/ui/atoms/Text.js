export default function Text({ text, color = '#b3b3b3' }) {
    return (
        <p style={{ color }} className="text-[1.2rem] font-inter font-semibold">
            {text}
        </p>
    )
}            