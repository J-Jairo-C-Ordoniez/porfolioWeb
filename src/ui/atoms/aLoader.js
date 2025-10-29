"use client";

import { motion } from "framer-motion";

export default function ALoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#121212] z-50">
      <motion.div
        className="w-12 h-12 rounded-full border-4 border-gray-600 border-t-white"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
}