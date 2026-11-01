"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BugTopBar() {
  return (
    <div className="fixed right-6 top-6 sm:right-8 sm:top-8 z-50">
      <Link
        href="/projects/tim#decide"
        className="group inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-background/90 px-5 py-3 text-sm font-medium text-primary backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-primary hover:text-background shadow-sm"
        aria-label="Volver a la sección de decisiones en TIM"
      >
        <ArrowLeft
          size={18}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        <span>Volver</span>
      </Link>
    </div>
  );
}
