"use client";

import { useState } from "react";
import { useProgress } from "../hooks/useProgress";
import OnboardingModal from "../components/OnboardingModal";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import ChatbotTutor from "../components/ChatbotTutor";
import NetflixSplash from "../components/NetflixSplash";

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);
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
    <main className="flex h-screen w-full overflow-hidden bg-[var(--color-bg-dark)] text-white dark font-sans">
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
      <ChatbotTutor 
        progress={progress}
        currentTopic={currentTopicName}
        onUnlockNext={completeCurrentAndAdvance}
      />
    </main>
  );
}
