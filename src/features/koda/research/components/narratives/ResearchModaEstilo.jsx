"use client";

import ModaEstiloIntro from "./modaEstilo/ModaEstiloIntro";
import ModaEstiloVisual from "./modaEstilo/ModaEstiloVisual";
import ModaEstiloTurn from "./modaEstilo/ModaEstiloTurn";

export default function ResearchModaEstilo() {
  return (
    <section
      id="moda-y-estilo"
      className="w-full bg-primary/5 px-6 py-20 text-primary md:px-12 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <ModaEstiloIntro />
        <ModaEstiloVisual />
        <ModaEstiloTurn />
      </div>
    </section>
  );
}
