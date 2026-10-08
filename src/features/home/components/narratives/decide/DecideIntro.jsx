import { forwardRef } from "react";

function Words({ children }) {
  return String(children).split(" ").map((word, index) => (
    <span key={index} className="ch5-word inline-block mr-[0.28em]">{word}</span>
  ));
}

export default forwardRef(function DecideIntro(_, ref) {
  return <article ref={ref} className="absolute inset-0 flex flex-col justify-center px-[8vw]">
    <div className="overflow-hidden"><h2 className="ch5-title font-bold tracking-tighter leading-none text-3xl md:text-5xl lg:text-6xl text-primary">Comprender cambia las decisiones.</h2></div>
    <p className="ch5-f1-sub mt-8 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary/80 leading-tight"><Words>Cuando entiendes el problema, empiezas a mirar diferente.</Words></p>
  </article>;
});
