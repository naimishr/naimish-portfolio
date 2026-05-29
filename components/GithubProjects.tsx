"use client";

import { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

export default function GithubProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(
        "https://api.github.com/users/naimishr/repos"
      );

      const data = await response.json();

      setRepos(data);
    }

    fetchRepos();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      <h2 className="text-4xl font-bold mb-12">
        Live GitHub Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {repos.slice(0, 6).map((repo) => (
          <div
            key={repo.id}
            className="border border-gray-800 rounded-2xl p-8 hover:border-gray-500 transition"
          >

            <h3 className="text-2xl font-bold mb-4">
              {repo.name}
            </h3>

            <p className="text-gray-400 mb-6">
              {repo.description || "No description available"}
            </p>

            <a
              href={repo.html_url}
              target="_blank"
              className="inline-block border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              View Repository
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}