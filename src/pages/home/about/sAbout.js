"use client";

import { motion } from "framer-motion";

import { ATitleBold } from "../../../ui/atoms/aTitle";
import AText from "../../../ui/atoms/aText";
import ALabel from "../../../ui/atoms/aLabel";
import APicture from "../../../ui/atoms/aPicture";
import ARed from "../../../ui/atoms/aRed";
import AIcon from "../../../ui/atoms/aIcon";

export default function SAbout({ data }) {
  return (
    <section id={data.id} className="flex flex-col justify-center overflow-hidden px-10 py-5 sm:px-12 md:px-20 lg:flex-row lg:px-32 xl:px-35">
      <motion.article
        className="flex w-[100%] flex-col gap-2 p-0 sm:p-4 md:p-8 md:gap-4 lg:p-12 lg:w-[50%] xl:p-20"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ATitleBold
          data={data.title}
          color="#e0e0e0"
          fontSize="text-2xl sm:text-3xl md:text-4xl"
        />

        <AText
          data={data.subtitle}
          color="#00C896"
        />

        <AText data={data.start} />
        <AText data={data.professional} />

        <div className="mt-6 flex flex-wrap gap-3">
          {data.values.map((value) => (
            <ALabel key={value.id} data={value} />
          ))}
        </div>
      </motion.article>

      <motion.article
        className="w-[100%] flex items-end justify-center gap-2 p-6 sm:p-8 md:p-10 md:gap-4 lg:p-12 lg:w-[50%] xl:p-16"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-80 h-80 lg:w-[70%] lg:h-full">
          <APicture
            src={data.photo.src} 
            alt={data.photo.alt} 
            size="100"
          />
        </div>
        <motion.div
          className="flex w-[20%] gap-5 p-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {data.redes.map((red) => (
            <ARed key={red.id} href={red.href} target="_blank">
              <AIcon data={red.icon} />
            </ARed>
          ))}
        </motion.div>
      </motion.article>
    </section>
  );
}
