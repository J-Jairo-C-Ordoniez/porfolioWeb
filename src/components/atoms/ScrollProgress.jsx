"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgressBar() {
    const progressRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(progressRef.current, {
                scaleX: 1,
                transformOrigin: "left",
                ease: "none",
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.3,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/30 z-50">
            <div
                ref={progressRef}
                className="h-full w-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500"
                style={{ scaleX: 0 }}
            />
        </div>
    );
}
