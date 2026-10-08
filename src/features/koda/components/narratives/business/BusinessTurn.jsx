export default function BusinessTurn() {
  return (
    <article className="business-frame business-frame--turn flex h-screen w-screen shrink-0 items-center px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-6xl">
        <div className="overflow-hidden">
          <p className="business-turn-statement text-5xl font-bold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Hasta que deja de hacerlo.
          </p>
        </div>
        <p className="business-turn-conclusion mt-8 max-w-3xl text-2xl font-normal leading-tight tracking-tight text-background/70 md:mt-12 md:text-4xl">
          Porque un negocio no se queda pequeño para siempre.
        </p>
      </div>
    </article>
  );
}
