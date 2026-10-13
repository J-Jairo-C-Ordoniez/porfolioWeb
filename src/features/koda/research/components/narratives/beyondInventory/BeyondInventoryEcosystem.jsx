"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers, MessageSquare, ArrowRightLeft, Users, RefreshCw } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const ecosystemItems = [
  {
    icon: Layers,
    title: "Stock y Disponibilidad",
    description: "Saber exactamente qué prendas quedan en bodega, qué variantes faltan y qué debe reponerse sin depender de la memoria.",
  },
  {
    icon: ArrowRightLeft,
    title: "Ventas y Deudas",
    description: "Una venta puede ser de contado o fiada. Si genera saldo pendiente, alguien debe recordarlo y registrar cada abono.",
  },
  {
    icon: Users,
    title: "Relación con Clientes",
    description: "Conocer quién compra habitualmente, qué preferencias tiene y cómo se gestionan sus pedidos especiales.",
  },
  {
    icon: MessageSquare,
    title: "Canales Informales (WhatsApp)",
    description: "Las fotos del catálogo se comparten por chat; las ventas ocurren en paralelo dentro y fuera del local.",
  },
  {
    icon: RefreshCw,
    title: "Operaciones Diarias",
    description: "Tareas y responsabilidades compartidas entre dueños y vendedores que deben coordinarse sin fricción.",
  },
];

export default function BeyondInventoryEcosystem() {
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
        ".eco-card",
        { autoAlpha: 0, y: 35 },
        { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out" }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="my-14">
      <div className="mb-8">
        <p className="text-sm font-mono uppercase tracking-widest text-primary/60">
          El mapa de relaciones invisibles
        </p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-primary md:text-3xl">
          Piezas que no pueden resolverse por separado
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecosystemItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className={`eco-card rounded-2xl border border-primary/10 bg-background p-6 md:p-8 flex flex-col justify-between ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <Icon size={22} />
                </div>
                <h4 className="text-xl font-semibold tracking-tight text-primary">
                  {item.title}
                </h4>
                <p className="mt-3 text-base font-light text-primary/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
