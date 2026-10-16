'use client';

import React from 'react';
import SoundCodeConsole from './SoundCodeConsole';
import { AUDIO_STEMS } from '../data/portfolioData';

export default function MusicSection() {
  return (
    <section id="music" className="space-y-8 sm:space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1c335a] pb-3 sm:pb-4 gap-2">
        <div>
          <span className="font-expanded text-[10px] sm:text-xs uppercase tracking-widest text-[#c48956] block mb-1">
            SECTION // 02 — CREATE
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#f1f5f9]">
            Sonic Lab &amp; Production
          </h2>
        </div>
        <span className="font-hand text-xl sm:text-2xl text-[#dfa471] rotate-1">
          &ldquo;Vokuc Sound // music and code married in harmony&rdquo;
        </span>
      </div>

      {/* Narrative & Musical Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        <div className="lg:col-span-7 space-y-3 sm:space-y-4 font-mono text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
          <p>
            Outside software engineering, I am a musician and music producer working with{' '}
            <span className="text-[#f1f5f9] font-bold">guitar, church drums, and digital audio workstations</span>.
            I&apos;ve been producing music in <span className="text-[#dfa471] font-semibold">FL Studio</span> since
            2019 under the sonic moniker <span className="text-[#38bdf8] font-bold">Vokuc Sound</span>.
          </p>
          <p>
            Software requires logic, modular architecture, and predictable systems. Music gives me rhythm, soul,
            improvisation, and raw emotional resonance. When both disciplines intersect, software gains a human
            tempo and music benefits from systematic engineering rigor.
          </p>
          <div className="p-3.5 sm:p-4 bg-gradient-to-r from-[#0a1426] to-[#1e130c] border border-[#1c335a] space-y-1.5 sm:space-y-2">
            <span className="font-digital text-[10px] sm:text-[11px] uppercase tracking-wider text-[#c48956] font-bold block">
              // LIVE LOOPING &amp; GEAR SETUP
            </span>
            <p className="text-xs text-[#e2e8f0]">
              Currently building a live-looping setup combining electric guitar, drum pads, Focusrite Solo
              interface, OBS streaming pipeline, and Boss RC-505 mkII workflow for real-time sound layering and
              interactive musical storytelling.
            </p>
          </div>
        </div>

        {/* Vinyl / Equalizer Graphic Card */}
        <div className="lg:col-span-5 brutal-card p-4 sm:p-6 flex flex-row items-center justify-between gap-4 bg-[#060b16]">
          <div className="space-y-2 sm:space-y-3">
            <div className="font-digital text-[10px] uppercase tracking-widest text-[#c48956]">AUDIO SPEC // 2026</div>
            <div className="font-display font-black text-xl sm:text-2xl text-[#f1f5f9] uppercase leading-tight">
              VOKUC <br />
              SOUNDS
            </div>
            <div className="font-digital text-[11px] text-[#94a3b8]">
              • Acoustic &amp; Electric Guitar <br />
              • Live Gospel &amp; Afro Drums <br />
              • FL Studio DAW &amp; Sound Design
            </div>
            {/* Equalizer Bars Simulation */}
            <div className="flex items-end gap-1.5 h-7 sm:h-8 pt-1 sm:pt-2">
              {[40, 80, 60, 100, 70, 90, 50, 85, 65, 95].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }}
                  className="w-1.5 bg-gradient-to-t from-[#1e3a6d] to-[#dfa471] eq-bar rounded-xs"
                />
              ))}
            </div>
          </div>

          {/* Vinyl Graphic Motif */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-[#1c335a] bg-gradient-to-tr from-[#050912] via-[#141b2b] to-[#25150d] flex items-center justify-center shadow-lg relative shrink-0 animate-vinyl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#c48956] border-2 border-[#f1f5f9] flex items-center justify-center text-[7px] sm:text-[8px] font-expanded font-bold text-[#050912] text-center uppercase tracking-tight">
              VOKUC 33
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Web Audio Synthesizer Console */}
      <SoundCodeConsole />

      {/* Production Stems Matrix */}
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between border-b border-[#1c335a] pb-2">
          <span className="font-digital text-xs uppercase tracking-wider text-[#94a3b8]">
            // RECENT STEM ARCHIVES &amp; COMPOSITIONS
          </span>
          <span className="font-digital text-[10px] sm:text-[11px] text-[#c48956]">4 Tracks Cataloged</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {AUDIO_STEMS.map((stem) => (
            <div
              key={stem.id}
              className="p-3.5 sm:p-4 bg-[#070d18] border border-[#1c335a] hover:border-[#dfa471] transition-all space-y-1.5 sm:space-y-2 text-xs"
            >
              <div className="flex items-center justify-between text-[10px] font-digital text-[#94a3b8]">
                <span className="uppercase text-[#38bdf8] font-bold">[{stem.category}]</span>
                <span className="text-[#c48956]">{stem.bpm} BPM</span>
              </div>
              <h4 className="font-display font-bold text-sm text-[#f1f5f9]">{stem.name}</h4>
              <div className="font-digital text-[10px] sm:text-[11px] text-[#dfa471]">Key: {stem.key}</div>
              <p className="font-mono text-[11px] text-[#94a3b8] leading-relaxed">{stem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
