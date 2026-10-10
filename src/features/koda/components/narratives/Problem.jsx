"use client";

import ProblemStart from "./problem/ProblemStart";
import ProblemGrid from "./problem/ProblemGrid";
import ProblemConclusion from "./problem/ProblemConclusion";

export default function Problem() {
  return (
    <section 
      id="the-problem" 
      className="bg-primary/5 text-primary w-full overflow-hidden flex flex-col gap-10 md:gap-20"
    >
      <ProblemStart />
      <ProblemGrid />
      <ProblemConclusion />
    </section>
  );
}
