"use client";

import { useEffect } from "react";
import { X, Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative w-full h-56 bg-[#7f2650]/8 flex items-center justify-center flex-shrink-0">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-[#7f2650]/30 text-sm font-medium tracking-wide">
              Project Image
            </span>
          )}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[#7f2650] hover:text-[#004e9b] transition-colors shadow-sm"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4 overflow-y-auto max-h-[60vh]">
          <h3 className="text-2xl font-bold text-[#7f2650]">{project.name}</h3>
          <p className="text-sm text-[#7f2650]/75 leading-relaxed whitespace-pre-line">
            {project.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-[#004e9b]/10 text-[#004e9b]"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-2 border-t border-[#7f2650]/8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-[#7f2650] hover:text-[#004e9b] transition-colors pt-2"
              >
                <Github size={15} />
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-[#7f2650] hover:text-[#004e9b] transition-colors pt-2"
              >
                <ExternalLink size={15} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
