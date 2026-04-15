"use client";

import { courseData } from "../data/courseContent";
import { UserProgress } from "../hooks/useProgress";
import { Lock, Unlock, CheckCircle, User, Camera } from "lucide-react";

interface SidebarProps {
  progress: UserProgress;
  onSelectSubmodule: (modId: string, subId: string) => void;
  onLogout: () => void;
  onUpdateAvatar: (dataUrl: string) => void;
}

export default function Sidebar({ progress, onSelectSubmodule, onLogout, onUpdateAvatar }: SidebarProps) {
  // A helper function to determine if a submodule is completed, current, or locked.
  // Assuming linear progression, a submodule is unlocked if it's completed or is the current one.
  const isUnlocked = (subId: string) => {
    return progress.completedSubmodules.includes(subId) || progress.currentSubmoduleId === subId;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdateAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const isCompleted = (subId: string) => progress.completedSubmodules.includes(subId);
  const totalTopics = courseData.reduce((acc, mod) => acc + mod.submodules.length, 0);
  const completionPercentage = Math.round((progress.completedSubmodules.length / totalTopics) * 100);

  return (
    <div className="w-64 md:w-80 h-screen shrink-0 bg-[var(--color-bg-panel)] border-r border-[var(--color-border-dark)] overflow-y-auto flex flex-col">
      <div className="p-6 border-b border-[var(--color-border-dark)] sticky top-0 bg-[var(--color-bg-panel)] z-10 glow-blue">
        <h2 className="text-xl font-bold text-gradient tracking-tighter">NEXUS GAME LAB</h2>
        <div className="mt-4 flex flex-col gap-2">
          <div className="text-[10px] text-[var(--color-text-muted)] space-y-2">
            <div className="flex justify-between items-center px-0.5">
              <span className="font-bold tracking-widest uppercase">Progreso Global</span>
              <span className="text-[var(--color-brand-green)] font-black">
                {completionPercentage}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden border border-white/5">
              <div 
                className="h-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-green)] transition-all duration-1000 ease-out"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <div className="flex justify-between text-[8px] opacity-60 italic mb-1">
              <span>{progress.name}</span>
              <span>{progress.completedSubmodules.length} / {totalTopics} temas</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="relative group/avatar">
                <div className="w-10 h-10 rounded-full bg-[#0f1318] border border-[var(--color-border-dark)] overflow-hidden flex items-center justify-center shrink-0 shadow-inner group-hover/avatar:border-[var(--color-brand-blue)] transition-colors">
                   {progress.avatar ? (
                     <img src={progress.avatar} alt={progress.name} className="w-full h-full object-cover" />
                   ) : (
                     <User className="w-5 h-5 text-[var(--color-text-muted)]" />
                   )}
                </div>
                <label className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover/avatar:opacity-100 cursor-pointer rounded-full transition-opacity">
                  <Camera className="w-4 h-4 text-white" />
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </label>
             </div>
             <button onClick={onLogout} className="text-left w-max text-[var(--color-text-muted)] hover:text-white underline text-[10px] transition-colors opacity-40 hover:opacity-100">
               Cerrar Sesión
             </button>
          </div>
        </div>
      </div>
      
      <div className="p-4 space-y-6">
        {courseData.map((mod) => (
          <div key={mod.id} className="space-y-2">
            <h3 className="text-xs font-bold text-[var(--color-text-muted)] tracking-wider px-2">
              {mod.id} {mod.title}
            </h3>
            <ul className="space-y-1">
              {mod.submodules.map((sub) => {
                const unlocked = isUnlocked(sub.id);
                const completed = isCompleted(sub.id);
                const current = progress.currentSubmoduleId === sub.id;

                let stateClass = "text-[var(--color-text-muted)] opacity-50 cursor-not-allowed";
                let Icon = Lock;

                if (current) {
                  stateClass = "bg-[var(--color-brand-green-dim)] text-[var(--color-brand-green)] border border-[var(--color-brand-green)]/30 font-medium glow-green";
                  Icon = Unlock;
                } else if (completed) {
                  stateClass = "text-[var(--color-text-main)] hover:bg-[var(--color-bg-panel-hover)] cursor-pointer";
                  Icon = CheckCircle;
                }

                return (
                  <li key={sub.id}>
                    <button
                      disabled={!unlocked}
                      onClick={() => onSelectSubmodule(mod.id, sub.id)}
                      className={`w-full flex items-center gap-3 text-left px-3 py-2.5 rounded-lg transition-all text-sm ${stateClass}`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${completed && !current ? "text-[var(--color-brand-blue)]" : ""}`} />
                      <span className="truncate">{sub.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
