const actors = ["El dueño necesitaba controlar el negocio.", "Los empleados necesitaban vender rápido.", "El inventario necesitaba mantenerse actualizado.", "Los clientes necesitaban una experiencia sencilla."];

export default function ProblemActors() {
  return <article className="problem-frame problem-frame--actors absolute inset-0 flex items-center px-6 opacity-0 sm:px-8 md:px-12 lg:px-20"><div className="w-full max-w-5xl"><p className="problem-actors-lead mb-8 text-3xl font-normal tracking-tight text-background/70 md:mb-12 md:text-5xl">Era todo lo que había detrás.</p>{actors.map((actor) => <p key={actor} className="problem-actor border-b border-background/20 py-4 text-3xl font-medium tracking-tight sm:text-4xl md:py-6 md:text-6xl">{actor}</p>)}</div></article>;
}
