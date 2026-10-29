"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Menu as MenuIcon, X } from "lucide-react";

const navigationSections = [
  {
    label: "Secciones",
    items: [
      ["Introducción", "#tim-hero"],
      ["Momentos", "#highlights"],
      ["Escuchar", "#listen"],
      ["Investigación", "#research-spaces"],
      ["Hallazgos clave", "#findings"],
    ],
  },
  {
    label: "Explorar",
    items: [
      ["Portafolio Principal", "/"],
      ["Proyecto KODA", "/projects/koda"],
      ["Investigación TIM", "/projects/tim/research"],
    ],
  },
];

function MenuColumn({ column, closeMenu, router }) {
  return (
    <div className="flex-1">
      <p className="tim-menu-item mb-4 border-b border-background/20 pb-4 text-sm font-normal uppercase tracking-tight text-background/80">
        {column.label}
      </p>
      <ul className="flex flex-col">
        {column.items.map(([label, href], index) => {
          const isRoute = href.startsWith("/");
          return (
            <li key={`${href}-${index}`} className="border-b border-background/10">
              <Link
                href={href}
                prefetch={isRoute}
                onMouseEnter={() => isRoute && router?.prefetch(href)}
                onClick={() => closeMenu(isRoute)}
                className="tim-menu-item group flex items-center justify-between py-4 text-background transition-all duration-300 hover:pl-3 hover:text-background/80"
              >
                <span className="text-xl font-medium md:text-2xl">{label}</span>
                <ArrowUpRight size={18} className="opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function TimMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const router = useRouter();
  const { contextSafe } = useGSAP({ scope: menuRef });

  useEffect(() => {
    router.prefetch("/");
    router.prefetch("/projects/koda");
  }, [router]);

  const openMenu = contextSafe(() => {
    setIsOpen(true);
    router.prefetch("/");
    router.prefetch("/projects/koda");

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

  const closeMenu = contextSafe((isRouteTransition = false) => {
    if (isRouteTransition) {
      gsap.to(".tim-menu-item", { opacity: 0, y: 15, duration: 0.15, ease: "power2.in" });
      gsap.to(overlayRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.25,
        ease: "power3.inOut",
        onComplete: () => setIsOpen(false),
      });
      return;
    }

    gsap.to(".tim-menu-item", { y: 20, opacity: 0, duration: 0.25, ease: "power2.in" });
    gsap.to(overlayRef.current, {
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 0.4,
      ease: "power3.inOut",
      onComplete: () => setIsOpen(false),
    });
  });

  return (
    <nav ref={menuRef} className="z-50" aria-label="Menú de Tim Bergling">
      <button
        type="button"
        onClick={openMenu}
        aria-label="Abrir menú de Tim Bergling"
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
            onClick={() => closeMenu(false)}
            aria-label="Cerrar menú de Tim Bergling"
            className="tim-menu-item flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-background text-background transition-colors duration-300 hover:bg-background hover:text-primary"
          >
            <X size={24} />
          </button>
        </header>

        <div className="flex min-h-screen flex-col gap-16 px-6 pb-24 pt-32 sm:px-8 md:px-12 lg:px-20 xl:flex-row xl:gap-8">
          <div className="mt-20 flex w-full flex-col justify-end xl:mt-0 xl:w-1/3">
            <p className="tim-menu-item mb-2 text-xs font-semibold uppercase tracking-widest text-background/60">
              Proyecto Especial
            </p>
            <h2 className="tim-menu-item text-3xl font-bold tracking-tight text-background md:text-4xl">
              Tim Bergling
            </h2>
            <p className="tim-menu-item mt-3 max-w-sm text-sm text-background/70">
              Un tributo visual e interactivo a la historia y genialidad de Avicii.
            </p>
            <div className="tim-menu-item mt-8">
              <Link
                href="/"
                prefetch={true}
                onClick={() => closeMenu(true)}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-background hover:text-background/70 transition-colors"
              >
                Volver al Portafolio
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="flex w-full flex-col gap-12 md:flex-row md:gap-10 xl:w-2/3 xl:gap-12">
            {navigationSections.map((column) => (
              <MenuColumn key={column.label} column={column} closeMenu={closeMenu} router={router} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
