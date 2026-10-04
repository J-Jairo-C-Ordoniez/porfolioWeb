import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";

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
      <p className="koda-res1 max-w-lg text-primary/60 leading-relaxed text-right text-xl md:text-2xl lg:text-3xl">
        <Words>Había procesos fragmentados que necesitaban funcionar juntos.</Words>
      </p>
      <p className="koda-res2 mt-8 max-w-lg text-primary font-medium leading-relaxed text-right text-xl md:text-2xl lg:text-3xl">
        <Words>KODA nació para convertir ese conjunto de procesos en un sistema coherente.</Words>
      </p>
      <a
        href="/projects/koda"
        className="koda-cta group inline-flex items-center gap-4 mt-16 text-primary font-semibold border-b border-primary/20 pb-1.5 hover:border-primary/70 transition-colors duration-300 text-lg md:text-xl"
      >
        Conocer KODA
        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
      </a>
    </article>
  );
});

export default KodaResolution;
