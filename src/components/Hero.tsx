'use client';

import React from 'react';
import Link from 'next/link';
import { useToast } from '../context/ToastContext';

export default function Hero() {
  const { showToast } = useToast();

  const handleCopySpecs = () => {
    const text =
      'Chika Kalu Ukpai (Vokuc) — Software Developer · Digital Product Builder · Musician & Creator | React, Next.js, TypeScript, Supabase, FL Studio, Guitar | chikakaluukpai@gmail.com';
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showToast('Developer & Musician profile specs copied to clipboard.', 'success');
      })
      .catch(() => {
        showToast('Failed to copy profile specs.');
      });
  };

  return (
    <section className="relative pt-4 pb-10 sm:pt-10 sm:pb-16 md:pb-20 border-b border-[#1c335a]">
      {/* Top Identity Eyebrow */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <span className="font-expanded text-[10px] sm:text-xs uppercase tracking-widest text-[#f1f5f9] px-2 sm:px-2.5 py-1 border border-[#1c335a] bg-[#0a1426]">
          PORTFOLIO ARCHIVE // 2026.1
        </span>
        <span className="font-digital text-[11px] sm:text-xs text-[#c48956] tracking-wider">
          [SOFTWARE ARCHITECT × MUSICIAN × DIGITAL BUILDER]
        </span>
      </div>

      {/* Main Headline: Music & Code Marriage */}
      <div className="space-y-3 sm:space-y-4">
        <div className="font-digital text-xs sm:text-sm text-[#38bdf8] uppercase tracking-wider font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#dfa471] animate-ping shrink-0"></span>
          <span className="leading-tight">Software Developer · Digital Product Builder · Musician &amp; Creator</span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-[#f1f5f9] uppercase leading-[1.0] sm:leading-[0.96]">
          Where Clean Code <br className="hidden sm:inline" />
          <span className="text-transparent text-stroke-amber">&amp; Sonic Frequency</span> Meet.
        </h1>

        <div className="relative pt-1 sm:pt-2 pb-2 sm:pb-4">
          <p className="font-mono text-sm sm:text-lg md:text-xl text-[#e2e8f0] max-w-3xl leading-relaxed">
            Building digital products, exploring human behaviour, and creating at the intersection of{' '}
            <span className="text-[#38bdf8] font-bold">technology, music, and ideas</span>. 3+ years engineering
            resilient web applications (<span className="text-[#f1f5f9]">React, Next.js, Angular, TypeScript, Supabase</span>)
            and producing original music on guitar, drums, and FL Studio.
          </p>

          {/* Handwritten Annotation with Arrow */}
          <div className="hidden lg:flex items-center gap-3 absolute right-2 -bottom-8">
            <svg
              className="w-16 h-10 text-[#c48956] transform -rotate-12"
              viewBox="0 0 100 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                d="M10 50 C 40 45, 60 20, 85 15 M 70 8 L 88 14 L 80 30"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="font-hand text-2xl text-[#dfa471] rotate-1">
              &ldquo;civil engineer by training, software builder by trade, musician by heart&rdquo;
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions & Dual Discipline Tallies */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 sm:pt-10 mt-6 sm:mt-8 border-t border-[#1c335a] items-end">
        {/* Quick Action Buttons (Mobile-First Stack / Wrap) */}
        <div className="lg:col-span-7 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
          <Link
            href="#works"
            className="brutal-card-invert px-5 py-3 sm:px-6 sm:py-3.5 font-display font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Products [BUILD]</span>
            <i className="fa-solid fa-arrow-down text-xs"></i>
          </Link>

          <Link
            href="#music"
            className="brutal-card px-5 py-3 sm:px-6 sm:py-3.5 font-digital text-xs sm:text-sm uppercase tracking-wider text-[#f1f5f9] hover:text-[#38bdf8] flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-guitar text-[#dfa471]"></i>
            <span>Sonic Lab [CREATE]</span>
          </Link>

          <button
            type="button"
            onClick={handleCopySpecs}
            className="px-4 py-2.5 sm:py-3 border border-[#1c335a] bg-[#070d18] hover:border-[#dfa471] font-digital text-xs uppercase tracking-wider text-[#94a3b8] hover:text-[#f1f5f9] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-file-code text-[#38bdf8]"></i>
            <span>Copy Bio Specs</span>
          </button>
        </div>

        {/* Metric Badges */}
        <div className="lg:col-span-5 grid grid-cols-3 gap-2 sm:gap-3 text-left">
          <div className="border-l-2 border-[#1c335a] pl-2 sm:pl-3">
            <div className="text-xl sm:text-3xl font-display font-black text-[#f1f5f9]">03+</div>
            <div className="font-digital text-[9px] sm:text-[10px] uppercase text-[#94a3b8] tracking-wider leading-tight">
              Years Dev
            </div>
            <div className="font-hand text-sm sm:text-base text-[#c48956] -mt-0.5">PhreeTech &amp; SaaS</div>
          </div>
          <div className="border-l-2 border-[#1c335a] pl-2 sm:pl-3">
            <div className="text-xl sm:text-3xl font-display font-black text-[#dfa471]">2019</div>
            <div className="font-digital text-[9px] sm:text-[10px] uppercase text-[#94a3b8] tracking-wider leading-tight">
              Producer
            </div>
            <div className="font-hand text-sm sm:text-base text-[#38bdf8] -mt-0.5">FL Studio &amp; Guitar</div>
          </div>
          {/* Gym metric commented out:
          <div className="border-l-2 border-[#1c335a] pl-2 sm:pl-3">
            <div className="text-xl sm:text-3xl font-display font-black text-[#f1f5f9]">180kg</div>
            <div className="font-digital text-[9px] sm:text-[10px] uppercase text-[#94a3b8] tracking-wider leading-tight">
              Deadlift PR
            </div>
            <div className="font-hand text-sm sm:text-base text-[#c48956] -mt-0.5">iron discipline</div>
          </div>
          */}
          <div className="border-l-2 border-[#1c335a] pl-2 sm:pl-3">
            <div className="text-xl sm:text-3xl font-display font-black text-[#f1f5f9]">CIVIL</div>
            <div className="font-digital text-[9px] sm:text-[10px] uppercase text-[#94a3b8] tracking-wider leading-tight">
              Engineering
            </div>
            <div className="font-hand text-sm sm:text-base text-[#c48956] -mt-0.5">structural rigor</div>
          </div>
        </div>
      </div>
    </section>
  );
}
