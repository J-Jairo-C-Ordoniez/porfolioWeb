"use client";

import { motion } from "framer-motion";

import { ATitleBold } from "../atoms/Title";
import ALabel from "../atoms/Label";
import AText from "../atoms/Text";
import AIcon from "../atoms/Icon";
import APicture from "../atoms/Picture";
import ALink from "../atoms/Link";

export default function MCardBlog({ data }) {
  return (
    <ALink href={data.href}>
      <motion.article
        className="w-full flex flex-col cursor-pointer justify-between rounded-4xl border-b-5 border-slate-600/20 ring-b-5 ring-slate-700/6 p-4 transition-all duration-30 hover:bg-[#1A2534] md:flex-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <div className="w-[100%] md:w-[60%] space-y-4 p-5">
          <ALabel data={data.category} />
          <ATitleBold data={data.title} color="#e0e0e0" fontSize="text-2xl lg:text-3xl" />

          <AText data={data.excerpt} fontSize="text-md lg:text-lg" />

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

        <figure className="flex w-[100%] h-50 order-first md:order-none lg:h-60 lg:w-[50%]">
          <APicture src={data.poster.src} alt={data.poster.alt} size="100" />
        </figure>
      </motion.article>
    </ALink>
  );
}
