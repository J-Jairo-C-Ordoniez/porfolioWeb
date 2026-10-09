"use client";

import Hero from "./narratives/Hero";
import Highlights from "./narratives/Highlights";
import Business from "./narratives/Business";
import Growth from "./narratives/Growth";
import Problem from "./narratives/Problem";
import Question from "./narratives/Question";
import Experience from "./narratives/Experience";
import Development from "./narratives/Development";
import Closing from "./narratives/Closing";

export default function Main() {
  return (
    <main className="overflow-x-clip bg-background text-primary">
      <Hero />
      <Highlights />
      <Business />
      <Growth />
      <Problem />
      <Question />
      <Experience />
      <Development />
      <Closing />
    </main>
  );
}
