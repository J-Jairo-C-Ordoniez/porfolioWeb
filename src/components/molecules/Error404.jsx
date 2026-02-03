"use client";

import { motion } from "framer-motion";

import { ATitleBold } from "../atoms/Title";
import APicture from "../atoms/Picture";
import AText from "../atoms/Text";
import ARed from "../atoms/Red";
import AIcon from "../atoms/Icon";

export default function MError404({ title, description, isPage }) {
  return (
    <motion.section
      className="m-auto my-10 flex flex-col items-center justify-center overflow-hidden p-10 h-[80vh] w-[80vw]"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <div className="w-30 h-30">
        <APicture 
          src="/404.png" 
          alt="Avatar - Error 404" 
          size="100" 
        />
      </div>

      <ATitleBold 
        data={title} 
        color="#e0e0e0" 
        textAlign="center"
        fontSize="text-md lg:text-xl" 
      />

      <AText 
        data={description} 
        textAlign="center"
      />

      <div className="my-10 flex items-center justify-center rounded-2xl border-2 border-[#00C896] bg-[#00C89615] px-6 py-3 shadow-md">
        <AText data="404" color="#00C896" />
      </div>

      {isPage && (
        <ARed href='/'>
          <AIcon data="ArrowLeft" />
          <AText data="Volver" />
        </ARed>
      )}
    </motion.section>
  );
}
