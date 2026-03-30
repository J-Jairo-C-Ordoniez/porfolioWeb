export default function Text({ text, aling = "text-center" }) {
    return (
        <p className={`font-sans text-md font-light tracking-wider text-secondary/80 ${aling}`}>
            {text}
        </p>
    );
}