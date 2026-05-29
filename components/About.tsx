"use client";

import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
         viewport={{ once: true }}
    >
      
      <h2 className="text-4xl font-bold mb-10">
        About Me
      </h2>

      <div className="space-y-6 text-gray-300 text-lg leading-relaxed">

        <p>
          I am a Computer Science graduate specializing in
          Data Science, passionate about building intelligent
          systems, automation workflows, and modern web experiences.
        </p>

        <p>
          My work focuses on Python, Machine Learning,
          Cloud Computing, AI applications, and data-driven solutions.
        </p>

        <p>
          I enjoy transforming ideas into scalable digital products
          while continuously learning modern technologies and development workflows.
        </p>

      </div>

    </motion.section>
  );
}