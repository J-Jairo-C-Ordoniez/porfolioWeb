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

const KodaIntro = forwardRef(function KodaIntro(_, ref) {
  return (
    <article
      ref={ref}
      className="absolute inset-0 flex flex-col justify-center px-[8vw]"
    >
      <div className="overflow-hidden">
        <h2 className="koda-title font-bold tracking-tighter leading-none text-[clamp(5rem,16vw,16rem)] text-primary">
          KODA
        </h2>
      </div>
      <p className="koda-f1-sub mt-8 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary/80 leading-tight">
        <Words>Nació de mirar ese sistema.</Words>
      </p>
    </article>
  );
});

export default KodaIntro;