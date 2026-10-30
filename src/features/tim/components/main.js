"use client";

import Hero from "./narratives/Hero";
import Highlights from "./narratives/Highlights";
import Research from "./narratives/Research";
import ResearchSpaces from "./narratives/ResearchSpaces";
import Definition from "./narratives/Definition";
import Synthesis from "./narratives/Synthesis";
import Ideation from "./narratives/Ideation";

export default function Main() {
  return (
    <main className="overflow-x-clip bg-primary text-background">
      <Hero />
      <Highlights />
      <Research />
      <ResearchSpaces />
      <Definition />
      <Synthesis />
      <Ideation />
    </main>
  );
}