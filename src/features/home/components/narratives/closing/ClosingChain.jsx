import { forwardRef } from "react";
import { ArrowDown } from "lucide-react";
const CHAIN = ["Primero comprender.", "Después decidir.", "Finalmente construir."];
export default forwardRef(function ClosingChain(_, ref) { return <article ref={ref} className="absolute inset-0 flex flex-col justify-center items-center px-[8vw]"><ul className="flex flex-col items-center justify-center gap-4">{CHAIN.map((item, index) => <li key={item} className="cc-chain-item flex flex-col items-center"><span className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary/80 leading-tight">{item}</span>{index !== CHAIN.length - 1 && <ArrowDown size={28} className="text-primary my-4" />}</li>)}</ul></article>; });
