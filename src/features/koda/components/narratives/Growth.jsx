"use client";

import GrowthStart from "./growth/GrowthStart";
import GrowthFragments from "./growth/GrowthFragments";
import GrowthConclusion from "./growth/GrowthConclusion";

export default function Growth() {
  return (
    <section 
      id="when-it-was-not-enough" 
      className="bg-background text-primary w-full overflow-hidden flex flex-col gap-10 lg:gap-20"
    >
      <GrowthStart />
      <GrowthFragments />
      <GrowthConclusion />
    </section>
  );
}
