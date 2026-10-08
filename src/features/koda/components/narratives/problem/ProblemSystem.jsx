const impacts = ["También cambia el inventario.", "Puede generar una deuda.", "Puede involucrar a un empleado.", "Y puede cambiar lo que aparece en el catálogo."];

export default function ProblemSystem() {
  return <article className="problem-frame problem-frame--system absolute inset-0 flex items-center px-6 opacity-0 sm:px-8 md:px-12 lg:px-20"><div className="w-full max-w-6xl"><p className="problem-sale text-3xl font-normal tracking-tight text-background/70 md:text-5xl">Porque una venta no termina cuando alguien paga.</p><div className="mt-8 max-w-5xl md:mt-12">{impacts.map((impact) => <p key={impact} className="problem-impact border-b border-background/20 py-3 text-2xl font-medium tracking-tight sm:text-3xl md:py-5 md:text-5xl">{impact}</p>)}</div><p className="problem-system mt-10 text-4xl font-bold leading-none tracking-tighter md:mt-14 md:text-7xl">El negocio no eran piezas separadas. Era un sistema.</p></div></article>;
}
