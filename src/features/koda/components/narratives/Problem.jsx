"use client";

import ProblemStart from "./problem/ProblemStart";
import ProblemGrid from "./problem/ProblemGrid";
import ProblemConclusion from "./problem/ProblemConclusion";

export default function Problem() {
  return (
    <section 
      id="el-problema" 
      className="bg-primary/5 text-primary w-full overflow-hidden flex flex-col gap-6 md:gap-10"
    >
      <ProblemStart />
      <ProblemGrid />
      <ProblemConclusion />
    </section>
  );
}
