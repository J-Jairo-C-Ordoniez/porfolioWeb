"use client";
import { motion } from "framer-motion";
import { ATitleBold } from "../atoms/aTitle";
import { ABtnBold, ABtnCTA } from "../atoms/aBtn";
import AText from "../atoms/aText";
import ALabel from "../atoms/aLabel";
import APicture from "../atoms/aPicture";

export default function MHeroDoc({ data, onClick }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-between gap-10 md:flex-row"
    >
      <div className="w-[50%]">
        <ATitleBold data={data.title} color="#e0e0e0" fontSize="3rem" />

        <AText data={data.description} fontSize="1.2rem" />

        <div className="mt-8 flex items-center gap-6">
          <ABtnCTA data={data.Btn} onClick={onClick} />

          <ABtnBold data={data.link} />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {data.tecnologies.map((label) => (
            <ALabel key={label.id} data={label} />
          ))}
        </div>
      </div>

      <motion.figure
        className="flex h-80 w-80 items-center justify-center rounded-xl bg-gradient-to-tr from-[#141414] to-[#1a1a1a] shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <APicture src={data.logo} alt={data.title} size="200" />
      </motion.figure>
    </motion.section>
  );
}
