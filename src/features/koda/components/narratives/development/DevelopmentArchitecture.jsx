const decisions = ["Multi-tenant.", "Monolito modular.", "Transacciones seguras.", "React.", "Next.js.", "Prisma.", "PostgreSQL.", "Tailwind.", "GSAP."];

export default function DevelopmentArchitecture() {
  return (
    <article className="development-frame development-frame--architecture absolute inset-0 flex items-center px-6 opacity-0 sm:px-8 md:px-12 lg:px-20">
      <div className="w-full max-w-6xl">
        <p className="development-architecture-lead max-w-4xl text-3xl font-normal tracking-tight text-primary/70 md:text-5xl">
          La arquitectura también nació de las decisiones del producto.
        </p>
        <ul className="mt-8 grid max-w-5xl gap-3 border-t border-primary/20 pt-4 sm:grid-cols-2 md:mt-12 md:gap-5 md:pt-6 lg:grid-cols-3">
          {decisions.map((decision) => (
            <li key={decision} className="development-architecture-item border-b border-primary/20 pb-3 text-2xl font-medium tracking-tight sm:text-3xl md:pb-5 md:text-4xl">
              {decision}
            </li>
          ))}
        </ul>
        <p className="development-conclusion mt-10 max-w-3xl text-3xl font-bold leading-tight tracking-tighter md:mt-14 md:text-5xl">
          La tecnología apareció después: como herramienta para convertir decisiones en un sistema real.
        </p>
      </div>
    </article>
  );
}
