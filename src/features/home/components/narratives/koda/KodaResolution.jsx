import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Words({ children, cls = "koda-word" }) {
  return (
    <>
      {String(children).split(" ").map((word, i) => (
        <span key={i} className={`${cls} inline-block mr-[0.28em]`}>{word}</span>
      ))}
    </>
  );
}

const KodaResolution = forwardRef(function KodaResolution(_, ref) {
  return (
    <article
      ref={ref}
      className="absolute inset-0 flex flex-col justify-center items-end px-[8vw]"
    >
      <p className="koda-res1 max-w-5xl text-primary/80 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
        <Words>Había procesos fragmentados que necesitaban funcionar juntos.</Words>
      </p>
      <p className="koda-res2 mt-8 max-w-5xl text-primary text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
        <Words>KODA nació para convertir ese conjunto de procesos en un sistema coherente.</Words>
      </p>
      <Link
        href="/projects/koda"
        className="koda-cta group inline-flex items-center gap-4 mt-24 text-2xl md:text-3xl font-medium border-b border-primary/20 pb-2 text-primary hover:text-primary/80 transition-all"
      >
        Conocer KODA
        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
      </Link>
    </article>
  );
});

export default KodaResolution;
