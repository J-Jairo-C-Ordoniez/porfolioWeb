"use client";

import { ReactLenis } from "lenis/react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ALoader from "../atoms/Loader";

export default function MotionLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoading && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 }
      );
    }
  }, [isLoading]);

  return (
    <ReactLenis root>
      {isLoading ? (
        <ALoader />
      ) : (
        <div ref={contentRef} className="w-full">
          {children}
        </div>
      )}
    </ReactLenis>
  );
}
