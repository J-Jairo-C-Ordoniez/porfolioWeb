"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import MCardMetric from "../molecules/mCardMetric";
import MDialog from "../molecules/mDialog";

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
    }, [controls])

    const handleOpen = (metric) => {
        setSelected(metric);
        setOpen(true);
    };

    return (
        <article className="py-20 overflow-x-hidden">
            <motion.div
                className="flex gap-10 w-full"
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

            {selected && (
                <MDialog
                    data={selected}
                    open={open}
                    setOpen={setOpen}
                />
            )}
        </article>
    );
}
