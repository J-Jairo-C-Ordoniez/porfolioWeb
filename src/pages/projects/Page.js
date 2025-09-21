'use client';

import { useEffect, useState } from 'react';
import TitleSection from '../../ui/atoms/TitleSection'
import MenuProjects from '../../ui/molecules/MenuProjects'
import Project from '../../ui/organisms/Projects'

export default function Projects({ projects }) {
    const [activeMenu, setActiveMenu] = useState(projects.menu[0].status || '');
    const [projectsOptions, setProjectsOptions] = useState(projects.items[activeMenu] || []);

    useEffect(() => {
        setProjectsOptions(projects.items[activeMenu] || []);
    }, [activeMenu])

    return (
        <section id="projects" className="p-4">
            <TitleSection 
                title={projects.title} 
                color="#e0e0e0" 
                textAlign='center' 
            />

            <MenuProjects 
                links={projects.menu} 
                setStateMenu={setActiveMenu} 
                stateMenu={activeMenu} 
            />

            <Project projects={projectsOptions} />
        </section>
    )
}