export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
      
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

        <a href="#contact" className="hover:text-gray-400 transition">
          Contact
        </a>
      </div>

    </nav>
  );
}