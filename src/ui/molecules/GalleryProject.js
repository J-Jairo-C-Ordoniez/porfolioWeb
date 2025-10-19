"use client";
import { motion } from "framer-motion";

import Picture from "../atoms/Picture";
import Text from "../atoms/Text";
import TitleSection from "../atoms/TitleSection";

export default function GalleryProject({ item }) {

    return (
        <motion.figure
            className="bg-[#0f0f0f] p-4 rounded-2xl border border-[#1a1a1a] shadow-inner"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
        >
            <div className="flex justify-center items-center mb-4">
                <Picture
                    src={item.src}
                    alt={item.title}
                    size="80"
                />
            </div>

            <TitleSection
                color="#e0e0e0"
                title={item.title}
                fontSize="1.1rem"
            />

            <Text
                text={item.label}
                color="#b3b3b3"
            />
        </motion.figure>
    )
}