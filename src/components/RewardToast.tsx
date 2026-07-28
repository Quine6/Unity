"use client";

import { useEffect } from "react";
import { Sparkles, X } from "lucide-react";

interface RewardToastProps {
  title: string;
  subtitle: string;
  icon?: string;
  onClose: () => void;
}

export default function RewardToast({ title, subtitle, icon = "⚡", onClose }: RewardToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-6 right-6 z-50 animate-bounce">
      <div className="bg-[#0f1520] border-2 border-amber-400/80 rounded-2xl p-4 shadow-[0_0_40px_rgba(245,158,11,0.4)] flex items-center gap-3.5 max-w-sm relative overflow-hidden backdrop-blur-lg">
        {/* Glow de fondo */}
        <div className="absolute -left-10 -top-10 w-24 h-24 bg-amber-500/20 rounded-full blur-xl pointer-events-none"></div>

        <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-2xl shrink-0 shadow-inner">
          {icon}
        </div>

        <div className="flex-1 pr-4">
          <h4 className="text-xs font-black text-amber-300 m-0 tracking-wider flex items-center gap-1">
            {title} <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </h4>
          <p className="text-xs font-bold text-white m-0 mt-0.5 leading-snug">
            {subtitle}
          </p>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
