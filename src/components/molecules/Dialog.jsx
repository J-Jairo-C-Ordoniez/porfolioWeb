"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

import { ATitleBold } from "../atoms/Title";
import AText from "../atoms/Text";
import AIcon from "../atoms/Icon";

export default function MDialog({ data, open, setOpen }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const dialogEl = dialogRef.current;
      if (dialogEl && !dialogEl.contains(e.target)) {
        dialogEl.close();
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
  }, [open]);

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.dialog
          ref={dialogRef}
          open={open}
          className="absolute inset-y-0 mx-auto z-100 max-w-md rounded-2xl border border-slate-600/20 bg-[#1A2534] ring-1 ring-slate-700/6 p-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          key="box"
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

          <AText 
            data={data.detail} 
            fontSize="text-md"
          />

          <form method="dialog" className="mt-6 flex justify-end">
            <button
              className="cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-[#e0e0e0] transition-colors"
              style={{ backgroundColor: data.label.color }}
            >
              OK
            </button>
          </form>
        </motion.dialog>
      )}
    </AnimatePresence>
  );
}
