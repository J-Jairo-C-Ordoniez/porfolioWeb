export function ATitleMain({
  data,
  color = "#e0e0e0",
  textAlign = "left",
  fontSize = "text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]",
}) {
  return (
    <h1
      className={`font-poppins font-bold ${fontSize} `}
      style={{
        color,
        textAlign,
      }}
    >
      {data}
    </h1>
  );
}

export function ATitleSection({
  data,
  color = "#e0e0e0",
  textAlign = "left",
  fontSize = "text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.4rem]",
}) {
  return (
    <h2
      className={`font-poppins font-light tracking-widest ${fontSize} `}
      style={{
        color,
        textAlign,
      }}
    >
      {data}
    </h2>
  );
}

export function ATitleName({
  name,
  lastName,
  color = "#e0e0e0",
  fontSize = "text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[3rem]",
  textAlign = "left",
}) {
  return (
    <h2
      className={`font-poppins flex flex-col leading-tight ${fontSize} `}
      style={{
        color,
        textAlign,
      }}
    >
      {name}
      <strong className="font-extrabold">{lastName}</strong>
    </h2>
  );
}

export function ATitleBold({
  data,
  color = "#b3b3b3",
  textAlign = "left",
  fontSize = "text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem]",
}) {
  return (
    <h3
      className={`font-poppins font-semibold ${fontSize} `}
      style={{
        color,
        textAlign,
      }}
    >
      {data}
    </h3>
  );
}
