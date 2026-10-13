"use client";

import BeyondInventoryIntro from "./beyondInventory/BeyondInventoryIntro";
import BeyondInventoryEcosystem from "./beyondInventory/BeyondInventoryEcosystem";
import BeyondInventoryKeyQuote from "./beyondInventory/BeyondInventoryKeyQuote";

export default function ResearchBeyondInventory() {
  return (
    <section
      id="mas-que-inventario"
      className="w-full bg-primary/5 px-6 py-20 text-primary md:px-12 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <BeyondInventoryIntro />
        <BeyondInventoryEcosystem />
        <BeyondInventoryKeyQuote />
      </div>
    </section>
  );
}
