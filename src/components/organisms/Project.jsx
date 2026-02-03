"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import MCardProject from "../molecules/CardProject";

export default function OProject({ data }) {
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

  return (
    <div
      ref={containerRef}
      className="scrollProject mt-4 h-[80vh] overflow-hidden overscroll-contain rounded-2xl focus:outline-none"
    >
      {data.map((project, i) => (
        <motion.article
          key={project.id}
          className="mx-auto my-10 flex flex-col items-center justify-between gap-10 rounded-4xl border border-slate-600/20 bg-[#1A2534] py-10 px-6 ring-1 ring-slate-700/6 w-full sm:w-[98%] sm:flex-col lg:w-[96%] lg:flex-row xl:w-[90%]"
          initial="hidden"
          animate={active ? "visible" : "hidden"}
          custom={i}
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.95 },
            visible: () => ({
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.5,
                delay: 0.15,
                ease: "easeOut",
              },
            }),
          }}
        >
          <MCardProject data={project} />
        </motion.article>
      ))}
    </div>
  );
}
