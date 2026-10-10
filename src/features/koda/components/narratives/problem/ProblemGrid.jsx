"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ProblemGrid() {
  const containerRef = useRef(null);
  
  useGSAP(() => {
     gsap.fromTo(".p-card", 
       { autoAlpha: 0, y: 50 },
       { 
         autoAlpha: 1, 
         y: 0, 
         duration: 0.8, 
         stagger: 0.15, 
         ease: "power2.out", 
         scrollTrigger: { 
           trigger: containerRef.current, 
           start: "top 75%",
           toggleActions: "play none none reverse"
         } 
       }
     );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full px-[8vw] flex flex-col gap-6 md:gap-8">
      
      {/* Card 1: Dueño (Full width, text left, img right) */}
      <div className="p-card opacity-0 will-change-transform bg-primary/5 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center min-h-[400px]">
        <div className="w-full md:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
          <p className="text-xl md:text-2xl text-primary/80 font-medium">
            El dueño <br/>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 block text-primary leading-tight">
              necesitaba controlar el negocio.
            </span>
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-full relative min-h-[300px] md:min-h-[400px]">
          <Image src="/libreta.jpeg" alt="Controlar negocio" fill className="object-cover" />
        </div>
      </div>

      {/* Card 2: Empleados (Full width, img left, text right) */}
      <div className="p-card opacity-0 will-change-transform bg-primary/5 rounded-[2.5rem] overflow-hidden flex flex-col-reverse md:flex-row items-center min-h-[400px]">
        <div className="w-full md:w-1/2 h-[300px] md:h-full relative min-h-[300px] md:min-h-[400px]">
          <Image src="/libreta.jpeg" alt="Vender rápido" fill className="object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
          <p className="text-xl md:text-2xl text-primary/80 font-medium">
            Los empleados <br/>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 block text-primary leading-tight">
              necesitaban vender rápido.
            </span>
          </p>
        </div>
      </div>

      {/* Cards 3 & 4: Inventario y Clientes (2 columnas tipo Apple) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* Card 3 */}
        <div className="p-card opacity-0 will-change-transform bg-primary/5 rounded-[2.5rem] overflow-hidden flex flex-col min-h-[450px]">
          <div className="p-10 lg:p-12 flex flex-col text-center">
            <p className="text-lg md:text-xl text-primary/80 font-medium">
              El inventario <br/>
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 block text-primary leading-tight">
                necesitaba mantenerse actualizado.
              </span>
            </p>
          </div>
          <div className="w-full relative flex-grow min-h-[250px]">
            <Image src="/libreta.jpeg" alt="Inventario actualizado" fill className="object-cover" />
          </div>
        </div>

        {/* Card 4 */}
        <div className="p-card opacity-0 will-change-transform bg-primary/5 rounded-[2.5rem] overflow-hidden flex flex-col min-h-[450px]">
          <div className="p-10 lg:p-12 flex flex-col text-center">
            <p className="text-lg md:text-xl text-primary/80 font-medium">
              Los clientes <br/>
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 block text-primary leading-tight">
                necesitaban una experiencia sencilla.
              </span>
            </p>
          </div>
          <div className="w-full relative flex-grow min-h-[250px]">
            <Image src="/libreta.jpeg" alt="Experiencia sencilla" fill className="object-cover" />
          </div>
        </div>

      </div>

      {/* Card 5: Sistema (Ancho completo con lista y más texto) */}
      <div className="p-card opacity-0 will-change-transform bg-primary/5 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row items-center mt-2">
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
          <p className="text-xl md:text-2xl text-primary/80 font-medium mb-8">
            Toda esa información <br/>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 block text-primary leading-tight">
              tenía que relacionarse entre sí.
            </span>
          </p>
          
          <p className="text-lg md:text-xl text-primary/70 font-light mb-6">
            Porque una venta no termina cuando alguien paga:
          </p>
          
          <ul className="flex flex-col gap-3">
            {[
              "También cambia el inventario.",
              "Puede generar una deuda.",
              "Puede involucrar a un empleado.",
              "Y puede cambiar lo que aparece en el catálogo."
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-4 text-base md:text-lg text-primary/80 font-medium">
                <span className="block mt-2.5 w-2 h-2 rounded-full bg-primary/40 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w-full lg:w-1/2 h-[400px] lg:h-full relative lg:min-h-[650px]">
          <Image src="/libreta.jpeg" alt="Sistema entrelazado" fill className="object-cover" />
        </div>
      </div>

    </div>
  );
}
