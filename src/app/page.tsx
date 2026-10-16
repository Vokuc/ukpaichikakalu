import React from 'react';
import { ToastProvider } from '../context/ToastContext';
import AmbientCanvas from '../components/AmbientCanvas';
import StickyNote from '../components/StickyNote';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WorksSection from '../components/WorksSection';
import MusicSection from '../components/MusicSection';
import ExploreSection from '../components/ExploreSection';
import LiveDisciplineSection from '../components/LiveDisciplineSection';
import PhilosophySection from '../components/PhilosophySection';
import ArsenalSection from '../components/ArsenalSection';
import PromptCompilerLab from '../components/PromptCompilerLab';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <ToastProvider>
      {/* Tape Flutter & Grain Ambient Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none grain-overlay z-0" aria-hidden="true" />

      {/* Interactive Soundwave & Particle Canvas */}
      <AmbientCanvas />

      {/* Draggable Sticky Developer Marginalia Note */}
      <StickyNote />

      {/* Main Sticky Navigation */}
      <Navbar />

      {/* Main Viewport Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 md:space-y-32 pt-6 sm:pt-12 md:pt-16">
        <Hero />
        <WorksSection />
        <MusicSection />
        <ExploreSection />
        <LiveDisciplineSection />
        <PhilosophySection />
        <ArsenalSection />
        <PromptCompilerLab />
        <ContactSection />
      </main>

      {/* Refined Brutalist Music x Code Footer */}
      <Footer />
    </ToastProvider>
  );
}
