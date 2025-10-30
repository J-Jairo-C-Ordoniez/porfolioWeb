"use client";
import { motion } from "framer-motion";

import { ATitleBold, ATitleSection } from "../atoms/aTitle";
import MHeroDoc from "../molecules/mHeroDoc";
import MSectionDoc from "../molecules/mSectionDoc";
import MGalleryDoc from "../molecules/mGalleryDoc";
import AText from "../atoms/aText";
import ARed from "../atoms/aRed";
import AIcon from "../atoms/aIcon";


export default function OHomeProject({ data, setState }) {

    return (
        <main>
            <header className="container mx-auto px-6 py-20">
                <MHeroDoc
                    data={data.hero}
                    onClick={() => setState('doc')}
                />
            </header>

            <motion.section
                id="docs"
                className="container space-y-5 mx-auto px-6 py-12"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
            >
                <ATitleSection data="Arquitectura y Decisiones" />

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.hero.sections.map(section => (
                        <MSectionDoc
                            key={section.id}
                            data={section}
                        />
                    ))}
                </div>
            </motion.section>

            <section id="gallery" className="container mx-auto px-6 py-12">
                <ATitleSection data="Galería del proyecto" />

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.hero.gallery.map(item => (
                        <MGalleryDoc
                            key={item.id}
                            data={item}
                        />
                    ))}
                </div>
            </section>

            <footer className="container mx-auto px-12 py-16">
                <ATitleBold
                    data="¿Quieres ver el proyecto completo?"
                    color="#e0e0e0"
                    fontSize="1.4rem"
                    textAlign="center"
                />

                <AText
                    data='Accede al demo y al repositorio para ver la implementación completa.'
                    textAlign="center"
                />

                <ul className="flex justify-center gap-4 list-none mt-10">
                    {
                        data.head.menu.map(link => (
                            <li key={link.id}>
                                <ARed href={link.href}>
                                    <AIcon data={link.icon} />
                                    <AText
                                        data={link.text}
                                        textAlign="center"
                                    />
                                </ARed>
                            </li>
                        ))
                    }
                </ul>
            </footer>
        </main>
    )
}
