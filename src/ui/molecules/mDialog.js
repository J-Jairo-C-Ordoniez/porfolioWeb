"use client"

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react"

import { ATitleBold } from "../atoms/aTitle"
import AText from "../atoms/aText"
import AIcon from "../atoms/aIcon"

export default function MDialog({ data, open, setOpen }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            const dialogEl = dialogRef.current;
            if (dialogEl && !dialogEl.contains(e.target)) {
                dialogEl.close()
                setOpen(false)
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
            {
                open &&
                <motion.dialog
                    ref={dialogRef}
                    open={open}
                    className="absolute inset-[40%] z-10000 rounded-2xl p-6 max-w-md w-[90%] border border-slate-600/20 bg-[#181818] animate-fadeIn"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    key="box"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <figure className="p-2 rounded-full text-slate-500 bg-zinc-800 border border-slate-500">
                            <AIcon data={data.icon} />
                        </figure>
                        <ATitleBold
                            data={data.value}
                            color="#e0e0e0"
                            fontSize="1.2rem"
                        />
                    </div>

                    <AText data={data.detail} />

                    <ul className="space-y-2 m-6">
                        {data.extra.map(extra => (
                            <li key={extra.id} className="flex items-center text-gray-600 text-sm">
                                <div
                                    style={{ backgroundColor: data.label.color }}
                                    className="h-2 w-2 mr-2 rounded-full"
                                >
                                </div>
                                <AText data={extra.text} />
                            </li>
                        ))}
                    </ul>

                    <form method="dialog" className="mt-6 flex justify-end">
                        <button
                            className="px-4 py-2 cursor-pointer rounded-lg text-[#e0e0e0] text-sm font-medium transition-colors"
                            style={{ backgroundColor: data.label.color }}
                        >
                            OK
                        </button>
                    </form>
                </motion.dialog>
            }
        </AnimatePresence>
    )
}