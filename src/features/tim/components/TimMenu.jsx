"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Menu as MenuIcon, X } from "lucide-react";

const navigationSections = [
  {
    label: "Secciones",
    items: [
      ["Introducción", "#tim-hero"],
    ],
  },
  {
    label: "Explorar",
    items: [
      ["Portafolio Principal", "/"],
      ["Proyecto KODA", "/projects/koda"],
    ],
  },
];

function MenuColumn({ column, closeMenu }) {
  return (
    <div className="flex-1">
      <p className="tim-menu-item mb-4 border-b border-primary/20 pb-4 text-sm font-normal uppercase tracking-tight text-primary/80">
        {column.label}
      </p>
      <ul className="flex flex-col">
        {column.items.map(([label, href], index) => (
          <li key={`${href}-${index}`} className="border-b border-primary/10">
            <Link
              href={href}
              onClick={closeMenu}
              className="tim-menu-item group flex items-center justify-between py-4 text-primary transition-all duration-300 hover:pl-3 hover:text-primary/80"
            >
              <span className="text-xl font-medium md:text-2xl">{label}</span>
              <ArrowUpRight size={18} className="opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TimMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: menuRef });

  const openMenu = contextSafe(() => {
    setIsOpen(true);
    gsap.to(overlayRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 0.8,
      ease: "power4.inOut",
    });
    gsap.fromTo(
      ".tim-menu-item",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.04, ease: "power3.out", delay: 0.3 }
    );
  });

  const closeMenu = contextSafe(() => {
    gsap.to(".tim-menu-item", { y: 30, opacity: 0, duration: 0.4, ease: "power2.in" });
    gsap.to(overlayRef.current, {
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 0.8,
      ease: "power4.inOut",
      delay: 0.2,
      onComplete: () => setIsOpen(false),
    });
  });

  return (
    <nav ref={menuRef} className="z-50" aria-label="Menú de Tim Bergling">
      <button
        type="button"
        onClick={openMenu}
        aria-label="Abrir menú de Tim Bergling"
        className={`fixed right-8 top-8 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-primary/20 bg-background/50 backdrop-blur transition-colors duration-300 hover:bg-primary hover:text-background ${
          isOpen ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <MenuIcon size={24} />
      </button>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 overflow-y-auto bg-background text-primary"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        <header className="absolute right-8 top-8 flex items-center gap-6">
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Cerrar menú de Tim Bergling"
            className="tim-menu-item flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-primary transition-colors duration-300 hover:bg-primary hover:text-background"
          >
            <X size={24} />
          </button>
        </header>

        <div className="flex min-h-screen flex-col gap-16 px-6 pb-24 pt-32 sm:px-8 md:px-12 lg:px-20 xl:flex-row xl:gap-8">
          <div className="mt-20 flex w-full flex-col justify-end xl:mt-0 xl:w-1/3">
            <p className="tim-menu-item mb-2 text-xs font-semibold uppercase tracking-widest text-primary/60">
              Proyecto Especial
            </p>
            <h2 className="tim-menu-item text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Tim Bergling
            </h2>
            <p className="tim-menu-item mt-3 max-w-sm text-sm text-primary/70">
              Un tributo visual e interactivo a la historia y genialidad de Avicii.
            </p>
            <div className="tim-menu-item mt-8">
              <Link
                href="/"
                onClick={closeMenu}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary hover:text-primary/70 transition-colors"
              >
                Volver al Portafolio
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="flex w-full flex-col gap-12 md:flex-row md:gap-10 xl:w-2/3 xl:gap-12">
            {navigationSections.map((column) => (
              <MenuColumn key={column.label} column={column} closeMenu={closeMenu} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
