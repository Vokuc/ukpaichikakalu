'use client';

import React from 'react';
// import { FITNESS_STATS } from '../data/portfolioData'; // Preserved for future re-addition

export default function LiveDisciplineSection() {
  return (
    <section id="discipline" className="space-y-8 sm:space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1c335a] pb-3 sm:pb-4 gap-2">
        <div>
          <span className="font-expanded text-[10px] sm:text-xs uppercase tracking-widest text-[#c48956] block mb-1">
            SECTION // 04 — LIVE
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#f1f5f9]">
            Discipline, Engineering &amp; Roots
          </h2>
        </div>
        <span className="font-hand text-xl sm:text-2xl text-[#dfa471] rotate-1">
          &ldquo;civil engineering foundation • software architecture • Soli Deo Gloria&rdquo;
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Civil Engineering Transition & Faith */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-6 font-mono text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
          <div className="brutal-card p-5 sm:p-6 bg-[#060b16] space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between border-b border-[#1c335a] pb-2">
              <span className="font-digital text-[#38bdf8] font-bold text-xs uppercase">
                // CIVIL ENGINEERING TO SOFTWARE ARCHITECTURE
              </span>
              <span className="font-digital text-[#c48956] text-[10px]">2019/2020 GRADUATE</span>
            </div>
            <p>
              My academic background is in <span className="text-[#f1f5f9] font-bold">Civil Engineering</span>.
              Civil engineering taught me structural load distributions, failure mechanics, safety tolerances,
              and material resilience.
            </p>
            <p>
              When I transitioned into software engineering and digital products, those structural instincts stayed.
              I don&apos;t just write code; I construct resilient state machines, load-tested API boundaries, and
              tamper-proof architectures built to withstand real-world stress.
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-gradient-to-r from-[#17100a] to-[#0a1222] border border-[#4a2c1d] space-y-2">
            <span className="font-expanded text-[10px] sm:text-[11px] uppercase tracking-wider text-[#dfa471] font-bold block">
              // FAITH, PURPOSE &amp; CHARACTER
            </span>
            <p className="text-xs text-[#e2e8f0]">
              As a Christian, my faith is lived through practical discipline, integrity, character, and love. I
              believe excellence in craft—whether executing clean code, designing digital platforms, or composing
              music—is an act of stewardship.{' '}
              <span className="font-expanded text-[#dfa471] text-xs font-bold not-italic">SOLI DEO GLORIA.</span>
            </p>
          </div>

          {/* Real-time "NOW" Section */}
          <div className="p-3.5 sm:p-4 bg-[#050912] border border-[#1c335a] space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping shrink-0"></span>
              <span className="font-digital text-xs font-bold uppercase text-[#f1f5f9]">NOW // CURRENT ACTIVE FOCUS</span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#94a3b8]">
              <li>
                <strong className="text-[#c48956] font-digital">Engineering:</strong> Scaling LeaderboardOS tournament mechanics
                &amp; remote client applications.
              </li>
              <li>
                <strong className="text-[#38bdf8] font-digital">Music:</strong> Fingerpicking Stratocaster guitar riffs &amp; live-looping
                arrangements in FL Studio.
              </li>
              {/* Gym / Fitness focus commented out:
              <li>
                <strong className="text-[#dfa471] font-digital">Fitness:</strong> 5-day progressive overload hypertrophy split pushing
                toward 100 kg.
              </li>
              */}
              <li>
                <strong className="text-[#dfa471] font-digital">Systems:</strong> AI agent supervision protocols &amp;
                deterministic state machine workflows.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Engineering Structural Foundations (Replacing Gym PRs) */}
        <div className="lg:col-span-6 space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between border-b border-[#1c335a] pb-2 font-digital text-xs">
            <span className="uppercase text-[#dfa471] font-bold tracking-wider">
              // ENGINEERING &amp; ARCHITECTURAL PRINCIPLES
            </span>
            <span className="text-[#94a3b8] text-[11px]">System Rigor</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="brutal-card p-4 sm:p-5 bg-[#070d18] border border-[#1c335a] space-y-1.5 sm:space-y-2">
              <div className="font-digital text-[10px] text-[#94a3b8] uppercase tracking-wider">Structural Mechanics</div>
              <div className="font-display font-black text-xl sm:text-2xl text-[#dfa471] tracking-tight">
                STATE
              </div>
              <div className="font-digital text-[10px] sm:text-[11px] text-[#38bdf8] font-semibold">Decoupled Layers</div>
              <p className="font-mono text-[10px] text-[#94a3b8] leading-tight">
                Predictable state lifecycles with zero redundant re-renders and clean optimistic UI rollbacks.
              </p>
            </div>

            <div className="brutal-card p-4 sm:p-5 bg-[#070d18] border border-[#1c335a] space-y-1.5 sm:space-y-2">
              <div className="font-digital text-[10px] text-[#94a3b8] uppercase tracking-wider">Load Distribution</div>
              <div className="font-display font-black text-xl sm:text-2xl text-[#dfa471] tracking-tight">
                REALTIME
              </div>
              <div className="font-digital text-[10px] sm:text-[11px] text-[#38bdf8] font-semibold">WebSocket Diffing</div>
              <p className="font-mono text-[10px] text-[#94a3b8] leading-tight">
                Sub-16ms telemetry sync under heavy competition loads with virtualized DOM windowing.
              </p>
            </div>

            <div className="brutal-card p-4 sm:p-5 bg-[#070d18] border border-[#1c335a] space-y-1.5 sm:space-y-2">
              <div className="font-digital text-[10px] text-[#94a3b8] uppercase tracking-wider">Material Resilience</div>
              <div className="font-display font-black text-xl sm:text-2xl text-[#dfa471] tracking-tight">
                SECURITY
              </div>
              <div className="font-digital text-[10px] sm:text-[11px] text-[#38bdf8] font-semibold">Row-Level Security</div>
              <p className="font-mono text-[10px] text-[#94a3b8] leading-tight">
                PostgreSQL RLS guarantees and cryptographic verification preventing unauthorized tamper.
              </p>
            </div>

            <div className="brutal-card p-4 sm:p-5 bg-[#070d18] border border-[#1c335a] space-y-1.5 sm:space-y-2">
              <div className="font-digital text-[10px] text-[#94a3b8] uppercase tracking-wider">Harmonic Rhythm</div>
              <div className="font-display font-black text-xl sm:text-2xl text-[#dfa471] tracking-tight">
                CADENCE
              </div>
              <div className="font-digital text-[10px] sm:text-[11px] text-[#38bdf8] font-semibold">Web Audio &amp; DAW</div>
              <p className="font-mono text-[10px] text-[#94a3b8] leading-tight">
                Studio timing, zero-delay touch responses, and synthesized audio wave mechanics.
              </p>
            </div>
          </div>

          <div className="p-3 sm:p-4 bg-[#091122] border border-[#1c335a] font-digital text-xs text-[#94a3b8] flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
            <span>DISCIPLINE FORMULA:</span>
            <span className="text-[#f1f5f9] font-bold font-expanded text-[10px] sm:text-xs">
              FIRST-PRINCIPLES RIGOR + ITERATIVE COMPOSITION
            </span>
          </div>
        </div>

        {/* =========================================================================
            GYM & BARBELL FITNESS METRICS (COMMENTED OUT - PRESERVED TO RE-ADD LATER)
            =========================================================================
        <div className="lg:col-span-6 space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between border-b border-[#1c335a] pb-2 font-digital text-xs">
            <span className="uppercase text-[#dfa471] font-bold tracking-wider">
              // BARBELL STRENGTH METRICS &amp; PRS
            </span>
            <span className="text-[#94a3b8] text-[11px]">Target: 100 KG</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {FITNESS_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="brutal-card p-4 sm:p-5 bg-[#070d18] border border-[#1c335a] space-y-1.5 sm:space-y-2"
              >
                <div className="font-digital text-[10px] text-[#94a3b8] uppercase tracking-wider">{stat.lift}</div>
                <div className="font-display font-black text-2xl sm:text-4xl text-[#dfa471] tracking-tight">
                  {stat.weight}
                </div>
                <div className="font-digital text-[10px] sm:text-[11px] text-[#38bdf8] font-semibold">{stat.repCount}</div>
                <p className="font-mono text-[10px] text-[#94a3b8] leading-tight">{stat.note}</p>
              </div>
            ))}
          </div>

          <div className="p-3 sm:p-4 bg-[#091122] border border-[#1c335a] font-digital text-xs text-[#94a3b8] flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
            <span>DISCIPLINE FORMULA:</span>
            <span className="text-[#f1f5f9] font-bold font-expanded text-[10px] sm:text-xs">
              PROGRESSIVE OVERLOAD + UNWAVERING CONSISTENCY
            </span>
          </div>
        </div>
        ========================================================================= */}
      </div>
    </section>
  );
}
