"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ATitleBold } from "../atoms/Title";
import APicture from "../atoms/Picture";
import AText from "../atoms/Text";
import { ABtn } from "../atoms/Btn";

gsap.registerPlugin(ScrollTrigger);

export default function MGalleryDoc({ data }) {
  const [open, setOpen] = useState(false);
  const figureRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      figureRef.current,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        delay: 0.08,
        scrollTrigger: {
          trigger: figureRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <>
      <figure
        ref={figureRef}
        className="rounded-2xl border border-slate-600/20 bg-[#1A2534] ring-1 ring-slate-700/6 p-4 px-10 shadow-inner opacity-0"
      >
        <button
          onClick={() => setOpen(true)}
          className="mb-4 w-full h-60 flex items-center justify-center"
        >
          <APicture src={data.src} alt={data.title} size="400" />
        </button>

        <AText data={data.description} textAlign="center" />
      </figure>
      {open && (
        <dialog
          open={open}
          className="animate-fadeIn fixed z-10000 h-[100vh] w-[100vw] max-w-md rounded-2xl border border-slate-600/20 bg-[#181818] p-6"
        >
          <figure className="rounded-full border border-slate-500 bg-zinc-800 p-2 text-slate-500">
            <APicture src={data.src} alt={data.title} size="187" />
          </figure>
          <ATitleBold data={data.title} color="#e0e0e0" fontSize="1.2rem" />

          <form method="dialog" className="mt-6 flex justify-end">
            <button
              // Use a simple button instead of ABtn to handle onClick easily without issues, 
              // or ensure ABtn handles onClick correctly. ABtn seems to take data.
              // Reusing ABtn as in original code.
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
              }}
            >
              <ABtn data={{ icon: "close", text: "Cerrar" }} />
            </button>
          </form>
        </dialog>
      )}
    </>
  );
}
