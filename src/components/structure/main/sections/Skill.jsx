"use client";

import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import data from "../../../../data/home/Skill"
import MenuSkill from "../ui/MenuSkill";
import CardSkill from "../ui/CardSkill";

gsap.registerPlugin(ScrollTrigger);

export default function SSkill() {
  const [activeMenu, setActiveMenu] = useState(data.menu[0].status || false);
  const [skillsOptions, setSkillsOptions] = useState(
    data.items[activeMenu] || false
  );

  const containerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    setSkillsOptions(data.items[activeMenu] || false);
  }, [activeMenu, data.items]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-header", {
        y: 20,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });

      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 1.5,
          stagger: 0.05,
          ease: "expo.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, [skillsOptions]);

  return (
    <section
      ref={containerRef}
      id={data.id}
      className="relative min-h-[10vh] overflow-x-hidden flex justify-center"
    >
      <div className="container mx-auto py-10 px-4">
        <header className="mb-10 flex flex-col">
          <h2 className="text-xl font-medium text-primary tracking-wider uppercase pb-4 pl-2 border-b border-primary/10">
            {data.title}
          </h2>

          <MenuSkill
            data={data.menu}
            setStateMenu={setActiveMenu}
            stateMenu={activeMenu}
          />
        </header>

        <article
          ref={gridRef}
          className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
        >
          {skillsOptions?.map((skill) => (
            <CardSkill 
              key={skill.id} 
              data={skill} 
            />
          ))}
        </article>
      </div>
    </section>
  );
}
