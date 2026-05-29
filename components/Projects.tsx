"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      <h2 className="text-4xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
          />
        ))}

      </div>

    </motion.section>
  );
}