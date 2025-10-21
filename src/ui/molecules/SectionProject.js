"use client";
import { motion } from "framer-motion";

import Code from "../atoms/Code";
import Picture from "../atoms/aPicture";
import Text from "../atoms/aText";
import Label from "../atoms/aLabel";
import TitleSpace from "../atoms/TitleSpace";
import TitleSection from "../atoms/TitleSection";

export default function SectionProject({ section }) {
    const labels = section.labels.map(label => (
        <Label key={label.id} label={label} />
    ));

    const content = section.src.type === 'code'
        ? <Code
            code={section.src.content}
            language={section.src.language}
        />
        : <Picture
            src={section.src.content}
            alt={section.src.alt}
            size="70"
        />

    return (
        <motion.article
            className="bg-[#101010] p-6 rounded-2xl shadow-md border border-[#1b1b1b]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
        >
            <TitleSection
                title={section.title}
                fontSize="1.5rem"
            />

            <div className="mt-4 flex flex-wrap gap-2">
                {labels}
            </div>

            <span className="flex flex-col gap-4 mt-6">
                <Text
                    text={section.text}
                />

                <Text
                    text={section.description}
                    color="#b3b3b3"
                />
            </span>

            <div className="my-6 flex justify-center items-center">
                {content}
            </div>

        </motion.article>

    )
}