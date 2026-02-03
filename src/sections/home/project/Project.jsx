"use client";

import { useEffect, useState, useRef } from "react";

import { ATitleSection } from "../../../components/atoms/Title";
import { MMenuProject } from "../../../components/molecules/MenuList";
import OProject from "../../../components/organisms/Project";
import MError404 from "../../../components/molecules/Error404";

export default function SProject({ data }) {
  const [activeMenu, setActiveMenu] = useState(data.menu[0].status || false);
  const [projectsOptions, setProjectsOptions] = useState(
    data.items[activeMenu] || false,
  );
  const containerRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const contentProjects = containerRef.current;
    if (!contentProjects) return;

    contentProjects.setAttribute("tabindex", "-1");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            setActive(true);
            contentProjects.focus({ preventScroll: true });
          } else {
            setActive(false);
          }
        });
      },
      { threshold: [0.6] },
    );

    obs.observe(contentProjects);

    function onWheel(e) {
      if (!active) return;

      const contentProjects = containerRef.current;
      const canScrollY =
        contentProjects.scrollHeight > contentProjects.clientHeight + 1;

      if (!canScrollY) return;

      const atTop = contentProjects.scrollTop === 0;
      const atBottom =
        contentProjects.scrollTop + contentProjects.clientHeight >=
        contentProjects.scrollHeight;

      if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
        return;
      }

      e.preventDefault();
      contentProjects.scrollTop += e.deltaY;
    }

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      obs.disconnect();
      window.removeEventListener("wheel", onWheel);
    };
  }, [active]);

  useEffect(() => {
    setProjectsOptions(data.items[activeMenu] || false);
  }, [activeMenu]);

  return (
    <section
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
