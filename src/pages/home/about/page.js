"use client"

import { motion } from "framer-motion"
import TitleSection from "../../ui/atoms/TitleSection"
import Text from "../../../ui/atoms/aText"
import Picture from "../../../ui/atoms/aPicture"
import Red from "../../../ui/atoms/aRed"
import Icon from "../../../ui/atoms/aIcon"
import Label from "../../../ui/atoms/aLabel"

export default function About({ about }) {
    const redes = about.redes.map(red => (
        <Red
            key={red.id}
            href={red.href}
            target='_blank'
        >
            <Icon name={red.icon} />
        </Red>
    ))

    const valuesItems = about.values.map(value => (
        <Label
            key={value.id}
            label={value}
        />
    ))

    return (
        <section id="about" className="px-10 flex justify-center h-[90vh]">
            <motion.article
                className="w-[50%] p-20 flex flex-col gap-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <TitleSection
                    title={about.title}
                    color="#e0e0e0"
                    fontSize="1.8rem"
                />

                <Text text={about.subtitle} color="#E91E6390" />
                <Text text={about.start} />
                <Text text={about.professional} />

                <div className="flex flex-wrap gap-3 mt-6">
                    {valuesItems}
                </div>
            </motion.article>

            <motion.article
                className="w-[50%] flex justify-center items-end p-20"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <Picture {...about.photo} />

                <motion.div
                    className="w-[20%] flex gap-5 p-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {redes}
                </motion.div>
            </motion.article>
        </section>
    )
}