"use client";

import { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  updated_at: string;
};

export default function LiveProjectsPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [sortType, setSortType] = useState("updated");

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

  const sortedRepos = [...repos].sort((a, b) => {
    if (sortType === "alphabet") {
      return a.name.localeCompare(b.name);
    }

    return (
      new Date(b.updated_at).getTime() -
      new Date(a.updated_at).getTime()
    );
  });

  return (
    <main className="bg-black text-white min-h-screen px-6 py-24">

      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">

          <h1 className="text-5xl font-bold">
            Live GitHub Projects
          </h1>

          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3"
          >
            <option value="updated">
              Recently Updated
            </option>

            <option value="alphabet">
              Alphabetical
            </option>
          </select>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {sortedRepos.map((repo) => (
            <div
              key={repo.id}
              className="border border-gray-800 rounded-2xl p-8 hover:border-gray-500 transition"
            >

              <h2 className="text-2xl font-bold mb-4">
                {repo.name}
              </h2>

              <p className="text-gray-400 mb-6">
                {repo.description || "No description available"}
              </p>

              <p className="text-sm text-gray-500 mb-6">
                Last updated:{" "}
                {new Date(repo.updated_at).toLocaleDateString()}
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

      </div>

    </main>
  );
}