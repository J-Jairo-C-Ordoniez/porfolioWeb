"use client";

import { motion, AnimatePresence } from "framer-motion";

import { ATitleBold } from "../atoms/Title";
import AIcon from "../atoms/Icon";
import AText from "../atoms/Text";

export default function OSkill({ data }) {
  return (
    <motion.div
      className="my-5 flex flex-col flex-wrap gap-10 p-6"
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.15 },
        },
      }}
    >
      <AnimatePresence mode="wait">
        {data.map((skill) => (
          <motion.article
            key={skill.id}
            className="flex w-fit items-center gap-4 rounded-2xl border border-slate-600/20 bg-[#1A2534] ring-1 ring-slate-700/6 px-6 py-4 text-[#e0e0e0] duration-300 ease-in hover:scale-105"
            exit="exit"
            variants={{
              hidden: { opacity: 0, x: -40 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
              exit: { opacity: 0, x: 40, transition: { duration: 0.3 } },
            }}
          >
            <div className="hidden md:block">
              <AIcon data={skill.icon} />
            </div>
            <ATitleBold data={skill.name} fontSize="text-md" color="#e0e0e0" />

            <AText data={skill.description} />
          </motion.article>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
