'use client'

import { useEffect, useState } from 'react';

import { ATitleSection } from '../../../ui/atoms/aTitle';
import { MMenuSkill } from '@/ui/molecules/mMenuList';
import OSkill from '@/ui/organisms/oSkill';

export default function SSkill({ data }) {
    const [activeMenu, setActiveMenu] = useState(data.menu[0].status || false);
    const [skillsOptions, setSkillsOptions] = useState(data.items[activeMenu] || false);

    useEffect(() => {
        setSkillsOptions(data.items[activeMenu] || false);
    }, [activeMenu])

    return (
        <section 
            id={data.id}
            className="px-40 py-10"
        >
            <ATitleSection 
                data={data.title} 
                color='#e0e0e0' 
            />

            <MMenuSkill 
                data={data.menu}
                setStateMenu={setActiveMenu}
                stateMenu={activeMenu}
            />

            <OSkill data={skillsOptions} />
        </section>
    )
}