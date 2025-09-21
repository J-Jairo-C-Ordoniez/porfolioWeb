import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.section
      className="w-full min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-20 gap-10"
      style={{ backgroundColor: "#121212" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col gap-6 w-full md:w-1/2 animate-pulse">
        <div className="h-10 w-3/4 bg-gray-700 rounded-md" />
        <div className="h-10 w-1/2 bg-gray-700 rounded-md" />
        <div className="h-6 w-1/3 bg-gray-700 rounded-md" />
        <div className="flex flex-col gap-3 mt-4">
          <div className="h-4 w-full bg-gray-700 rounded-md" />
          <div className="h-4 w-5/6 bg-gray-700 rounded-md" />
          <div className="h-4 w-3/4 bg-gray-700 rounded-md" />
        </div>

        <div className="flex gap-4 mt-6">
          <div className="h-10 w-32 bg-gray-700 rounded-full" />
          <div className="h-10 w-32 bg-gray-700 rounded-full" />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center animate-pulse">
        <div className="w-60 h-80 bg-gray-700 rounded-xl" />
      </div>
    </motion.section>
  );
}
