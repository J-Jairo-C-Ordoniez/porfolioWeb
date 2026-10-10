export default function BusinessContext() {
  return (
    <article className="business-frame business-frame--context flex h-screen w-screen shrink-0 items-center px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-6xl">
        <p className="business-context-lead text-4xl font-bold tracking-tight text-primary will-change-transform md:text-5xl lg:text-7xl">
          Cuando el negocio es pequeño,
        </p>
        <div className="mt-4 overflow-hidden md:mt-6">
          <p className="business-context-statement text-primary/80 block text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-relaxed">
            todo puede caber en un cuaderno.
          </p>
        </div>
      </div>
    </article>
  );
}
