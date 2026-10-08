import { forwardRef } from "react";
const PRINCIPLES = ["No consiste en usar menos elementos.", "Consiste en reducir el ruido.", "Reducir la fricción.", "Hacer más evidente lo importante."];
export default forwardRef(function DecidePrinciples(_, ref) {
  return <article ref={ref} className="absolute inset-0 flex flex-col justify-center items-end px-[8vw]"><ul className="flex flex-col items-end gap-6">{PRINCIPLES.map((line, index) => <li key={line} className={`ch5-minimalism-line text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight ${index === 0 ? "text-primary/80" : "text-primary"}`}>{line}</li>)}</ul></article>;
});
