"use client"

import { motion, AnimatePresence } from "framer-motion"
import CardSkill from "../molecules/CardSkill"
import WithoutProjects from "../molecules/WithoutProjects"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
}

const item = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: 40, transition: { duration: 0.3 } }
}

export default function Skills({ skills }) {
    return (
        <motion.div
            className="my-5 p-6 flex flex-col flex-wrap gap-10"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <AnimatePresence mode="wait">
                {skills.length <= 0 ? (
                    <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <WithoutProjects />
                    </motion.div>
                ) : (
                    skills.map((skill) => (
                        <motion.div key={skill.id} variants={item} exit="exit">
                            <CardSkill skill={skill} />
                        </motion.div>
                    ))
                )}
            </AnimatePresence>
        </motion.div>
    )
}