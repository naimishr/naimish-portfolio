type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
}: ProjectCardProps) {
  return (
    <div className="border border-gray-800 rounded-2xl p-8 hover:border-gray-500 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        {tech.map((item) => (
          <span
            key={item}
            className="text-sm border border-gray-700 px-3 py-1 rounded-full text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        className="inline-block text-white border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
      >
        View Project
      </a>

    </div>
  );
}