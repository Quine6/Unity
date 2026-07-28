"use client";

import { useState, useEffect } from "react";
import { courseData, GODOT_VIDEO_1_ID } from "../data/courseContent";
import { UserProgress } from "../hooks/useProgress";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Loader2, Zap, Play, ExternalLink, CheckCircle2, Tv, Hammer, Box, Target, Trophy, HelpCircle, Sparkles } from "lucide-react";

interface MainContentProps {
  currentModuleId: string;
  currentSubmoduleId: string;
  progress: UserProgress;
  onCacheLesson: (subId: string, mdContent: string) => void;
}

export default function MainContent({ currentModuleId, currentSubmoduleId, progress, onCacheLesson }: MainContentProps) {
  // Robust lookup with auto-fallbacks for stale localStorage state
  let currentMod = courseData.find((m) => m.id === currentModuleId);
  if (!currentMod) {
    currentMod = courseData.find((m) => m.submodules.some((s) => s.id === currentSubmoduleId)) || courseData[0];
  }

  let currentSub = currentMod?.submodules.find((s) => s.id === currentSubmoduleId);
  if (!currentSub) {
    currentSub = courseData.flatMap((m) => m.submodules).find((s) => s.id === currentSubmoduleId) || currentMod?.submodules[0] || courseData[0]?.submodules[0];
  }

  const cachedMarkdown = progress.lessonsCache[currentSubmoduleId];
  const hasContent = !!cachedMarkdown;

  const [isGenerating, setIsGenerating] = useState(false);

  // Auto-scroll to top when lesson changes
  useEffect(() => {
    const el = document.getElementById("main-content-scroll");
    if (el) el.scrollTop = 0;
  }, [currentSubmoduleId]);

  if (!currentMod || !currentSub) return <div>Cargando laboratorio...</div>;

  const youtubeId = currentSub.youtubeId || GODOT_VIDEO_1_ID;
  const startSec = currentSub.startTime || 0;
  const endSec = currentSub.endTime || 0;
  
  // YouTube embed with start/end parameters as mandated by Nexus Game Lab spec
  const youtubeUrl = `https://www.youtube.com/embed/${youtubeId}?start=${startSec}&end=${endSec > 0 ? endSec : ""}&rel=0&autoplay=0`;
  const externalYoutubeUrl = `https://www.youtube.com/watch?v=${youtubeId}&t=${startSec}s`;

  const handleGenerateContent = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate-lesson", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          moduleTitle: currentMod.title,
          topicTitle: currentSub.title,
          topicId: currentSub.id,
          description: currentSub.description,
          startTime: currentSub.startTime,
          endTime: currentSub.endTime,
          duration: currentSub.duration,
          actionObjective: currentSub.actionObjective,
          victoryCondition: currentSub.victoryCondition,
          godotNodes: currentSub.godotNodes,
          optionalChallenge: currentSub.optionalChallenge,
          categoryTag: currentSub.categoryTag,
          age: progress.age
        })
      });

      const data = await response.json();
      onCacheLesson(currentSub.id, data.markdown);
    } catch (e) {
      console.error("Failed to generate", e);
      alert("Hubo un error al compilar la guía práctica. Revisa tu API Key.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div id="main-content-scroll" className="flex-1 h-screen overflow-y-auto bg-[var(--color-bg-dark)] smooth-scroll custom-scrollbar pb-32">
      <div className="max-w-4xl mx-auto p-6 lg:p-10">
        
        {/* Header con Badge de Filosofía Nexus Game Lab (Godot 4) */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--color-brand-blue-dim)] text-[var(--color-brand-blue)] border border-[var(--color-brand-blue)]/30 uppercase tracking-wider">
              {currentMod.title}
            </span>
            {currentSub.categoryTag && (
              <span className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider ${
                currentSub.categoryTag === "Esencial"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                  : currentSub.categoryTag === "Reto extra"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                  : "bg-purple-500/20 text-purple-300 border border-purple-500/40"
              }`}>
                📌 Cápsula {currentSub.categoryTag}
              </span>
            )}
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center gap-1.5 uppercase tracking-wider">
              <Tv className="w-3.5 h-3.5" /> Godot 4 &bull; Fragmento de {Math.floor(startSec / 60)}:{(startSec % 60).toString().padStart(2, "0")} a {Math.floor(endSec / 60)}:{(endSec % 60).toString().padStart(2, "0")}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-[var(--color-text-main)] mb-3">
            {currentSub.title}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[var(--color-brand-blue)] via-[var(--color-brand-green)] to-emerald-400 rounded-full"></div>
        </header>

        {/* 🎯 TARJETA DE MISIÓN RÁPIDA (Objetivo & Condición de Victoria) */}
        <section className="mb-8 glass-panel rounded-3xl p-6 border border-[var(--color-brand-blue)]/30 bg-gradient-to-r from-[#0a1017] to-[#070e14] shadow-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-3 rounded-2xl bg-[var(--color-brand-blue-dim)] text-[var(--color-brand-blue)] border border-[var(--color-brand-blue)]/30 shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-[var(--color-brand-blue)] uppercase tracking-wider mb-1">Objetivo Práctico</h4>
                <p className="text-sm font-medium text-white m-0 leading-relaxed">
                  {currentSub.actionObjective || "Crear y probar el nuevo elemento en tu proyecto de Godot 4."}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-3 rounded-2xl bg-[var(--color-brand-green-dim)] text-[var(--color-brand-green)] border border-[var(--color-brand-green)]/30 shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-[var(--color-brand-green)] uppercase tracking-wider mb-1">Victoria Visible</h4>
                <p className="text-sm font-medium text-white m-0 leading-relaxed">
                  {currentSub.victoryCondition || "Ver el resultado funcionando inmediatamente en pantalla al presionar Play."}
                </p>
              </div>
            </div>
          </div>

          {/* Nodos recomendados de Godot */}
          {currentSub.godotNodes && currentSub.godotNodes.length > 0 && (
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 flex-wrap text-xs">
              <span className="text-[var(--color-text-muted)] font-bold flex items-center gap-1">
                <Box className="w-3.5 h-3.5 text-[var(--color-brand-blue)]" /> Nodos de Godot 4 usados:
              </span>
              {currentSub.godotNodes.map((node, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-[#11161d] border border-white/10 font-mono text-[var(--color-brand-green)] font-bold">
                  {node}
                </span>
              ))}
            </div>
          )}

          {/* Reto Creativo Opcional si aplica */}
          {currentSub.optionalChallenge && (
            <div className="mt-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
              <div>
                <strong className="block text-amber-400 font-extrabold uppercase tracking-wider mb-0.5">🌟 Reto Creativo Opcional:</strong>
                {currentSub.optionalChallenge}
              </div>
            </div>
          )}
        </section>

        {/* 🎬 ZONA DE REPRODUCTOR CON MARCA DE TIEMPO EXACTA */}
        <section className="mb-10 glass-panel rounded-3xl p-4 lg:p-6 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <span className="p-2 rounded-xl bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                <Play className="w-4 h-4 fill-white" />
              </span>
              <span>Fragmento Exacto de Ayuda (Godot 4 Desde Cero)</span>
            </div>
            <a
              href={externalYoutubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[var(--color-brand-blue)] hover:text-white flex items-center gap-1 bg-[#111418] px-3 py-1.5 rounded-xl border border-[var(--color-border-dark)] transition-colors"
            >
              Abrir Fragmento en YouTube <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embed iFrame Youtube 16:9 con parámetros start/end */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
            <iframe
              src={youtubeUrl}
              title={currentSub.title}
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* 🛠️ ZONA DE IMPLEMENTACIÓN Y GUÍA DE ACCIÓN */}
        {(!hasContent && !isGenerating) && (
          <div className="glass-panel p-8 lg:p-12 text-center rounded-3xl border-dashed border-2 border-[var(--color-brand-green)]/40 flex flex-col items-center justify-center min-h-[35vh] relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-green-dim)] border border-[var(--color-brand-green)] flex items-center justify-center mb-4 glow-green">
              <Hammer className="w-8 h-8 text-[var(--color-brand-green)]" />
            </div>
            <h2 className="text-2xl font-black mb-3 text-[var(--color-text-main)]">
              ¡Pasa del Vídeo a la Acción en Godot 4!
            </h2>
            <p className="text-[var(--color-text-muted)] mb-8 max-w-lg leading-relaxed text-sm">
              Mira el fragmento en vídeo de arriba y pulsa este botón para desplegar los <strong>Pasos de Acción Directos</strong> y los <strong>Retos de Creación</strong> para tu proyecto de Godot 4.
            </p>
            <button 
              onClick={handleGenerateContent}
              className="px-8 py-4 bg-[var(--color-brand-green)] hover:bg-[#00e65c] text-black font-extrabold text-lg rounded-2xl flex items-center gap-3 transition-transform hover:scale-105 glow-green shadow-[0_0_30px_rgba(0,255,102,0.4)]"
            >
              <Zap className="fill-black w-5 h-5" /> ¡Cargar Misión Práctica en Godot 4!
            </button>
          </div>
        )}

        {isGenerating && (
          <div className="glass-panel p-12 text-center rounded-3xl border border-[var(--color-brand-green)]/30 flex flex-col items-center justify-center space-y-5">
            <div className="w-14 h-14 rounded-full border-4 border-[var(--color-bg-panel)] border-t-[var(--color-brand-green)] animate-spin shadow-[0_0_20px_var(--color-brand-green-dim)]"></div>
            <p className="text-[var(--color-brand-green)] text-base font-mono font-bold animate-pulse">
              Compilando las acciones de Godot 4 para tu proyecto...
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">Construyendo misiones y verificación visual.</p>
          </div>
        )}

        {hasContent && (
          <section className="lesson-content">
            <div className="prose prose-invert prose-lg max-w-none
              prose-headings:text-[var(--color-brand-blue)]
              prose-headings:font-black prose-headings:tracking-tighter
              prose-h2:text-2xl prose-h2:border-b prose-h2:border-[var(--color-border-dark)] prose-h2:pb-3
              prose-h3:text-lg prose-h3:text-[var(--color-brand-green)]
              prose-a:text-[var(--color-brand-green)] prose-a:no-underline hover:prose-a:underline
              prose-p:text-[var(--color-text-main)] prose-p:leading-8 prose-p:mb-6
              prose-li:text-[var(--color-text-main)] prose-li:leading-8
              prose-pre:bg-[#090b0e] prose-pre:border prose-pre:border-[var(--color-border-dark)] prose-pre:shadow-2xl prose-pre:p-6 prose-pre:rounded-2xl
              prose-code:text-[var(--color-brand-green)] prose-code:bg-[#0f1318] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
              prose-strong:text-white prose-strong:font-bold
              prose-table:border-collapse prose-table:w-full prose-table:my-8
              prose-th:bg-[#111827] prose-th:p-4 prose-th:text-[var(--color-brand-blue)] prose-th:border prose-th:border-[var(--color-border-dark)] prose-th:text-sm prose-th:uppercase prose-th:tracking-wide
              prose-td:p-4 prose-td:border prose-td:border-[var(--color-border-dark)] prose-td:text-sm
              prose-tr:even:bg-[#0d1117]
              prose-hr:border-none
            ">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {cachedMarkdown}
              </ReactMarkdown>
            </div>

            {/* Banner de Mentor IA y Subida de Evidencias */}
            <div className="mt-12 space-y-6">
              {/* ZONA DE SUBIDA DE EVIDENCIA */}
              <div className="glass-panel p-6 lg:p-8 rounded-3xl border border-amber-500/40 relative overflow-hidden bg-gradient-to-r from-[#141008] to-[#0a0f18] shadow-[0_0_40px_rgba(245,158,11,0.15)]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-2xl">
                    📤
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-amber-300 m-0 flex items-center gap-2">
                      Entregable de la Misión — Sube la Evidencia de tu Juego <Sparkles className="w-4 h-4 text-amber-400" />
                    </h3>
                    <p className="text-xs text-[var(--color-text-muted)] m-0 mt-1 leading-relaxed">
                      Sube una captura de tu nivel o tu archivo de escena/script para guardar tu avance en tu Portafolio de Creador y recibir la revisión del Mentor IA.
                    </p>
                  </div>
                </div>

                {/* Explicación de los 3 tipos de entregable */}
                <div className="grid md:grid-cols-3 gap-3 mb-5">
                  <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-xs">
                    <span className="font-extrabold text-blue-400 block mb-1">📸 Captura (.png / .jpg)</span>
                    <p className="text-[11px] text-[var(--color-text-muted)] m-0">Foto de tu visor 3D en Godot jugando con F6 o diseñando.</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-xs">
                    <span className="font-extrabold text-emerald-400 block mb-1">📜 Código / Escena (.tscn / .gd)</span>
                    <p className="text-[11px] text-[var(--color-text-muted)] m-0">Archivo de tu escena `Level_01.tscn` o script `player_movement.gd`.</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-xs">
                    <span className="font-extrabold text-amber-400 block mb-1">📦 Proyecto (.zip)</span>
                    <p className="text-[11px] text-[var(--color-text-muted)] m-0">Copia comprimida de tu carpeta de juego al terminar un Mundo.</p>
                  </div>
                </div>

                {/* Botón de subida drag & drop */}
                <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-amber-500/40 hover:border-amber-400 rounded-2xl bg-amber-500/5 hover:bg-amber-500/10 cursor-pointer transition-all group">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-extrabold text-white">Haz clic o arrastra tu captura o archivo de Godot aquí</span>
                  </div>
                  <span className="text-[11px] text-amber-300 font-mono font-bold">
                    Recompensa: +100 Monedas NEXUS 🪙 y +100 XP por cada avance verificado
                  </span>
                  <input
                    type="file"
                    accept="image/*,.tscn,.gd,.zip"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        alert(`¡Evidencia "${file.name}" subida con éxito a tu Portafolio de Creador!\n+100 Monedas NEXUS 🪙 asignadas a tu monedero.`);
                      }
                    }}
                  />
                </label>
              </div>

              {/* Banner de Mentor IA */}
              <div className="glass-panel p-8 rounded-3xl border border-[var(--color-brand-green)]/40 relative overflow-hidden bg-gradient-to-r from-[#0d131a] to-[#07110c] shadow-[0_0_40px_rgba(0,255,102,0.1)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-green-dim)] border border-[var(--color-brand-green)] flex items-center justify-center glow-green shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-green)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white m-0">¿Lo has probado en tu Godot 4?</h3>
                    <p className="text-xs text-[var(--color-text-muted)] m-0">Abre el chat de la derecha para verificar tu avance con el Mentor Senior y avanzar de nivel.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
