const signals = [
  "Saber qué se vendió.",
  "Qué queda.",
  "Qué necesita el negocio.",
  "Y qué está ocurriendo ahora mismo.",
];

export default function QuestionSignals() {
  return (
    <article className="question-frame question-frame--signals flex h-screen w-screen shrink-0 items-center px-[8vw]">
      <div className="w-full max-w-5xl">
        <p className="question-signals-lead mb-8 text-2xl font-light tracking-tight text-primary/80 md:mb-12 md:text-4xl lg:text-5xl">
          Era poder entender el negocio.
        </p>
        <ul className="flex flex-col">
          {signals.map((signal) => (
            <li
              key={signal}
              className="question-signal border-b border-primary/20 py-4 text-3xl font-medium tracking-tight text-primary sm:text-4xl md:py-6 md:text-6xl"
            >
              {signal}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
