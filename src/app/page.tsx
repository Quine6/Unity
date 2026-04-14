"use client";

import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { useProgress } from "../hooks/useProgress";
import OnboardingModal from "../components/OnboardingModal";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import ChatbotTutor from "../components/ChatbotTutor";
import NetflixSplash from "../components/NetflixSplash";

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { 
    appState, 
    progress, 
    isLoaded, 
    saveProgress, 
    completeCurrentAndAdvance, 
    createProfile,
    switchProfile,
    deleteProfile,
    cacheLesson,
    courseData 
  } = useProgress();

  if (showSplash) {
    return <NetflixSplash onFinish={() => setShowSplash(false)} />;
  }

  if (!isLoaded) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-[var(--color-bg-dark)] dark">
        <div className="w-12 h-12 rounded-full border-4 border-gray-800 border-t-[var(--color-brand-blue)] animate-spin mb-4"></div>
        <p className="text-[var(--color-brand-blue)] text-sm font-medium tracking-widest">CARGANDO MENTOR...</p>
      </div>
    );
  }

  // Si no hay perfil activo seleccionado
  if (!appState?.activeProfileId || !progress) {
    return (
      <main className="h-screen w-full bg-[var(--color-bg-dark)] text-white dark font-sans" style={{backgroundImage: "radial-gradient(circle at center, #111418 0%, #07090b 100%)"}}>
        <OnboardingModal
          profiles={appState?.profiles || []}
          onSelectProfile={switchProfile}
          onCreateProfile={createProfile}
          onDeleteProfile={deleteProfile}
        />
      </main>
    );
  }

  const currentTopicName = courseData
    .find((m) => m.id === progress.currentModuleId)
    ?.submodules.find((s) => s.id === progress.currentSubmoduleId)?.title || "Lección";

  return (
    <main className="flex h-screen w-full overflow-hidden bg-[var(--color-bg-dark)] text-white dark font-sans relative">
      <Sidebar 
        progress={progress} 
        onSelectSubmodule={(modId, subId) => {
          if (progress.completedSubmodules.includes(subId) || progress.currentSubmoduleId === subId) {
             saveProgress({ ...progress, currentModuleId: modId, currentSubmoduleId: subId });
          }
        }}
        onLogout={() => switchProfile(null)}
      />
      <MainContent 
        currentModuleId={progress.currentModuleId} 
        currentSubmoduleId={progress.currentSubmoduleId}
        progress={progress}
        onCacheLesson={cacheLesson}
      />

      {/* Floating toggle button — visible when chat is closed */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          title="Abrir Mentor Senior"
          className="fixed bottom-8 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-[var(--color-brand-green)] hover:bg-[#00e65c] text-black font-extrabold text-sm shadow-[0_0_24px_rgba(0,255,102,0.4)] hover:shadow-[0_0_36px_rgba(0,255,102,0.6)] transition-all duration-200 hover:scale-105"
        >
          <MessageSquare className="w-4 h-4 fill-black" />
          Mentor Senior
        </button>
      )}

      {/* Chat panel — slides in from the right */}
      <div
        className={`fixed top-0 right-0 h-full z-40 transition-transform duration-300 ease-in-out ${
          isChatOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsChatOpen(false)}
          title="Cerrar chat"
          className="absolute top-4 left-0 -translate-x-full z-10 flex items-center gap-1.5 px-3 py-2 rounded-l-xl bg-[#111418] border border-r-0 border-[var(--color-border-dark)] text-[var(--color-text-muted)] hover:text-white text-xs font-medium transition-colors"
        >
          <X className="w-3.5 h-3.5" />
          Cerrar
        </button>
        <ChatbotTutor 
          progress={progress}
          currentTopic={currentTopicName}
          onUnlockNext={completeCurrentAndAdvance}
        />
      </div>
    </main>
  );
}
