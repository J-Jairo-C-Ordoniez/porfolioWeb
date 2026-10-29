"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, X, Menu as MenuIcon } from "lucide-react";

const HISTORY_LINKS = [
  { id: "01", label: "Construir", href: "/#build" },
  { id: "02", label: "Cuestionar", href: "/#question" },
  { id: "03", label: "Comprender", href: "/#grasp" },
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
  const router = useRouter();
  const { contextSafe } = useGSAP({ scope: menuRef });

  useEffect(() => {
    router.prefetch("/projects/koda");
    router.prefetch("/projects/tim");
  }, [router]);

  const closeMenu = contextSafe((isRouteTransition = false) => {
    if (isRouteTransition) {
      gsap.to(".menu-item", {
        opacity: 0,
        y: 15,
        duration: 0.15,
        ease: "power2.in",
      });
      gsap.to(overlayRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.25,
        ease: "power3.inOut",
        onComplete: () => setIsOpen(false),
      });
      return;
    }

    gsap.to(".menu-item", {
      y: 20,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
    });
    gsap.to(overlayRef.current, {
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 0.4,
      ease: "power3.inOut",
      onComplete: () => setIsOpen(false),
    });
  });

  const handleRouteClick = useCallback(() => {
    closeMenu(true);
  }, [closeMenu]);

  useEffect(() => {
    if (isOpen) {
      closeMenu(true);
    }
  }, [pathname]);

  const openMenu = contextSafe(() => {
    setIsOpen(true);
    router.prefetch("/projects/koda");
    router.prefetch("/projects/tim");

    gsap.to(overlayRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.fromTo(
      ".menu-item",
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, stagger: 0.03, ease: "power2.out", delay: 0.15 }
    );
  });

  if (pathname?.startsWith("/projects/koda") || pathname?.startsWith("/projects/tim")) {
    return null;
  }

  return (
    <nav
      ref={menuRef}
      className="z-50"
    >
      <button
        onClick={openMenu}
        className={`fixed top-8 right-8 z-[60] w-14 h-14 rounded-full cursor-pointer border border-primary/20 flex items-center justify-center bg-background/50 backdrop-blur hover:bg-primary hover:text-background transition-colors duration-300 ${isOpen ? "pointer-events-none opacity-0" : "opacity-100"}`}
        aria-label="Abrir Menú"
      >
        <MenuIcon size={24} />
      </button>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-[70] bg-background text-primary overflow-y-auto"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        <header className="absolute top-8 right-8 flex items-center gap-6">
          <button
            onClick={() => closeMenu(false)}
            className="w-14 h-14 rounded-full border border-primary cursor-pointer flex items-center justify-center hover:bg-primary hover:text-background transition-colors duration-300"
            aria-label="Cerrar Menú"
          >
            <X size={24} />
          </button>
        </header>

        <div className="min-h-screen flex flex-col lg:flex-row px-[8vw] py-24 pt-32 gap-16 lg:gap-8">
          <div className="w-full lg:w-1/3 flex flex-col justify-end mt-[8vw] lg:mt-0">
            <p className="menu-item text-primary/80 text-sm font-normal uppercase tracking-tight mb-4">
              Contacto
            </p>
            <Link
              href="mailto:cordobaojhonjairo21@gmail.com"
              className="menu-item text-2xl md:text-3xl font-medium flex items-center gap-4 text-primary hover:text-primary/80 transition-all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar correo electrónico a Jhon Jairo"
            >
              Hablemos
            </Link>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="flex-1">
              <p className="menu-item text-primary/80 text-sm font-normal uppercase tracking-tight mb-4 border-b border-primary/20 pb-4">
                Historia
              </p>
              <ul className="flex flex-col">
                {HISTORY_LINKS.map((link, idx) => (
                  <li
                    key={idx}
                    className="border-b border-primary/10"
                  >
                    <Link
                      href={link.href}
                      prefetch={true}
                      onClick={() => closeMenu(false)}
                      className="menu-item group flex items-center justify-between py-5 hover:pl-4 duration-300 text-primary hover:text-primary/80 transition-all"
                    >
                      <span className="text-2xl md:text-3xl font-medium">{link.label}</span>
                      <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              <p className="menu-item text-primary/80 text-sm font-normal uppercase tracking-tight mb-4 border-b border-primary/20 pb-4">
                Proyectos
              </p>
              <ul className="flex flex-col">
                {PROJECT_LINKS.map((link, idx) => (
                  <li
                    key={idx}
                    className="border-b border-primary/10"
                  >
                    <Link
                      href={link.href}
                      prefetch={true}
                      onMouseEnter={() => router.prefetch(link.href)}
                      onClick={() => handleRouteClick(link.href)}
                      className="menu-item group flex items-center justify-between py-5 hover:pl-4 duration-300 text-primary hover:text-primary/80 transition-all"
                    >
                      <span className="text-2xl md:text-3xl font-medium">{link.label}</span>
                      <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
