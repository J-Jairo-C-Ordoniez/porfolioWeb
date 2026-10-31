"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BugTopBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Barra de progreso de lectura sutil en la parte superior */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-background/10">
        <div
          className="h-full bg-accent transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Botón flotante para regresar a TIM */}
      <div className="fixed top-6 left-6 sm:top-8 sm:left-8 z-40">
        <Link
          href="/projects/tim#decide"
          className="group inline-flex items-center gap-2.5 rounded-full border border-background/20 bg-primary/80 px-4 py-2.5 text-sm font-medium text-background backdrop-blur-md transition-all duration-300 hover:border-background/40 hover:bg-background hover:text-primary shadow-lg"
          aria-label="Volver a la sección de decisiones en TIM"
        >
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Volver a TIM</span>
        </Link>
      </div>
    </>
  );
}
