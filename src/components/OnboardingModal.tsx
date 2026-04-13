"use client";

import { useState } from "react";
import { UserProgress } from "../hooks/useProgress";
import { Trash2, User, Plus } from "lucide-react";

interface OnboardingModalProps {
  profiles: UserProgress[];
  onSelectProfile: (id: string) => void;
  onCreateProfile: (name: string, age: number) => void;
  onDeleteProfile: (id: string) => void;
}

export default function OnboardingModal({ profiles, onSelectProfile, onCreateProfile, onDeleteProfile }: OnboardingModalProps) {
  const [isCreating, setIsCreating] = useState(profiles.length === 0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ageNum = parseInt(age, 10);
    
    if (!name.trim()) {
      setError("¡Por favor, dime tu nombre!");
      return;
    }
    
    if (isNaN(ageNum) || ageNum < 5 || ageNum > 100) {
      setError("¡Introduce una edad válida!");
      return;
    }

    onCreateProfile(name, ageNum);
    // Reset form
    setName("");
    setAge("");
    setIsCreating(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-panel w-full max-w-2xl p-8 rounded-2xl glow-blue animate-in fade-in zoom-in duration-500">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gradient mb-4">¿Quién está aprendiendo hoy?</h1>
        </div>

        {!isCreating && (
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {profiles.map((profile) => (
              <div key={profile.id} className="flex flex-col items-center group relative">
                <button
                  onClick={() => onSelectProfile(profile.id)}
                  className="w-24 h-24 rounded-2xl bg-[var(--color-bg-dark)] border-2 border-[var(--color-border-dark)] group-hover:border-[var(--color-brand-blue)] group-hover:glow-blue flex items-center justify-center transition-all overflow-hidden relative"
                >
                  <User className="w-12 h-12 text-[var(--color-text-muted)] group-hover:text-[var(--color-brand-blue)] transition-colors" />
                </button>
                <div className="mt-3 font-medium text-[var(--color-text-main)] group-hover:text-white transition-colors">{profile.name}</div>
                <div className="text-xs text-[var(--color-text-muted)]">Nivel {profile.completedSubmodules.length + 1}</div>
                
                <button
                   onClick={(e) => {
                     e.stopPropagation();
                     if (confirm(`¿Estás seguro de que quieres borrar el perfil de ${profile.name}? Perderás todo el progreso.`)) {
                       onDeleteProfile(profile.id);
                     }
                   }}
                   className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-500 text-white p-1.5 rounded-full shadow-lg transition-transform hover:scale-110"
                   title="Borrar perfil"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
            
            <div className="flex flex-col items-center group">
              <button
                onClick={() => setIsCreating(true)}
                className="w-24 h-24 rounded-2xl bg-[var(--color-bg-dark)] border-2 border-dashed border-[var(--color-border-dark)] group-hover:border-[var(--color-brand-green)] group-hover:glow-green flex items-center justify-center transition-all"
              >
                <Plus className="w-10 h-10 text-[var(--color-text-muted)] group-hover:text-[var(--color-brand-green)] transition-colors" />
              </button>
              <div className="mt-3 font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-brand-green)] transition-colors">Nuevo Perfil</div>
            </div>
          </div>
        )}

        {isCreating && (
          <div className="max-w-md mx-auto">
            {profiles.length > 0 && (
              <button 
                onClick={() => setIsCreating(false)}
                className="text-sm text-[var(--color-brand-blue)] mb-4 hover:underline"
              >
                &larr; Volver a perfiles
              </button>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-main)] mb-1">
                  ¿Cuál es tu nombre, futuro desarrollador?
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-dark)] border border-[var(--color-border-dark)] focus:border-[var(--color-brand-blue)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-colors text-white"
                  placeholder="Ej. Alex"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-[var(--color-text-main)] mb-1">
                  ¿Cuántos años tienes?
                </label>
                <p className="text-xs text-[var(--color-text-muted)] mb-2">
                  (Ajustaremos las explicaciones a tu nivel)
                </p>
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-dark)] border border-[var(--color-border-dark)] focus:border-[var(--color-brand-blue)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-colors text-white"
                  placeholder="Ej. 25"
                />
              </div>

              {error && <p className="text-red-400 text-sm font-medium">{error}</p>}

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[var(--color-brand-blue)] hover:bg-[#00c9e0] text-black font-bold flex items-center justify-center rounded-lg transition-colors glow-blue"
              >
                ¡Crear Perfil!
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
