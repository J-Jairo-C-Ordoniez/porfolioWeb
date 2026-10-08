"use client";

import History from "./narratives/History";
import Question from "./narratives/Question";
import Grasp from "./narratives/Grasp";
import Koda from "./narratives/Koda";
import Decide from "./narratives/Decide";
import DreamLabsProject from "./narratives/DreamLabsProject";
import Build from "./narratives/Build";
import Closing from "./narratives/Closing";

export default function Main() {
  return (
    <main className="main-layout">
      <History />
      <Question />
      <Grasp />
      <Koda />
      <Decide />
      <DreamLabsProject />
      <Build />
      <Closing />
    </main>
  );
}
