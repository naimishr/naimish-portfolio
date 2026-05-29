import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GithubProjects from "@/components/GithubProjects";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-gray-950 to-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubProjects />
    </main>
  );
}