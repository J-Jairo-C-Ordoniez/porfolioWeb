"use client";

import { ReactLenis } from "lenis/react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";


export default function MotionLayout({ children }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 1.2, 
          ease: "power2.out",
          clearProps: "all" 
        }
      );
    }
  }, []);

  return (
    <ReactLenis root options={{ 
      lerp: 0.08, 
      duration: 1.2, 
      smoothWheel: true 
    }}>
      <div ref={contentRef} className="relative w-full overflow-x-hidden">
        {children}
      </div>
    </ReactLenis>
  );
}
