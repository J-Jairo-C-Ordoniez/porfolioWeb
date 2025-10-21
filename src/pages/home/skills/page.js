'use client'

import { useEffect, useState } from 'react';
import TitleSection from "../../ui/atoms/TitleSection";
import MenuSkills from "../../../ui/molecules/MenuSkills";
import Skill from "../../../ui/organisms/Skills";

export default function Skills({ skills }) {
    const [activeMenu, setActiveMenu] = useState(skills.menu[0].status || '');
    const [skillsOptions, setSkillsOptions] = useState(skills.items[activeMenu] || []);

    useEffect(() => {
        setSkillsOptions(skills.items[activeMenu] || []);
    }, [activeMenu])

    return (
        <section id="skills" className="px-20">
            <TitleSection
                title={skills.title}
                color="#e0e0e0"
            />

            <MenuSkills
                links={skills.menu}
                setStateMenu={setActiveMenu}
                stateMenu={activeMenu}
            />

            <Skill skills={skillsOptions} />
        </section>
    )
}