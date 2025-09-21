"use client";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import CardMetric from "../molecules/CardMetric";
import Dialog from "../molecules/Dialog";

export default function Metrics({ metrics }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(false);
    const controls = useAnimation();

    const handleOpen = (metric) => {
        setSelected(metric);
        setOpen(true);
    };

    return (
        <section className="py-20 text-white overflow-x-hidden">
            <motion.div
                className="flex gap-10"
                animate={controls}
                initial={{ x: 0 }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30, 
                        ease: "linear",
                    },
                }}
                onMouseEnter={() => controls.stop()}
                onMouseLeave={() =>
                    controls.start({
                        x: ["0%", "-50%"], 
                    })
                }
                style={{ width: "max-content" }}
            >
                {[...metrics, ...metrics].map((metric, i) => (
                    <div
                        key={i}
                        className="shrink-0 cursor-pointer"
                        onClick={() => handleOpen(metric)}
                    >
                        <CardMetric metric={metric} />
                    </div>
                ))}
            </motion.div>

            {selected && (
                <Dialog dialog={selected} open={open} setOpen={setOpen} />
            )}
        </section>
    );
}