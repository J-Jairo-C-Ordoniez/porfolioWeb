import { forwardRef } from "react";

function Words({ children, cls = "koda-word" }) {
  return (
    <>
      {String(children).split(" ").map((word, i) => (
        <span key={i} className={`${cls} inline-block mr-[0.28em]`}>{word}</span>
      ))}
    </>
  );
}

const KodaProblem = forwardRef(function KodaProblem(_, ref) {
  return (
    <article
      ref={ref}
      className="absolute inset-0 flex flex-col justify-center px-[8vw]"
    >
      <p className="koda-f4-label mb-10 text-primary/30 font-medium uppercase tracking-widest text-xs md:text-sm">
        El problema no era simplemente:
      </p>
      <p className="koda-f4-quote text-primary font-bold tracking-tight leading-tight text-3xl md:text-5xl lg:text-7xl">
        <Words>&ldquo;necesitan un sistema de inventario.&rdquo;</Words>
      </p>
    </article>
  );
});

export default KodaProblem;
