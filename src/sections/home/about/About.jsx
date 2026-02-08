"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ATitleBold } from "../../../components/atoms/Title";
import AText from "../../../components/atoms/Text";
import ALabel from "../../../components/atoms/Label";
import APicture from "../../../components/atoms/Picture";
import ARed from "../../../components/atoms/Red";
import AIcon from "../../../components/atoms/Icon";

gsap.registerPlugin(ScrollTrigger);

export default function SAbout({ data }) {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Column Animation
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftColRef.current,
            start: "top 85%",
          },
        }
      );

      // Right Column Animation
      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightColRef.current,
            start: "top 85%",
          },
        }
      );

      // Social Icons Animation
      gsap.fromTo(
        socialRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: rightColRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id={data.id}
      className="flex flex-col justify-center overflow-hidden px-10 py-5 sm:px-12 md:px-20 lg:flex-row lg:px-32 xl:px-35"
    >
      <article
        ref={leftColRef}
        className="flex w-[100%] flex-col gap-2 p-0 sm:p-4 md:p-8 md:gap-4 lg:p-12 lg:w-[50%] xl:p-20 opacity-0"
      >
        <ATitleBold
          data={data.title}
          color="#e0e0e0"
          fontSize="text-2xl sm:text-3xl md:text-4xl"
        />

        <AText data={data.subtitle} color="#00C896" />

        <AText data={data.start} />
        <AText data={data.professional} />

        <div className="mt-6 flex flex-wrap gap-3">
          {data.values.map((value) => (
            <ALabel key={value.id} data={value} />
          ))}
        </div>
      </article>

      <article
        ref={rightColRef}
        className="w-[100%] flex items-end justify-center gap-2 p-6 sm:p-8 md:p-10 md:gap-4 lg:p-12 lg:w-[50%] xl:p-16 opacity-0"
      >
        <div className="w-80 h-80 lg:w-[70%] lg:h-full">
          <APicture src={data.photo.src} alt={data.photo.alt} size="100" />
        </div>
        <div
          ref={socialRef}
          className="flex w-[20%] gap-5 p-4 opacity-0"
        >
          {data.redes.map((red) => (
            <ARed key={red.id} href={red.href} target="_blank">
              <AIcon data={red.icon} />
            </ARed>
          ))}
        </div>
      </article>
    </section>
  );
}
