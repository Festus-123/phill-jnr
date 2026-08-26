"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Hexagon } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Skillset", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-950/80 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-all">
            <Hexagon className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-white text-lg tracking-tight leading-none">
              Phill<span className="text-cyan-400">.</span>Jnr
            </span>
            <span className="text-[10px] text-neutral-400 font-medium tracking-wider uppercase mt-0.5">
              Structural 3D
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-900/60 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Call To Action */}
        <div className="hidden md:flex items-center">
          <Button
            asChild
            size="sm"
            className="bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-white/10 hover:border-white/20 text-xs font-semibold px-4 py-2 rounded-lg transition-all"
          >
            <a href="#contact">Hire Specialist</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-950/95 border-b border-white/10 backdrop-blur-xl px-6 py-6 flex flex-col gap-4 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-neutral-300 hover:text-cyan-400 py-2 border-b border-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold text-xs py-2.5 mt-2 rounded-lg"
          >
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Hire Specialist
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}