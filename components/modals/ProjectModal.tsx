"use client";

import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Cpu, FileText } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-neutral-900 border-white/10 text-white p-0 overflow-hidden rounded-2xl shadow-2xl">
        {/* Full Image Preview Header */}
        <div className="relative w-full h-64 sm:h-80 bg-neutral-950">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-neutral-950/80 border border-white/10 text-xs font-semibold text-cyan-400 backdrop-blur-md">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <DialogHeader className="text-left space-y-2">
            <DialogTitle className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          <hr className="border-white/10" />

          {/* Scope Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              Structural Scope & Specifications
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.scope.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-neutral-950/50 border border-white/5 text-sm text-neutral-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Software & Tools Applied */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              CAD & BIM Software Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="bg-neutral-950/80 border-white/10 text-neutral-300 px-3 py-1 text-xs"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}