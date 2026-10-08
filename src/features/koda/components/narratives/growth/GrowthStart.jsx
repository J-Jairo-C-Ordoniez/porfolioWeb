const scale = ["Más productos.", "Más ventas.", "Más clientes.", "Más personas trabajando.", "Más cosas que recordar."];

export default function GrowthStart() {
  return <article className="growth-frame growth-frame--start absolute inset-0 flex items-center px-6 opacity-0 sm:px-8 md:px-12 lg:px-20"><div className="max-w-6xl"><h2 className="growth-start text-5xl font-bold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">El problema apareció cuando todo empezó a crecer.</h2><div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 md:mt-12">{scale.map((item) => <p key={item} className="growth-scale text-2xl font-normal tracking-tight text-primary/70 md:text-4xl">{item}</p>)}</div></div></article>;
}
