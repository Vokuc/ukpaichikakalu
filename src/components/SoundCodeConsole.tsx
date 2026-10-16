'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

interface Pad {
  id: number;
  label: string;
  name: string;
  keyTrigger: string;
  type: string;
  color: string;
}

export default function SoundCodeConsole() {
  const [isPlayingMetronome, setIsPlayingMetronome] = useState(false);
  const [bpm, setBpm] = useState(112);
  const [volume, setVolume] = useState(0.75);
  const [activePad, setActivePad] = useState<number | null>(null);
  const [lastLog, setLastLog] = useState<string>('// Web Audio Synthesizer initialized. Click pad or press key [1-8]');

  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const metronomeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
      const master = audioCtxRef.current.createGain();
      master.gain.value = volume;
      master.connect(audioCtxRef.current.destination);
      masterGainRef.current = master;
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return { ctx: audioCtxRef.current, master: masterGainRef.current };
  }, [volume]);

  // Update volume
  useEffect(() => {
    if (masterGainRef.current) {
      masterGainRef.current.gain.value = volume;
    }
  }, [volume]);

  // Audio synthesis engines using pure Web Audio API
  const playSound = useCallback((padId: number) => {
    const { ctx, master } = getAudioContext();
    if (!ctx || !master) return;

    const now = ctx.currentTime;
    setActivePad(padId);
    setTimeout(() => setActivePad((prev) => (prev === padId ? null : prev)), 180);

    // Draw ripple effect on visualizer canvas
    const canvas = canvasRef.current;
    if (canvas) {
      const c = canvas.getContext('2d');
      if (c) {
        c.fillStyle = 'rgba(56, 189, 248, 0.4)';
        c.fillRect(0, 0, canvas.width, canvas.height);
      }
    }

    switch (padId) {
      case 1: {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(45, now + 0.12);
        gain.gain.setValueAtTime(1.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(master);
        osc.start(now);
        osc.stop(now + 0.35);
        setLastLog('WebAudio.Kick(): f0=140Hz -> 45Hz exponential pitch sweep (FL Studio 808 Style)');
        break;
      }
      case 2: {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(180, now);
        oscGain.gain.setValueAtTime(0.7, now);
        oscGain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc.connect(oscGain);
        oscGain.connect(master);
        osc.start(now);
        osc.stop(now + 0.15);

        const bufferSize = ctx.sampleRate * 0.2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 1000;
        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.8, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(master);
        noise.start(now);
        setLastLog('WebAudio.Snare(): Bandpass noise burst + 180Hz acoustic body (Live Gospel Pocket)');
        break;
      }
      case 3: {
        const bufferSize = ctx.sampleRate * 0.08;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 7500;
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(master);
        noise.start(now);
        setLastLog('WebAudio.HiHat(): 7.5kHz highpass transient shimmer (Tight 16th groove)');
        break;
      }
      case 4: {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(42, now);
        gain.gain.setValueAtTime(1.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
        osc.connect(gain);
        gain.connect(master);
        osc.start(now);
        osc.stop(now + 0.85);
        setLastLog('WebAudio.808Sub(): 42Hz fundamental sine wave sustained bassline');
        break;
      }
      case 5: {
        const chordFreqs = [164.81, 196.0, 246.94, 293.66, 369.99]; // Em9
        chordFreqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.02);
          gain.gain.setValueAtTime(0.35, now + idx * 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
          osc.connect(gain);
          gain.connect(master);
          osc.start(now + idx * 0.02);
          osc.stop(now + 1.2);
        });
        setLastLog('WebAudio.GuitarStrum(): Em9 fingerstyle acoustic voicing (Focusrite Solo clean in)');
        break;
      }
      case 6: {
        const osc = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(440, now);
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, now);
        filter.frequency.exponentialRampToValueAtTime(3200, now + 0.15);
        filter.frequency.exponentialRampToValueAtTime(600, now + 0.5);
        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(master);
        osc.start(now);
        osc.stop(now + 0.5);
        setLastLog('WebAudio.SynthLead(): Sawtooth 440Hz -> 3.2kHz resonant envelope filter');
        break;
      }
      case 7: {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.06);
        gain.gain.setValueAtTime(0.8, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
        osc.connect(gain);
        gain.connect(master);
        osc.start(now);
        osc.stop(now + 0.07);
        setLastLog('WebAudio.RimPercussion(): 880Hz woodblock syncopation (Lagos groove)');
        break;
      }
      case 8: {
        const rhodesFreqs = [146.83, 174.61, 220.0, 261.63]; // Dm7
        rhodesFreqs.forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now);
          gain.gain.setValueAtTime(0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
          osc.connect(gain);
          gain.connect(master);
          osc.start(now);
          osc.stop(now + 0.9);
        });
        setLastLog('WebAudio.LofiChords(): Dm7 warm electric piano stem (Vokuc Sound flavor)');
        break;
      }
    }
  }, [getAudioContext]);

  // Metronome Loop
  useEffect(() => {
    if (isPlayingMetronome) {
      const intervalMs = (60 / bpm) * 1000;
      let count = 0;
      metronomeTimerRef.current = setInterval(() => {
        const padToPlay = count % 4 === 0 ? 1 : count % 2 === 0 ? 2 : 3;
        playSound(padToPlay);
        count++;
      }, intervalMs);
    } else {
      if (metronomeTimerRef.current) {
        clearInterval(metronomeTimerRef.current);
        metronomeTimerRef.current = null;
      }
    }
    return () => {
      if (metronomeTimerRef.current) clearInterval(metronomeTimerRef.current);
    };
  }, [isPlayingMetronome, bpm, playSound]);

  // Keyboard triggers (1 - 8)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
      const keyNum = parseInt(e.key, 10);
      if (keyNum >= 1 && keyNum <= 8) {
        playSound(keyNum);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playSound]);

  // Visualizer Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const render = () => {
      ctx.fillStyle = 'rgba(6, 11, 22, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 2;
      ctx.strokeStyle = activePad ? '#dfa471' : '#38bdf8';
      ctx.beginPath();

      const sliceWidth = canvas.width / 40;
      let x = 0;

      for (let i = 0; i < 40; i++) {
        const v = Math.sin(phase + i * 0.3) * (activePad ? 20 : 5);
        const y = canvas.height / 2 + v;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        x += sliceWidth;
      }

      ctx.stroke();
      phase += isPlayingMetronome ? 0.15 : 0.04;
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [activePad, isPlayingMetronome]);

  const pads: Pad[] = [
    { id: 1, label: '[1]', name: '808 KICK', keyTrigger: '1', type: '45Hz Punch', color: 'border-[#38bdf8]' },
    { id: 2, label: '[2]', name: 'GOSPEL SNARE', keyTrigger: '2', type: 'Noise Filter', color: 'border-[#c48956]' },
    { id: 3, label: '[3]', name: 'CRISP HI-HAT', keyTrigger: '3', type: '7.5kHz Metal', color: 'border-[#38bdf8]' },
    { id: 4, label: '[4]', name: 'SUB BASS', keyTrigger: '4', type: '42Hz Deep', color: 'border-[#dfa471]' },
    { id: 5, label: '[5]', name: 'STRAT GUITAR', keyTrigger: '5', type: 'Em9 Chime', color: 'border-[#c48956]' },
    { id: 6, label: '[6]', name: 'SYNTH LEAD', keyTrigger: '6', type: '440Hz Sweep', color: 'border-[#38bdf8]' },
    { id: 7, label: '[7]', name: 'LAGOS RIM', keyTrigger: '7', type: 'Afro Wood', color: 'border-[#dfa471]' },
    { id: 8, label: '[8]', name: 'LOFI CHORD', keyTrigger: '8', type: 'Dm7 Rhodes', color: 'border-[#c48956]' },
  ];

  return (
    <div className="brutal-card p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#060b16] via-[#0d1627] to-[#1a110a] border-2 border-[#1c335a] space-y-4 sm:space-y-6">
      {/* Console Top Bar: DAW Interface Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1c335a] pb-3 sm:pb-4 gap-3 sm:gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-[#dfa471] animate-pulse shrink-0"></div>
          <div>
            <span className="font-display font-black text-sm sm:text-base uppercase tracking-tight text-[#f1f5f9]">
              VOKUC SOUND × CODE CONSOLE
            </span>
            <span className="font-digital text-[10px] text-[#94a3b8] block">
              In-Browser Web Audio Synthesizer • Zero External MP3s
            </span>
          </div>
        </div>

        {/* Studio Controls: BPM, Metronome, Volume (Mobile-First Wrap) */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs flex-wrap">
          {/* BPM */}
          <div className="flex items-center gap-1.5 bg-[#050912] px-2.5 py-1.5 border border-[#1c335a] font-digital">
            <span className="text-[#c48956]">TEMPO:</span>
            <button
              onClick={() => setBpm((b) => (b === 104 ? 112 : b === 112 ? 120 : 104))}
              className="text-[#f1f5f9] hover:text-[#38bdf8] font-bold cursor-pointer"
            >
              {bpm} BPM
            </button>
          </div>

          {/* Metronome Beat Loop */}
          <button
            type="button"
            onClick={() => setIsPlayingMetronome(!isPlayingMetronome)}
            className={`px-3 py-1.5 border font-digital font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5 min-h-[36px] ${
              isPlayingMetronome
                ? 'border-[#38bdf8] bg-[#38bdf8] text-[#050912]'
                : 'border-[#1c335a] bg-[#050912] text-[#94a3b8] hover:text-[#f1f5f9]'
            }`}
          >
            <i className={`fa-solid ${isPlayingMetronome ? 'fa-pause' : 'fa-play'} text-[10px]`}></i>
            <span>{isPlayingMetronome ? 'STOP LOOP' : 'LOOP BEAT'}</span>
          </button>

          {/* Master Gain */}
          <div className="hidden md:flex items-center gap-2 bg-[#050912] px-2.5 py-1.5 border border-[#1c335a] font-digital">
            <span className="text-[#94a3b8]">VOL:</span>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-16 accent-[#dfa471] cursor-pointer"
              aria-label="Master Volume"
            />
          </div>
        </div>
      </div>

      {/* Live Waveform Oscilloscope Screen */}
      <div className="relative bg-[#04070e] border border-[#1c335a] p-2.5 sm:p-3 overflow-hidden">
        <div className="flex items-center justify-between text-[10px] font-digital text-[#94a3b8] mb-1">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
            <span>OSCILLOSCOPE // STEREO BUS</span>
          </span>
          <span className="text-[#c48956]">48,000 Hz</span>
        </div>
        <canvas ref={canvasRef} width={640} height={45} className="w-full h-10 sm:h-12 bg-transparent" />
      </div>

      {/* 8-Pad Drum Machine / Instrument Rack (Mobile 2 cols, Tablet/Desktop 4 cols) */}
      <div>
        <div className="flex items-center justify-between mb-2 sm:mb-3 text-[10px] sm:text-[11px] font-digital text-[#94a3b8]">
          <span>TAP PADS OR PRESS [1 - 8]</span>
          <span className="text-[#dfa471]">GUITAR • DRUMS • 808s</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {pads.map((pad) => {
            const isActive = activePad === pad.id;
            return (
              <button
                key={pad.id}
                type="button"
                onClick={() => playSound(pad.id)}
                className={`p-3 text-left border cursor-pointer transition-all select-none min-h-[70px] sm:min-h-[76px] flex flex-col justify-between ${
                  isActive
                    ? 'border-[#dfa471] bg-gradient-to-r from-[#dfa471] to-[#c48956] text-[#050912] font-bold shadow-[0_0_12px_rgba(223,164,113,0.5)] scale-98'
                    : 'border-[#1c335a] bg-[#050912]/90 hover:border-[#38bdf8] hover:bg-[#0a1426] text-[#f1f5f9]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-digital ${isActive ? 'text-[#050912]' : 'text-[#c48956]'}`}>
                    {pad.label}
                  </span>
                  <span
                    className={`text-[8px] sm:text-[9px] uppercase px-1 border font-digital ${
                      isActive ? 'border-[#050912] text-[#050912]' : 'border-[#1c335a] text-[#94a3b8]'
                    }`}
                  >
                    KEY {pad.keyTrigger}
                  </span>
                </div>
                <div className="font-display font-black text-xs sm:text-sm tracking-tight leading-tight">
                  {pad.name}
                </div>
                <div className={`text-[9px] sm:text-[10px] font-digital mt-0.5 ${isActive ? 'text-[#050912]/80' : 'text-[#94a3b8]'}`}>
                  {pad.type}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Audio Code Telemetry Terminal */}
      <div className="p-2.5 sm:p-3 bg-[#03060c] border border-[#1c335a] text-[10px] sm:text-[11px] text-[#38bdf8] font-digital flex items-center justify-between overflow-x-auto">
        <span className="truncate">{lastLog}</span>
        <span className="font-expanded text-[#c48956] shrink-0 ml-3 text-[9px] sm:text-[10px]">
          ZERO LATENCY
        </span>
      </div>
    </div>
  );
}
