"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ATitleSection } from "../../../components/atoms/Title";
import { MMenuProject } from "../../../components/molecules/MenuList";
import OProject from "../../../components/organisms/Project";
import MError404 from "../../../components/molecules/Error404";

gsap.registerPlugin(ScrollTrigger);

export default function SProject({ data }) {
  const [activeMenu, setActiveMenu] = useState(data.menu[0].status || false);
  const [projectsOptions, setProjectsOptions] = useState(
    data.items[activeMenu] || false,
  );
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    setProjectsOptions(data.items[activeMenu] || false);
  }, [activeMenu]);


  return (
    <section
      ref={containerRef}
      id={data.id}
      className="overflow-x-hidden px-5 py-10 sm:px-8 md:px-12 lg:px-20 xl:px-35"
    >

      <ATitleSection
        data={data.title}
        color="#e0e0e0"
        textAlign="center"
      />

      <MMenuProject
        data={data.menu}
        setStateMenu={setActiveMenu}
        stateMenu={activeMenu}
      />

      {projectsOptions ? (
        <OProject data={projectsOptions} />
      ) : (
        <MError404
          title="¡Ups! No hay proyectos aquí"
          description="Estamos trabajando en nuevas ideas y pronto verás aquí proyectos increíbles. Mantente atento."
        />
      )}
    </section>
  );
}
