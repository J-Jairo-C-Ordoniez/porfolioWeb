"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, X, Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HISTORY_LINKS = [
  { id: "01", label: "Construir", href: "/#build" },
  { id: "02", label: "Cuestionar", href: "/#question" },
  { id: "03", label: "Comprender", href: "/#understand" },
  { id: "04", label: "Decidir", href: "/#decide" },
  { id: "05", label: "Construir con sentido", href: "/#build-meaning" },
  { id: "06", label: "Lo que sigue", href: "/#next" },
];

const PROJECT_LINKS = [
  { id: "01", label: "KODA", href: "/projects/koda" },
  { id: "02", label: "DreamLabs", href: "/projects/dreamlabs" },
  { id: "03", label: "BloodyYue", href: "/projects/bloodyyue" },
  { id: "04", label: "Focusfy", href: "/projects/focusfy" },
  { id: "05", label: "TIM", href: "/projects/tim" },
];

export default function GlobalMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    if (isOpen) {
      closeMenu();
    }
  }, [pathname]);

  const { contextSafe } = useGSAP({ scope: menuRef });

  const openMenu = contextSafe(() => {
    setIsOpen(true);
    gsap.to(overlayRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 0.8,
      ease: "power4.inOut",
    });
    gsap.fromTo(
      ".menu-item",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: "power3.out", delay: 0.4 }
    );
  });

  const closeMenu = contextSafe(() => {
    gsap.to(".menu-item", {
      y: 30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    });
    gsap.to(overlayRef.current, {
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 0.8,
      ease: "power4.inOut",
      delay: 0.2,
      onComplete: () => setIsOpen(false),
    });
  });

  return (
    <div ref={menuRef} className="z-50">
      {/* Botón flotante global */}
      <button
        onClick={openMenu}
        className={`fixed top-8 right-8 z-[60] w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center bg-background/50 backdrop-blur hover:bg-primary hover:text-background transition-colors duration-300 ${isOpen ? "pointer-events-none opacity-0" : "opacity-100"}`}
        aria-label="Abrir Menú"
      >
        <MenuIcon size={24} />
      </button>

      {/* Overlay del Menú */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[70] bg-background text-primary overflow-y-auto"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        {/* Header del overlay */}
        <div className="absolute top-8 right-8 flex items-center gap-6">
          <button
            onClick={closeMenu}
            className="w-14 h-14 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-background transition-colors duration-300"
            aria-label="Cerrar Menú"
          >
            <X size={24} />
          </button>
        </div>

        <div className="min-h-screen flex flex-col lg:flex-row px-[8vw] py-24 pt-32 gap-16 lg:gap-8">
          
          {/* Lado Izquierdo: Título y Contacto */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between">
            <h2 className="menu-item text-primary font-bold text-xl md:text-2xl uppercase tracking-widest">
              Menu
            </h2>

            <div className="mt-16 lg:mt-0">
              <p className="menu-item text-primary/40 text-sm font-semibold uppercase tracking-widest mb-6">
                Contacto
              </p>
              <a href="mailto:hola@ejemplo.com" className="menu-item text-2xl md:text-3xl font-medium flex items-center gap-4 hover:opacity-70 transition-opacity">
                Hablemos <ArrowUpRight size={28} />
              </a>
            </div>
          </div>

          {/* Lado Derecho: Links estructurados */}
          <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-16 md:gap-24">
            
            {/* Columna Historia */}
            <div className="flex-1">
              <p className="menu-item text-primary/40 text-sm font-semibold uppercase tracking-widest border-b border-primary/20 pb-4 mb-6">
                Historia
              </p>
              <ul className="flex flex-col">
                {HISTORY_LINKS.map((link, idx) => (
                  <li key={idx} className="border-b border-primary/10">
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="menu-item group flex items-center justify-between py-5 hover:pl-4 transition-all duration-300"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="text-primary/40 text-xs font-semibold tracking-widest">{link.id}.</span>
                        <span className="text-2xl md:text-3xl font-medium">{link.label}</span>
                      </div>
                      <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna Proyectos */}
            <div className="flex-1">
              <p className="menu-item text-primary/40 text-sm font-semibold uppercase tracking-widest border-b border-primary/20 pb-4 mb-6">
                Proyectos
              </p>
              <ul className="flex flex-col">
                {PROJECT_LINKS.map((link, idx) => (
                  <li key={idx} className="border-b border-primary/10">
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="menu-item group flex items-center justify-between py-5 hover:pl-4 transition-all duration-300"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="text-primary/40 text-xs font-semibold tracking-widest">{link.id}.</span>
                        <span className="text-2xl md:text-3xl font-medium">{link.label}</span>
                      </div>
                      <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
