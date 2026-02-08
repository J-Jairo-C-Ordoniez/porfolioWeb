"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ALoader() {
  const spinnerRef = useRef(null);

  useEffect(() => {
    gsap.to(spinnerRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#101828]">
      <div
        ref={spinnerRef}
        className="h-12 w-12 rounded-full border-4 border-gray-600 border-t-white"
      />
    </div>
  );
}
