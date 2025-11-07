export default function AText({
  data,
  color = "#b3b3b3",
  fontSize = "1rem",
  textAlign = "left",
}) {
  return (
    <p
      className="tracking-wide text-[font-inter]"
      style={{
        color,
        fontSize,
        textAlign,
      }}
    >
      {data}
    </p>
  );
}
