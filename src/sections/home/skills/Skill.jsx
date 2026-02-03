"use client";

import { useEffect, useState } from "react";

import { ATitleSection } from "../../../components/atoms/Title";
import { MMenuSkill } from "@/components/molecules/MenuList";
import OSkill from "@/components/organisms/Skill";

export default function SSkill({ data }) {
  const [activeMenu, setActiveMenu] = useState(data.menu[0].status || false);
  const [skillsOptions, setSkillsOptions] = useState(
    data.items[activeMenu] || false,
  );

  useEffect(() => {
    setSkillsOptions(data.items[activeMenu] || false);
  }, [activeMenu]);

  return (
    <section id={data.id} className="overflow-hidden px-10 py-5 sm:px-12 md:px-20 lg:flex-row lg:px-32 xl:px-35">
      <ATitleSection data={data.title} color="#e0e0e0" />

      <MMenuSkill
        data={data.menu}
        setStateMenu={setActiveMenu}
        stateMenu={activeMenu}
      />

      <OSkill data={skillsOptions} />
    </section>
  );
}
