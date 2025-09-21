export default function TitleSpace({ title, color = '#b3b3b3', fontSize = '.9rem' }) {
    return (
        <h2 className="font-semibold tracking-widest pl-2" style={{ color, fontSize }}>
            {title}
        </h2>
    )
}