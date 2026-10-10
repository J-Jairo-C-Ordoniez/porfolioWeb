const notes = [
  "Una venta.",
  "Una anotación.",
  "Una cuenta pendiente.",
  "Unas cuantas prendas en inventario.",
];

export default function BusinessNotes() {
  return (
    <article className="business-frame business-frame--notes flex h-screen w-screen shrink-0 items-center px-6 sm:px-8 md:px-12 lg:px-20">
      <ul className="w-full max-w-5xl">
        {notes.map((note) => (
          <li
            key={note}
            className="business-note border-b border-primary/20 py-4 text-3xl font-medium tracking-tight text-primary/80 sm:text-4xl md:py-6 md:text-6xl"
          >
            {note}
          </li>
        ))}
      </ul>
    </article>
  );
}
