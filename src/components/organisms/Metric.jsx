"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import MCardMetric from "../molecules/CardMetric";
import MDialog from "../molecules/Dialog";

export default function OMetric({ data }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const controls = useAnimation();

  const getAnimationProps = () => ({
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  });

  useEffect(() => {
    controls.start(getAnimationProps());
  }, [controls]);

  const handleOpen = (metric) => {
    setSelected(metric);
    setOpen(true);
  };

  return (
    <article className="overflow-hidden py-20 relative">
      <motion.div
        className="flex w-full gap-10"
        animate={controls}
        initial={{ x: 0 }}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => controls.start(getAnimationProps())}
      >
        {[...data, ...data].map((metric, i) => (
          <MCardMetric
            key={i}
            data={metric}
            onClick={() => handleOpen(metric)}
          />
        ))}
      </motion.div>

      {selected && <MDialog data={selected} open={open} setOpen={setOpen} />}
    </article>
  );
}
