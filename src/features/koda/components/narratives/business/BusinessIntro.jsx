export default function BusinessIntro() {
  return (
    <article className="business-frame business-frame--intro flex h-screen w-screen shrink-0 items-center px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-6xl">
        <p className="business-intro-lead text-3xl font-normal tracking-tight text-background/70 md:text-5xl">
          Al principio,
        </p>
        <div className="mt-4 overflow-hidden md:mt-6">
          <h2 className="business-intro-statement text-5xl font-bold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            una libreta puede ser suficiente.
          </h2>
        </div>
      </div>
    </article>
  );
}
