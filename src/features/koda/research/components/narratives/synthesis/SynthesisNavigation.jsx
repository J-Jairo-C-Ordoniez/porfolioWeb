"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowLeft } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function SynthesisNavigation() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".synth-nav-box",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="synth-nav-box pt-12 pb-6 border-t border-primary/10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary/60">
            Continuar la exploración
          </span>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-primary">
            Siguiente paso: El problema sistémico
          </h3>
          <p className="mt-2 text-base text-primary/70 font-light max-w-xl">
            Descubre cómo esta investigación se transformó en la definición del problema, los actores del negocio y las decisiones visuales en KODA.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/projects/koda"
            className="group inline-flex items-center gap-3 rounded-full border border-primary/20 bg-background px-6 py-3.5 text-base font-medium text-primary transition-colors hover:border-primary hover:bg-primary hover:text-background"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            <span>Volver a KODA</span>
          </Link>

          <Link
            href="/projects/koda#the-problem"
            className="group inline-flex items-center gap-3 rounded-full border border-primary bg-primary px-6 py-3.5 text-base font-medium text-background transition-colors hover:bg-primary/90"
          >
            <span>Ver el problema en KODA</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
