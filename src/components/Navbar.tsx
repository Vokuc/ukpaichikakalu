'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#050912]/95 backdrop-blur-md border-b border-[#1c335a] px-3 sm:px-6 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Monogram */}
        <Link href="#" className="group flex items-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 border border-[#c48956] bg-[#0a1426] flex items-center justify-center font-display font-black text-sm tracking-tighter text-[#dfa471] group-hover:bg-[#dfa471] group-hover:text-[#050912] transition-colors shadow-[2px_2px_0px_#1c335a]">
            CK
          </div>
          <div>
            <span className="font-display font-black tracking-tight text-base sm:text-xl text-[#f1f5f9] block leading-none">
              CHIKA KALU UKPAI
            </span>
            <span className="font-digital text-[11px] sm:text-xs text-[#c48956] tracking-wider block mt-0.5">
              DEV // VOKUC SOUND
            </span>
          </div>
        </Link>

        {/* Desktop Nav: BUILD, CREATE, EXPLORE, LIVE, PROMPT LAB */}
        <nav className="hidden xl:flex items-center gap-6 font-digital text-xs uppercase tracking-wider text-[#94a3b8]">
          <Link href="#works" className="hover:text-[#f1f5f9] transition-colors flex items-center gap-1.5 py-1">
            <span className="text-[#38bdf8]">01.</span> Build
          </Link>
          <Link href="#music" className="hover:text-[#dfa471] transition-colors flex items-center gap-1.5 py-1">
            <span className="text-[#dfa471]">02.</span> Create [Music]
          </Link>
          <Link href="#explore" className="hover:text-[#f1f5f9] transition-colors flex items-center gap-1.5 py-1">
            <span className="text-[#38bdf8]">03.</span> Explore
          </Link>
          <Link href="#discipline" className="hover:text-[#f1f5f9] transition-colors flex items-center gap-1.5 py-1">
            <span className="text-[#dfa471]">04.</span> Live &amp; Roots
          </Link>
          <Link
            href="#promptlab"
            className="hover:text-[#f1f5f9] transition-colors flex items-center gap-1.5 text-[#f1f5f9] font-semibold py-1"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#dfa471] animate-pulse"></span>
            <span className="text-[#c48956]">05.</span> Prompt Lab
          </Link>
          <Link href="#contact" className="hover:text-[#f1f5f9] transition-colors flex items-center gap-1.5 py-1">
            <span className="text-[#38bdf8]">06.</span> Connect
          </Link>
        </nav>

        {/* Status & Quick CTA */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Status Indicator */}
          <div className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1 bg-[#0a1426] border border-[#1c335a] text-[10px] sm:text-[11px] font-digital text-[#e2e8f0]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#dfa471]"></span>
            </span>
            <span className="tracking-tight">Available for Contracts &amp; Roles</span>
          </div>

          <Link
            href="#contact"
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 brutal-card-invert font-display font-bold text-xs uppercase tracking-wider inline-block text-center"
          >
            Connect
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="xl:hidden p-2 text-[#f1f5f9] border border-[#1c335a] bg-[#0a1426] hover:border-[#dfa471] transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-sm`}></i>
          </button>
        </div>
      </div>

      {/* Mobile-First Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden pt-4 pb-3 border-t border-[#1c335a] mt-3 font-digital text-xs uppercase tracking-widest space-y-2.5 bg-[#050912]/98 px-2 animate-in slide-in-from-top-2 duration-150">
          <Link
            href="#works"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 border border-transparent hover:border-[#1c335a] bg-[#0a1426]/50 text-[#94a3b8] hover:text-[#f1f5f9]"
          >
            01. Build (Software &amp; Products)
          </Link>
          <Link
            href="#music"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 border border-[#1c335a] bg-[#140c08]/60 text-[#dfa471] font-bold"
          >
            02. Create (Music &amp; Sonic Lab 🎵)
          </Link>
          <Link
            href="#explore"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 border border-transparent hover:border-[#1c335a] bg-[#0a1426]/50 text-[#94a3b8] hover:text-[#f1f5f9]"
          >
            03. Explore (Psychology, Games &amp; Media)
          </Link>
          <Link
            href="#discipline"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 border border-transparent hover:border-[#1c335a] bg-[#0a1426]/50 text-[#94a3b8] hover:text-[#f1f5f9]"
          >
            04. Live &amp; Roots (Civil Engineering &amp; Faith)
          </Link>
          <Link
            href="#promptlab"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 border border-[#1c335a] bg-[#0a1426] text-[#38bdf8] font-bold"
          >
            05. Prompt Compiler Lab ⚡
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 border border-[#c48956] bg-[#050912] text-[#dfa471] font-bold"
          >
            06. Dispatch Missive / Connect
          </Link>
        </div>
      )}
    </header>
  );
}
