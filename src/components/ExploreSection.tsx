'use client';

import React from 'react';
import { EXPLORE_IDEAS } from '../data/portfolioData';

export default function ExploreSection() {
  return (
    <section id="explore" className="space-y-8 sm:space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1c335a] pb-3 sm:pb-4 gap-2">
        <div>
          <span className="font-expanded text-[10px] sm:text-xs uppercase tracking-widest text-[#c48956] block mb-1">
            SECTION // 03 — EXPLORE
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#f1f5f9]">
            Psychology, Games &amp; Media
          </h2>
        </div>
        <span className="font-hand text-xl sm:text-2xl text-[#dfa471] rotate-1">
          &ldquo;systems that influence how people choose, remember &amp; unite&rdquo;
        </span>
      </div>

      <div className="space-y-6">
        <p className="font-mono text-xs sm:text-sm text-[#94a3b8] max-w-3xl leading-relaxed">
          Beyond building conventional tools, I explore games and interactive experiences that question human
          behavior: <span className="text-[#f1f5f9] font-bold">What makes an experience meaningful enough that someone returns?</span>{' '}
          How do people cooperate, compete, make irreversible decisions, and understand who they are over time?
        </p>

        {/* Explore Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {EXPLORE_IDEAS.map((idea) => (
            <div key={idea.id} className="brutal-card p-5 sm:p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between border-b border-[#1c335a] pb-2">
                  <span className="text-[10px] font-digital uppercase tracking-wider text-[#38bdf8]">
                    {idea.category}
                  </span>
                  <span className="text-[9px] font-expanded px-2 py-0.5 border border-[#1c335a] text-[#dfa471]">
                    {idea.status}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl sm:text-2xl text-[#f1f5f9] uppercase leading-tight">
                  {idea.title}
                </h3>

                <p className="font-digital text-xs text-[#c48956] font-semibold">{idea.hook}</p>

                <p className="font-mono text-xs text-[#94a3b8] leading-relaxed">{idea.description}</p>
              </div>

              <div className="pt-3 border-t border-[#1c335a] font-hand text-base sm:text-lg text-[#dfa471]">
                // &ldquo;Participation creates the story.&rdquo;
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Documentary & Football Storytelling Showcase */}
      <div className="brutal-card p-5 sm:p-7 md:p-8 bg-gradient-to-r from-[#060b16] via-[#0d1627] to-[#1e130c] border border-[#1c335a] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        <div className="lg:col-span-8 space-y-2.5 sm:space-y-3 font-mono text-xs">
          <div className="flex items-center gap-2 text-[10px] font-digital text-[#c48956] uppercase">
            <i className="fa-solid fa-clapperboard"></i>
            <span>CREATIVE PIPELINE // AI DOCUMENTARIES &amp; FOOTBALL NARRATIVES</span>
          </div>
          <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-[#f1f5f9] uppercase leading-tight">
            The Dramatic Human Canvas of Sport &amp; Cinema
          </h3>
          <p className="text-[#94a3b8] leading-relaxed">
            Investigating production workflows that bridge deep research, scripted narrative beats, AI-assisted
            visual continuity, and original musical scoring. Exploring the tactical psychology of José Mourinho,
            Real Madrid redemption arcs, and the drama that turns athletic contests into timeless human folklore.
          </p>
        </div>

        <div className="lg:col-span-4 p-3.5 sm:p-4 bg-[#050912] border border-[#1c335a] space-y-1.5 font-digital text-[10px] sm:text-[11px]">
          <div className="text-[#38bdf8] font-bold">// WORKFLOW STACK</div>
          <div className="text-[#94a3b8]">• Scriptwriting &amp; Dramatic Arc</div>
          <div className="text-[#94a3b8]">• Image &amp; Scene Consistency</div>
          <div className="text-[#94a3b8]">• FL Studio Custom Score &amp; Foley</div>
          <div className="text-[#94a3b8]">• Human Voiceover &amp; Pacing</div>
        </div>
      </div>
    </section>
  );
}
