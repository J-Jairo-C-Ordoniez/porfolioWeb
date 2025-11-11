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
  fontSize = "text-3xl sm:text-3xl md:text-4xl",
}) {
  return (
    <h2
      className={`font-poppins font-light tracking-tighter ${fontSize} `}
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
  textAlign = "left",
}) {
  return (
    <h2
      className='font-poppins flex flex-col leading-8 text-3xl sm:text-4xl md:text-4xl md:leading-8 lg:text-4xl lg:leading-8 xl:text-5xl xl:leading-12'
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
  fontSize = "text-1xl"
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
