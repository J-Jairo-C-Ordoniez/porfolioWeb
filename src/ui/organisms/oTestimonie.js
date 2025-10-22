'use client'

import { motion } from "framer-motion";
import MCardTestimonie from "../molecules/mCardTestimonie";

export default function OTestimonie({ data }) {
    return (
        <div className="flex gap-20 py-20 px-30">
            {data.map(testimonie => (
                <motion.article
                    className="relative p-6 rounded-2xl border border-slate-600/20 bg-[#181818] shadow-lg hover:shadow-2xl hover:scale-106 transition-transform duration-300"
                    key={testimonie.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: "easeOut"
                    }}
                >
                    <MCardTestimonie data={testimonie} />
                </motion.article>
            ))}
        </div>
    )
}