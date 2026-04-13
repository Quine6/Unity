"use client";

import { useState, useEffect } from "react";
import { courseData } from "../data/courseContent";
import { UserProgress } from "../hooks/useProgress";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Loader2, Zap } from "lucide-react";

interface MainContentProps {
  currentModuleId: string;
  currentSubmoduleId: string;
  progress: UserProgress;
  onCacheLesson: (subId: string, mdContent: string) => void;
}

export default function MainContent({ currentModuleId, currentSubmoduleId, progress, onCacheLesson }: MainContentProps) {
  const currentMod = courseData.find((m) => m.id === currentModuleId);
  const currentSub = currentMod?.submodules.find((s) => s.id === currentSubmoduleId);

  const cachedMarkdown = progress.lessonsCache[currentSubmoduleId];
  const hasContent = !!cachedMarkdown;

  const [isGenerating, setIsGenerating] = useState(false);

  // Auto-scroll to top when lesson changes
  useEffect(() => {
    const el = document.getElementById("main-content-scroll");
    if (el) el.scrollTop = 0;
  }, [currentSubmoduleId]);

  if (!currentMod || !currentSub) return <div>Cargando...</div>;

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
          age: progress.age
        })
      });

      const data = await response.json();
      onCacheLesson(currentSub.id, data.markdown);
    } catch (e) {
      console.error("Failed to generate", e);
      alert("Hubo un error al generar la clase. Revisa la consola o tu API Key.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div id="main-content-scroll" className="flex-1 h-screen overflow-y-auto bg-[var(--color-bg-dark)] smooth-scroll custom-scrollbar pb-32">
      <div className="max-w-4xl mx-auto p-8 lg:p-12">
        <header className="mb-10">
          <div className="text-sm font-medium text-[var(--color-brand-blue)] mb-2 uppercase tracking-wide">
            Módulo {currentMod.id} &bull; {currentMod.title}
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-text-main)] mb-6">
            {currentSub.title}
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-green)] rounded-full"></div>
        </header>

        {(!hasContent && !isGenerating) && (
          <div className="glass-panel p-12 text-center rounded-3xl border-dashed border-2 flex flex-col items-center justify-center min-h-[40vh]">
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-main)]">Material No Descargado</h2>
            <p className="text-[var(--color-text-muted)] mb-8 max-w-md">
              Aún no has accedido a la información de este tema. Pulsa el botón para solicitar y compilar la clase magistral exclusiva y detallada de <strong>{currentSub.title}</strong> para tu perfil.
            </p>
            <button 
              onClick={handleGenerateContent}
              className="px-8 py-4 bg-[var(--color-brand-green)] hover:bg-[#00e65c] text-black font-extrabold text-lg rounded-xl flex items-center gap-3 transition-transform hover:scale-105 glow-green"
            >
              <Zap className="fill-black" /> ¡Desbloquear Masterclass Ahora!
            </button>
          </div>
        )}

        {isGenerating && (
          <div className="flex flex-col items-center justify-center py-24 space-y-6">
            <div className="w-16 h-16 rounded-full border-4 border-[var(--color-bg-panel)] border-t-[var(--color-brand-green)] animate-spin shadow-[0_0_15px_var(--color-brand-green-dim)]"></div>
            <p className="text-[var(--color-brand-green)] text-lg font-mono animate-pulse">Compilando el material de estudio...</p>
            <p className="text-xs text-[var(--color-text-muted)]">Esto puede tardar unos segundos mientras se construye el contenido técnico.</p>
          </div>
        )}

        {hasContent && (
          <section className="prose prose-invert prose-lg max-w-none 
            prose-headings:text-[var(--color-brand-blue)]
            prose-headings:font-black prose-headings:tracking-tighter
            prose-a:text-[var(--color-brand-green)]
            prose-p:text-[var(--color-text-main)] prose-p:leading-9 prose-p:mb-10
            prose-pre:bg-[#090b0e] prose-pre:border prose-pre:border-[var(--color-border-dark)] prose-pre:shadow-2xl prose-pre:p-6 prose-pre:rounded-2xl
            prose-code:text-[var(--color-brand-green)] prose-code:bg-[var(--color-bg-panel)] prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:font-bold
            prose-strong:text-white prose-strong:font-black
            prose-blockquote:border-l-[var(--color-brand-blue)] prose-blockquote:bg-[var(--color-bg-panel)] prose-blockquote:p-8 prose-blockquote:not-italic prose-blockquote:text-[var(--color-text-main)] prose-blockquote:rounded-r-2xl
            prose-table:border-collapse prose-table:w-full prose-table:my-12
            prose-th:bg-[var(--color-bg-panel)] prose-th:p-4 prose-th:text-[var(--color-brand-blue)] prose-th:border prose-th:border-[var(--color-border-dark)]
            prose-td:p-4 prose-td:border prose-td:border-[var(--color-border-dark)]
          ">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {cachedMarkdown}
            </ReactMarkdown>

            <div className="mt-24 glass-panel p-12 rounded-[2rem] glow-blue relative overflow-hidden border border-[var(--color-brand-blue)]/50 shadow-[0_0_40px_rgba(0,229,255,0.1)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-blue)] rounded-full blur-[120px] opacity-20 transform translate-x-20 -translate-y-20 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-brand-green)] rounded-full blur-[120px] opacity-10 transform -translate-x-20 translate-y-20 pointer-events-none"></div>
              
              <h3 className="text-3xl font-black flex items-center gap-4 mb-8 text-[var(--color-brand-blue)] mt-0 tracking-tighter">
                <span className="bg-[var(--color-brand-blue-dim)] p-3 rounded-2xl">🎯</span> EL RETO TÉCNICO
              </h3>
              <p className="text-lg text-[var(--color-text-main)] relative z-10 m-0 leading-relaxed font-medium">
                Has absorbido el conocimiento núcleo de este módulo. Ahora, tu misión es demostrar tu dominio en el **Laboratorio**. Usa el panel del Mentor a tu derecha para validar tu lógica. El sistema espera tu confirmación para desbloquear el siguiente nivel de acceso.
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
