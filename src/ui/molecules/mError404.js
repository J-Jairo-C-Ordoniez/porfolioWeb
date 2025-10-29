'use client';

import { motion } from "framer-motion";

import { ATitleBold } from "../atoms/aTitle"
import APicture from "../atoms/aPicture"
import AText from "../atoms/aText"

export default function MError404({ title, description }) {
    return (
        <motion.section
            className="w-[60%] flex flex-col justify-center items-center my-10 m-auto p-10 overflow-hidden h-[80vh]"
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }}
        >
            <APicture
                src="/404.png"
                alt="Avatar - Error 404"
                size={20}
            />

            <ATitleBold
                data={title}
                color="#e0e0e0"
                fontSize="1.4rem"
            />

            <AText
                data={description}
            />

            <div className="flex items-center justify-center mt-10 px-6 py-3 rounded-2xl border-2 border-[#00C896] bg-[#00C89615] shadow-md">
                <AText
                    data="404"
                    color="#00C896"
                />
            </div>
        </motion.section>
    )
}