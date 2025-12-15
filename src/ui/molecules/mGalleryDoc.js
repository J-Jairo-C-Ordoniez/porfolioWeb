"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import { ATitleBold } from "../atoms/aTitle";
import APicture from "../atoms/aPicture";
import AText from "../atoms/aText";
import { ABtn } from "../atoms/aBtn";

export default function MGalleryDoc({ data }) {
  const [open, setOpen] = useState(false);

  /* useEffect(() => {

        if (open) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [open]); */

  return (
    <>
      <motion.figure
        className="rounded-2xl border border-slate-600/20 bg-[#1A2534] ring-1 ring-slate-700/6 p-4 px-10 shadow-inner"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
      >
        <button
          onClick={() => setOpen(true)}
          className="mb-4 w-full h-60 flex items-center justify-center"
        >
          <APicture src={data.src} alt={data.title} size="400" />
        </button>

        <AText data={data.description} textAlign="center" />
      </motion.figure>
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
            <ABtn
              data={{ icon: "close", text: "Cerrar" }}
              onClick={() => setOpen(false)}
            />
          </form>
        </dialog>
      )}
    </>
  );
}
