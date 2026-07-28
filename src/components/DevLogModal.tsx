"use client";

import { useState } from "react";
import { UserProgress, DevLogEntry } from "../hooks/useProgress";
import { X, Sparkles, BookOpen, Send, CheckCircle2, History } from "lucide-react";

interface DevLogModalProps {
  progress: UserProgress;
  onClose: () => void;
  onAddDevLog: (log: { worldTitle: string; achieved: string; bug: string; nextIdea: string }) => void;
}

export default function DevLogModal({ progress, onClose, onAddDevLog }: DevLogModalProps) {
  const [achieved, setAchieved] = useState("");
  const [bug, setBug] = useState("");
  const [nextIdea, setNextIdea] = useState("");
  const [justSubmitted, setJustSubmitted] = useState(false);

  const devLogs: DevLogEntry[] = progress.devLogs || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!achieved.trim()) return;

    onAddDevLog({
      worldTitle: "Godot 4 — Diario del Creador",
      achieved: achieved.trim(),
      bug: bug.trim() || "¡Sin bugs hoy!",
      nextIdea: nextIdea.trim() || "Seguir creando más niveles"
    });

    setAchieved("");
    setBug("");
    setNextIdea("");
    setJustSubmitted(true);
    setTimeout(() => setJustSubmitted(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0f141c] border border-[var(--color-brand-blue)]/40 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar shadow-[0_0_50px_rgba(0,180,255,0.2)] p-6 lg:p-8 relative">
        
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-[var(--color-brand-blue-dim)] text-[var(--color-brand-blue)] border border-[var(--color-brand-blue)]/40">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white m-0 flex items-center gap-2">
              Diario del Creador (DevLog) <Sparkles className="w-4 h-4 text-amber-400" />
            </h2>
            <p className="text-xs text-[var(--color-text-muted)] m-0">
              Registra tus descubrimientos y gana +50 XP de Creador por entrada.
            </p>
          </div>
        </div>

        {/* Formulario corto */}
        <form onSubmit={handleSubmit} className="glass-panel p-5 rounded-2xl border border-white/10 space-y-4 mb-8">
          <div>
            <label className="block text-xs font-bold text-[var(--color-brand-green)] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              🚀 Hoy he conseguido...
            </label>
            <input
              type="text"
              required
              value={achieved}
              onChange={(e) => setAchieved(e.target.value)}
              placeholder="Ej: Hacer que mi personaje salte y no atraviese el suelo"
              className="w-full bg-[#161c26] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[var(--color-brand-green)]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                🐛 El bug más raro ha sido...
              </label>
              <input
                type="text"
                value={bug}
                onChange={(e) => setBug(e.target.value)}
                placeholder="Ej: El cubo caía al infinito"
                className="w-full bg-[#161c26] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--color-brand-blue)] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                💡 Mi próxima idea es...
              </label>
              <input
                type="text"
                value={nextIdea}
                onChange={(e) => setNextIdea(e.target.value)}
                placeholder="Ej: Crear una plataforma volcánica con luz roja"
                className="w-full bg-[#161c26] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[var(--color-brand-blue)]"
              />
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-xs text-[var(--color-brand-green)] font-bold">
              +50 XP por publicar en tu diario
            </span>
            <button
              type="submit"
              disabled={!achieved.trim()}
              className="px-6 py-2.5 bg-[var(--color-brand-green)] hover:bg-[#00e65c] text-black font-extrabold text-xs rounded-xl flex items-center gap-2 transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed glow-green"
            >
              <Send className="w-3.5 h-3.5 fill-black" /> Publicar en DevLog
            </button>
          </div>

          {justSubmitted && (
            <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2 animate-bounce">
              <CheckCircle2 className="w-4 h-4" /> ¡Entrada registrada en tu DevLog! (+50 XP ganados)
            </div>
          )}
        </form>

        {/* Historial de entradas del DevLog */}
        <div>
          <h3 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
            <History className="w-4 h-4 text-slate-400" /> Historial de Entradas ({devLogs.length})
          </h3>

          {devLogs.length === 0 ? (
            <div className="text-center p-6 border border-dashed border-white/10 rounded-2xl text-xs text-[var(--color-text-muted)]">
              Aún no has publicado ninguna entrada en tu DevLog. ¡Escribe la primera arriba!
            </div>
          ) : (
            <div className="space-y-3">
              {devLogs.map((log) => (
                <div key={log.id} className="p-4 rounded-2xl bg-[#141a24] border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-[var(--color-text-muted)] border-b border-white/5 pb-1">
                    <span className="font-bold text-[var(--color-brand-blue)]">{log.worldTitle}</span>
                    <span>{log.date}</span>
                  </div>
                  <p className="text-xs text-white m-0 font-medium">
                    🚀 <strong className="text-[var(--color-brand-green)]">Conseguido:</strong> {log.achieved}
                  </p>
                  {log.bug && (
                    <p className="text-xs text-slate-300 m-0">
                      🐛 <strong className="text-amber-400">Bug investigado:</strong> {log.bug}
                    </p>
                  )}
                  {log.nextIdea && (
                    <p className="text-xs text-slate-300 m-0">
                      💡 <strong className="text-[var(--color-brand-blue)]">Próxima idea:</strong> {log.nextIdea}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
