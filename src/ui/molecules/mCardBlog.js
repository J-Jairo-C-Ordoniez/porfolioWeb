'use client'

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
                className="flex justify-between cursor-pointer border-b-4 border-[#181818] pb-4 transition-all duration-300 hover:shadow-lg  hover:bg-[#111111] rounded-4xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: "easeOut"
                }}
            >
                <div className="w-[60%] p-5 space-y-4">
                    <ALabel data={data.category} />
                    <ATitleBold
                        data={data.title}
                        color="#e0e0e0"
                        fontSize="1.4rem"
                    />

                    <AText data={data.excerpt} />

                    <span className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-[#0B84F3]">
                            <AIcon data="Calendar" />
                            <AText
                                data={data.date}
                                color="#0B84F3"
                            />
                        </div>

                        <div className="flex items-center gap-2 text-[#E91E63]">
                            <AIcon data="Timer" />
                            <AText
                                data={data.readTime}
                                color="#E91E63"
                            />
                        </div>
                    </span>
                </div>

                <figure className="w-[30%] px-20 flex items-center justify-end">
                    <APicture
                        src={data.poster.src}
                        alt={data.poster.alt}
                    />
                </figure>
            </motion.article>
        </ALink>
    );
}