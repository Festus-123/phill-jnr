"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CheckCircle2, ShieldCheck, Box, Compass } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HIGHLIGHTS = [
  "High-precision 3D structural steel and concrete detailing",
  "Parametric architectural modeling & load optimization",
  "Multi-discipline BIM coordination and Clash Detection",
  "Strict adherence to international ISO structural standards",
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".about-header", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".about-bio",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".about-highlight",
          {
            opacity: 0,
            x: -20,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .from(
          ".about-stat-card",
          {
            opacity: 0,
            y: 30,
            scale: 0.95,
            duration: 0.5,
            stagger: 0.15,
            ease: "back.out(1.4)",
          },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full py-28 px-6 bg-neutral-950 text-white border-t border-white/5 overflow-hidden"
    >
      {/* Background Subtle Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Title & Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Section Sub-heading */}
          <div className="about-header inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>About The Specialist</span>
          </div>

          <h2 className="about-header font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Engineering Precision Where Vision Meets{" "}
            <span className="text-cyan-400">Structural Integrity</span>
          </h2>

          <p className="about-bio text-neutral-400 text-base sm:text-lg leading-relaxed mb-8">
            Specializing in high-precision 3D structural design, parametric modeling, and architectural drafting. With over 6 years of experience transforming complex technical specifications into flawless execution models, I engineer solutions where aesthetic vision meets structural integrity. From high-rise skyscrapers to complex civil infrastructure, precision is the baseline.
          </p>

          {/* Key Capabilities List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
            {HIGHLIGHTS.map((item, index) => (
              <div
                key={index}
                className="about-highlight flex items-start gap-3 p-3 rounded-lg bg-neutral-900/40 border border-white/5"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-neutral-300 font-medium leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Key Metrics & Stat Cards */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">
          <div className="about-stat-card col-span-2 p-6 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
            <div className="absolute right-4 top-4 text-neutral-800 group-hover:text-cyan-500/10 transition-colors">
              <ShieldCheck className="w-16 h-16" />
            </div>
            <span className="block font-heading text-4xl sm:text-5xl font-extrabold text-white mb-1">
              6+
            </span>
            <span className="text-sm font-semibold text-cyan-400 block mb-2">
              Years of Excellence
            </span>
            <p className="text-xs text-neutral-400 leading-normal">
              Continuous practice across structural drafting, BIM coordination, and complex 3D modeling.
            </p>
          </div>

          <div className="about-stat-card p-5 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-md hover:border-white/20 transition-colors">
            <span className="block font-heading text-3xl font-extrabold text-white mb-1">
              100%
            </span>
            <span className="text-xs font-semibold text-neutral-300 block mb-1">
              Precision
            </span>
            <p className="text-[11px] text-neutral-400 leading-tight">
              Zero-clash structural design outputs.
            </p>
          </div>

          <div className="about-stat-card p-5 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-md hover:border-white/20 transition-colors">
            <div className="mb-2 text-cyan-400">
              <Box className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-neutral-300 block mb-1">
              Parametric 3D
            </span>
            <p className="text-[11px] text-neutral-400 leading-tight">
              Advanced CAD & BIM structural workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}