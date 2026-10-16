import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 sm:mt-32 border-t border-[#1c335a] py-8 sm:py-12 bg-[#050912] font-digital text-xs relative z-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap justify-center sm:justify-start">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#dfa471]"></span>
          <span className="font-display font-black text-[#f1f5f9] uppercase tracking-tight text-sm sm:text-base">
            CHIKA KALU UKPAI
          </span>
          <span className="text-[#38bdf8] text-[10px]">/ VOKUC SOUND</span>
          <span className="text-[#94a3b8] text-[10px]">/ 2026</span>
        </div>

        <div className="text-[11px] text-[#94a3b8] text-center">
          Engineered with Next.js, Web Audio API, TypeScript &amp; Civil Engineering Rigor.
          <span className="block text-[11px] sm:text-xs text-[#dfa471] font-expanded tracking-widest mt-1">
            SOLI DEO GLORIA
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[#94a3b8]">
          <Link href="#works" className="hover:text-[#f1f5f9] transition-colors py-1">
            Build
          </Link>
          <Link href="#music" className="hover:text-[#dfa471] transition-colors py-1">
            Create [Music]
          </Link>
          <Link href="#explore" className="hover:text-[#f1f5f9] transition-colors py-1">
            Explore
          </Link>
          <Link href="#discipline" className="hover:text-[#f1f5f9] transition-colors py-1">
            Live
          </Link>
          <Link href="#promptlab" className="hover:text-[#38bdf8] transition-colors py-1">
            Prompt Lab
          </Link>
          <Link href="#contact" className="hover:text-[#f1f5f9] transition-colors py-1">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
