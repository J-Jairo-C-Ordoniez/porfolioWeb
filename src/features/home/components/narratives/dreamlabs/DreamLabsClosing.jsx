import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const Words = ({ children }) => String(children).split(" ").map((word, index) => <span key={index} className="dl-word inline-block mr-[0.28em]">{word}</span>);
export default forwardRef(function DreamLabsClosing(_, ref) { return <article ref={ref} className="absolute inset-0 flex flex-col justify-center items-end px-[8vw]"><p className="dl-f5-closing text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-background/80 leading-tight max-w-5xl"><Words>La experiencia empezó a construirse alrededor de esa idea.</Words></p><Link href="/projects/dreamlabs" className="dl-cta group inline-flex items-center gap-4 mt-24 text-2xl md:text-3xl font-medium border-b border-background/20 pb-2 text-background hover:text-background/80 transition-all">Explorar DreamLabs<ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" /></Link></article>; });
