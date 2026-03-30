"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ATitleBold, ATitleSection } from "../ui/Title";
import { AText } from "../ui/Text";
import { ALabel } from "../ui/Label";
import { APicture } from "../ui/Picture";
import { ARed } from "../ui/Red";
import { AIcon } from "../ui/Icon";

gsap.registerPlugin(ScrollTrigger);

export default function SAbout({ data }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Elegant reveal
      gsap.from([titleRef.current, contentRef.current], {
        opacity: 0,
        y: 30,
        duration: 2,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id={data.id} 
      className="py-32 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40"
    >
      <div className="flex flex-col items-center gap-24">
        {/* Balanced Header */}
        <div ref={titleRef} className="flex flex-col items-center text-center max-w-4xl">
          <ATitleSection data="About the Author" className="mb-12" />
          <ATitleBold data={data.title} fontSize="text-4xl md:text-5xl" className="mb-12 opacity-80" />
          <AText 
            data={data.subtitle} 
            fontSize="text-xl md:text-2xl" 
            color="text-accent" 
            className="font-caps tracking-[0.3em]"
          />
        </div>

        {/* Symmetric Content Grid */}
        <div 
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 border-t border-white/5 pt-24"
        >
          <div className="flex flex-col gap-8">
            <span className="font-sans font-caps text-[10px] tracking-widest text-accent">Biography</span>
            <AText data={data.start} fontSize="text-lg" color="text-text-main" className="leading-relaxed font-light" />
            <AText data={data.professional} fontSize="text-lg" color="text-text-secondary" className="leading-relaxed font-light" />
            
            <div className="mt-8 flex gap-6">
              {data.redes?.map((red) => (
                <ARed key={red.id} href={red.href} target="_blank" className="text-text-secondary transition-colors hover:text-accent">
                  <AIcon data={red.icon} className="h-5 w-5" />
                </ARed>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <span className="font-sans font-caps text-[10px] tracking-widest text-accent">Core Values</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {data.values?.map((value) => (
                <div key={value.id} className="flex flex-col gap-2">
                  <span className="font-sans font-caps text-xs tracking-widest text-text-main">{value.text}</span>
                  <div className="h-px w-full bg-white/5" />
                </div>
              ))}
            </div>
            
            <div className="mt-auto pt-12">
              <div className="relative aspect-square w-48 overflow-hidden grayscale contrast-125 opacity-40">
                <APicture src={data.photo.src} alt={data.photo.alt} size="100" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
