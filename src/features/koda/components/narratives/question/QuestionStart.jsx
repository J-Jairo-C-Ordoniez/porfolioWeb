export default function QuestionStart() {
  return (
    <article className="question-frame question-frame--start flex h-screen w-screen shrink-0 items-center px-[8vw]">
      <div className="max-w-6xl">
        <p className="question-lead text-primary/80 block text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-relaxed">
          Porque el problema no era guardar más información.
        </p>
        <div className="mt-4 overflow-hidden md:mt-6">
          <h2 className="question-statement text-4xl font-bold tracking-tight text-primary will-change-transform md:text-5xl lg:text-7xl">
            Era poder entenderla.
          </h2>
        </div>
      </div>
    </article>
  );
}
