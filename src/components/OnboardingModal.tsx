"use client";

import { useState } from "react";
import { UserProgress } from "../hooks/useProgress";
import { Trash2, User, Plus, Key, ArrowRight, Copy, Check, Lock, ShieldCheck, KeyRound } from "lucide-react";

interface OnboardingModalProps {
  profiles: UserProgress[];
  onSelectProfile: (id: string) => void;
  onCreateProfile: (name: string, age: number, pin?: string) => Promise<UserProgress | undefined>;
  onDeleteProfile: (id: string) => void;
  onLoginCode: (code: string) => Promise<UserProgress | null>;
}

type Mode = "select" | "create" | "login" | "verify_pin" | "success";

export default function OnboardingModal({ profiles, onSelectProfile, onCreateProfile, onDeleteProfile, onLoginCode }: OnboardingModalProps) {
  const [mode, setMode] = useState<Mode>(profiles.length === 0 ? "create" : "select");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [pin, setPin] = useState("");
  const [code, setCode] = useState("");
  const [verifyPinInput, setVerifyPinInput] = useState("");
  const [selectedProfileForPin, setSelectedProfileForPin] = useState<UserProgress | null>(null);
  const [generatedCode, setGeneratedCode] = useState("");
  const [createdPin, setCreatedPin] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleProfileClick = (profile: UserProgress) => {
    setError("");
    if (profile.pin) {
      setSelectedProfileForPin(profile);
      setVerifyPinInput("");
      setMode("verify_pin");
    } else {
      onSelectProfile(profile.id);
    }
  };

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
    setError("");
    const newProfile = await onCreateProfile(name, ageNum, pin);
    setIsLoading(false);
    
    if (newProfile) {
       setGeneratedCode(newProfile.id);
       setCreatedPin(pin.trim());
       setMode("success");
    } else {
       setError("Hubo un error al generar tu perfil. Revisa tu conexión.");
    }
  };

  const handleLoginCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) {
      setError("Por favor, introduce tu código secreto");
      return;
    }
    
    setIsLoading(true);
    setError("");
    const profile = await onLoginCode(code);
    setIsLoading(false);
    
    if (!profile) {
      setError("Código no encontrado. Asegúrate de escribirlo tal cual te lo dimos.");
      return;
    }

    if (profile.pin) {
      setSelectedProfileForPin(profile);
      setVerifyPinInput("");
      setMode("verify_pin");
    } else {
      onSelectProfile(profile.id);
    }
  };

  const handleVerifyPinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProfileForPin) return;

    if (!verifyPinInput.trim()) {
      setError("Introduce tu clave o PIN de acceso");
      return;
    }

    if (verifyPinInput.trim() === selectedProfileForPin.pin) {
      setError("");
      onSelectProfile(selectedProfileForPin.id);
    } else {
      setError("¡Clave de acceso incorrecta! Inténtalo de nuevo.");
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

        {/* 1. SELECCIÓN DE PERFIL */}
        {mode === "select" && (
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-center mb-8 text-white">¿Quién está aprendiendo hoy?</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {profiles.map((profile) => (
                <div key={profile.id} className="flex flex-col items-center group relative">
                  <button
                    onClick={() => handleProfileClick(profile)}
                    className="w-24 h-24 rounded-2xl bg-[#0f1318] border border-[var(--color-border-dark)] group-hover:border-[var(--color-brand-blue)] group-hover:glow-blue flex items-center justify-center transition-all overflow-hidden relative shadow-lg"
                  >
                    {profile.avatar ? (
                      <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-10 h-10 text-[var(--color-text-muted)] group-hover:text-[var(--color-brand-blue)] transition-colors" />
                    )}

                    {/* Candado visual si requiere clave de acceso */}
                    {profile.pin && (
                      <div className="absolute top-1.5 right-1.5 p-1 bg-amber-500/20 border border-amber-500/50 rounded-full text-amber-400 backdrop-blur-sm" title="Perfil protegido con clave">
                        <Lock className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </button>

                  <div className="mt-3 font-bold text-white group-hover:text-[var(--color-brand-blue)] transition-colors flex items-center gap-1">
                    {profile.name}
                    {profile.pin && <Lock className="w-3 h-3 text-amber-400" />}
                  </div>
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
                  onClick={() => { setError(""); setMode("create"); }}
                  className="w-24 h-24 rounded-2xl bg-[#0f1318] border border-dashed border-[var(--color-border-dark)] group-hover:border-[var(--color-brand-green)] group-hover:glow-green flex items-center justify-center transition-all"
                >
                  <Plus className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[var(--color-brand-green)] transition-colors" />
                </button>
                <div className="mt-3 font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-brand-green)] transition-colors">Nuevo Alumno</div>
              </div>
            </div>

            <div className="text-center border-t border-[var(--color-border-dark)] pt-8">
               <button 
                 onClick={() => { setError(""); setMode("login"); }}
                 className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#141920] border border-[var(--color-border-dark)] hover:border-[var(--color-brand-blue)] text-[var(--color-text-muted)] hover:text-white font-medium transition-all group"
               >
                 <Key className="w-4 h-4 group-hover:text-[var(--color-brand-blue)]" />
                 Tengo un Código Secreto
               </button>
            </div>
          </div>
        )}

        {/* 2. VERIFICACIÓN DE CLAVE / PIN */}
        {mode === "verify_pin" && selectedProfileForPin && (
          <div className="max-w-md mx-auto relative z-10 animate-in fade-in zoom-in-95 duration-300">
            <button 
              onClick={() => { setError(""); setMode("select"); }}
              className="text-sm font-medium text-[var(--color-text-muted)] mb-6 hover:text-white transition-colors flex items-center gap-1"
            >
              &larr; Volver a selección
            </button>

            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-[#0f1318] border border-amber-500/40 flex items-center justify-center mx-auto mb-4 glow-blue relative">
                {selectedProfileForPin.avatar ? (
                  <img src={selectedProfileForPin.avatar} alt={selectedProfileForPin.name} className="w-full h-full object-cover rounded-2xl" />
                ) : (
                  <User className="w-10 h-10 text-[var(--color-brand-blue)]" />
                )}
                <div className="absolute -bottom-1 -right-1 bg-amber-500 p-1.5 rounded-full text-black">
                  <Lock className="w-4 h-4" />
                </div>
              </div>

              <h2 className="text-2xl font-black text-white mb-1">Perfil Protegido</h2>
              <p className="text-[var(--color-text-muted)] text-sm">
                Introduce la clave secreta de <strong className="text-white">{selectedProfileForPin.name}</strong> para acceder.
              </p>
            </div>

            <form onSubmit={handleVerifyPinSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 text-center">
                  🔑 Clave / PIN de Acceso
                </label>
                <input
                  type="password"
                  value={verifyPinInput}
                  onChange={(e) => setVerifyPinInput(e.target.value)}
                  autoFocus
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0a0d10] border border-amber-500/40 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-colors text-white font-mono text-center text-xl tracking-widest placeholder:text-gray-700"
                  placeholder="••••••••"
                />
              </div>

              {error && <p className="text-red-400 text-sm text-center bg-red-400/10 p-3 rounded-lg border border-red-500/20">{error}</p>}

              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-black font-extrabold flex items-center justify-center gap-2 rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-[1.02]"
              >
                <KeyRound className="w-5 h-5" />
                Desbloquear e Iniciar Sesión
              </button>
            </form>
          </div>
        )}

        {/* 3. CREAR PERFIL */}
        {mode === "create" && (
          <div className="max-w-md mx-auto relative z-10">
            {profiles.length > 0 && (
              <button 
                onClick={() => { setError(""); setMode("select"); }}
                className="text-sm font-medium text-[var(--color-text-muted)] mb-6 hover:text-white transition-colors flex items-center gap-1"
              >
                &larr; Volver
              </button>
            )}
            
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

              <div>
                <label htmlFor="pin" className="block text-sm font-bold text-amber-300 mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  Clave o PIN de seguridad (Recomendado)
                </label>
                <input
                  type="password"
                  id="pin"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0d10] border border-amber-500/30 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors text-white font-mono placeholder:text-gray-600"
                  placeholder="Crea una contraseña o PIN (Ej: 1234)"
                />
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  Protege tu usuario para que nadie más pueda entrar ni cambiar tu progreso en este ordenador.
                </p>
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

        {/* 4. RECUPERAR CON CÓDIGO SECRET */}
        {mode === "login" && (
          <div className="max-w-md mx-auto relative z-10">
            <button 
              onClick={() => { setError(""); setMode("select"); }}
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
            
            <form onSubmit={handleLoginCodeSubmit} className="space-y-5">
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
                {isLoading ? "Sincronizando la nube..." : "Buscar Usuario"}
              </button>
            </form>
          </div>
        )}

        {/* 5. PERFIL CREADO CON ÉXITO */}
        {mode === "success" && (
          <div className="max-w-md mx-auto text-center relative z-10 animate-in slide-in-from-bottom-4 duration-500">
             <div className="w-20 h-20 rounded-full bg-[var(--color-brand-green)]/20 border-2 border-[var(--color-brand-green)] flex items-center justify-center mx-auto mb-6 glow-green relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-brand-green)]/20 animate-pulse"></div>
                <Check className="w-10 h-10 text-[var(--color-brand-green)]" />
             </div>
             
             <h2 className="text-2xl font-black text-white mb-4">¡Perfil creado e instalado!</h2>
             <p className="text-[var(--color-text-main)] mb-6 leading-relaxed text-sm">
               Tu código único de laboratorio para identificarte en otros equipos es:
             </p>

             <div className="bg-[#090b0e] border border-[var(--color-brand-blue)] rounded-2xl p-5 relative group glow-blue mb-6">
               <div className="text-3xl font-mono font-bold text-[var(--color-brand-blue)] tracking-[0.2em]">
                 {generatedCode}
               </div>
               
               <button 
                 onClick={copyCode}
                 className="absolute top-1/2 -translate-y-1/2 right-4 p-2.5 bg-[#111418] hover:bg-[#1a2027] border border-[var(--color-border-dark)] rounded-xl text-[var(--color-text-muted)] hover:text-white transition-all hover:scale-105"
                 title="Copiar código"
               >
                 {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
               </button>
             </div>

             {createdPin && (
               <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 mb-6 text-left flex items-center gap-3">
                 <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                 <p className="text-xs text-amber-200 m-0">
                   <strong>Clave personal activada:</strong> Tu perfil requerirá la clave <strong>{createdPin}</strong> para iniciar sesión.
                 </p>
               </div>
             )}

             <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-8 text-left flex gap-3">
               <span className="text-2xl">⚠️</span>
               <p className="text-xs text-yellow-200/80 m-0"><strong>Recuerda tu código:</strong> Hazle una foto o apúntalo para recuperar tu avance si cambias de ordenador.</p>
             </div>

             <button
                onClick={() => onSelectProfile(generatedCode)}
                className="w-full py-4 px-4 bg-white hover:bg-gray-200 text-black font-extrabold flex items-center justify-center gap-2 rounded-xl transition-all hover:scale-[1.02]"
              >
                ¡A comenzar a programar!
              </button>
          </div>
        )}

      </div>
    </div>
  );
}
