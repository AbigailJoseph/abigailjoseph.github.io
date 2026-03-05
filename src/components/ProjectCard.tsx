import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

export default function ProjectCard({
  name,
  description,
  image,
  github,
  demo,
  skills,
}: Project) {
  return (
    <div className="flex-shrink-0 w-72 md:w-80 bg-white rounded-2xl shadow-sm overflow-hidden border border-[#7f2650]/10 flex flex-col">
      {/* Image */}
      <div className="w-full h-44 bg-[#7f2650]/8 flex items-center justify-center">
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
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="text-xl font-bold text-[#7f2650]">{name}</h3>
        <p className="text-sm text-[#7f2650]/70 leading-relaxed flex-1">
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-[#004e9b]/10 text-[#004e9b]"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-1 border-t border-[#7f2650]/8">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-[#7f2650] hover:text-[#004e9b] transition-colors pt-2"
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
              className="flex items-center gap-1.5 text-sm font-medium text-[#7f2650] hover:text-[#004e9b] transition-colors pt-2"
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
