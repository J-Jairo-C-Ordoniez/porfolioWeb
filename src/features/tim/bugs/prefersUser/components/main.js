"use client";

import BugTopBar from "./BugTopBar";
import BugHero from "./BugHero";
import BugHook from "./BugHook";
import BugAct1 from "./BugAct1";
import BugAct2 from "./BugAct2";
import BugAct3 from "./BugAct3";
import BugAct4 from "./BugAct4";
import BugAct5 from "./BugAct5";
import BugAct6 from "./BugAct6";
import BugClosing from "./BugClosing";

export default function Main() {
  return (
    <main className="overflow-x-clip bg-background text-primary">
      <BugTopBar />
      <BugHero />
      <BugHook />
      <BugAct1 />
      <BugAct2 />
      <BugAct3 />
      <BugAct4 />
      <BugAct5 />
      <BugAct6 />
      <BugClosing />
    </main>
  );
}
