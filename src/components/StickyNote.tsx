'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function StickyNote() {
  const [visible, setVisible] = useState(true);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const noteRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - dragOffsetRef.current.x,
        y: e.clientY - dragOffsetRef.current.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button')) return;

    if (noteRef.current) {
      const rect = noteRef.current.getBoundingClientRect();
      dragOffsetRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setPosition({ x: rect.left, y: rect.top });
      setIsDragging(true);
    }
  };

  if (!visible) return null;

  return (
    <>
      {/* Mobile-First Trigger Button (Phones/Tablets) */}
      <div className="md:hidden fixed bottom-5 left-4 z-40">
        {!mobileExpanded ? (
          <button
            type="button"
            onClick={() => setMobileExpanded(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#140c08] border border-[#c48956] text-[#dfa471] font-digital text-[11px] shadow-[2px_2px_0px_#050912] cursor-pointer"
          >
            <span>⚡ NOTE // VOKUC</span>
          </button>
        ) : (
          <div className="w-[85vw] max-w-sm p-4 bg-[#140c08] border-2 border-[#4a2c1d] sketch-border shadow-[4px_4px_0px_#050912,4px_4px_0px_1.5px_#c48956] space-y-2">
            <div className="flex items-center justify-between border-b border-[#4a2c1d] pb-1">
              <span className="font-digital text-[10px] tracking-widest text-[#dfa471] uppercase">
                // MARGINALIA #01 • VOKUC
              </span>
              <button
                type="button"
                onClick={() => setMobileExpanded(false)}
                className="text-xs text-[#dfa471] hover:text-white px-1.5 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="font-hand text-lg text-[#f1f5f9] leading-tight">
              &ldquo;Code without cadence is dry syntax. Music without structure is mere noise. In the pocket, they are
              one.&rdquo;
            </p>
            <div className="font-expanded text-xs text-[#c48956] text-right mt-1">— CHIKA K. U.</div>
          </div>
        )}
      </div>

      {/* Desktop Draggable Sticky Note (Tablets & Desktop) */}
      <div
        ref={noteRef}
        onMouseDown={handleMouseDown}
        style={
          position
            ? {
                left: `${position.x}px`,
                top: `${position.y}px`,
                right: 'auto',
                position: 'fixed',
              }
            : undefined
        }
        className={`sticky-note hidden md:block fixed top-32 right-12 z-30 p-4 w-68 bg-[#1a110a] border-2 border-[#4a2c1d] sketch-border shadow-[4px_4px_0px_#070d18,4px_4px_0px_1.5px_#c48956] transform ${
          isDragging ? 'cursor-grabbing scale-105' : 'rotate-2 hover:rotate-0'
        } transition-transform select-none`}
      >
        <div className="flex items-center justify-between border-b border-[#4a2c1d] pb-1 mb-2">
          <span className="font-digital text-[10px] tracking-widest text-[#dfa471] uppercase">
            // MARGINALIA #01 • VOKUC
          </span>
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Close Developer Note"
            className="text-xs text-[#dfa471] hover:text-white transition-colors cursor-pointer px-1 leading-none"
          >
            ✕
          </button>
        </div>
        <p className="font-hand text-xl text-[#f1f5f9] leading-tight">
          &ldquo;Code without cadence is dry syntax. Music without structure is mere noise. In the pocket, they are
          one.&rdquo;
        </p>
        <div className="font-expanded text-xs text-[#c48956] text-right mt-1.5">— CHIKA K. U.</div>
      </div>
    </>
  );
}
