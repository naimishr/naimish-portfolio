"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-6"
    >
      {/* Small Intro */}
      <p className="text-gray-400 tracking-[0.3em] uppercase text-sm mb-6">
        AI • Data Science • Cloud • Automation
      </p>

      {/* Main Heading */}
      <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
        <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
          Naimish
        </span>

        <br />

        <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.35)]">
          Rajbhar
        </span>
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed">
        Building intelligent systems, cinematic digital experiences,
        and AI-powered workflows using modern technologies.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <a
          href="#projects"
          className="px-8 py-4 rounded-2xl bg-white text-black font-medium hover:scale-105 transition duration-300"
        >
          View Projects
        </a>

        <a
          href="/live-projects"
          className="px-8 py-4 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-300"
        >
          Live GitHub
        </a>
      </div>

      {/* Terminal Panel */}
      <div className="mt-14 w-full max-w-2xl border border-white/10 bg-black/40 backdrop-blur-xl rounded-3xl p-6 text-left shadow-[0_0_40px_rgba(255,255,255,0.03)]">

        {/* Terminal Dots */}
        <div className="flex gap-2 mb-5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Terminal Content */}
        <div className="space-y-3 font-mono text-sm md:text-base">
          <p className="text-green-400">
            &gt; Initializing intelligent systems...
          </p>

          <p className="text-gray-400">
            Python • Machine Learning • React • Cloud
          </p>

          <p className="text-gray-500">
            Status: Building scalable AI-powered experiences
          </p>
        </div>
      </div>
    </motion.section>
  );
}