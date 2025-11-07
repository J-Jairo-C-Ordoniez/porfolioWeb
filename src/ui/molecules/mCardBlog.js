"use client";

import { motion } from "framer-motion";

import { ATitleBold } from "../atoms/aTitle";
import ALabel from "../atoms/aLabel";
import AText from "../atoms/aText";
import AIcon from "../atoms/aIcon";
import APicture from "../atoms/aPicture";
import ALink from "../atoms/aLink";

export default function MCardBlog({ data }) {
  return (
    <ALink href={data.href}>
      <motion.article
        className="flex cursor-pointer justify-between rounded-4xl border-b-4 border-[#181818] p-4 transition-all duration-300 hover:scale-102 hover:bg-[#111111] hover:shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <div className="w-[60%] space-y-4 p-5">
          <ALabel data={data.category} />
          <ATitleBold data={data.title} color="#e0e0e0" fontSize="1.4rem" />

          <AText data={data.excerpt} />

          <span className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[#0B84F3]">
              <AIcon data="Calendar" />
              <AText data={data.date} color="#0B84F3" />
            </div>

            <div className="flex items-center gap-2 text-[#E91E63]">
              <AIcon data="Timer" />
              <AText data={data.readTime} color="#E91E63" />
            </div>
          </span>
        </div>

        <figure className="flex w-[30%] items-center justify-end px-20">
          <APicture src={data.poster.src} alt={data.poster.alt} size="300" />
        </figure>
      </motion.article>
    </ALink>
  );
}
