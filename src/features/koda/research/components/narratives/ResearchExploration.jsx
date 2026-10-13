"use client";

import ExplorationIntro from "./exploration/ExplorationIntro";
import ExplorationCases from "./exploration/ExplorationCases";
import ExplorationInsight from "./exploration/ExplorationInsight";

export default function ResearchExploration() {
  return (
    <section
      id="observar-realidad"
      className="w-full bg-background px-6 py-20 text-primary md:px-12 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <ExplorationIntro />
        <ExplorationCases />
        <ExplorationInsight />
      </div>
    </section>
  );
}
