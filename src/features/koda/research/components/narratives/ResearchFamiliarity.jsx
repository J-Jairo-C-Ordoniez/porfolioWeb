"use client";

import FamiliarityIntro from "./familiarity/FamiliarityIntro";
import FamiliarityHypothesis from "./familiarity/FamiliarityHypothesis";
import FamiliarityPrinciples from "./familiarity/FamiliarityPrinciples";

export default function ResearchFamiliarity() {
  return (
    <section
      id="interfaces-con-sentido"
      className="w-full bg-background px-6 py-20 text-primary md:px-12 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <FamiliarityIntro />
        <FamiliarityHypothesis />
        <FamiliarityPrinciples />
      </div>
    </section>
  );
}
