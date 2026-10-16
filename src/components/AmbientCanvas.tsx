'use client';

import { useEffect, useRef } from 'react';

export default function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let phase = 0;
    let mouseX = width / 2;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      x: number = 0;
      y: number = 0;
      radius: number = 0;
      vy: number = 0;
      vx: number = 0;
      color: string = '';

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 1.6 + 0.4;
        this.vy = -(Math.random() * 0.25 + 0.08);
        this.vx = (Math.random() - 0.5) * 0.2;
        // Warm amber coffee and studio navy cyan particles
        this.color =
          Math.random() > 0.4
            ? `rgba(196, 137, 86, ${Math.random() * 0.25 + 0.05})`
            : `rgba(56, 189, 248, ${Math.random() * 0.25 + 0.05})`;
      }

      update() {
        this.y += this.vy;
        this.x += this.vx;
        if (this.y < 0) this.y = height;
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const count = 30;
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Render subtle audio sine waveforms in the background
      ctx.lineWidth = 1;

      // 1. Studio Navy Cyan Waveform
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
      ctx.beginPath();
      for (let x = 0; x < width; x += 10) {
        const y =
          height * 0.35 +
          Math.sin(phase + x * 0.003 + (mouseX / width) * 2) * 45 +
          Math.sin(phase * 0.7 + x * 0.008) * 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // 2. Warm Coffee Amber Harmonic Waveform
      ctx.strokeStyle = 'rgba(196, 137, 86, 0.035)';
      ctx.beginPath();
      for (let x = 0; x < width; x += 10) {
        const y =
          height * 0.65 +
          Math.sin(phase * 0.8 + x * 0.004) * 55 +
          Math.cos(phase + x * 0.007) * 25;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      phase += 0.012;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      aria-hidden="true"
    />
  );
}
