import { forwardRef } from "react";

const COMPLEXITY = [
  "productos",
  "inventario",
  "clientes",
  "catálogo",
  "empleados",
  "conversaciones",
];

const KodaComplexity = forwardRef(function KodaComplexity(_, ref) {
  return (
    <article
      ref={ref}
      className="absolute inset-0 flex flex-col justify-center gap-10 px-[8vw]"
    >
      <p className="koda-f3-label mb-10 text-primary/80 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none">
        Pero detrás hay:
      </p>
      <ul className="flex flex-col items-end gap-4">
        {COMPLEXITY.map((item, i) => (
          <li
            key={i}
            className="koda-list-item text-primary text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
});

export default KodaComplexity;
