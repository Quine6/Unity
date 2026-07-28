"use client";

import { UserProgress } from "../hooks/useProgress";
import { ALL_BADGES, CREATOR_RANKS, getRankForXP, getNextRank } from "../data/rewardsData";
import { X, Trophy, Award, Sparkles, FolderGit2, Star, CheckCircle } from "lucide-react";

interface RewardsModalProps {
  progress: UserProgress;
  onClose: () => void;
}

export default function RewardsModal({ progress, onClose }: RewardsModalProps) {
  const currentXP = progress.xp ?? 0;
  const currentRank = getRankForXP(currentXP);
  const nextRank = getNextRank(currentXP);
  const unlockedBadgeIds = progress.badges ?? [];
  const versions = progress.versions || [];

  const xpProgressToNext = nextRank 
    ? Math.min(100, Math.round(((currentXP - currentRank.requiredXP) / (nextRank.requiredXP - currentRank.requiredXP)) * 100))
    : 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0f141c] border border-amber-500/30 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto custom-scrollbar shadow-[0_0_50px_rgba(245,158,11,0.15)] p-6 lg:p-8 relative">
        
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Encabezado Rango de Creador */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            {currentRank.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40">
                Rango {currentRank.level} de Creador
              </span>
              <span className="text-xs font-bold text-[var(--color-brand-green)]">{currentXP} XP acumulados</span>
            </div>
            <h2 className="text-2xl font-black text-white m-0 tracking-tight mt-1">
              {currentRank.title}
            </h2>
            <p className="text-xs text-[var(--color-text-muted)] m-0 mt-0.5">
              {currentRank.description}
            </p>
          </div>
        </div>

        {/* Barra de progreso de Nivel / Rango */}
        <div className="glass-panel p-4 rounded-2xl border border-white/10 mb-8 space-y-2">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-slate-300">Progreso a {nextRank ? nextRank.title : "Rango Máximo"}</span>
            <span className="text-amber-400">{xpProgressToNext}%</span>
          </div>
          <div className="w-full h-2.5 bg-black/60 rounded-full overflow-hidden border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-[var(--color-brand-green)] transition-all duration-1000 ease-out"
              style={{ width: `${xpProgressToNext}%` }}
            />
          </div>
          {nextRank && (
            <p className="text-[10px] text-[var(--color-text-muted)] text-right m-0">
              Faltan {nextRank.requiredXP - currentXP} XP para desbloquear el Rango {nextRank.level}
            </p>
          )}
        </div>

        {/* 🎖️ INSIGNIAS DE LOGRO REAL */}
        <section className="mb-8">
          <h3 className="text-base font-extrabold text-white mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" /> Insignias de Creador ({unlockedBadgeIds.length} / {ALL_BADGES.length})
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {ALL_BADGES.map((badge) => {
              const isUnlocked = unlockedBadgeIds.includes(badge.id);

              return (
                <div
                  key={badge.id}
                  className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                    isUnlocked
                      ? "bg-[#161f2c] border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.1)]"
                      : "bg-[#0b0e14] border-white/5 opacity-50 grayscale"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-2xl">{badge.icon}</span>
                    {isUnlocked ? (
                      <CheckCircle className="w-4 h-4 text-[var(--color-brand-green)]" />
                    ) : (
                      <Star className="w-4 h-4 text-slate-600" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white m-0 leading-tight">
                      {badge.title}
                    </h4>
                    <p className="text-[10px] text-[var(--color-text-muted)] mt-1 m-0 leading-relaxed">
                      {badge.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 🗂️ HISTORIAL DE VERSIONES DEL PROYECTO */}
        <section>
          <h3 className="text-base font-extrabold text-white mb-4 flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-[var(--color-brand-blue)]" /> Historial de Versiones de Tu Juego
          </h3>

          <div className="space-y-2">
            {versions.map((ver) => (
              <div key={ver.id} className="p-3.5 rounded-xl bg-[#121822] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-lg bg-[var(--color-brand-blue-dim)] text-[var(--color-brand-blue)] font-mono font-extrabold text-xs border border-[var(--color-brand-blue)]/30">
                    {ver.version}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white m-0">{ver.title}</h4>
                    <p className="text-[10px] text-[var(--color-text-muted)] m-0">{ver.notes}</p>
                  </div>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">{ver.date}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
