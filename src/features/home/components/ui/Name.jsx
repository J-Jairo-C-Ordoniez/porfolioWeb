export default function Name({
  name,
  lastName,
  color = "text-primary",
  textAlign = "text-center",
  className = "",
}) {
  return (
    <h1 className={`font-sans flex flex-col text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider ${textAlign} ${color} ${className}`}>
      <span className="font-medium opacity-80">{name}</span>
      <strong className="font-bold text-accent uppercase">{lastName}</strong>
    </h1>
  );
}
