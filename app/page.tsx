import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import BackgroundEffects from "@/components/BackgroundEffects";
export default function Home() {
  return (
    <main className="bg-linear-to-b from-black via-gray-950 to-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <BackgroundEffects />
    </main>
  );
}