export function ATitleMain({
  data,
  color = "text-text-main",
  textAlign = "text-left",
  fontSize = "text-[2.8rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem]",
  className = "",
}) {
  return (
    <h1
      className={`font-sans font-bold leading-[0.9] tracking-tighter ${fontSize} ${textAlign} ${color} ${className}`}
    >
      {data}
    </h1>
  );
}

export function ATitleSection({
  data,
  color = "text-text-main",
  textAlign = "text-left",
  fontSize = "text-lg sm:text-xl",
  className = "",
}) {
  return (
    <h2
      className={`font-sans font-caps tracking-widest-xl ${fontSize} ${textAlign} ${color} ${className}`}
    >
      {data}
    </h2>
  );
}

export function ATitleName({
  name,
  lastName,
  color = "text-text-main",
  textAlign = "text-left",
  className = "",
}) {
  return (
    <h2
      className={`font-sans flex flex-col leading-[0.85] text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter ${textAlign} ${color} ${className}`}
    >
      <span className="font-light opacity-80">{name}</span>
      <strong className="font-bold text-accent uppercase">{lastName}</strong>
    </h2>
  );
}

export function ATitleBold({
  data,
  color = "text-text-main",
  textAlign = "text-left",
  fontSize = "text-xl lg:text-2xl",
  className = "",
}) {
  return (
    <h3
      className={`font-sans font-medium tracking-tight ${fontSize} ${textAlign} ${color} ${className}`}
    >
      {data}
    </h3>
  );
}
