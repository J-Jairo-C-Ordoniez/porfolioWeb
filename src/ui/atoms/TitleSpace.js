export default function TitleSpace({ title, color = '#b3b3b3', fontSize = '.9rem', textAlign = 'left' }) {
    return (
        <h2 className="font-semibold" style={{ color, fontSize, textAlign }}>
            {title}
        </h2>
    )
}