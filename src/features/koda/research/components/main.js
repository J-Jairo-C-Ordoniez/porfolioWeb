"use client";

import ResearchHero from "./narratives/ResearchHero";
import ResearchTshirt from "./narratives/ResearchTshirt";
import ResearchModaEstilo from "./narratives/ResearchModaEstilo";
import ResearchExploration from "./narratives/ResearchExploration";
import ResearchBeyondInventory from "./narratives/ResearchBeyondInventory";
import ResearchFamiliarity from "./narratives/ResearchFamiliarity";
import ResearchSynthesis from "./narratives/ResearchSynthesis";

export default function Main() {
  return (
    <main className="overflow-x-clip bg-background text-primary">
      <ResearchHero />
      <ResearchTshirt />
      <ResearchModaEstilo />
      <ResearchExploration />
      <ResearchBeyondInventory />
      <ResearchFamiliarity />
      <ResearchSynthesis />
    </main>
  );
}
