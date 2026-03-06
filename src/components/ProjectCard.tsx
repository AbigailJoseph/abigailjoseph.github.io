import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps extends Project {
  onClick: () => void;
}

export default function ProjectCard({
  name,
  description,
  image,
  github,
  demo,
  skills,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex-shrink-0 w-72 h-[420px] bg-white rounded-2xl shadow-sm overflow-hidden border border-[#7f2650]/10 flex flex-col cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-200"
    >
      {/* Image */}
      <div className="w-full h-44 flex-shrink-0 bg-[#7f2650]/8 flex items-center justify-center">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-[#7f2650]/30 text-sm font-medium tracking-wide">
            Project Image
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3 overflow-hidden">
        <h3 className="text-lg font-bold text-[#7f2650] truncate">{name}</h3>
        <p className="text-sm text-[#7f2650]/70 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 overflow-hidden max-h-14">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-[#004e9b]/10 text-[#004e9b] whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Links — stop propagation so clicks don't open modal */}
        <div className="flex gap-4 mt-auto pt-2 border-t border-[#7f2650]/8">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm font-medium text-[#7f2650] hover:text-[#004e9b] transition-colors pt-1"
            >
              <Github size={15} />
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm font-medium text-[#7f2650] hover:text-[#004e9b] transition-colors pt-1"
            >
              <ExternalLink size={15} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
