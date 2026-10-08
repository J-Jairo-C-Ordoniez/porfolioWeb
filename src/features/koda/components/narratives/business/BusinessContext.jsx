export default function BusinessContext() {
  return (
    <article className="business-frame business-frame--context flex h-screen w-screen shrink-0 items-center px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-6xl">
        <p className="business-context-lead text-3xl font-normal tracking-tight text-background/70 md:text-5xl">
          Cuando el negocio es pequeño,
        </p>
        <div className="mt-4 overflow-hidden md:mt-6">
          <p className="business-context-statement text-5xl font-bold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            todo puede caber en un cuaderno.
          </p>
        </div>
      </div>
    </article>
  );
}
