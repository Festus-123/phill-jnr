"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Box, Mail } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Box,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Box,
  },
  {
    name: "Email",
    href: "mailto:contact@example.com",
    icon: Mail,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-neutral-950 text-white border-t border-white/10 pt-16 pb-12 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-heading text-xl font-bold tracking-tight text-white group"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
                <Box className="w-4 h-4" />
              </div>
              <span>
                Phill Jnr<span className="text-cyan-400">.</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              CAD designer CAD/BIM structural modeling specialist focused on
              high-precision 3D web applications and technical structural
              design.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-neutral-800 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <hr className="border-white/5" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Phill Jnr. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-cyan-400 transition-colors group"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
