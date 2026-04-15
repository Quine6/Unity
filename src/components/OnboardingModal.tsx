"use client";

import { useState } from "react";
import { UserProgress } from "../hooks/useProgress";
import { Trash2, User, Plus, Key, ArrowRight, Copy, Check } from "lucide-react";

interface OnboardingModalProps {
  profiles: UserProgress[];
  onSelectProfile: (id: string) => void;
  onCreateProfile: (name: string, age: number) => Promise<UserProgress | undefined>;
  onDeleteProfile: (id: string) => void;
  onLoginCode: (code: string) => Promise<boolean>;
}

type Mode = "select" | "create" | "login" | "success";

export default function OnboardingModal({ profiles, onSelectProfile, onCreateProfile, onDeleteProfile, onLoginCode }: OnboardingModalProps) {
  const [mode, setMode] = useState<Mode>(profiles.length === 0 ? "create" : "select");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [code, setCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCreate = async (e: React.FormEvent) => {
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

    setIsLoading(true);
    const newProfile = await onCreateProfile(name, ageNum);
    setIsLoading(false);
    
    if (newProfile) {
       setGeneratedCode(newProfile.id);
       setMode("success");
    } else {
       setError("Hubo un error al generar tu perfil. Revisa tu conexión.");
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) {
      setError("Por favor, introduce tu código secreto");
      return;
    }
    
    setIsLoading(true);
    setError("");
    const success = await onLoginCode(code);
    setIsLoading(false);
    
    if (!success) {
      setError("Código no encontrado. Asegúrate de escribirlo tal cual te lo dimos.");
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-panel w-full max-w-2xl p-8 rounded-3xl glow-blue animate-in fade-in zoom-in duration-500 border border-[var(--color-border-dark)] shadow-2xl relative overflow-hidden">
        
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-blue)] rounded-full blur-[120px] opacity-10 pointer-events-none transform translate-x-20 -translate-y-20"></div>

        <div className="mb-8 text-center relative z-10">
          <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Nexus Game Lab</h1>
          <p className="text-[var(--color-brand-blue)] font-bold tracking-widest text-sm uppercase">Academia de Desarrollo</p>
        </div>

        {mode === "select" && (
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-center mb-8 text-white">¿Quién está aprendiendo hoy?</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {profiles.map((profile) => (
                <div key={profile.id} className="flex flex-col items-center group relative">
                  <button
                    onClick={() => onSelectProfile(profile.id)}
                    className="w-24 h-24 rounded-2xl bg-[#0f1318] border border-[var(--color-border-dark)] group-hover:border-[var(--color-brand-blue)] group-hover:glow-blue flex items-center justify-center transition-all overflow-hidden relative shadow-lg"
                  >
                    {profile.avatar ? (
                      <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-10 h-10 text-[var(--color-text-muted)] group-hover:text-[var(--color-brand-blue)] transition-colors" />
                    )}
                  </button>
                  <div className="mt-3 font-bold text-white group-hover:text-[var(--color-brand-blue)] transition-colors">{profile.name}</div>
                  <div className="text-xs text-[var(--color-text-muted)] font-mono opacity-60">{profile.id}</div>
                  
                  <button
                     onClick={(e) => {
                       e.stopPropagation();
                       if (confirm(`¿Borrar perfil local de ${profile.name}? Tu progreso seguirá en la nube y podrás recuperarlo con tu código ${profile.id}.`)) {
                         onDeleteProfile(profile.id);
                       }
                     }}
                     className="absolute -top-2 -right-2 bg-black/80 border border-red-500/30 hover:border-red-500 hover:bg-red-500/20 text-red-500 backdrop-blur-sm p-1.5 rounded-full transition-all opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
                     title="Quitar de este ordenador"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              
              <div className="flex flex-col items-center group">
                <button
                  onClick={() => setMode("create")}
                  className="w-24 h-24 rounded-2xl bg-[#0f1318] border border-dashed border-[var(--color-border-dark)] group-hover:border-[var(--color-brand-green)] group-hover:glow-green flex items-center justify-center transition-all"
                >
                  <Plus className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[var(--color-brand-green)] transition-colors" />
                </button>
                <div className="mt-3 font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-brand-green)] transition-colors">Nuevo Alumno</div>
              </div>
            </div>

            <div className="text-center border-t border-[var(--color-border-dark)] pt-8">
               <button 
                 onClick={() => setMode("login")}
                 className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#141920] border border-[var(--color-border-dark)] hover:border-[var(--color-brand-blue)] text-[var(--color-text-muted)] hover:text-white font-medium transition-all group"
               >
                 <Key className="w-4 h-4 group-hover:text-[var(--color-brand-blue)]" />
                 Tengo un Código Secreto
               </button>
            </div>
          </div>
        )}

        {mode === "create" && (
          <div className="max-w-md mx-auto relative z-10">
            <button 
              onClick={() => setMode("select")}
              className="text-sm font-medium text-[var(--color-text-muted)] mb-6 hover:text-white transition-colors flex items-center gap-1"
            >
              &larr; Volver
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-6">Crear Perfil de Alumno</h2>
            
            <form onSubmit={handleCreate} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[var(--color-text-main)] mb-1.5">
                  ¿Cómo te llamas?
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0d10] border border-[var(--color-border-dark)] focus:border-[var(--color-brand-blue)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-colors text-white font-medium"
                  placeholder="Tu nombre o alias"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-bold text-[var(--color-text-main)] mb-1.5">
                  ¿Cuántos años tienes?
                </label>
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0d10] border border-[var(--color-border-dark)] focus:border-[var(--color-brand-blue)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-colors text-white font-medium"
                  placeholder="Ej. 14"
                />
              </div>

              {error && <p className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-500/20">{error}</p>}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 bg-[var(--color-brand-green)] hover:bg-[#00e65c] text-black font-extrabold flex items-center justify-center gap-2 rounded-xl transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)] hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
              >
                {isLoading ? "Creando credenciales..." : "Comenzar Aventura"}
                {!isLoading && <ArrowRight className="w-5 h-5 -rotate-45" />}
              </button>
            </form>
          </div>
        )}

        {mode === "login" && (
          <div className="max-w-md mx-auto relative z-10">
            <button 
              onClick={() => setMode("select")}
              className="text-sm font-medium text-[var(--color-text-muted)] mb-6 hover:text-white transition-colors flex items-center gap-1"
            >
              &larr; Volver
            </button>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#0f1318] border border-[var(--color-border-dark)] flex items-center justify-center mx-auto mb-4 glow-blue">
                <Key className="w-8 h-8 text-[var(--color-brand-blue)]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Recuperar Progreso</h2>
              <p className="text-[var(--color-text-muted)] text-sm">Introduce tu código secreto para continuar exactamente donde lo dejaste.</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  className="w-full px-4 py-4 rounded-xl bg-[#0a0d10] border border-[var(--color-border-dark)] focus:border-[var(--color-brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:ring-opacity-50 transition-colors text-white font-mono text-center text-2xl tracking-widest uppercase placeholder:text-gray-700"
                  placeholder="XXX-XXX"
                  maxLength={7}
                />
              </div>

              {error && <p className="text-red-400 text-sm text-center bg-red-400/10 p-3 rounded-lg border border-red-500/20">{error}</p>}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 bg-[var(--color-brand-blue)] hover:bg-[#00c9e0] text-black font-extrabold flex items-center justify-center gap-2 rounded-xl transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
              >
                {isLoading ? "Sincronizando la nube..." : "Entrar a la Academia"}
              </button>
            </form>
          </div>
        )}

        {mode === "success" && (
          <div className="max-w-md mx-auto text-center relative z-10 animate-in slide-in-from-bottom-4 duration-500">
             <div className="w-20 h-20 rounded-full bg-[var(--color-brand-green)]/20 border-2 border-[var(--color-brand-green)] flex items-center justify-center mx-auto mb-6 glow-green relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-brand-green)]/20 animate-pulse"></div>
                <Check className="w-10 h-10 text-[var(--color-brand-green)]" />
             </div>
             
             <h2 className="text-2xl font-black text-white mb-4">¡Perfil creado en la Nube!</h2>
             <p className="text-[var(--color-text-main)] mb-8 leading-relaxed">
               Este ordenador ya te recordará, pero si alguna vez quieres entrar desde tu casa o desde otro equipo, <strong>necesitarás este código:</strong>
             </p>

             <div className="bg-[#090b0e] border border-[var(--color-brand-blue)] rounded-2xl p-6 relative group glow-blue mb-8">
               <div className="text-4xl font-mono font-bold text-[var(--color-brand-blue)] tracking-[0.2em]">
                 {generatedCode}
               </div>
               
               <button 
                 onClick={copyCode}
                 className="absolute top-1/2 -translate-y-1/2 right-4 p-3 bg-[#111418] hover:bg-[#1a2027] border border-[var(--color-border-dark)] rounded-xl text-[var(--color-text-muted)] hover:text-white transition-all hover:scale-105"
                 title="Copiar código"
               >
                 {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
               </button>
             </div>

             <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-8 text-left flex gap-3">
               <span className="text-2xl">⚠️</span>
               <p className="text-sm text-yellow-200/80 m-0"><strong>Guárdalo bien:</strong> Hazle una foto o apúntalo. Sin este código no podrás recuperar tu progreso en otros ordenadores.</p>
             </div>

             <button
                onClick={() => onSelectProfile(generatedCode)}
                className="w-full py-4 px-4 bg-white hover:bg-gray-200 text-black font-extrabold flex items-center justify-center gap-2 rounded-xl transition-all hover:scale-[1.02]"
              >
                ¡Lo tengo anotado, a programar!
              </button>
          </div>
        )}

      </div>
    </div>
  );
}
