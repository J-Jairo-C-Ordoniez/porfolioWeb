"use client";

import { usePathname } from "next/navigation";
import KodaMenu from "./KodaMenu";
import ResearchMenu from "../research/components/ResearchMenu";

export default function KodaNavWrapper() {
  const pathname = usePathname();

  if (pathname?.startsWith("/projects/koda/research")) {
    return <ResearchMenu />;
  }

  return <KodaMenu />;
}
