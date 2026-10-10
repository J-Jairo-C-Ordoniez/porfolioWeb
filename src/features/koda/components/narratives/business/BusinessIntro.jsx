export default function BusinessIntro() {
  return (
    <article className="business-frame business-frame--intro flex h-screen w-screen shrink-0 items-center px-[8vw]">
      <div className="max-w-6xl">
        <p className="business-intro-lead text-primary/80 block text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-relaxed">
          Al principio,
        </p>
        <div className="mt-4 overflow-hidden md:mt-6">
          <h2 className="business-intro-statement text-4xl font-bold tracking-tight text-primary will-change-transform md:text-5xl lg:text-7xl">
            una libreta puede ser suficiente.
          </h2>
        </div>
      </div>
    </article>
  );
}
