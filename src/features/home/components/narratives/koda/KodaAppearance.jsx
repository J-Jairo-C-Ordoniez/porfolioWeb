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

const KodaAppearance = forwardRef(function KodaAppearance(_, ref) {
  return (
    <article
      ref={ref}
      className="absolute inset-0 flex flex-col justify-center px-[8vw]"
    >
      <p className="koda-f2 text-primary/60 leading-snug font-normal max-w-xl text-2xl md:text-3xl lg:text-4xl">
        <Words>Una tienda de ropa local puede parecer sencilla desde fuera.</Words>
      </p>
    </article>
  );
});

export default KodaAppearance;
