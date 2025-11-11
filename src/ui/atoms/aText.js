export default function AText({
  data,
  color = "#b3b3b3",
  fontSize = "text-1xl",
  textAlign = "left",
}) {
  return (
    <p
      className={`tracking-wide text-[font-inter] ${fontSize}`}
      style={{
        color,
        textAlign
      }}
    >
      {data}
    </p>
  );
}
