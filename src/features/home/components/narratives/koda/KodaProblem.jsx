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
      <p className="koda-f4-label mb-10 text-primary/80 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
        El problema no era simplemente:
      </p>
      <p className="koda-f4-quote text-primary text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none">
        <Words>&ldquo;necesitan un sistema de inventario.&rdquo;</Words>
      </p>
    </article>
  );
});

export default KodaProblem;
