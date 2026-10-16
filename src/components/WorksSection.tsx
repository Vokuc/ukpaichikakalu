'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROJECTS } from '../data/portfolioData';
import { ProjectSpec } from '../types';
import ProjectModal from './ProjectModal';

export default function WorksSection() {
  const [activeModalProject, setActiveModalProject] = useState<ProjectSpec | null>(null);

  return (
    <section id="works" className="space-y-8 sm:space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1c335a] pb-3 sm:pb-4 gap-2">
        <div>
          <span className="font-expanded text-[10px] sm:text-xs uppercase tracking-widest text-[#c48956] block mb-1">
            SECTION // 01 — BUILD
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#f1f5f9]">
            Software &amp; Digital Products
          </h2>
        </div>
        <span className="font-hand text-xl sm:text-2xl text-[#dfa471] rotate-1">
          &ldquo;architected for real users &amp; collective participation&rdquo;
        </span>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {/* Project 1: LeaderboardOS */}
        <article className="brutal-card p-5 sm:p-7 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="font-expanded text-[9px] sm:text-[10px] text-[#050912] bg-[#dfa471] px-2 py-0.5 sm:px-2.5 sm:py-1 font-bold">
                {PROJECTS[0].statusBadge}
              </span>
              <span className="font-digital text-[10px] sm:text-xs text-[#38bdf8] uppercase tracking-wider">
                {PROJECTS[0].category}
              </span>
              <span className="font-hand text-lg sm:text-xl text-[#dfa471] font-bold ml-auto hidden sm:inline">
                {PROJECTS[0].marginalia}
              </span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#f1f5f9] uppercase tracking-tight">
              {PROJECTS[0].title}
            </h3>
            <p className="font-digital text-xs text-[#c48956] font-semibold tracking-wide">
              {PROJECTS[0].tagline}
            </p>

            <p className="font-mono text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              {PROJECTS[0].description}
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 font-digital text-[10px] sm:text-[11px]">
              {PROJECTS[0].tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 sm:px-2.5 sm:py-1 border border-[#1c335a] bg-[#070d18] text-[#f1f5f9]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-3 sm:pt-4 border-t border-[#1c335a]">
              <button
                type="button"
                onClick={() => setActiveModalProject(PROJECTS[0])}
                className="brutal-card-invert px-4 py-2 sm:px-5 sm:py-2.5 font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                <span>Architecture Specs</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </button>
              {PROJECTS[0].websiteUrl && (
                <a
                  href={PROJECTS[0].websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 sm:px-4 sm:py-2 border border-[#1c335a] bg-[#070d18] hover:border-[#dfa471] text-[#f1f5f9] font-digital text-xs uppercase transition-all flex items-center gap-1.5"
                >
                  <i className="fa-solid fa-globe text-[#38bdf8]"></i>
                  <span>Live Platform</span>
                </a>
              )}
              <a
                href={PROJECTS[0].githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-[#1c335a] text-[#94a3b8] hover:text-[#f1f5f9] hover:border-[#38bdf8] transition-all min-w-[36px] min-h-[36px] flex items-center justify-center"
                aria-label="GitHub Repository"
              >
                <i className="fa-brands fa-github text-base"></i>
              </a>
            </div>
          </div>

          {/* Right Simulated UI Telemetry */}
          <div className="lg:col-span-5 bg-[#050912] border border-[#1c335a] p-3 sm:p-4 font-digital text-xs">
            <div className="flex items-center justify-between border-b border-[#1c335a] pb-2 mb-2.5 text-[#94a3b8] text-[10px]">
              <span>LEADERBOARD_OS // WS_STREAM: CONNECTED</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping"></span>
                <span className="text-[#38bdf8] font-bold">60.1 FPS</span>
              </span>
            </div>

            <div className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-[11px]">
              <div className="flex justify-between items-center bg-[#0d1627] p-2 border border-[#1c335a]">
                <span className="text-[#f1f5f9] font-bold">#01 Naija League Supercup</span>
                <span className="text-[#dfa471] font-mono font-bold">24 TEAMS</span>
              </div>
              <div className="flex justify-between items-center bg-[#070d18] p-2 border border-[#1c335a]/60 text-[#94a3b8]">
                <span>#02 Lagos Developer Hackathon</span>
                <span className="text-[#e2e8f0] font-mono">180 DEV PTS</span>
              </div>
              <div className="flex justify-between items-center bg-[#070d18] p-2 border border-[#1c335a]/60 text-[#94a3b8]">
                <span>#03 Corporate Sales Sprint Q4</span>
                <span className="text-[#e2e8f0] font-mono">LIVE BRACKET</span>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-dashed border-[#1c335a] text-[9px] sm:text-[10px] text-[#94a3b8] flex justify-between">
              <span>LATENCY: 12ms</span>
              <span className="text-[#dfa471]">TIED-STANDINGS: RESOLVED</span>
            </div>
          </div>
        </article>

        {/* Project 2: WhoDeyLegit */}
        <article className="brutal-card p-5 sm:p-7 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="font-expanded text-[9px] sm:text-[10px] text-[#050912] bg-[#c48956] px-2 py-0.5 sm:px-2.5 sm:py-1 font-bold">
                {PROJECTS[1].statusBadge}
              </span>
              <span className="font-digital text-[10px] sm:text-xs text-[#38bdf8] uppercase tracking-wider">
                {PROJECTS[1].category}
              </span>
              <span className="font-hand text-lg sm:text-xl text-[#dfa471] font-bold ml-auto hidden sm:inline">
                {PROJECTS[1].marginalia}
              </span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#f1f5f9] uppercase tracking-tight">
              {PROJECTS[1].title}
            </h3>
            <p className="font-digital text-xs text-[#c48956] font-semibold tracking-wide">
              {PROJECTS[1].tagline}
            </p>

            <p className="font-mono text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              {PROJECTS[1].description}
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 font-digital text-[10px] sm:text-[11px]">
              {PROJECTS[1].tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 sm:px-2.5 sm:py-1 border border-[#1c335a] bg-[#070d18] text-[#f1f5f9]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-3 sm:pt-4 border-t border-[#1c335a]">
              <button
                type="button"
                onClick={() => setActiveModalProject(PROJECTS[1])}
                className="brutal-card-invert px-4 py-2 sm:px-5 sm:py-2.5 font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                <span>Architecture Specs</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </button>
              {PROJECTS[1].websiteUrl && (
                <a
                  href={PROJECTS[1].websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 sm:px-4 sm:py-2 border border-[#1c335a] bg-[#070d18] hover:border-[#dfa471] text-[#f1f5f9] font-digital text-xs uppercase transition-all flex items-center gap-1.5"
                >
                  <i className="fa-solid fa-shield-halved text-[#38bdf8]"></i>
                  <span>Directory Portal</span>
                </a>
              )}
              <a
                href={PROJECTS[1].githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-[#1c335a] text-[#94a3b8] hover:text-[#f1f5f9] hover:border-[#38bdf8] transition-all min-w-[36px] min-h-[36px] flex items-center justify-center"
                aria-label="GitHub Repository"
              >
                <i className="fa-brands fa-github text-base"></i>
              </a>
            </div>
          </div>

          {/* Right Simulated Trust Engine */}
          <div className="lg:col-span-5 bg-[#050912] border border-[#1c335a] p-3 sm:p-4 font-digital text-xs">
            <div className="flex items-center justify-between border-b border-[#1c335a] pb-2 mb-2.5 text-[#94a3b8] text-[10px]">
              <span>WHODEYLEGIT // SCAM DEFENSE INDEX</span>
              <span className="text-[#38bdf8] font-mono font-bold">CRYPTO_PROOF</span>
            </div>

            <div className="p-3 bg-[#0d1627] border border-[#1c335a] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[#f1f5f9] font-bold text-xs sm:text-sm">@LagosTechHub_Store</span>
                <span className="text-[9px] sm:text-[10px] bg-[#38bdf8] text-[#050912] font-bold px-1.5 py-0.5">
                  LEGIT SCORE 98/100
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#94a3b8]">
                340 verified buyer proofs • 0 fraud claims recorded • Bank CAC identity verified
              </p>
            </div>

            <div className="mt-2.5 font-hand text-base sm:text-lg text-[#dfa471]">
              &ldquo;Solving real Nigerian online trust with software.&rdquo;
            </div>
          </div>
        </article>

        {/* Project 3: Naija Presido */}
        <article className="brutal-card p-5 sm:p-7 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="font-expanded text-[9px] sm:text-[10px] text-[#f1f5f9] bg-[#172d56] px-2 py-0.5 sm:px-2.5 sm:py-1 border border-[#38bdf8] font-bold">
                {PROJECTS[2].statusBadge}
              </span>
              <span className="font-digital text-[10px] sm:text-xs text-[#dfa471] uppercase tracking-wider">
                {PROJECTS[2].category}
              </span>
              <span className="font-hand text-lg sm:text-xl text-[#dfa471] font-bold ml-auto hidden sm:inline">
                {PROJECTS[2].marginalia}
              </span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#f1f5f9] uppercase tracking-tight">
              {PROJECTS[2].title}
            </h3>
            <p className="font-digital text-xs text-[#c48956] font-semibold tracking-wide">
              {PROJECTS[2].tagline}
            </p>

            <p className="font-mono text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              {PROJECTS[2].description}
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 font-digital text-[10px] sm:text-[11px]">
              {PROJECTS[2].tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 sm:px-2.5 sm:py-1 border border-[#1c335a] bg-[#070d18] text-[#f1f5f9]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-3 sm:pt-4 border-t border-[#1c335a]">
              <button
                type="button"
                onClick={() => setActiveModalProject(PROJECTS[2])}
                className="brutal-card-invert px-4 py-2 sm:px-5 sm:py-2.5 font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                <span>Architecture Specs</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </button>
              <Link
                href="#explore"
                className="px-3.5 py-2 sm:px-4 sm:py-2 border border-[#1c335a] bg-[#070d18] hover:border-[#dfa471] text-[#f1f5f9] font-digital text-xs uppercase transition-all flex items-center gap-1.5"
              >
                <span>Read World Concept</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </Link>
            </div>
          </div>

          {/* Right Simulated Virtual Society Clock & State */}
          <div className="lg:col-span-5 bg-[#050912] border border-[#1c335a] p-3 sm:p-4 font-digital text-xs">
            <div className="flex items-center justify-between border-b border-[#1c335a] pb-2 mb-2.5 text-[#94a3b8] text-[10px]">
              <span>NAIJA_PRESIDO // 3D LOW-POLY</span>
              <span className="text-[#dfa471]">DAY 14 // 14:30 PM</span>
            </div>

            <div className="bg-[#070d18] p-2.5 sm:p-3 border border-[#1c335a] space-y-1.5 sm:space-y-2 text-[10px] sm:text-[11px]">
              <div className="flex justify-between text-[#f1f5f9]">
                <span>Active Role:</span>
                <span className="text-[#38bdf8] font-bold">Investigative Journalist</span>
              </div>
              <div className="flex justify-between text-[#94a3b8]">
                <span>Influence Standing:</span>
                <span className="text-[#dfa471]">Tier 4 (Lagos Central)</span>
              </div>
              <div className="flex justify-between text-[#94a3b8]">
                <span>Time Dilation:</span>
                <span>30m Real = 6h Game</span>
              </div>
            </div>

            <div className="mt-2.5 flex justify-between text-[9px] sm:text-[10px] text-[#94a3b8]">
              <span>VIRTUAL SOCIETY</span>
              <span className="text-[#38bdf8]">SUPABASE REALTIME SYNC</span>
            </div>
          </div>
        </article>
      </div>

      <ProjectModal project={activeModalProject} onClose={() => setActiveModalProject(null)} />
    </section>
  );
}
