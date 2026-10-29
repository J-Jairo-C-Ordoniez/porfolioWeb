"use client";

import Hero from "./narratives/Hero";
import Highlights from "./narratives/Highlights";

export default function Main() {
  return (
    <main className="overflow-x-clip bg-primary text-background">
      <Hero />
      <Highlights />
    </main>
  );
}
