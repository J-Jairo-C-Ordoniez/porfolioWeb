export default function TitleSpace({ title, color = '#b3b3b3' }) {
    return (
        <h2 className="text-1xl font-semibold tracking-widest pl-2" style={{ color }}>
            {title}
        </h2>
    )
}