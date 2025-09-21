"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CardProject from "../molecules/CardProject";
import WithoutProjects from "../molecules/WithoutProjects";

export default function Projects({ projects }) {
    const containerRef = useRef(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const contentProjects = containerRef.current;
        if (!contentProjects) return;

        contentProjects.setAttribute("tabindex", "-1");

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.40) {
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

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: i * 0.15,
                ease: "easeOut",
            },
        }),
    };

    return (
        <div
            ref={containerRef}
            className="m-10 rounded-2xl p-6 overflow-hidden overscroll-contain h-[80vh] scrollProject focus:outline-none"
        >
            {projects.length <= 0 ? (
                <WithoutProjects />
            ) : (
                projects.map((project, i) => (
                    <motion.section
                        key={project.id}
                        className="my-10 mx-auto w-[80%]"
                        initial="hidden"
                        animate={active ? "visible" : "hidden"}
                        custom={i}
                        variants={cardVariants}
                    >
                        <CardProject project={project} />
                    </motion.section>
                ))
            )}
        </div>
    );
}
