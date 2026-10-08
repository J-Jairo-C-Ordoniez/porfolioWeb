import { forwardRef } from "react";
const QUESTIONS = ["¿Qué necesita estar ahí?", "¿Qué puede desaparecer?", "¿Qué debe ser evidente?"];
export default forwardRef(function DecideQuestions(_, ref) {
  return <article ref={ref} className="absolute inset-0 flex flex-col justify-center px-[8vw]"><p className="ch5-f3-label mb-10 text-primary/80 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none">Cosas como:</p><ul className="flex flex-col items-end gap-6">{QUESTIONS.map((question) => <li key={question} className="ch5-question text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">{question}</li>)}</ul></article>;
});
