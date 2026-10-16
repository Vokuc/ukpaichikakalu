import React from 'react';

export default function PhilosophySection() {
  const tenets = [
    {
      id: 'TENET_01',
      domain: 'UI CADENCE & STATE',
      title: 'Predictable State,\nInstant Cadence',
      description:
        'Every rendering cycle is intentional, just like locking a kick drum into the pocket. I eliminate redundant client re-renders with granular memoization, optimistic DOM updates, and decoupled data layers.',
      quote: '// "If the UI flickers or drops tempo, the architecture is broken."',
      highlightColor: 'text-[#38bdf8]',
    },
    {
      id: 'TENET_02',
      domain: 'SYSTEMS & PARTICIPATION',
      title: 'Collective Systems\n& Emergence',
      description:
        'Whether designing LeaderboardOS or Naija Presido, I build software as an interactive ecosystem where people compete, build trust, and form communities. Software is a medium for human participation.',
      quote: '// "Design the structure cleanly; let human connection create the music."',
      highlightColor: 'text-[#dfa471]',
    },
    {
      id: 'TENET_03',
      domain: 'ENGINEERING MECHANICS',
      title: 'Civil Engineering\nRigor & Resilience',
      description:
        'Rooted in civil engineering mechanics: analyzing structural load distributions, stress tolerances, and edge-case failure boundaries before deployment. Build incremental foundations that scale without rewrites.',
      quote: '// "Measure twice, architect once, ship with unshakeable integrity."',
      highlightColor: 'text-[#c48956]',
    },
  ];

  return (
    <section id="about" className="space-y-8 sm:space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1c335a] pb-3 sm:pb-4 gap-2">
        <div>
          <span className="font-expanded text-[10px] sm:text-xs uppercase tracking-widest text-[#c48956] block mb-1">
            FOUNDATIONS // TENETS
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#f1f5f9]">
            Architectural Tenets
          </h2>
        </div>
        <span className="font-hand text-xl sm:text-2xl text-[#dfa471] rotate-1">
          &ldquo;how I construct products and compose code&rdquo;
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {tenets.map((tenet) => (
          <div key={tenet.id} className="brutal-card p-5 sm:p-6 flex flex-col justify-between relative group">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between border-b border-[#1c335a] pb-2.5 sm:pb-3">
                <span className={`font-digital text-xs tracking-widest font-bold ${tenet.highlightColor}`}>
                  {tenet.id}
                </span>
                <span className="font-expanded text-[9px] sm:text-[10px] px-2 py-0.5 border border-[#1c335a] text-[#e2e8f0]">
                  {tenet.domain}
                </span>
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#f1f5f9] uppercase whitespace-pre-line leading-tight">
                {tenet.title}
              </h3>
              <p className="font-mono text-xs text-[#94a3b8] leading-relaxed">{tenet.description}</p>
            </div>
            <div className="pt-4 sm:pt-6 font-hand text-lg sm:text-xl text-[#dfa471] border-t border-[#1c335a]/80 mt-4 sm:mt-6">
              {tenet.quote}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
