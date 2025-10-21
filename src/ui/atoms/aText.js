export default function AText({ data, color = '#b3b3b3', fontSize = '1rem', textAlign = 'left' }) {
    return (
        <p
            className="text-[font-inter] tracking-wide"
            style={{
                color,
                fontSize,
                textAlign
            }}
        >
            {data}
        </p>
    )
}            