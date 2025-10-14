"use client";
import { motion } from "framer-motion";

import Picture from "../atoms/Picture";
import Text from "../atoms/Text";
import TitleSpace from "../atoms/TitleSpace";
import SectionProject from "../molecules/SectionProject";
import BtnCTA from "../atoms/BtnCTA";

export default function HomeProject({ project }) {

    return (
        <main>
            <article className="w-[50%] m-auto px-10 py-30 flex flex-col gap-2 justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="m-auto flex items-center justify-center"
                >
                    <Picture
                        src={project.hero.logo}
                        alt={project.hero.title}
                        size="20"
                    />
                </motion.div>

                <TitleSpace
                    title={project.hero.title}
                    color="#e0e0e0"
                    fontSize="3rem"
                />

                <Text
                    text={project.hero.description}
                    color="#b3b3b3"
                    fontSize="1.2rem"
                    textAlign="center"
                />

                <div className='mt-10'>
                    <BtnCTA>
                        <Text
                            text={project.hero.link.text}
                            color="#e0e0e0"
                            fontSize="1rem"
                        />
                    </BtnCTA>
                </div>
            </article>

            <article className="p-20 m-auto">
                {
                    project.hero.sections.map(section => (
                        <SectionProject key={section.id} section={section} />
                    ))
                }
            </article>
        </main>
    )
}