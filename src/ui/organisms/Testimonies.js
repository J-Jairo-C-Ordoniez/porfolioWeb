'use client'

import { motion } from "framer-motion";
import CardTestimonie from '../molecules/CardTestimonie'

export default function Testimonies({ testimonies }) {
    const testimoniesRender = testimonies.map(testimonie => (
        <motion.div
            key={testimonie.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut"
            }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <CardTestimonie testimonie={testimonie} />
        </motion.div>
    ))

    return (
        <section className="flex gap-20 py-16 px-4">
            {testimoniesRender}
        </section>
    )
}