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
      ["Investigación", "#research"],
      ["Definición", "#findings"],
      ["Ideación", "#ideation"],
    ],
  },
];

function MenuColumn({ column, closeMenu }) {
  return (
    <div className="flex-1">
      <p className="tim-menu-item mb-4 border-b border-background/20 pb-4 text-sm font-normal uppercase tracking-tight text-background/80">
        {column.label}
      </p>
      <ul className="flex flex-col">
        {column.items.map(([label, href], index) => (
          <li key={`${href}-${index}`} className="border-b border-background/10">
            <Link
              href={href}
              onClick={closeMenu}
              className="tim-menu-item group flex items-center justify-between py-4 text-background transition-all duration-300 hover:pl-3 hover:text-background/80"
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
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.fromTo(
      ".tim-menu-item",
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, stagger: 0.03, ease: "power2.out", delay: 0.15 }
    );
  });

  const closeMenu = contextSafe(() => {
    gsap.to(".tim-menu-item", { y: 20, opacity: 0, duration: 0.25, ease: "power2.in" });
    gsap.to(overlayRef.current, {
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 0.35,
      ease: "power3.inOut",
      onComplete: () => setIsOpen(false),
    });
  });

  return (
    <nav ref={menuRef} className="z-50" aria-label="Menú de TIM">
      <button
        type="button"
        onClick={openMenu}
        aria-label="Abrir menú de TIM"
        className={`fixed right-8 top-8 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-background/20 bg-primary/70 text-background backdrop-blur transition-colors duration-300 hover:bg-background hover:text-primary ${
          isOpen ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <MenuIcon size={24} />
      </button>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 overflow-y-auto bg-primary text-background"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        <header className="absolute right-8 top-8 flex items-center gap-6">
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Cerrar menú de TIM"
            className="tim-menu-item cursor-pointer flex h-14 w-14 items-center justify-center rounded-full border border-background text-background transition-colors duration-300 hover:bg-background hover:text-primary"
          >
            <X size={24} />
          </button>
        </header>

        <div className="flex min-h-screen flex-col gap-16 px-6 pb-24 pt-32 sm:px-8 md:px-12 lg:px-20 xl:flex-row xl:gap-8">
          <div className="mt-20 flex w-full flex-col justify-end xl:mt-0 xl:w-1/4">
            <p className="tim-menu-item mb-4 text-sm font-normal uppercase tracking-tight text-background/80">
              Caso de estudio
            </p>
            <Link
              href="https://tim-azure.vercel.app/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="tim-menu-item text-2xl font-medium text-background transition-all hover:text-background/80 md:text-3xl"
            >
              Explorar TIM
            </Link>
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
