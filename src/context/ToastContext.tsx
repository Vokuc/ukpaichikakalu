'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface ToastContextType {
  showToast: (message: string, type?: 'info' | 'success') => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<{ message: string; visible: boolean; type: string }>({
    message: '',
    visible: false,
    type: 'INFO',
  });

  const showToast = useCallback((message: string, type: 'info' | 'success' = 'info') => {
    setToast({
      message,
      visible: true,
      type: type.toUpperCase(),
    });

    const timer = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast Notification Container */}
      <div
        id="toast"
        aria-live="polite"
        className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 brutal-card bg-[#060b16] px-5 py-3 border border-[#1c335a] text-[#f1f5f9] flex items-center gap-3 ${
          toast.visible
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-24 opacity-0 pointer-events-none'
        }`}
      >
        <span className="text-[10px] font-mono uppercase bg-[#dfa471] text-[#050912] px-1.5 py-0.5 font-bold tracking-wider">
          {toast.type}
        </span>
        <span className="font-mono text-xs sm:text-sm tracking-tight">{toast.message}</span>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
