'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { PARADIGM_BLUEPRINTS } from '../data/portfolioData';
import { PromptParadigmKey } from '../types';
import { useToast } from '../context/ToastContext';

export default function PromptCompilerLab() {
  const { showToast } = useToast();
  const [currentParadigm, setCurrentParadigm] = useState<PromptParadigmKey>('strict_json');
  const [userIntent, setUserIntent] = useState<string>(
    'Build an auth state machine in TypeScript with session refresh tokens.'
  );
  const [enforceXml, setEnforceXml] = useState<boolean>(true);
  const [compiledOutput, setCompiledOutput] = useState<string>('');

  const sampleIntents = [
    'Build an auth state machine in TypeScript with session refresh tokens.',
    'Parse streaming LLM response into an interactive AST component tree.',
    'Audit a distributed real-time WebSocket room for concurrency race conditions.',
    'Synthesize a tournament bracket scoring engine with tiebreaker algorithms.',
  ];

  const handleCompile = useCallback(
    (paradigmKey = currentParadigm, intent = userIntent, xml = enforceXml) => {
      const blueprint = PARADIGM_BLUEPRINTS[paradigmKey];
      if (!blueprint) return;
      const cleanIntent = intent.trim() || 'Construct deterministic module';
      const output = blueprint.template(cleanIntent, xml);
      setCompiledOutput(output);
      showToast(`Compiled with ${blueprint.title}`);
    },
    [currentParadigm, userIntent, enforceXml, showToast]
  );

  useEffect(() => {
    handleCompile(currentParadigm, userIntent, enforceXml);
  }, [currentParadigm, enforceXml, handleCompile, userIntent]);

  const handleCopySnippet = () => {
    if (!compiledOutput) return;
    navigator.clipboard
      .writeText(compiledOutput)
      .then(() => {
        showToast('Compiled prompt copied to clipboard.', 'success');
      })
      .catch(() => {
        showToast('Failed to copy to clipboard.');
      });
  };

  const paradigms: { key: PromptParadigmKey; title: string; subtitle: string }[] = [
    {
      key: 'strict_json',
      title: 'Strict JSON Contract',
      subtitle: 'RFC 8259 schema with zero markdown drift',
    },
    {
      key: 'cot_reasoning',
      title: 'Chain-of-Thought (CoT) Plan',
      subtitle: 'First-principles lifecycle & bottleneck analysis',
    },
    {
      key: 'defensive_audit',
      title: 'Defensive Code Auditor',
      subtitle: 'Concurrency, race condition & threat modeling',
    },
  ];

  return (
    <section id="promptlab" className="space-y-8 sm:space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1c335a] pb-3 sm:pb-4 gap-2">
        <div>
          <span className="font-expanded text-[10px] sm:text-xs uppercase tracking-widest text-[#c48956] block mb-1">
            SECTION // 05 — PROMPT LAB
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#f1f5f9]">
            The Prompt Compiler Lab
          </h2>
        </div>
        <span className="font-hand text-xl sm:text-2xl text-[#dfa471] rotate-1">
          &ldquo;tuning LLM reasoning like tuning guitar strings&rdquo;
        </span>
      </div>

      <p className="font-mono text-xs sm:text-sm text-[#94a3b8] max-w-2xl leading-relaxed">
        Input your raw software engineering requirement below. Choose an architectural paradigm to generate
        a production-ready, bounded system prompt snippet with delimiters and error-prevention logic.
      </p>

      {/* Workbench Box */}
      <div className="brutal-card p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#060b16] via-[#0b1424] to-[#1a110a] border-2 border-[#1c335a]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Controls (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 text-xs">
            <div>
              <label className="block text-[#f1f5f9] font-digital uppercase font-bold tracking-wider mb-2">
                1. Select Architectural Paradigm
              </label>
              <div className="space-y-2">
                {paradigms.map((p) => {
                  const isActive = currentParadigm === p.key;
                  return (
                    <button
                      key={p.key}
                      type="button"
                      onClick={() => setCurrentParadigm(p.key)}
                      className={`w-full text-left p-3 border cursor-pointer transition-all ${
                        isActive
                          ? 'border-[#dfa471] bg-gradient-to-r from-[#dfa471] to-[#c48956] text-[#050912] font-bold shadow-[2px_2px_0px_#1c335a]'
                          : 'border-[#1c335a] bg-[#050912]/80 text-[#94a3b8] hover:border-[#38bdf8] hover:text-[#f1f5f9]'
                      } flex items-center justify-between`}
                    >
                      <div>
                        <span className="block font-display font-semibold text-xs sm:text-sm">{p.title}</span>
                        <span className={`font-digital text-[10px] block ${isActive ? 'text-[#050912]/85' : 'text-[#94a3b8]'}`}>
                          {p.subtitle}
                        </span>
                      </div>
                      <span className="font-digital text-[10px] uppercase ml-2 shrink-0">
                        {isActive ? '[ACTIVE]' : '[SELECT]'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="userIntentInput"
                  className="block text-[#f1f5f9] font-digital uppercase font-bold tracking-wider"
                >
                  2. Raw Engineering Intent
                </label>
                <span className="font-digital text-[10px] text-[#c48956] uppercase">Custom or Presets</span>
              </div>

              {/* Quick Presets */}
              <div className="flex flex-wrap gap-1.5 mb-2">
                {sampleIntents.map((sample, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setUserIntent(sample)}
                    className="font-digital text-[10px] text-[#94a3b8] hover:text-[#f1f5f9] bg-[#050912] border border-[#1c335a] px-2 py-1 hover:border-[#dfa471] transition-colors cursor-pointer"
                  >
                    Preset #{idx + 1}
                  </button>
                ))}
              </div>

              <textarea
                id="userIntentInput"
                rows={4}
                value={userIntent}
                onChange={(e) => setUserIntent(e.target.value)}
                className="w-full bg-[#050912] border border-[#1c335a] p-3 text-[#f1f5f9] font-mono text-xs focus:outline-none focus:border-[#dfa471] resize-none leading-relaxed"
                placeholder="e.g. Build an auth state machine in TypeScript with session refresh tokens."
              />
            </div>

            <div className="pt-1 flex flex-wrap items-center justify-between gap-3">
              <label className="flex items-center gap-2 cursor-pointer font-digital text-[#94a3b8] hover:text-[#f1f5f9]">
                <input
                  type="checkbox"
                  checked={enforceXml}
                  onChange={(e) => setEnforceXml(e.target.checked)}
                  className="accent-[#dfa471] w-4 h-4 cursor-pointer"
                />
                <span className="text-[11px]">Enforce XML Delimiters</span>
              </label>

              <button
                type="button"
                onClick={() => handleCompile()}
                className="brutal-card-invert px-5 py-2.5 font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                <i className="fa-solid fa-bolt text-xs"></i>
                <span>Compile Prompt</span>
              </button>
            </div>
          </div>

          {/* Output Terminal (Right 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#050912] border border-[#1c335a] p-3.5 sm:p-5 text-xs">
            <div>
              <div className="flex items-center justify-between border-b border-[#1c335a] pb-2 mb-3">
                <span className="font-digital text-[#38bdf8] text-[10px] sm:text-[11px] uppercase tracking-wider">
                  // COMPILED SYSTEM PROMPT
                </span>
                <button
                  type="button"
                  onClick={handleCopySnippet}
                  className="font-digital text-[#dfa471] hover:underline flex items-center gap-1.5 text-[11px] cursor-pointer"
                >
                  <i className="fa-solid fa-copy"></i>
                  <span>Copy Snippet</span>
                </button>
              </div>

              <pre className="text-[#f1f5f9] text-xs leading-relaxed whitespace-pre-wrap overflow-y-auto max-h-[340px] sm:max-h-[380px] p-3 bg-[#080d1a] border border-[#1c335a] select-all font-mono">
                {compiledOutput || '// Hit \'Compile Prompt\' to view the deterministic system prompt...'}
              </pre>
            </div>

            <div className="mt-3 pt-2.5 border-t border-[#1c335a] flex items-center justify-between font-digital text-[10px] sm:text-[11px] text-[#94a3b8]">
              <span>TOKEN OPTIMIZED</span>
              <span className="text-[#38bdf8] font-expanded text-[9px] sm:text-[10px]">
                ZERO DRIFT GUARANTEE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
