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
  "Data Analytics"
];

export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">

      <h2 className="text-4xl font-bold mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-gray-800 rounded-2xl p-6 hover:border-gray-500 transition"
          >
            <p className="text-lg text-gray-300">
              {skill}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}