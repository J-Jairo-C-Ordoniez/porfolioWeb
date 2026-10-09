"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Menu as MenuIcon, X } from "lucide-react";

const columns = [
  {
    label: "Historia",
    items: [
      ["El negocio", "#business"],
      ["Cuando dejó de ser suficiente", "#when-it-was-not-enough"],
      ["El problema", "#the-problem"],
      ["La pregunta", "#the-question"],
      ["El negocio", "#business-in-use"],
      ["Construir el sistema", "#build-the-system"],
      ["Lo que es KODA", "#what-is-koda"],
    ],
  },
  {
    label: "Evidencias",
    items: [
      ["Investigación", "#research"],
      ["Sistema y actores", "#system-and-actors"],
      ["Decisiones UX/UI", "#ux-ui-decisions"],
    ],
  },
  {
    label: "Desarrollo",
    items: [
      ["Arquitectura", "#architecture"],
      ["Tecnologías", "#technologies"],
      ["Implementación", "#implementation"],
    ],
    secondary: {
      label: "Metodología",
      items: [
        ["Proceso", "#proceso"],
        ["Design Thinking", "#design-thinking"],
        ["Evolución", "#evolucion"],
      ],
    },
  },
];

function MenuColumn({ column, closeMenu }) {
  return (
    <div className="flex-1">
      <p className="koda-menu-item mb-4 border-b border-primary/20 pb-4 text-sm font-normal uppercase tracking-tight text-primary/80">
        {column.label}
      </p>
      <ul className="flex flex-col">
        {column.items.map(([label, href], index) => (
          <li key={`${href}-${index}`} className="border-b border-primary/10">
            <Link
              href={href}
              onClick={closeMenu}
              className="koda-menu-item group flex items-center justify-between py-4 text-primary transition-all duration-300 hover:pl-3 hover:text-primary/80"
            >
              <span className="text-xl font-medium md:text-2xl">{label}</span>
              <ArrowUpRight size={18} className="opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>

      {column.secondary && (
        <div className="mt-10">
          <p className="koda-menu-item mb-4 border-b border-primary/20 pb-4 text-sm font-normal uppercase tracking-tight text-primary/80">
            {column.secondary.label}
          </p>
          <ul className="flex flex-col">
            {column.secondary.items.map(([label, href]) => (
              <li key={href} className="border-b border-primary/10">
                <Link
                  href={href}
                  onClick={closeMenu}
                  className="koda-menu-item group flex items-center justify-between py-4 text-primary transition-all duration-300 hover:pl-3 hover:text-primary/80"
                >
                  <span className="text-xl font-medium md:text-2xl">{label}</span>
                  <ArrowUpRight size={18} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function KodaMenu() {
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
      ".koda-menu-item",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.04, ease: "power3.out", delay: 0.3 }
    );
  });

  const closeMenu = contextSafe(() => {
    gsap.to(".koda-menu-item", { y: 30, opacity: 0, duration: 0.4, ease: "power2.in" });
    gsap.to(overlayRef.current, {
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 0.8,
      ease: "power4.inOut",
      delay: 0.2,
      onComplete: () => setIsOpen(false),
    });
  });

  return (
    <nav ref={menuRef} className="z-50" aria-label="Menú de KODA">
      <button
        type="button"
        onClick={openMenu}
        aria-label="Abrir menú de KODA"
        className={`fixed right-8 top-8 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-background/50 backdrop-blur transition-colors duration-300 hover:bg-primary hover:text-background ${
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
            aria-label="Cerrar menú de KODA"
            className="koda-menu-item flex h-14 w-14 items-center justify-center rounded-full border border-primary transition-colors duration-300 hover:bg-primary hover:text-background"
          >
            <X size={24} />
          </button>
        </header>

        <div className="flex min-h-screen flex-col gap-16 px-6 pb-24 pt-32 sm:px-8 md:px-12 lg:px-20 xl:flex-row xl:gap-8">
          <div className="mt-20 flex w-full flex-col justify-end xl:mt-0 xl:w-1/4">
            <p className="koda-menu-item mb-4 text-sm font-normal uppercase tracking-tight text-primary/80">Caso de estudio</p>
            <a
              href="https://kodaebon.vercel.app/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="koda-menu-item text-2xl font-medium text-primary transition-all hover:text-primary/80 md:text-3xl"
            >
              Explorar KODA
            </a>
          </div>

          <div className="flex w-full flex-col gap-12 md:flex-row md:gap-10 xl:w-3/4 xl:gap-8">
            {columns.map((column) => (
              <MenuColumn key={column.label} column={column} closeMenu={closeMenu} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
