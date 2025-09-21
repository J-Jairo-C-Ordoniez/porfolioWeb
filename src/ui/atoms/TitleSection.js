export default function TitleSection({ title, color = '#b3b3b3', textAlign = 'left', fontSize='2rem' }) {
    return (
        <h2 className="font-light tracking-widest" style={{ color, textAlign, fontSize }}>
            {title}
        </h2>
    )
}