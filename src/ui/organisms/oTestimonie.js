"use client";

import { motion } from "framer-motion";
import MCardTestimonie from "../molecules/mCardTestimonie";

export default function OTestimonie({ data }) {
  return (
    <div className="flex flex-wrap justify-center gap-20 overflow-hidden px-10 py-10 sm:px-12 md:px-20 lg:px-32 xl:px-35">
      {data.map((testimonie) => (
        <motion.article
          className="w-[100%] md:w-[40%] lg:w-[40%] xl:w-[20%] relative rounded-2xl border border-slate-600/20 bg-[#1A2534] ring-1 ring-slate-700/6 p-6 transition-transform duration-300 hover:scale-106 hover:shadow-2xl"
          key={testimonie.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <MCardTestimonie data={testimonie} />
        </motion.article>
      ))}
    </div>
  );
}
