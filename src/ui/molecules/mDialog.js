"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

import { ATitleBold } from "../atoms/aTitle";
import AText from "../atoms/aText";
import AIcon from "../atoms/aIcon";

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
          className="animate-fadeIn absolute inset-[40%] z-10000 w-[90%] max-w-md rounded-2xl border border-slate-600/20 bg-[#181818] p-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          key="box"
        >
          <div className="mb-4 flex items-center gap-3">
            <figure className="rounded-full border border-slate-500 bg-zinc-800 p-2 text-slate-500">
              <AIcon data={data.icon} />
            </figure>
            <ATitleBold data={data.value} color="#e0e0e0" fontSize="1.2rem" />
          </div>

          <AText data={data.detail} />

          <ul className="m-6 space-y-2">
            {data.extra.map((extra) => (
              <li
                key={extra.id}
                className="flex items-center text-sm text-gray-600"
              >
                <div
                  style={{ backgroundColor: data.label.color }}
                  className="mr-2 h-2 w-2 rounded-full"
                ></div>
                <AText data={extra.text} />
              </li>
            ))}
          </ul>

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
