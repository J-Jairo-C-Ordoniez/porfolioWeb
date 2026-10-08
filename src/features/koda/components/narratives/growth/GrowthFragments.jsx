const sources = ["Una cosa para las ventas.", "Otra para el inventario.", "Otra para los fiados.", "Y las conversaciones... en WhatsApp."];

export default function GrowthFragments() {
  return <article className="growth-frame growth-frame--fragments absolute inset-0 flex items-center px-6 opacity-0 sm:px-8 md:px-12 lg:px-20"><div className="w-full max-w-5xl"><p className="growth-fragments-lead mb-8 text-3xl font-normal tracking-tight text-primary/70 md:mb-12 md:text-5xl">Y la información empezó a vivir en distintos lugares.</p>{sources.map((source) => <p key={source} className="growth-fragment border-b border-primary/20 py-4 text-3xl font-medium tracking-tight sm:text-4xl md:py-6 md:text-6xl">{source}</p>)}</div></article>;
}
