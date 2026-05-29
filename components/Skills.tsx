"use client";

const skills = [
  "Python",
  "Machine Learning",
  "SQL",
  "TensorFlow",
  "AWS",
  "Git",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Tableau",
  "Cloud Computing",
  "Data Analytics",
  "OpenCV",
  "LightGBM",
  "Vertex AI",
  "Automation",
];

export default function Skills() {
  return (
    <section className="relative overflow-hidden py-24">

      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Skills
        </h2>

        <p className="text-gray-400 text-lg">
          Technologies and tools I work with.
        </p>
      </div>

      <div className="relative overflow-hidden">

        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll hover:[animation-play-state:paused] w-max">

          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="
                mx-3
                px-6
                py-3
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                text-white
                whitespace-nowrap
                shadow-[0_0_20px_rgba(255,255,255,0.05)]
                hover:shadow-[0_0_35px_rgba(255,255,255,0.15)]
                hover:border-white/20
                transition-all
                duration-300
              "
            >
              <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent font-medium tracking-wide">
                {skill}
              </span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}