import React from 'react';

export default function ArsenalSection() {
  const stackCategories = [
    {
      title: '01. Frontend Systems',
      tag: '[CORE ENGINE]',
      items: [
        {
          name: 'React 18 / 19 & Next.js',
          sub: 'App Router, Server Components, Edge SSR, Route Handlers',
          badge: 'daily',
          badgeHighlight: true,
        },
        {
          name: 'TypeScript',
          sub: 'Strict Generics, Discriminated Unions, Zero any',
          badge: 'essential',
          badgeHighlight: true,
        },
        {
          name: 'Angular & NgRx',
          sub: 'Enterprise component architectures, RxJS reactive streams',
          badge: 'proficient',
          badgeHighlight: false,
        },
        {
          name: 'Tailwind CSS & Radix UI',
          sub: 'Design token systems, accessible headless primitives',
          badge: 'fast',
          badgeHighlight: false,
        },
        {
          name: 'UI Libraries & Templating',
          sub: 'Bootstrap, Material UI, Liquid, EJS, HTML5 Canvas',
          badge: 'fluent',
          badgeHighlight: false,
        },
      ],
    },
    {
      title: '02. Backend, Data & AI',
      tag: '[DATA & LOGIC]',
      items: [
        {
          name: 'Supabase & PostgreSQL',
          sub: 'Row Level Security (RLS), Realtime sockets, migrations',
          badge: 'production',
          badgeHighlight: true,
        },
        {
          name: 'REST APIs & Node.js',
          sub: 'Express, async event loops, JSON contracts, Edge workers',
          badge: 'active',
          badgeHighlight: false,
        },
        {
          name: 'Firebase & Auth Systems',
          sub: 'Google OAuth, magic links, session tokens, Firestore',
          badge: 'solid',
          badgeHighlight: false,
        },
        {
          name: 'Structured System Prompts',
          sub: 'Deterministic schema bounding, XML delimiters, Zod',
          badge: 'mastered',
          badgeHighlight: true,
        },
        {
          name: 'AI Agent Supervision',
          sub: 'Architectural constraint steering, step-by-step builds',
          badge: 'workflow',
          badgeHighlight: false,
        },
      ],
    },
    {
      title: '03. Sonic Lab & Tooling',
      tag: '[CREATIVE & OPS]',
      items: [
        {
          name: 'FL Studio DAW',
          sub: 'Beat production, mixing, acoustic mastering, VST routing',
          badge: 'since 2019',
          badgeHighlight: true,
        },
        {
          name: 'Guitar & Drums',
          sub: 'Stratocaster fingerpicking, church acoustic pocket & groove',
          badge: 'live',
          badgeHighlight: true,
        },
        {
          name: 'Git & CLI Fluency',
          sub: 'Atomic commits, interactive rebase, bash / powershell',
          badge: 'habit',
          badgeHighlight: false,
        },
        {
          name: 'Vercel & Cloudflare',
          sub: 'CI/CD pipelines, custom DNS, edge caching, ISR',
          badge: 'deploy',
          badgeHighlight: false,
        },
        {
          name: 'Audio Gear & OBS',
          sub: 'Focusrite Solo, DroidCam streaming, live-looping pedalboards',
          badge: 'studio',
          badgeHighlight: false,
        },
      ],
    },
  ];

  return (
    <section id="stack" className="space-y-8 sm:space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1c335a] pb-3 sm:pb-4 gap-2">
        <div>
          <span className="font-expanded text-[10px] sm:text-xs uppercase tracking-widest text-[#c48956] block mb-1">
            ARSENAL // ECOSYSTEM
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#f1f5f9]">
            Full Production Arsenal
          </h2>
        </div>
        <span className="font-digital text-[11px] sm:text-xs text-[#94a3b8] uppercase tracking-wider">
          Software engineering + sonic creative tools
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {stackCategories.map((cat, idx) => (
          <div key={idx} className="brutal-card p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between border-b border-[#1c335a] pb-2.5 sm:pb-3">
              <h3 className="font-display font-black text-lg sm:text-xl uppercase text-[#f1f5f9]">{cat.title}</h3>
              <span className="font-digital text-[10px] text-[#38bdf8]">{cat.tag}</span>
            </div>

            <div className="space-y-2.5 sm:space-y-3.5 font-mono text-xs">
              {cat.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="p-2.5 sm:p-3 bg-[#050912]/90 border border-[#1c335a] flex items-center justify-between hover:border-[#dfa471] transition-colors"
                >
                  <div className="pr-2">
                    <span className="font-display font-bold text-xs sm:text-sm text-[#f1f5f9] block leading-tight">
                      {item.name}
                    </span>
                    <span className="text-[#94a3b8] text-[10px] sm:text-[11px] leading-tight block mt-0.5">
                      {item.sub}
                    </span>
                  </div>
                  <span
                    className={`font-digital text-xs shrink-0 px-1.5 py-0.5 border ${
                      item.badgeHighlight
                        ? 'border-[#dfa471] text-[#dfa471] font-bold bg-[#140c08]'
                        : 'border-[#1c335a] text-[#94a3b8]'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
