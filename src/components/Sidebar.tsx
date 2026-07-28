"use client";

import { useState } from "react";
import { worldsData, courseData } from "../data/courseContent";
import { UserProgress } from "../hooks/useProgress";
import { getRankForXP, ALL_BADGES } from "../data/rewardsData";
import RewardsModal from "./RewardsModal";
import DevLogModal from "./DevLogModal";
import NexusStoreModal from "./NexusStoreModal";
import { Lock, Unlock, CheckCircle, User, Camera, ChevronDown, ChevronRight, Globe, BookOpen, Target, Award, BookMarked, ShoppingCart, Coins } from "lucide-react";

interface SidebarProps {
  progress: UserProgress;
  onSelectSubmodule: (modId: string, subId: string) => void;
  onLogout: () => void;
  onUpdateAvatar: (dataUrl: string) => void;
  onUpdatePin?: (newPin: string) => void;
  onAddDevLog: (log: { worldTitle: string; achieved: string; bug: string; nextIdea: string }) => void;
  onBuyItem: (itemType: "theme" | "title" | "border", itemId: string, price: number, value: string) => boolean;
  onUnlockVipVault?: () => boolean;
  onSelectTheme: (themeId: string) => void;
  onSelectTitle: (title: string) => void;
  onSelectBorder?: (borderValue: string) => void;
}

export default function Sidebar({
  progress,
  onSelectSubmodule,
  onLogout,
  onUpdateAvatar,
  onUpdatePin,
  onAddDevLog,
  onBuyItem,
  onUnlockVipVault,
  onSelectTheme,
  onSelectTitle,
  onSelectBorder
}: SidebarProps) {
  const [expandedMissions, setExpandedMissions] = useState<Record<string, boolean>>({});
  const [showRewardsModal, setShowRewardsModal] = useState(false);
  const [showDevLogModal, setShowDevLogModal] = useState(false);
  const [showStoreModal, setShowStoreModal] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [newPinInput, setNewPinInput] = useState(progress.pin || "");
  const [pinSavedMsg, setPinSavedMsg] = useState("");

  const currentXP = progress.xp ?? 0;
  const currentCoins = progress.coins ?? 0;
  const currentRank = getRankForXP(currentXP);
  const activeTitle = progress.activeTitle || currentRank.title;

  const toggleMission = (missionId: string, isCurrentlyExpanded: boolean) => {
    setExpandedMissions((prev) => ({
      ...prev,
      [missionId]: !isCurrentlyExpanded,
    }));
  };

  // Bug 4 fix: Calculate the "next available" submodule — the first one after the last completed.
  // This way, navigating back to a completed step never locks you out of future unlocked steps.
  const allSubmodules = courseData.flatMap(m => m.submodules);
  const nextAvailableId = (() => {
    if (progress.completedSubmodules.length === 0) return allSubmodules[0]?.id;
    // Find the furthest completed submodule in sequence
    let furthestIdx = -1;
    for (let i = 0; i < allSubmodules.length; i++) {
      if (progress.completedSubmodules.includes(allSubmodules[i].id)) {
        furthestIdx = i;
      }
    }
    // The next one after the furthest completed is "next available"
    if (furthestIdx + 1 < allSubmodules.length) {
      return allSubmodules[furthestIdx + 1].id;
    }
    return allSubmodules[allSubmodules.length - 1]?.id; // All done
  })();

  const isUnlocked = (subId: string) => {
    return progress.completedSubmodules.includes(subId) || subId === nextAvailableId;
  };

  const isCompleted = (subId: string) => progress.completedSubmodules.includes(subId);

  // Bug 1 fix: Resize avatar to 128x128 before saving to avoid localStorage/Firestore limits
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = 128;
          canvas.height = 128;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0, 128, 128);
            const compressed = canvas.toDataURL("image/jpeg", 0.7);
            onUpdateAvatar(compressed);
          }
        };
        img.src = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const totalTopics = courseData.reduce((acc, mod) => acc + mod.submodules.length, 0);
  const completionPercentage = Math.round((progress.completedSubmodules.length / totalTopics) * 100);

  return (
    <div className="w-72 md:w-84 h-screen shrink-0 bg-[var(--color-bg-panel)] border-r border-[var(--color-border-dark)] overflow-y-auto flex flex-col custom-scrollbar">
      {/* Header Sticky */}
      <div className="p-4 border-b border-[var(--color-border-dark)] sticky top-0 bg-[var(--color-bg-panel)] z-10 glow-blue">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-[var(--color-brand-blue)] animate-pulse" />
          <h2 className="text-lg font-black text-gradient tracking-tight">NEXUS GAME LAB</h2>
        </div>
        
        <div className="mt-3 flex flex-col gap-2">
          {/* BARRA DE RANGO, XP Y MONEDAS NEXUS */}
          <div className="p-2.5 rounded-xl bg-[#0d121a] border border-amber-500/20 space-y-1.5">
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-extrabold text-amber-400 flex items-center gap-1">
                <span>{currentRank.icon}</span> {currentRank.title}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-amber-300 font-extrabold flex items-center gap-0.5">
                  <Coins className="w-3 h-3 text-amber-400 fill-amber-400" /> {currentCoins}
                </span>
                <span className="text-[var(--color-brand-green)] font-black">{currentXP} XP</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-[9px] text-[var(--color-text-muted)]">
              <span>{activeTitle}</span>
              <span className="text-white font-bold">{completionPercentage}%</span>
            </div>
            <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden border border-white/5">
              <div 
                className="h-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-green)] transition-all duration-1000 ease-out"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>

          {/* BOTONES DE RECOMPENSAS, DEVLOG Y TIENDA NEXUS */}
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <button
              onClick={() => setShowRewardsModal(true)}
              className="px-1.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-extrabold text-[9px] flex items-center justify-center gap-1 transition-transform hover:scale-105"
            >
              <Award className="w-3 h-3 text-amber-400 shrink-0" /> Insignias
            </button>
            <button
              onClick={() => setShowDevLogModal(true)}
              className="px-1.5 py-1.5 rounded-lg bg-[var(--color-brand-blue-dim)] hover:bg-[var(--color-brand-blue)]/20 border border-[var(--color-brand-blue)]/30 text-[var(--color-brand-blue)] font-extrabold text-[9px] flex items-center justify-center gap-1 transition-transform hover:scale-105"
            >
              <BookMarked className="w-3 h-3 shrink-0" /> DevLog
            </button>
            <button
              onClick={() => setShowStoreModal(true)}
              className="px-1.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-extrabold text-[9px] flex items-center justify-center gap-1 transition-transform hover:scale-105"
            >
              <ShoppingCart className="w-3 h-3 text-emerald-400 shrink-0" /> Tienda
            </button>
          </div>

          {/* INSIGNIAS DESBLOQUEADAS Y MUESTRARIO RÁPIDO */}
          <div 
            onClick={() => setShowRewardsModal(true)}
            className="p-2 rounded-xl bg-[#090d14] border border-amber-500/30 flex items-center justify-between cursor-pointer hover:border-amber-500/60 transition-all group"
          >
            <div className="flex items-center gap-1.5 overflow-hidden">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-black text-amber-300">Insignias:</span>
              <div className="flex items-center gap-1">
                {(progress.badges || []).length > 0 ? (
                  (progress.badges || []).slice(-4).map((bId) => {
                    const foundB = ALL_BADGES.find(x => x.id === bId);
                    return (
                      <span key={bId} className="text-xs shrink-0 transform group-hover:scale-110 transition-transform" title={foundB?.title}>
                        {foundB?.icon || "🏅"}
                      </span>
                    );
                  })
                ) : (
                  <span className="text-[9px] text-slate-500 italic">Por conseguir...</span>
                )}
              </div>
            </div>
            <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
              {(progress.badges || []).length}/{ALL_BADGES.length} 🏅
            </span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px]">
              <div className="flex items-center gap-1.5 overflow-hidden">
                <div className="relative group/avatar">
                   <div className={`w-7 h-7 rounded-full bg-[#0f1318] border overflow-hidden flex items-center justify-center shrink-0 shadow-inner group-hover/avatar:border-[var(--color-brand-blue)] transition-colors ${progress.activeBorder || "border-[var(--color-border-dark)]"}`}>
                      {progress.avatar ? (
                        <img src={progress.avatar} alt={progress.name} className="w-full h-full object-cover" />
                      ) : (
                        <User className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
                      )}
                   </div>
                   <label className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover/avatar:opacity-100 cursor-pointer rounded-full transition-opacity">
                     <Camera className="w-3 h-3 text-white" />
                     <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                   </label>
                </div>
                <span className="font-bold text-slate-300 truncate max-w-[80px]">{progress.name}</span>
                
                <button
                  onClick={() => { setNewPinInput(progress.pin || ""); setPinSavedMsg(""); setShowPinModal(true); }}
                  className={`p-1 rounded-md border transition-colors ${progress.pin ? "bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20" : "bg-white/5 border-white/10 text-gray-400 hover:text-white"}`}
                  title={progress.pin ? "Perfil protegido con clave (Haz clic para cambiar)" : "Añadir clave de protección"}
                >
                  <Lock className="w-3 h-3" />
                </button>
              </div>

              <button onClick={onLogout} className="text-[var(--color-text-muted)] hover:text-white underline text-[9px] transition-colors opacity-60 hover:opacity-100 shrink-0">
                Cerrar Sesión
              </button>
           </div>
        </div>
      </div>
      
      {/* 🗺️ ARBOL DE MUNDOS, UNIDADES Y MISIONES (3 NIVELES) */}
      <div className="p-3 space-y-6">
        {worldsData.map((world) => (
          <div key={world.id} className="space-y-4">
            {/* NIVEL 1: MUNDO */}
            <div className="px-2 py-1.5 rounded-xl bg-[#0b0f14] border border-[var(--color-brand-blue)]/20 shadow-inner flex items-center gap-2">
              <Globe className="w-4 h-4 text-[var(--color-brand-blue)] shrink-0" />
              <h3 className="text-xs font-black text-[var(--color-brand-blue)] uppercase tracking-wider truncate">
                {world.title}
              </h3>
            </div>

            {/* UNIDADES DENTRO DEL MUNDO */}
            {world.units.map((unit) => (
              <div key={unit.id} className="pl-1 space-y-3">
                {/* NIVEL 2: UNIDAD (SUBMENÚ) */}
                <div className="flex items-center gap-2 text-xs font-bold text-white px-2 py-1 bg-white/5 rounded-lg border border-white/10">
                  <BookOpen className="w-3.5 h-3.5 text-[var(--color-brand-green)] shrink-0" />
                  <span className="truncate">{unit.title}</span>
                </div>

                {/* NIVEL 3: MISIONES EN PARALELO A LA MISMA ALTURA (SUBMENÚ DEL SUBMENÚ) */}
                <div className="pl-2 space-y-2 border-l border-white/10 ml-2">
                  {unit.missions.map((mission) => {
                    const hasActiveSubmodule = mission.submodules.some((s) => s.id === progress.currentSubmoduleId);
                    const isExpanded = expandedMissions[mission.id] ?? hasActiveSubmodule;
                    
                    return (
                      <div key={mission.id} className="space-y-1">
                        <button
                          onClick={() => toggleMission(mission.id, isExpanded)}
                          className={`w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-left text-xs font-semibold transition-all ${
                            hasActiveSubmodule
                              ? "bg-[var(--color-brand-blue-dim)] border border-[var(--color-brand-blue)]/30 text-[var(--color-brand-blue)]"
                              : "hover:bg-white/5 text-slate-300"
                          }`}
                        >
                          <span className="truncate pr-1">{mission.title}</span>
                          {isExpanded ? (
                            <ChevronDown className="w-3.5 h-3.5 shrink-0 opacity-70" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
                          )}
                        </button>

                        {/* PASOS DE CADA MISIÓN */}
                        {isExpanded && (
                          <div className="pl-2 space-y-1 my-1">
                            {mission.submodules.map((sub) => {
                              const unlocked = isUnlocked(sub.id);
                              const completed = isCompleted(sub.id);
                              const active = sub.id === progress.currentSubmoduleId;

                              return (
                                <button
                                  key={sub.id}
                                  disabled={!unlocked}
                                  onClick={() => onSelectSubmodule(mission.id, sub.id)}
                                  className={`w-full flex items-center justify-between px-2 py-1 rounded-md text-[11px] text-left transition-all ${
                                    active
                                      ? "bg-[var(--color-brand-blue)] text-black font-extrabold shadow-[0_0_12px_rgba(0,229,255,0.4)]"
                                      : completed
                                      ? "text-slate-400 hover:text-white hover:bg-white/5"
                                      : unlocked
                                      ? "text-slate-200 hover:bg-white/5 font-medium"
                                      : "text-slate-600 opacity-40 cursor-not-allowed"
                                  }`}
                                >
                                  <div className="flex items-center gap-1.5 truncate pr-1">
                                    {completed ? (
                                      <CheckCircle className={`w-3 h-3 shrink-0 ${active ? "text-black" : "text-[var(--color-brand-green)]"}`} />
                                    ) : active ? (
                                      <Target className="w-3 h-3 text-black shrink-0 animate-pulse" />
                                    ) : unlocked ? (
                                      <Unlock className="w-3 h-3 text-[var(--color-brand-blue)] shrink-0 opacity-80" />
                                    ) : (
                                      <Lock className="w-3 h-3 text-slate-600 shrink-0" />
                                    )}
                                    <span className="truncate">{sub.title}</span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modales */}
      {showRewardsModal && (
        <RewardsModal progress={progress} onClose={() => setShowRewardsModal(false)} />
      )}

      {showDevLogModal && (
        <DevLogModal
          progress={progress}
          onClose={() => setShowDevLogModal(false)}
          onAddDevLog={onAddDevLog}
        />
      )}

      {showStoreModal && (
        <NexusStoreModal
          progress={progress}
          onClose={() => setShowStoreModal(false)}
          onBuyItem={onBuyItem}
          onUnlockVipVault={onUnlockVipVault}
          onSelectTheme={onSelectTheme}
          onSelectTitle={onSelectTitle}
          onSelectBorder={onSelectBorder}
        />
      )}

      {/* Modal Configurar Clave de Seguridad / PIN */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel w-full max-w-md p-6 rounded-3xl glow-blue border border-[var(--color-border-dark)] relative shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 font-bold text-white text-lg">
                <Lock className="w-5 h-5 text-amber-400" />
                Clave de Seguridad del Usuario
              </div>
              <button
                onClick={() => setShowPinModal(false)}
                className="text-gray-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[var(--color-text-muted)] mb-4 leading-relaxed">
              Define una contraseña o PIN personal para <strong>{progress.name}</strong>. Nadie podrá acceder a tu perfil sin esta clave.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (onUpdatePin) {
                  onUpdatePin(newPinInput);
                  setPinSavedMsg("¡Clave de seguridad actualizada correctamente! 🔒");
                  setTimeout(() => {
                    setPinSavedMsg("");
                    setShowPinModal(false);
                  }, 1500);
                }
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-1.5">
                  Nueva Clave / PIN (o dejar vacío para desactivar)
                </label>
                <input
                  type="password"
                  value={newPinInput}
                  onChange={(e) => setNewPinInput(e.target.value)}
                  placeholder="Ej: 1234 o miClaveSecreta"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0d10] border border-amber-500/30 focus:border-amber-400 focus:outline-none text-white font-mono placeholder:text-gray-600"
                />
              </div>

              {pinSavedMsg && (
                <p className="text-emerald-400 text-xs bg-emerald-400/10 p-2.5 rounded-lg border border-emerald-500/30 text-center font-bold">
                  {pinSavedMsg}
                </p>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPinModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-bold transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-extrabold transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                >
                  Guardar Clave
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
