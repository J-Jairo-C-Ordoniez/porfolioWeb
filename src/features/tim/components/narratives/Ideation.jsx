"use client";

import IdeationStart from "./ideation/IdeationStart";
import IdeationEntry from "./ideation/IdeationEntry";
import IdeationApproach from "./ideation/IdeationApproach";
import IdeationTurn from "./ideation/IdeationTurn";
import IdeationResources from "./ideation/IdeationResources";
import IdeationDirection from "./ideation/IdeationDirection";
import IdeationConclusion from "./ideation/IdeationConclusion";

export default function Ideation() {
  return (
    <section
      id="ideation"
      className="flex w-full flex-col gap-6 overflow-hidden bg-primary text-background md:gap-10"
    >
      <IdeationStart />
      <IdeationEntry />
      <IdeationApproach />
      <IdeationTurn />
      <IdeationResources />
      <IdeationDirection />
      <IdeationConclusion />
    </section>
  );
}
