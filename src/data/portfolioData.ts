import { PromptParadigm, ProjectSpec, AudioStem, /* FitnessMilestone, */ IdeaConcept } from '../types';

export const PARADIGM_BLUEPRINTS: Record<string, PromptParadigm> = {
  strict_json: {
    id: 'strict_json',
    title: 'Strict JSON Contract',
    subtitle: 'Zero markdown hallucinations, strict RFC 8259 typings',
    template: (intent: string, useXml: boolean) => {
      if (useXml) {
        return `<system_contract>
You are an authoritative deterministic engineering system.
You MUST output strictly conformant RFC 8259 JSON and nothing else.
No markdown backticks, no conversational preface.
</system_contract>

<interface_definition>
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "status": "SUCCESS" | "FAILED",
  "artifact": {
    "moduleName": string,
    "stateContract": Record<string, unknown>,
    "transitions": Array<{ "from": string, "to": string, "guard": string }>
  },
  "errorProofChecks": string[]
}
</interface_definition>

<execution_intent>
${intent}
</execution_intent>`;
      }
      return `You are an authoritative deterministic engineering compiler.
Output valid JSON only with no surrounding text or commentary.
Target Requirement: ${intent}

Response format:
{
  "outcome": "VALIDATED",
  "spec": { ... },
  "checks": [ ... ]
}`;
    },
  },
  cot_reasoning: {
    id: 'cot_reasoning',
    title: 'Chain-of-Thought (CoT) Plan',
    subtitle: 'Multi-stage architectural reasoning & lifecycle planning',
    template: (intent: string, useXml: boolean) => {
      if (useXml) {
        return `<system_directive>
You are a Principal Software Architect & Systems Arranger.
Before emitting implementation code, execute a first-principles structural reasoning pass.
</system_directive>

<reasoning_steps>
1. Harmonic Architecture: Identify state bottlenecks & race conditions.
2. Cadence & Lifecycle: Formulate explicit memory and state lifecycle.
3. Production Tuning: Validate deterministic typing and error boundary contracts.
</reasoning_steps>

<task>
${intent}
</task>`;
      }
      return `Act as a Principal Software Architect. 
Analyze the following challenge using first-principles step-by-step reasoning before providing the concrete TypeScript architecture:
Requirement: ${intent}`;
    },
  },
  defensive_audit: {
    id: 'defensive_audit',
    title: 'Defensive Code Auditor',
    subtitle: 'Concurrency, security vulnerability & state-leakage inspection',
    template: (intent: string, useXml: boolean) => {
      if (useXml) {
        return `<auditor_profile>
You are a ruthless defensive security and concurrency auditor.
Your goal is to break the implementation by finding edge cases, state leakage, and unauthorized transitions.
</auditor_profile>

<audit_protocol>
- Inspect for XSS, CSRF, and injection vectors.
- Audit async race conditions & unhandled promise rejections.
- Ensure all token lifecycles are cryptographically verified.
</audit_protocol>

<code_or_design_under_test>
${intent}
</code_or_design_under_test>`;
      }
      return `Perform a zero-trust defensive code audit on:
${intent}
Provide prioritized severity findings (CRITICAL, HIGH, MEDIUM) and direct code remedies.`;
    },
  },
};

export const PROJECTS: ProjectSpec[] = [
  {
    id: 'LeaderboardOS',
    title: 'LeaderboardOS',
    tagline: 'The Operating System for Competitive Tournaments & Leagues',
    category: 'SAAS & COMPETITION MANAGEMENT',
    marginalia: '// "organizing competition at 60fps"',
    statusBadge: 'ACTIVE PRODUCT',
    description:
      "A competition-management platform built to help organizers create leaderboards, run leagues and tournaments, and manage competitive experiences without building custom software from scratch. Engineered for football competitions, esports, community tournaments, and corporate contests.",
    tags: ['React 19', 'Next.js', 'TypeScript', 'WebSockets', 'Tailwind CSS', 'Supabase'],
    websiteUrl: 'https://leaderboardos.com',
    githubUrl: 'https://github.com',
    architectureDetails: {
      title: 'TECHNICAL ARCHITECTURE: LEADERBOARD OS',
      highlights: [
        'Real-time Standings: WebSocket synchronization using compressed diff payloads for instant standings updates during live match events.',
        'Dynamic Tournament Engine: Bracket generator supporting round-robin, single-elimination, double-elimination, and hybrid league stages.',
        'Modular Scoring Matrix: Customizable point systems, tiebreaker rules, and multi-tenant permission controls for organizers.',
      ],
      stack: ['React 19 / Next.js', 'TypeScript Strict Mode', 'Supabase Realtime', 'Tailwind CSS', 'PostgreSQL'],
    },
  },
  {
    id: 'WhoDeyLegit',
    title: 'WhoDeyLegit',
    tagline: 'Consumer Trust & Vendor Verification Shield for African Online Commerce',
    category: 'TRUST TECHNOLOGY & CONSUMER PROTECTION',
    marginalia: '// "trust, verified on-chain & in DB"',
    statusBadge: 'IN DEVELOPMENT',
    description:
      'A business-verification directory focused on making online commerce safer across Nigeria. Helps consumers investigate online vendors across Instagram, WhatsApp, and social storefronts before transferring money, insulating buyers from scam stores and impersonation.',
    tags: ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'Search Indexation'],
    websiteUrl: 'https://whodeylegit.com',
    githubUrl: 'https://github.com',
    architectureDetails: {
      title: 'TECHNICAL ARCHITECTURE: WHODEYLEGIT',
      highlights: [
        'Tamper-Proof Claims: Business ownership verification flow backed by cryptographic proof verification and PostgreSQL Row Level Security (RLS).',
        'SEO-Engineered Directory: Server-side rendering (SSR) and Incremental Static Regeneration (ISR) indexing thousands of local vendor profiles for fast public search.',
        'Audit Engine: Community proof submission pipeline with anti-spam rate limiting and fraud reporting checks.',
      ],
      stack: ['Next.js App Router', 'TypeScript', 'Supabase Postgres', 'Row Level Security', 'Algolia Search'],
    },
  },
  {
    id: 'NaijaPresido',
    title: 'Naija Presido',
    tagline: 'Multiplayer Low-Poly 3D Virtual Nigerian Society & Political Simulation',
    category: 'VIRTUAL WORLDS & SOCIAL SIMULATION',
    marginalia: '// "living social world, not just a game"',
    statusBadge: 'CONCEPT & PROTOTYPE',
    description:
      'An ambitious multiplayer virtual society concept inspired by Nigerian life. Players enter a living social world where their careers, businesses, relationships, wealth, reputation, and political alliances interact. A player can start as a worker or business owner, gain influence, and contest elections for Governor or President in a low-poly 3D Nigerian environment with real-time day/night cycles (30 min real-time = 6 hrs game-time).',
    tags: ['Three.js / 3D', 'Next.js', 'WebSockets', 'Supabase Multiplayer', 'Game Design'],
    githubUrl: 'https://github.com',
    liveDemoAction: '#explore',
    architectureDetails: {
      title: 'TECHNICAL ARCHITECTURE: NAIJA PRESIDO',
      highlights: [
        'Emergent Political System: Politics emerges naturally from the economic and social world; reputation, media coverage, and community standing drive voting blocs.',
        'Accelerated Time Mechanics: Synchronized world clock mapping 30 minutes of real time to 6 hours of in-game economic and diurnal progression.',
        'Asset & Real-Estate Ownership: Distributed state tracking for vehicles, businesses, houses, jobs, and personal inventories with verifiable transaction ledgers.',
      ],
      stack: ['Three.js / WebGL', 'TypeScript', 'Next.js App Router', 'Supabase Realtime', 'Low-Poly 3D'],
    },
  },
];

export const AUDIO_STEMS: AudioStem[] = [
  {
    id: 'stem-01',
    name: 'Midnight Lagos Groove',
    category: 'beat',
    bpm: 104,
    key: 'F# Minor',
    description: 'Soulful Afro-fusion percussion bed layered with jazzy 9th chords and deep sub-bass.',
  },
  {
    id: 'stem-02',
    name: 'Clean Strat Clean Pluck',
    category: 'guitar',
    bpm: 112,
    key: 'E Minor',
    description: 'Fingerpicked Stratocaster melodic hook recorded through Focusrite Solo interface.',
  },
  {
    id: 'stem-03',
    name: 'Gospel Snare & Ghost Notes',
    category: 'drums',
    bpm: 96,
    key: 'Percussive',
    description: 'Acoustic church drum pocket with dynamic ghost notes, tight hi-hats, and punchy kick.',
  },
  {
    id: 'stem-04',
    name: 'Analog Moog Lead Patch',
    category: 'synth',
    bpm: 120,
    key: 'D Minor',
    description: 'Synthesized resonant lead designed inside FL Studio with vintage tape flutter effect.',
  },
];

// ============================================================================
// GYM & BARBELL FITNESS STATS (COMMENTED OUT - PRESERVED TO RE-ADD LATER)
// ============================================================================
// export const FITNESS_STATS: FitnessMilestone[] = [
//   {
//     lift: 'Conventional Deadlift',
//     weight: '180 KG',
//     repCount: 'Single Session Peak (150-160-170-180kg ladder)',
//     note: 'Raw grip, full lockout, zero hitching. Battle-tested discipline.',
//   },
//   {
//     lift: 'Barbell Flat Bench',
//     weight: '110 KG',
//     repCount: '1 Rep Max (100kg x 5 reps working set)',
//     note: 'Controlled eccentric, paused drive off the chest.',
//   },
//   {
//     lift: 'Barbell Back Squat',
//     weight: '110 KG',
//     repCount: 'Deep Controlled Reps',
//     note: 'Below parallel depth, knee tracking & quad drive.',
//   },
//   {
//     lift: 'Standing Overhead Press',
//     weight: '70 KG',
//     repCount: 'Strict Overhead Drive',
//     note: 'Core braced, clean overhead lockout with zero leg dip.',
//   },
// ];

export const EXPLORE_IDEAS: IdeaConcept[] = [
  {
    id: 'the-door-you-choose',
    title: 'The Door You Choose',
    category: 'Psychological Game Design',
    hook: 'A choice that starts trivial, then becomes everything.',
    description:
      'An interactive narrative game where seemingly harmless everyday questions gradually unveil deep character alignments. The tension stems from the gap between what the player thinks they are deciding and the irreversible systemic consequences that unfold.',
    status: 'Exploratory',
  },
  {
    id: 'future-postcard',
    title: 'Future Postcard',
    category: 'Human Memory & Reflection',
    hook: 'Letters sent across time to your future self.',
    description:
      'A reflective digital time-capsule where users write honest assessments to their future selves. Months or years later, they encounter their past mindset, comparing intentions, values, and reality without vanity or filtered retrospectives.',
    status: 'In Development',
  },
  {
    id: 'football-storytelling',
    title: 'Football Narratives & AI Documentaries',
    category: 'Cinematic Storytelling',
    hook: 'Redemption arcs, tactical warfare & human drama.',
    description:
      'Deep-dive narrative essays exploring the human drama of sport—specifically José Mourinho’s tactical mind games and Real Madrid’s European resilience—blended with AI-assisted visual continuity and custom musical scoring.',
    status: 'Exploratory',
  },
];
