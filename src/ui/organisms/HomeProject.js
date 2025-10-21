"use client";
import { motion } from "framer-motion";

import Picture from "../atoms/aPicture";
import Text from "../atoms/aText";
import TitleSpace from "../atoms/TitleSpace";
import SectionProject from "../molecules/SectionProject";
import BtnCTA from "../atoms/BtnCTA";
import BtnBackdrop from "../atoms/BtnBackdrop";
import Label from "../atoms/aLabel";
import GalleryProject from "../molecules/GalleryProject";
import Icon from "../atoms/aIcon";
import Red from "../atoms/aRed";

export default function HomeProject({ project, setRoute }) {

    return (
        <main>
            <header className="container mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-between md:flex-row items-center gap-10"
                >
                    <div className="w-[50%]">
                        <TitleSpace
                            title={project.hero.title}
                            color="#e0e0e0"
                            fontSize="3rem"
                        />

                        <Text
                            text={project.hero.description}
                            color="#b3b3b3"
                        />

                        <div className="mt-8 flex gap-4">
                            <BtnCTA
                                onClick={() => setRoute('doc')}
                            >
                                <Text
                                    text={project.hero.Btn.text}
                                    color="#e0e0e0"
                                />
                            </BtnCTA>

                            <BtnBackdrop
                                href={project.hero.link.href}
                            >
                                <Text
                                    text={project.hero.link.text}
                                    color="#e0e0e0"
                                    fontSize="1rem"
                                />
                            </BtnBackdrop>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {
                                project.hero.tecnologies.map(label => (
                                    <Label key={label.id} label={label} />
                                ))
                            }
                        </div>
                    </div>

                    <motion.figure
                        className="w-80 h-80 rounded-xl bg-gradient-to-tr from-[#141414] to-[#1a1a1a] flex items-center justify-center shadow-2xl"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Picture
                            src={project.hero.logo}
                            alt={project.hero.title}
                            size="80"
                        />
                    </motion.figure>
                </motion.div>
            </header>

            <section id="docs" className="container mx-auto px-6 py-12">
                <TitleSpace
                    title="Arquitectura y Decisiones"
                    color="#e0e0e0"
                    fontSize="1.6rem"
                />

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        project.hero.sections.map(section => (
                            <SectionProject key={section.id} section={section} />
                        ))
                    }
                </div>
            </section>

            <section id="gallery" className="container mx-auto px-6 py-12">
                <TitleSpace
                    title="Galería del proyecto"
                    color="#e0e0e0"
                    fontSize="1.6rem"
                />

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project.hero.gallery.map(item => (
                        <GalleryProject
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </section>

            <footer className="container mx-auto px-6 py-16">
                <div className="p-8 text-center">
                    <TitleSpace
                        title="¿Quieres ver el proyecto completo?"
                        color="#e0e0e0"
                        fontSize="1.4rem"
                    />

                    <Text
                        text='Accede al demo y al repositorio para ver la implementación completa.'
                        textAlign="center"
                        color="#b3b3b3"
                    />

                    <ul className="flex justify-center gap-4 list-none mt-10">
                        {
                            project.menu.map(link => (
                                <li key={link.id}>
                                    <Red href={link.href}>
                                        <Icon name={link.icon} />
                                        <Text
                                            text={link.text}
                                            color="#b3b3b3"
                                        />
                                    </Red>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </footer>

        </main>
    )
}
