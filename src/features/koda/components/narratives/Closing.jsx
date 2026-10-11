"use client";

import ClosingStart from "./closing/ClosingStart";
import ClosingConnections from "./closing/ClosingConnections";
import ClosingSystem from "./closing/ClosingSystem";
import ClosingUnity from "./closing/ClosingUnity";
import ClosingSummary from "./closing/ClosingSummary";

export default function Closing() {
  return (
    <section
      id="closing"
      className="bg-background text-primary w-full overflow-hidden flex flex-col gap-6 md:gap-10"
    >
      <ClosingStart />
      <ClosingConnections />
      <ClosingSystem />
      <ClosingUnity />
      <ClosingSummary />
    </section>
  );
}
