"use client";

import { motion } from "framer-motion";
import MCardTestimonie from "../molecules/mCardTestimonie";

export default function OTestimonie({ data }) {
  return (
    <div className="flex gap-20 px-30 py-20">
      {data.map((testimonie) => (
        <motion.article
          className="relative rounded-2xl border border-slate-600/20 bg-[#181818] p-6 shadow-lg transition-transform duration-300 hover:scale-106 hover:shadow-2xl"
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
