import { forwardRef } from "react";
const TOOLS = ["Investigación.", "Arquitectura de información.", "Flujos.", "Interfaces.", "Interacciones."];
export default forwardRef(function DecideTools(_, ref) {
  return <article ref={ref} className="absolute inset-0 flex flex-col justify-center px-[8vw]"><p className="ch5-f6-label mb-10 text-primary text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight max-w-5xl">Y entonces el diseño UX/UI aparece naturalmente:</p><ul className="flex flex-col gap-4 mb-16">{TOOLS.map((tool) => <li key={tool} className="ch5-tool text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">{tool}</li>)}</ul></article>;
});
