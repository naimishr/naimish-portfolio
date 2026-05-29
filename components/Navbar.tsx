export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-6 border-b border-gray-800 bg-black/70 backdrop-blur-md">
      
      <h1 className="text-2xl font-bold">
        Naimish
      </h1>

      <div className="flex gap-6 text-sm">
        <a href="#about" className="hover:text-gray-400 transition">
          About
        </a>

        <a href="#projects" className="hover:text-gray-400 transition">
          Projects
        </a>
        
        <a href="/live-projects" className="hover:text-gray-400 transition">
          Live Projects
        </a>

        <a href="#contact" className="hover:text-gray-400 transition">
          Contact
        </a>
      </div>

    </nav>
  );
}