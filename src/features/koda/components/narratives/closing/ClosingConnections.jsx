const connections = ["Detrás del inventario había ventas.", "Detrás de las ventas había clientes.", "Detrás de los clientes había deudas.", "Detrás de los empleados había operaciones.", "Y detrás de todo eso, un negocio intentando mantenerse bajo control."];

export default function ClosingConnections() {
  return <article className="closing-frame closing-frame--connections absolute inset-0 flex items-center px-6 opacity-0 sm:px-8 md:px-12 lg:px-20"><div className="w-full max-w-5xl">{connections.map((connection) => <p key={connection} className="closing-connection border-b border-background/20 py-4 text-3xl font-medium tracking-tight sm:text-4xl md:py-6 md:text-6xl">{connection}</p>)}</div></article>;
}
