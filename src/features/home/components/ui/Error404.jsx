"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "./Text";
import gsap from "gsap";

export default function Error404({ title, description, isPage }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power4.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="m-auto flex flex-col items-center justify-center p-8 lg:p-12 min-h-[calc(100vh-400px)] w-full"
    >
      <div className="w-40 h-40">
        <Image
          src="/404.png"
          alt="Avatar - Error 404"
          width={400}
          height={400}
        />
      </div>

      <div className="space-y-4 max-w-xl">
        <h2 className="text-center text-primary/90 text-xl lg:text-2xl uppercase tracking-wider font-semibold">
          {title}
        </h2>

        <Text
          text={description}
          className="opacity-70 leading-relaxed"
        />
      </div>

      <div className="my-8 flex items-center justify-center rounded-none border border-primary/5 bg-primary/900 px-10 py-4">
        <span className="font-sans font-black text-5xl lg:text-7xl tracking-wider text-accent/20">
          404
        </span>
      </div>

      {isPage && (
        <div className="mt-8">
          <Link href='/' className="!px-10 !py-5 bg-accent hover:bg-accent-secondary !text-bg-dark border-none transition-all uppercase tracking-widest text-xs font-bold">
            <span>Regresar</span>
          </Link>
        </div>
      )}
    </section>
  );
}
