"use client";

import DecideIntro from "./decide/DecideIntro";
import DecideCards from "./decide/DecideCards";

export default function Decide() {
  return (
    <section className="flex w-full flex-col gap-6 overflow-hidden bg-primary text-background md:gap-10">
      <DecideIntro />
      <DecideCards />
    </section>
  );
}
