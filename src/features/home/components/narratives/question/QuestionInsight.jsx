const LIST_ITEMS = [
  "Cómo se estructura.",
  "Cómo se utiliza.",
  "Qué necesita una persona.",
  "Qué problema intenta resolver un negocio.",
];

export default function QuestionInsight() {
  return (
    <div className="w-full bg-background text-primary overflow-hidden">
      <section className="h-screen w-full flex flex-col justify-center px-[8vw] gap-16">
        <p className="q-insight-lead text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary/80 leading-tight max-w-4xl">
          Empecé a interesarme no solo por cómo funcionaba un producto, sino por las{" "}
          <span className="text-primary font-semibold">decisiones que había detrás de él.</span>
        </p>

        <div className="q-insight-list flex flex-col w-full max-w-4xl ml-auto">
          {LIST_ITEMS.map((item, i) => (
            <p
              key={i}
              className="q-insight-item text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-primary border-b border-primary/20 py-6 last:border-b-0"
            >
              {item}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
