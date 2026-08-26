"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import ProjectModal from "@/components/modals/ProjectModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Works() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      // Ensure clean initial setup without layout flickering
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".works-header", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
      }).from(
        ".project-card",
        {
          opacity: 0,
          y: 40,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "all", // Clear inline GSAP styles after animation completes
        },
        "-=0.3",
      );
    },
    { scope: containerRef },
  );

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section
      ref={containerRef}
      id="works"
      className="relative w-full pt-36 pb-28 px-6 bg-neutral-950 text-white border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="works-header flex flex-col items-start space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Selected Projects</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight">
            Featured 3D <span className="text-cyan-400">Structural Works</span>
          </h2>
          <p className="text-neutral-400 text-base max-w-xl">
            A showcase of complex architectural, high-rise, and structural
            engineering models built with extreme precision.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.slug}
              onClick={() => handleOpenModal(project)}
              className="project-card group cursor-pointer rounded-2xl bg-neutral-900/40 border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Image Container */}
              <div className="relative w-full aspect-4/3 bg-neutral-900 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-neutral-950/30 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-neutral-950/70 border border-white/10 flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-400 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Text Meta */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-neutral-800 text-[10px] font-medium text-neutral-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
