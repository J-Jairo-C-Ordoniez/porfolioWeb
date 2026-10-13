"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function TshirtVisual() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".tshirt-card",
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          ".tshirt-photo",
          { scale: 1.08 },
          { scale: 1, duration: 1.2, ease: "power2.out" },
          "<"
        )
        .fromTo(
          ".tshirt-content-item",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  return (
    <article
      ref={containerRef}
      className="tshirt-card my-12 overflow-hidden rounded-[2rem] bg-background border border-primary/10 md:rounded-[2.5rem]"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Visual asset */}
        <div className="relative h-[400px] w-full overflow-hidden bg-primary/5 sm:h-[500px] lg:h-auto lg:w-1/2">
          <Image
            src="/koda/research/tiendaYCamiseta.jpg"
            alt="La tienda y la camiseta - Recurso visual del caso de estudio"
            fill
            className="tshirt-photo object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute bottom-6 left-6 rounded-full bg-background/80 backdrop-blur px-4 py-2 text-xs font-mono uppercase tracking-wider text-primary">
            Recurso Visual · La tienda y la camiseta
          </div>
        </div>

        {/* Narrative text */}
        <div className="flex w-full flex-col justify-center p-8 sm:p-12 lg:w-1/2 lg:p-16">
          <span className="tshirt-content-item text-xs font-mono uppercase tracking-widest text-primary/60">
            Una interacción cotidiana
          </span>

          <p className="tshirt-content-item mt-4 text-xl font-light leading-relaxed text-primary/90 md:text-2xl">
            Entré a una tienda de ropa porque había visto una camiseta que me gustaba. Me la probé, la compré y, en medio de esa experiencia tan cotidiana, terminé haciendo algo que cambiaría mi manera de entender el software:
          </p>

          <p className="tshirt-content-item mt-4 text-2xl font-medium tracking-tight text-primary md:text-3xl">
            Preguntarle a alguien del negocio cómo funcionaba todo aquello que yo no podía ver como cliente.
          </p>

          <div className="tshirt-content-item mt-8 border-t border-primary/10 pt-6">
            <p className="text-base text-primary/70 leading-relaxed md:text-lg">
              En ese momento, yo quería crear productos digitales para negocios locales. Quería practicar lo que estaba aprendiendo, ganar experiencia y comunicar mejor mis ideas. Al conocer más el funcionamiento, vi una oportunidad: el inventario y las ventas parecían desconectados. Había un computador, pero no formaba parte activa de la operación.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
