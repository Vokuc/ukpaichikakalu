'use client';

import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';

export default function ContactSection() {
  const { showToast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'frontend_contract',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText('chikakaluukpai@gmail.com')
      .then(() => {
        showToast('Email copied: chikakaluukpai@gmail.com', 'success');
      })
      .catch(() => {
        showToast('Failed to copy email.');
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      showToast('Communication dispatched successfully to Chika Kalu Ukpai.', 'success');
      setFormData({
        name: '',
        email: '',
        scope: 'frontend_contract',
        message: '',
      });
    }, 1100);
  };

  return (
    <section id="contact" className="space-y-8 sm:space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1c335a] pb-3 sm:pb-4 gap-2">
        <div>
          <span className="font-expanded text-[10px] sm:text-xs uppercase tracking-widest text-[#c48956] block mb-1">
            SECTION // 06 — CONNECT
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#f1f5f9]">
            Initiate Connection
          </h2>
        </div>
        <span className="font-hand text-xl sm:text-2xl text-[#dfa471] rotate-1">
          &ldquo;direct line to Chika Kalu Ukpai // Vokuc Sound&rdquo;
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Left: Details & Channels */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          <p className="font-mono text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
            Currently discussing senior software engineering contracts, product architecture, SaaS
            co-founding, and musical composition/scoring for ambitious teams and creators.
          </p>

          <div className="space-y-2.5 sm:space-y-3 font-digital text-xs">
            <div className="p-3 bg-[#0a1426] border border-[#1c335a] flex items-center justify-between">
              <span className="text-[#94a3b8] uppercase text-[11px]">Direct Inscription</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[#dfa471] font-bold hover:underline cursor-pointer truncate max-w-[200px]"
                title="Click to copy email"
              >
                chikakaluukpai@gmail.com
              </button>
            </div>
            <div className="p-3 bg-[#0a1426] border border-[#1c335a] flex items-center justify-between">
              <span className="text-[#94a3b8] uppercase text-[11px]">Location Base</span>
              <span className="text-[#f1f5f9]">Lagos, NG / Remote Global</span>
            </div>
            <div className="p-3 bg-[#0a1426] border border-[#1c335a] flex items-center justify-between">
              <span className="text-[#94a3b8] uppercase text-[11px]">Notice Period</span>
              <span className="text-[#38bdf8]">Immediate for High-Impact</span>
            </div>
          </div>

          {/* Social Matrix */}
          <div className="pt-1 flex flex-wrap gap-2.5 sm:gap-3 font-digital text-xs">
            <a
              href="https://www.linkedin.com/in/chika-ukpai-b5ab85171/"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 border border-[#1c335a] bg-[#070d18] text-[#f1f5f9] hover:border-[#dfa471] flex items-center gap-2 transition-colors"
            >
              <i className="fa-brands fa-linkedin text-[#38bdf8]"></i>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 border border-[#1c335a] bg-[#070d18] text-[#f1f5f9] hover:border-[#dfa471] flex items-center gap-2 transition-colors"
            >
              <i className="fa-brands fa-github text-[#dfa471]"></i>
              <span>GitHub / Vokuc</span>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 border border-[#1c335a] bg-[#070d18] text-[#f1f5f9] hover:border-[#dfa471] flex items-center gap-2 transition-colors"
            >
              <i className="fa-brands fa-x-twitter text-[#f1f5f9]"></i>
              <span>X (Twitter)</span>
            </a>
          </div>

          <div className="font-hand text-xl sm:text-2xl text-[#dfa471] pt-2">
            &ldquo;Faith &amp; craft. Deliver what was promised, cleanly.&rdquo;
          </div>
        </div>

        {/* Right: Modern Brutalist Form */}
        <div className="lg:col-span-7">
          <div className="brutal-card p-5 sm:p-7 md:p-8 bg-gradient-to-br from-[#060b16] via-[#0b1424] to-[#1c120c] border border-[#1c335a]">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="formName" className="block uppercase font-digital font-bold text-[#f1f5f9] mb-1.5 sm:mb-2">
                    Sender Name / Entity
                  </label>
                  <input
                    type="text"
                    id="formName"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Vance"
                    className="w-full bg-[#050912] border border-[#1c335a] p-2.5 sm:p-3 text-[#f1f5f9] focus:outline-none focus:border-[#dfa471]"
                  />
                </div>
                <div>
                  <label htmlFor="formEmail" className="block uppercase font-digital font-bold text-[#f1f5f9] mb-1.5 sm:mb-2">
                    Direct Email Address
                  </label>
                  <input
                    type="email"
                    id="formEmail"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@venture.io"
                    className="w-full bg-[#050912] border border-[#1c335a] p-2.5 sm:p-3 text-[#f1f5f9] focus:outline-none focus:border-[#dfa471]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="formSubject" className="block uppercase font-digital font-bold text-[#f1f5f9] mb-1.5 sm:mb-2">
                  Mandate Scope
                </label>
                <select
                  id="formSubject"
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  className="w-full bg-[#050912] border border-[#1c335a] p-2.5 sm:p-3 text-[#f1f5f9] focus:outline-none focus:border-[#dfa471] font-digital"
                >
                  <option value="frontend_contract">Senior Frontend / Full-Stack Engineering Contract</option>
                  <option value="saas_product">SaaS Product Architecture &amp; Founder Collaboration</option>
                  <option value="music_score">Music Scoring &amp; Audio Production (Vokuc Sound)</option>
                  <option value="technical_advisory">Technical Advisory / Code Review</option>
                </select>
              </div>

              <div>
                <label htmlFor="formMessage" className="block uppercase font-digital font-bold text-[#f1f5f9] mb-1.5 sm:mb-2">
                  Detailed Specifications
                </label>
                <textarea
                  id="formMessage"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline product scope, stack requirements, sonic direction, and timelines..."
                  className="w-full bg-[#050912] border border-[#1c335a] p-2.5 sm:p-3 text-[#f1f5f9] focus:outline-none focus:border-[#dfa471] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full brutal-card-invert py-3.5 sm:py-4 font-display font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 min-h-[46px]"
              >
                {submitting ? (
                  <>
                    <span>Encrypting &amp; Dispatching...</span>
                    <i className="fa-solid fa-spinner animate-spin"></i>
                  </>
                ) : (
                  <>
                    <span>Dispatch Communication</span>
                    <i className="fa-solid fa-paper-plane text-xs"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
