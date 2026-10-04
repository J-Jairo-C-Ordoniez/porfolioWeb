import { forwardRef } from "react";

const COMPLEXITY = [
  "productos y variantes",
  "inventario en tiempo real",
  "clientes y fiados",
  "catálogo digital",
  "empleados",
  "conversaciones por WhatsApp",
];

const KodaComplexity = forwardRef(function KodaComplexity(_, ref) {
  return (
    <article
      ref={ref}
      className="absolute inset-0 flex flex-col justify-center items-end px-[8vw]"
    >
      <p className="koda-f3-label mb-10 text-primary/30 font-medium text-right uppercase tracking-widest text-xs md:text-sm">
        Pero detrás de una venta:
      </p>
      <ul className="flex flex-col items-end gap-4">
        {COMPLEXITY.map((item, i) => (
          <li
            key={i}
            className="koda-list-item text-primary font-medium text-right text-2xl md:text-3xl lg:text-4xl"
          >
            {item}.
          </li>
        ))}
      </ul>
    </article>
  );
});

export default KodaComplexity;
