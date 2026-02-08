"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { ATitleBold } from "../atoms/Title";
import APicture from "../atoms/Picture";
import AText from "../atoms/Text";
import ARed from "../atoms/Red";
import AIcon from "../atoms/Icon";

export default function MError404({ title, description, isPage }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="m-auto my-10 flex flex-col items-center justify-center overflow-hidden p-10 h-[80vh] w-[80vw]"
    >
      <div className="w-30 h-30">
        <APicture
          src="/404.png"
          alt="Avatar - Error 404"
          size="100"
        />
      </div>

      <ATitleBold
        data={title}
        color="#e0e0e0"
        textAlign="center"
        fontSize="text-md lg:text-xl"
      />

      <AText
        data={description}
        textAlign="center"
      />

      <div className="my-10 flex items-center justify-center rounded-2xl border-2 border-[#00C896] bg-[#00C89615] px-6 py-3 shadow-md">
        <AText data="404" color="#00C896" />
      </div>

      {isPage && (
        <ARed href='/'>
          <AIcon data="ArrowLeft" />
          <AText data="Volver" />
        </ARed>
      )}
    </section>
  );
}
