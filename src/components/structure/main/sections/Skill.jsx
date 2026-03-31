"use client";

import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import data from "../../../../data/home/Skill"
import * as Icon from "lucide-react";

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
      className="py-32"
    >
      <header className="skill-header mb-24 flex flex-col items-center text-center px-6">
        <h2 className="mb-6 font-black tracking-tighter" >
          {data.title}
        </h2>
        <div className="h-px w-12 bg-accent opacity-50" />
        
        <div className="mt-12">
          {/* <MMenuSkill
            data={data.menu}
            setStateMenu={setActiveMenu}
            stateMenu={activeMenu}
          /> */}
        </div>
      </header>

      {/* <div 
        ref={gridRef}
        className="grid grid-cols-2 gap-px bg-white/5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 border-y border-white/5"
      >
        {skillsOptions?.map((skill) => (
          <div 
            key={skill.id} 
            className="group flex flex-col items-center justify-center gap-6 bg-background py-16 transition-colors hover:bg-white/[0.02]"
          >
            <div className="text-4xl text-accent opacity-60 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100">
              <AIcon data={skill.icon} />
            </div>
            <span className="font-sans font-caps text-[10px] tracking-widest text-text-secondary group-hover:text-accent">
              {skill.name.split(":")[0]}
            </span>
          </div>
        ))}
      </div> */}
    </section>
  );
}
