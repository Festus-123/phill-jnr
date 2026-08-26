"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Wrench, Cpu, CheckSquare } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CAD_TOOLS = [
  { name: "AutoCAD", category: "2D/3D Drafting & Detailing" },
  { name: "Revit", category: "BIM & Structural Modeling" },
  { name: "Fusion 360", category: "Parametric Design & CAM" },
  { name: "SolidWorks", category: "3D Mechanical & Structural Parts" },
  { name: "SketchUp", category: "Conceptual Visualizations" },
  { name: "Autodesk Inventor", category: "3D Digital Prototyping" },
];

const COMPETENCIES = [
  "Structural Steel & Concrete Detailing",
  "Parametric 3D Surface Modeling",
  "BIM Clash Detection & Coordination",
  "Technical Construction Documentation",
  "Finite Element Analysis (FEA) Prep",
  "High-Rise Core & Shaft Modeling",
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".skills-header", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
      }).from(
        ".tool-card",
        {
          opacity: 0,
          y: 25,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "all",
        },
        "-=0.3"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative w-full pt-36 pb-28 px-6 bg-neutral-950 text-white border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="skills-header flex flex-col items-start space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Suite</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight">
            Software & <span className="text-cyan-400">Core Capabilities</span>
          </h2>
          <p className="text-neutral-400 text-base max-w-xl">
            Industry-standard software tools and specialized structural engineering disciplines applied across projects.
          </p>
        </div>

        {/* Primary CAD Software Grid */}
        <div className="space-y-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            Primary CAD & BIM Software
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAD_TOOLS.map((tool, idx) => (
              <div
                key={idx}
                className="tool-card p-5 rounded-xl bg-neutral-900/50 border border-white/10 hover:border-cyan-500/50 hover:bg-neutral-900/80 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {tool.name}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400 group-hover:scale-125 transition-all" />
                </div>
                <span className="text-xs text-neutral-400 block font-medium">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="space-y-6 pt-4 border-t border-white/5">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-cyan-400" />
            Specialized Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {COMPETENCIES.map((item, idx) => (
              <div
                key={idx}
                className="tool-card p-4 rounded-lg bg-neutral-900/30 border border-white/5 text-xs text-neutral-300 flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}