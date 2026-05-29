"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
  <motion.section
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="flex flex-col items-center justify-center text-center h-[85vh] px-6"
  >

    <p className="text-gray-400 mb-4">
      Data Science • AI • Cloud • Python
    </p>

    <h1 className="text-6xl md:text-8xl font-bold mb-6">
      Naimish Rajbhar
    </h1>

    <p className="max-w-2xl text-gray-300 text-lg leading-relaxed">
      Building intelligent systems, automation workflows,
      and modern AI-powered experiences.
    </p>

  </motion.section>
);
}