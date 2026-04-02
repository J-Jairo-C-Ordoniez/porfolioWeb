"use client";

import data from "../../../../data/home/Project";
import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import MenuProject from "../ui/MenuProject";
import CardProject from "../ui/CardProject";
import Error404 from "../ui/Error404";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const [activeMenu, setActiveMenu] = useState(data.menu[0].status || false);
  const [projectsOptions, setProjectsOptions] = useState(data.items[activeMenu] || false);
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    setProjectsOptions(data.items[activeMenu] || false);
  }, [activeMenu, data.items]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-header", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });

      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          y: 60,
          opacity: 0,
          duration: 1.5,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, [projectsOptions]);

  return (
    <section
      ref={containerRef}
      id={data.id}
      className="relative min-h-[calc(100vh-100px)] overflow-x-hidden flex justify-center"
    >
      <div className="container mx-auto py-10 px-4">
        <header className="project-header mb-10 flex flex-col">
          <h3 className="text-xl font-medium text-primary tracking-wider uppercase pb-4 pl-2 border-b border-primary/10">
            {data.title}
          </h3>

          <MenuProject
            data={data.menu}
            setStateMenu={setActiveMenu}
            stateMenu={activeMenu}
          />
        </header>

        {projectsOptions ? (
          <div
            ref={gridRef}
            className="grid grid-cols-1 gap-x-12 gap-y-24 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10 xl:gap-y-16"
          >
            {projectsOptions.map((project) => (
              <CardProject key={project.id} data={project} />
            ))}
          </div>
        ) : (
          <Error404
            title="¡Ups! No hay proyectos aquí"
            description="Estamos trabajando en nuevas ideas y pronto verás aquí proyectos increíbles. Mantente atento."
            isPage={false}
          />
        )}
      </div>
    </section>
  );
}
