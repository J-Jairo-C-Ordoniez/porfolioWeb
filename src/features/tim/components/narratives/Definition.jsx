"use client";

import DefinitionStart from "./definition/DefinitionStart";
import DefinitionFragments from "./definition/DefinitionFragments";

export default function Definition() {
  return (
    <section
      id="findings"
      className="flex w-full flex-col gap-10 overflow-hidden bg-primary text-background lg:gap-20"
    >
      <DefinitionStart />
      <DefinitionFragments />
    </section>
  );
}
