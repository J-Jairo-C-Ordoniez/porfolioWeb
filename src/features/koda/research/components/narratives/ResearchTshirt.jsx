"use client";

import TshirtStart from "./tshirt/TshirtStart";
import TshirtObservation from "./tshirt/TshirtObservation";
import TshirtConclusion from "./tshirt/TshirtConclusion";

export default function ResearchTshirt() {
  return (
    <section
      id="tshirt"
      className="w-full bg-background text-primary overflow-hidden flex flex-col gap-6 md:gap-10"
    >
      <TshirtStart />
      <TshirtObservation />
      <TshirtConclusion />
    </section>
  );
}
