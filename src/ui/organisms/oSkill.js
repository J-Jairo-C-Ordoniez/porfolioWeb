"use client"

import { motion, AnimatePresence } from "framer-motion"

import { ATitleBold } from "../atoms/aTitle"
import AIcon from "../atoms/aIcon"
import AText from "../atoms/aText"

export default function OSkill({ data }) {
    return (
        <motion.div
            className="my-5 p-6 flex flex-col flex-wrap gap-10"
            initial="hidden"
            animate="show"
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 }
                }
            }}
        >
            <AnimatePresence mode="wait">
                {data.map((skill) => (
                    <motion.article
                        key={skill.id}
                        className="w-fit flex gap-4 items-center py-4 px-6 text-[#b3b3b3] bg-[#181818] rounded-2xl hover:scale-105 duration-300 ease-in"
                        exit="exit"
                        variants={{
                            hidden: { opacity: 0, x: -40 },
                            show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                            exit: { opacity: 0, x: 40, transition: { duration: 0.3 } }
                        }}
                    >
                        <AIcon data={skill.icon} />
                        <ATitleBold
                            data={skill.name} 
                            fontSize="1.1rem"
                            color="#e0e0e0" 
                        />
                        
                        <AText data={skill.description} />
                    </motion.article>
                ))}
            </AnimatePresence>
        </motion.div>
    )
}