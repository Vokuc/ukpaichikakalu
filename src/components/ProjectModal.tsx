'use client';

import React, { useEffect } from 'react';
import { ProjectSpec } from '../types';

interface ProjectModalProps {
  project: ProjectSpec | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#03060c]/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="brutal-card bg-gradient-to-br from-[#060b16] via-[#0d1627] to-[#1e130c] max-w-2xl w-full p-6 sm:p-8 space-y-6 border-2 border-[#1c335a] shadow-[0_0_30px_rgba(30,58,109,0.3)]"
      >
        <div className="flex items-center justify-between border-b border-[#1c335a] pb-3">
          <div>
            <span className="font-mono text-[10px] text-[#38bdf8] uppercase tracking-wider block">
              // ARCHITECTURE SPECIFICATION
            </span>
            <h3 id="modalTitle" className="font-display font-black text-2xl uppercase text-[#f1f5f9]">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Modal"
            className="text-[#94a3b8] hover:text-[#dfa471] font-mono text-xl p-1 transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="font-mono text-xs sm:text-sm text-[#e2e8f0] space-y-4 leading-relaxed">
          <div className="p-3 bg-[#050912] border border-[#1c335a]">
            <h4 className="text-[#dfa471] font-bold text-sm mb-1 uppercase tracking-wide">
              {project.architectureDetails.title}
            </h4>
            <p className="text-[#94a3b8] text-xs">{project.description}</p>
          </div>

          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-[#c48956] font-bold block">
              Core Engineering Highlights:
            </span>
            <ul className="space-y-2 text-xs">
              {project.architectureDetails.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#38bdf8] mt-0.5 font-bold">▪</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <span className="text-[11px] uppercase tracking-widest text-[#c48956] font-bold block mb-2">
              Technology Matrix:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.architectureDetails.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-[11px] border border-[#1c335a] bg-[#050912] text-[#f1f5f9]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[#1c335a] flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#94a3b8] hover:text-[#dfa471] font-mono text-xs flex items-center gap-1.5 transition-colors"
          >
            <i className="fa-brands fa-github text-sm"></i>
            <span>Inspect Repository</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="brutal-card-invert px-5 py-2 font-mono text-xs uppercase font-bold cursor-pointer"
          >
            Close Spec
          </button>
        </div>
      </div>
    </div>
  );
}
