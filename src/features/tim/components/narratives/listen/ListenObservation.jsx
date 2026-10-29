const observations = [
  "Cómo los fans lo recordaban.",
  "Qué compartían y revivían en comunidad.",
  "Qué aspectos de su historia seguían presentes en sus interacciones.",
];

export default function ListenObservation() {
  return (
    <article className="listen-frame listen-frame--observation flex h-screen w-screen shrink-0 items-center px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="w-full max-w-5xl">
        <p className="listen-observation-title block text-xl font-light leading-relaxed tracking-tight text-background/80 md:text-2xl lg:text-4xl mb-6 md:mb-10">
          Quería observar las interacciones de su comunidad.
        </p>
        <ul className="flex w-full flex-col">
          {observations.map((item) => (
            <li
              key={item}
              className="listen-observation-item border-b border-background/20 py-4 text-2xl font-medium tracking-tight text-background/80 sm:text-3xl md:py-6 md:text-5xl"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
