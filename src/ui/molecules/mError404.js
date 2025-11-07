"use client";

import { motion } from "framer-motion";

import { ATitleBold } from "../atoms/aTitle";
import APicture from "../atoms/aPicture";
import AText from "../atoms/aText";

export default function MError404({ title, description }) {
  return (
    <motion.section
      className="m-auto my-10 flex h-[80vh] w-[60%] flex-col items-center justify-center overflow-hidden p-10"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <div>
        <APicture src="/404.png" alt="Avatar - Error 404" size="200" />
      </div>

      <ATitleBold data={title} color="#e0e0e0" fontSize="1.4rem" />

      <AText data={description} />

      <div className="mt-10 flex items-center justify-center rounded-2xl border-2 border-[#00C896] bg-[#00C89615] px-6 py-3 shadow-md">
        <AText data="404" color="#00C896" />
      </div>
    </motion.section>
  );
}
