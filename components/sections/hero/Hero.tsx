"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { ArrowDownRight, Layers } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          // Clear GSAP inline styles after completion so hover animations function properly
          gsap.set(".hero-badge, .hero-title, .hero-subtitle, .hero-cta", {
            clearProps: "all",
          });
        },
      });

      // Stagger entrance for text elements
      tl.from(".hero-badge", {
        opacity: 0,
        y: -20,
        duration: 0.6,
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".hero-cta",
          {
            opacity: 0,
            y: 20,
            scale: 0.95,
            duration: 0.5,
            stagger: 0.15,
          },
          "-=0.3"
        );
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 pt-24 pb-12 overflow-hidden bg-neutral-950"
    >
      {/* Subtle Radial Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[250px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Experience Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-white/10 text-xs font-medium text-cyan-400 mb-8 backdrop-blur-md shadow-inner">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>3D Structural & CAD Specialist</span>
          <span className="w-1 h-1 rounded-full bg-cyan-400/50" />
          <span className="text-neutral-400">6+ Years Exp.</span>
        </div>

        {/* Main Title */}
        <h1 className="hero-title font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
          Precision Engineering in <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-neutral-200 to-cyan-400 bg-clip-text text-transparent">
            3D Structural Space
          </span>
        </h1>

        {/* Punchy Subtitle */}
        <p className="hero-subtitle text-lg sm:text-xl text-neutral-400 max-w-2xl font-normal leading-relaxed mb-10">
          Transforming complex technical blueprints into high-precision execution models.
          Bridging architectural vision and real-world structural integrity.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button
            asChild
            size="lg"
            className="hero-cta w-full sm:w-auto bg-white text-neutral-950 hover:bg-neutral-200 font-semibold px-7 py-6 rounded-xl transition-all shadow-lg shadow-cyan-500/5"
          >
            <a href="#works" className="flex items-center gap-2">
              View Selected Works
              <ArrowDownRight className="w-4 h-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="hero-cta w-full sm:w-auto border-white/10 bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-white/20 px-7 py-6 rounded-xl backdrop-blur-md transition-all"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}