import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
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

    </section>
  );
}