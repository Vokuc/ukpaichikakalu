export type PromptParadigmKey = 'strict_json' | 'cot_reasoning' | 'defensive_audit';

export interface PromptParadigm {
  id: PromptParadigmKey;
  title: string;
  subtitle: string;
  template: (intent: string, useXml: boolean) => string;
}

export interface ProjectSpec {
  id: string;
  title: string;
  tagline: string;
  category: string;
  marginalia: string;
  description: string;
  tags: string[];
  websiteUrl?: string;
  githubUrl: string;
  statusBadge: string;
  liveDemoAction?: string;
  architectureDetails: {
    title: string;
    highlights: string[];
    stack: string[];
  };
}

export interface AudioStem {
  id: string;
  name: string;
  category: 'beat' | 'guitar' | 'drums' | 'synth';
  bpm: number;
  key: string;
  description: string;
}

// ============================================================================
// GYM & BARBELL FITNESS TYPES (COMMENTED OUT - PRESERVED TO RE-ADD LATER)
// ============================================================================
// export interface FitnessMilestone {
//   lift: string;
//   weight: string;
//   repCount: string;
//   note: string;
// }

export interface IdeaConcept {
  id: string;
  title: string;
  category: string;
  hook: string;
  description: string;
  status: 'Concept' | 'In Development' | 'Exploratory';
}
