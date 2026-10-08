const operations = ["Una venta debía actualizar el inventario.", "Una deuda debía quedar registrada.", "Un abono debía conservar su historial.", "Un producto sin stock no debía seguir disponible.", "Cada negocio debía permanecer aislado del resto."];

export default function DevelopmentOperations() {
  return <article className="development-frame development-frame--operations absolute inset-0 flex items-center px-6 opacity-0 sm:px-8 md:px-12 lg:px-20"><div className="w-full max-w-5xl">{operations.map((operation) => <p key={operation} className="development-operation border-b border-primary/20 py-4 text-3xl font-medium tracking-tight sm:text-4xl md:py-6 md:text-6xl">{operation}</p>)}</div></article>;
}
