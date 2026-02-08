"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { ATitleBold } from "../atoms/Title";
import AText from "../atoms/Text";
import AIcon from "../atoms/Icon";

export default function MDialog({ data, open, setOpen }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const dialogEl = dialogRef.current;
      if (dialogEl && !dialogEl.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open, setOpen]);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (open) {
      gsap.fromTo(
        dialogRef.current,
        { opacity: 0, scale: 0.8, display: "none" },
        {
          opacity: 1,
          scale: 1,
          display: "block",
          duration: 0.3,
          ease: "back.out(1.7)"
        }
      );
    } else {
      gsap.to(dialogRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          if (dialogRef.current) dialogRef.current.style.display = "none";
        }
      });
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      open={true} // Always keep open attribute to allow GSAP to strict visibility via display/opacity
      className="absolute inset-y-0 mx-auto z-100 max-w-md rounded-2xl border border-slate-600/20 bg-[#1A2534] ring-1 ring-slate-700/6 p-6 hidden"
    >
      <div className="mb-4 flex items-center gap-3">
        <figure className="rounded-full border border-slate-500 ring-1 ring-slate-700/6 bg-[#131d2b] p-2 text-slate-500">
          <AIcon data={data.icon} />
        </figure>
        <ATitleBold
          data={data.value}
          color="#e0e0e0"
          fontSize="text-md lg:text-lg"
        />
      </div>

      <AText data={data.detail} fontSize="text-md" />

      <form method="dialog" className="mt-6 flex justify-end">
        <button
          className="cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-[#e0e0e0] transition-colors"
          style={{ backgroundColor: data.label.color }}
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
          }}
        >
          OK
        </button>
      </form>
    </dialog>
  );
}
