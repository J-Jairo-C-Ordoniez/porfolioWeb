"use client";

import Hero from "./narratives/Hero";
import Highlights from "./narratives/Highlights";
import Listen from "./narratives/Listen";
import ResearchSpaces from "./narratives/ResearchSpaces";

export default function Main() {
  return (
    <main className="overflow-x-clip bg-primary text-background">
      <Hero />
      <Highlights />
      <Listen />
      <ResearchSpaces />
    </main>
  );
}