"use client";

import BugTopBar from "./BugTopBar";
import BugHero from "./BugHero";
import BugProblem from "./BugProblem";
import BugInvestigation from "./BugInvestigation";
import BugRootCause from "./BugRootCause";
import BugSolution from "./BugSolution";
import BugRefactorDecisions from "./BugRefactorDecisions";
import BugLearnings from "./BugLearnings";
import BugClosing from "./BugClosing";

export default function Main() {
  return (
    <main className="overflow-x-clip bg-primary text-background">
      <BugTopBar />
      <BugHero />
      <BugProblem />
      <BugInvestigation />
      <BugRootCause />
      <BugSolution />
      <BugRefactorDecisions />
      <BugLearnings />
      <BugClosing />
    </main>
  );
}
