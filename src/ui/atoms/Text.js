export default function Text({ text, color = '#b3b3b3', fontSize = '1rem', textAlign = 'left' }) {
    return (
        <p 
            style={{ color, fontSize, textAlign }} 
            className="text-[font-inter] tracking-wide"
        >
            {text}
        </p>
    )
}            