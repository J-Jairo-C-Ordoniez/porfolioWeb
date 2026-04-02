"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "../../../../data/home/About";
import * as Icon from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import CardMetric from "../ui/CardMetric";
import Dialog from "../ui/Dialog";
import Text from "../ui/Text";

gsap.registerPlugin(ScrollTrigger);

export default function SAbout() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const metricRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      if (metricRef.current) {
        const contentWidth = metricRef.current.scrollWidth / 2;
        gsap.set(metricRef.current, { x: 0 });
        tweenRef.current = gsap.to(metricRef.current, {
          x: -contentWidth,
          duration: 40,
          ease: "none",
          repeat: -1,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleOpen = (metric) => {
    setSelected(metric);
    setOpen(true);
  };

  return (
    <section
      ref={containerRef}
      id={data.id}
      className="relative min-h-[calc(100vh-100px)] overflow-x-hidden flex items-center justify-center"
    >
      <div className="container mx-auto py-10 px-4">
        <header
          ref={titleRef}
          className="mb-10 border-b border-primary/10 pb-4"
        >
          <h2 className="text-xl font-medium text-primary tracking-wider uppercase pb-2">
            {data.title}
          </h2>
          <p className="text-xs md:text-sm text-accent font-caps tracking-wider uppercase">{data.subtitle}</p>
        </header>

        <section
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 p-4"
        >
          <article className="flex flex-col gap-8">
            <h3 className="font-sans font-caps text-xs lg:text-sm tracking-wider uppercase text-accent">
              Biografía
            </h3>

            <Text
              text={data.start}
              aling="left"
            />

            <Text
              text={data.professional}
              aling="left"
            />

            <div className="mt-8 flex gap-6">
              {data.redes?.map((red) => {
                const IconComponent = Icon[red.icon];
                return (
                  <Link
                    key={red.id}
                    href={red.href || "#"}
                    target="_blank"
                    className="!p-2 border-none ring-0 bg-transparent hover:text-accent text-primary"
                  >
                    <IconComponent size={20} />
                  </Link>
                );
              })}
            </div>
          </article>

          <article className="flex flex-col gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {data.values?.map((value) => (
                <div
                  key={value.id}
                  className="flex flex-col gap-2"
                >
                  <span className="font-sans font-caps text-xs uppercase tracking-wider text-secondary/60 border-b border-secondary/10 pb-2">
                    {value.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-auto p-10">
              <div className="relative aspect-square w-fit h-fit">
                <Image
                  src={data.photo.src}
                  alt={data.photo.alt}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>
          </article>
        </section>

        {data.metrics && (
          <div className="mt-10 overflow-hidden relative">
            <div
              ref={metricRef}
              className="flex w-max gap-12 px-12"
              onMouseEnter={() => tweenRef.current?.pause()}
              onMouseLeave={() => tweenRef.current?.play()}
            >
              {[...data.metrics, ...data.metrics].map((metric, i) => (
                <CardMetric
                  key={i}
                  data={metric}
                  onClick={() => handleOpen(metric)}
                />
              ))}
            </div>
          </div>
        )}

        {selected && <Dialog
          data={selected}
          open={open}
          setOpen={setOpen}
        />}
      </div>
    </section>
  );
}
