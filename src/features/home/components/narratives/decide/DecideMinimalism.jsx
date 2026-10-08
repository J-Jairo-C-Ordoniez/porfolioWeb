import { forwardRef } from "react";
const Words = ({ children }) => String(children).split(" ").map((word, index) => <span key={index} className="ch5-word inline-block mr-[0.28em]">{word}</span>);
export default forwardRef(function DecideMinimalism(_, ref) {
  return <article ref={ref} className="absolute inset-0 flex flex-col justify-center px-[8vw] max-w-6xl"><p className="ch5-f4-label mb-10 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">Aquí entra mi filosofía sobre el minimalismo:</p><p className="ch5-f4-text text-primary text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight"><Words>El cual para mí, es más que estética.</Words></p></article>;
});
