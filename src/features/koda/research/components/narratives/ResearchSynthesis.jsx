"use client";

import SynthesisStart from "./synthesis/SynthesisStart";
import SynthesisPrinciples from "./synthesis/SynthesisPrinciples";
import SynthesisNavigation from "./synthesis/SynthesisNavigation";

export default function ResearchSynthesis() {
  return (
    <section
      id="sintesis"
      className="w-full bg-primary/5 px-6 py-20 text-primary md:px-12 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SynthesisStart />
        <SynthesisPrinciples />
        <SynthesisNavigation />
      </div>
    </section>
  );
}
