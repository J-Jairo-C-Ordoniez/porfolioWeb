"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { ATitleBold, ATitleSection } from "../atoms/Title";
import MHeroDoc from "../molecules/HeroDoc";
import MSectionDoc from "../molecules/SectionDoc";
import MGalleryDoc from "../molecules/GalleryDoc";
import AText from "../atoms/Text";
import ARed from "../atoms/Red";
import AIcon from "../atoms/Icon";

export default function OHomeProject({ data, setState }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, delay: 0.08, duration: 0.5 }
    );
  }, []);

  return (
    <main className="overflow-hidden px-10 py-5 sm:px-12 md:px-20 lg:flex-row lg:px-32 xl:px-35">
      <header className="container mx-auto px-2 py-10 lg:p-20">
        <MHeroDoc data={data.hero} onClick={() => setState("doc")} />
      </header>

      <section
        id="docs"
        ref={sectionRef}
        className="container mx-auto space-y-5 p-6 opacity-0"
      >
        <ATitleSection data="Arquitectura y Decisiones" />

        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {data.hero.sections.map((section) => (
            <MSectionDoc key={section.id} data={section} />
          ))}
        </div>
      </section>

      <section id="gallery" className="container mx-auto px-6 py-10">
        <ATitleSection data="Galería del proyecto" />

        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {data.hero.gallery.map((item) => (
            <MGalleryDoc key={item.id} data={item} />
          ))}
        </div>
      </section>

      <footer className="container mx-auto px-12 py-16">
        <ATitleBold
          data="¿Quieres ver el proyecto completo?"
          color="#e0e0e0"
          fontSize="text-xl"
          textAlign="center"
        />

        <AText
          data="Accede al demo y al repositorio para ver la implementación completa."
          textAlign="center"
        />

        <ul className="mt-10 flex flex-wrap list-none justify-center gap-4 relative z-10000">
          {data.head.menu.map((link) => (
            <li key={link.id}>
              <ARed href={link.href}>
                <AIcon data={link.icon} />
                <AText data={link.text} textAlign="center" />
              </ARed>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}
