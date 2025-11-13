"use client";

import { motion } from "framer-motion";

export default function ALoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#101828]">
      <motion.div
        className="h-12 w-12 rounded-full border-4 border-gray-600 border-t-white"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
}
