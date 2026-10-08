import { forwardRef } from "react";
const Words = ({ children }) => String(children).split(" ").map((word, index) => <span key={index} className="ch5-word inline-block mr-[0.28em]">{word}</span>);
export default forwardRef(function DecidePerspective(_, ref) {
  return <article ref={ref} className="absolute inset-0 flex flex-col justify-center px-[8vw] max-w-5xl"><p className="ch5-f2 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight"><Words>Empiezas a mirar una interfaz de otra manera y comienzas a preguntarte cosas.</Words></p></article>;
});
