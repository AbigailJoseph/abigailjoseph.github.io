"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, Project } from "@/data/projects";

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 336 : -336,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section
        id="projects"
        className="min-h-screen bg-[#f6eef7] flex flex-col items-center justify-center py-20 px-4"
      >
        <h2 className="text-4xl font-bold text-[#7f2650] mb-12">Projects</h2>

        <div className="relative w-full max-w-5xl flex items-center gap-3">
          {/* Left button */}
          <button
            onClick={() => scroll("left")}
            className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#7f2650]/20 text-[#7f2650] hover:border-[#004e9b] hover:text-[#004e9b] flex items-center justify-center transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex items-stretch gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4"
          >
            {projects.map((project) => (
              <div key={project.id} className="snap-start h-full">
                <ProjectCard {...project} onClick={() => setSelected(project)} />
              </div>
            ))}
          </div>

          {/* Right button */}
          <button
            onClick={() => scroll("right")}
            className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#7f2650]/20 text-[#7f2650] hover:border-[#004e9b] hover:text-[#004e9b] flex items-center justify-center transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
