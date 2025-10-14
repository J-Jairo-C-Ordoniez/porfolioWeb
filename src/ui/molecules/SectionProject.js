"use client";
import { motion } from "framer-motion";

import Code from "../atoms/Code";
import Picture from "../atoms/Picture";
import Text from "../atoms/Text";
import TitleSection from "../atoms/TitleSection";
import Label from "../atoms/Label";

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
            size="50"
        />

    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="m-auto flex flex-col gap-5 justify-center items-center py-10 px-50"
            >
                <TitleSection
                    color="#e0e0e0"
                    title={section.title}
                    fontSize="3rem"
                />

                <div className="flex flex-wrap justify-center gap-3">
                    {labels}
                </div>

                <Text
                    text={section.text}
                    color="#b3b3b3"
                    fontSize="1.2rem"
                    textAlign="center"
                />

                <div className="w-full flex justify-center">
                    {content}
                </div>

                <Text
                    text={section.description}
                    color="#b3b3b3"
                    fontSize="1.2rem"
                    textAlign="center"
                />
            </motion.section>
        </>

    )
}