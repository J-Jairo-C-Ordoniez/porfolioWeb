"use client";

import DevelopmentStart from "./development/DevelopmentStart";
import DevelopmentOperations from "./development/DevelopmentOperations";
import DevelopmentArchitecture from "./development/DevelopmentArchitecture";
import DevelopmentConclusion from "./development/DevelopmentConclusion";

export default function Development() {
  return (
    <section
      id="development"
      className="bg-background text-primary w-full overflow-hidden flex flex-col gap-6 md:gap-10"
    >
      <DevelopmentStart />
      <DevelopmentOperations />
      <DevelopmentArchitecture />
      <DevelopmentConclusion />
    </section>
  );
}
