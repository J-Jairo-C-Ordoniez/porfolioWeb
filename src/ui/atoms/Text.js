export default function Text({ text, color = '#b3b3b3', fontSize = '1rem' }) {
    return (
        <p 
            style={{ color, fontSize }} 
            className="text-[font-inter font-semibold tracking-wide"
        >
            {text}
        </p>
    )
}            