"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import MCardProject from "../molecules/mCardProject";

export default function OProject({ data }) {
    const containerRef = useRef(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const contentProjects = containerRef.current;
        if (!contentProjects) return;

        contentProjects.setAttribute("tabindex", "-1");

        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.60) {
                    setActive(true);
                    contentProjects.focus({ preventScroll: true });
                } else {
                    setActive(false);
                }
            });
        },
            { threshold: [0.60] }
        );

        obs.observe(contentProjects);

        function onWheel(e) {
            if (!active) return;

            const contentProjects = containerRef.current;
            const canScrollY = contentProjects.scrollHeight > contentProjects.clientHeight + 1;

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
            className="m-10 rounded-2xl p-6 overflow-hidden overscroll-contain h-[80vh] scrollProject focus:outline-none"
        >
            {data.map((project, i) => (
                <motion.article
                    key={project.id}
                    className="my-10 mx-auto w-[80%] flex gap-10 bg-[#181818] rounded-4xl border border-slate-600/20 ring-1 ring-slate-700/6 p-10"
                    initial="hidden"
                    animate={active ? "visible" : "hidden"}
                    custom={i}
                    variants={{
                        hidden: { opacity: 0, y: 40, scale: 0.95 },
                        visible: (i) => ({
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                                duration: 0.5,
                                delay: 0.15,
                                ease: "easeOut",
                            },
                        })
                    }}
                >
                    <MCardProject data={project} />
                </motion.article>
            ))}
        </div>
    );
}



