const QUESTIONS = [
  "¿Cómo debería construirlo?",
  "¿Cómo debería organizarlo para que pueda crecer?",
  "¿Realmente deberíamos construirlo así?",
];

export default function QuestionList() {
  return (
    <article className="q-list-panel relative w-full h-screen bg-background overflow-hidden flex">
      <h3 className="absolute top-[16vw] xl:top-[8vw] left-[8vw] text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight max-w-4xl text-primary/80">
        Entonces aparecen las preguntas:
      </h3>
      <div className="absolute inset-0 flex items-center px-[8vw]">
        {QUESTIONS.map((q, i) => (
          <p
            key={i}
            className={`q-question q-question-${i} absolute left-[8vw] right-[8vw] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-primary leading-tight`}
          >
            {q}
          </p>
        ))}
      </div>
    </article>
  );
}
