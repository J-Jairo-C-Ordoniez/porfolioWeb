"use client";

import ExperienceStart from "./experience/ExperienceStart";
import ExperienceFlow from "./experience/ExperienceFlow";
import ExperienceTurn from "./experience/ExperienceTurn";
import ExperienceClarity from "./experience/ExperienceClarity";
import ExperienceConclusion from "./experience/ExperienceConclusion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-background text-primary w-full overflow-hidden flex flex-col gap-6 md:gap-10"
    >
      <ExperienceStart />
      <ExperienceFlow />
      <ExperienceTurn />
      <ExperienceClarity />
      <ExperienceConclusion />
    </section>
  );
}
