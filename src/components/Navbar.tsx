import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#f6eef7]/90 backdrop-blur-sm border-b border-[#7f2650]/10">
      <div className="flex gap-6">
        <a
          href="#about"
          className="text-[#7f2650] font-medium hover:text-[#004e9b] transition-colors"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-[#7f2650] font-medium hover:text-[#004e9b] transition-colors"
        >
          Projects
        </a>
      </div>
      <div className="flex gap-4 items-center">
        <a
          href="https://github.com/AbigailJoseph"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7f2650] hover:text-[#004e9b] transition-colors"
          aria-label="GitHub"
        >
          <Github size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/abigail-joseph-098b76284/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7f2650] hover:text-[#004e9b] transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={22} />
        </a>
      </div>
    </nav>
  );
}
