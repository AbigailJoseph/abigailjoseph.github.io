import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#f6eef7] flex items-center justify-center pt-16 px-8"
    >
      <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#7f2650] mb-6 leading-tight">
            Hi, I'm Abigail
          </h1>
          <p className="text-lg text-[#7f2650]/75 leading-relaxed max-w-lg">
            I'm a Computer Science major minoring in Artificial Intelligence at Cornell University. 
            I am passionate about leveraging AI to build tech that changes lives ˚⟡˖ ࣪ Welcome to my portfolio!
          </p>
        </div>

        {/* Photo placeholder */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-[#7f2650]/72 overflow-hidden">
            <Image
              src="/images/AbigailHeadshotcropped.jpg"
              alt="Abigail"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Floating scroll arrow */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 text-[#004e9b] animate-bounce-down"
        aria-label="Scroll to projects"
      >
        <ChevronDown size={36} strokeWidth={1.5} />
      </a>
    </section>
  );
}
