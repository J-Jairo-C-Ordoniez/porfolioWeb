"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react"

import { ATitleBold } from "../atoms/aTitle";
import APicture from "../atoms/aPicture";
import AText from "../atoms/aText";
import { ABtn, ABtnCTA } from "../atoms/aBtn";

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
                className="bg-[#0f0f0f] p-4 px-10 rounded-2xl border border-[#1a1a1a] shadow-inner"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
            >

                <button
                    onClick={() => setOpen(true)}
                    className="flex justify-center items-center mb-4"
                >
                    <APicture
                        src={data.src}
                        alt={data.title}
                        size="85"
                    />
                </button>

                <AText
                    data={data.description}
                    textAlign="center"
                />
            </motion.figure>
            {open && (
                <dialog
                    open={open}
                    className="fixed w-[100vw] h-[100vh] z-10000 rounded-2xl p-6 max-w-md border border-slate-600/20 bg-[#181818] animate-fadeIn"
                >
                    <figure className="p-2 rounded-full text-slate-500 bg-zinc-800 border border-slate-500">
                        <APicture
                            src={data.src}
                            alt={data.title}
                            size="187"
                        />
                    </figure>
                    <ATitleBold
                        data={data.title}
                        color="#e0e0e0"
                        fontSize="1.2rem"
                    />


                    <form method="dialog" className="mt-6 flex justify-end">
                        <ABtn
                            data={{ icon: 'close', text: 'Cerrar' }}
                            onClick={() => setOpen(false)}
                        />
                    </form>
                </dialog>
            )}
        </>
    )
}