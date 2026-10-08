const system = ["Inventario.", "Ventas.", "Clientes.", "Empleados.", "Deudas.", "Catálogo."];

export default function ClosingSummary() {
  return <article className="closing-frame closing-frame--summary absolute inset-0 flex items-center px-6 opacity-0 sm:px-8 md:px-12 lg:px-20"><div className="w-full max-w-6xl"><p className="closing-summary-lead text-3xl font-normal tracking-tight text-background/70 md:text-5xl">KODA conecta esas piezas en un mismo sistema.</p><div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 md:mt-12">{system.map((item) => <p key={item} className="closing-system-item text-3xl font-medium tracking-tight sm:text-4xl md:text-6xl">{item}</p>)}</div><p className="closing-final mt-10 max-w-4xl text-3xl font-bold leading-tight tracking-tighter md:mt-14 md:text-5xl">Todo conectado. Todo dentro del mismo lugar. Para que el negocio fuera más entendible.</p></div></article>;
}
