"use client";

import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { useProgress } from "../hooks/useProgress";
import { useIsMounted } from "../hooks/useIsMounted";
import OnboardingModal from "./OnboardingModal";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import ChatbotTutor from "./ChatbotTutor";
import NetflixSplash from "./NetflixSplash";
import RewardToast from "./RewardToast";

export default function AppClient() {
  const isMounted = useIsMounted();
  const [showSplash, setShowSplash] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { 
    appState, 
    progress, 
    isLoaded, 
    toastMessage,
    setToastMessage,
    saveProgress, 
    completeCurrentAndAdvance, 
    createProfile,
    loginWithSecretCode,
    switchProfile,
    deleteProfile,
    updateAvatar,
    updatePin,
    cacheLesson,
    addDevLog,
    buyStoreItem,
    unlockVipVault,
    setActiveTheme,
    setActiveTitle,
    setActiveBorder,
    courseData 
  } = useProgress();

  if (!isMounted || !isLoaded) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-[var(--color-bg-dark)] dark">
        <div className="w-12 h-12 rounded-full border-4 border-gray-800 border-t-[var(--color-brand-blue)] animate-spin mb-4"></div>
        <p className="text-[var(--color-brand-blue)] text-sm font-medium tracking-widest">CARGANDO NEXUS GAME LAB...</p>
      </div>
    );
  }

  if (showSplash) {
    return <NetflixSplash onFinish={() => setShowSplash(false)} />;
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
          onLoginCode={loginWithSecretCode}
        />
      </main>
    );
  }

  const currentSub = courseData
    .flatMap((m) => m.submodules)
    .find((s) => s.id === progress.currentSubmoduleId);

  const currentTopicName = currentSub?.title || "Lección";

  return (
    <main className="flex h-screen w-full overflow-hidden bg-[var(--color-bg-dark)] text-white dark font-sans relative">
      <Sidebar 
        progress={progress} 
        onSelectSubmodule={(modId, subId) => {
          // Bug 4 fix: Calculate 'next available' submodule to allow navigation
          // even when currentSubmoduleId has been changed by visiting a past step.
          const allSubs = courseData.flatMap(m => m.submodules);
          let nextAvailableId = allSubs[0]?.id;
          if (progress.completedSubmodules.length > 0) {
            let furthestIdx = -1;
            for (let i = 0; i < allSubs.length; i++) {
              if (progress.completedSubmodules.includes(allSubs[i].id)) furthestIdx = i;
            }
            nextAvailableId = (furthestIdx + 1 < allSubs.length)
              ? allSubs[furthestIdx + 1].id
              : allSubs[allSubs.length - 1]?.id;
          }
          
          if (progress.completedSubmodules.includes(subId) || subId === nextAvailableId) {
             saveProgress({ ...progress, currentModuleId: modId, currentSubmoduleId: subId });
          }
        }}
        onLogout={() => switchProfile(null)}
        onUpdateAvatar={updateAvatar}
        onUpdatePin={updatePin}
        onAddDevLog={addDevLog}
        onBuyItem={buyStoreItem}
        onUnlockVipVault={unlockVipVault}
        onSelectTheme={setActiveTheme}
        onSelectTitle={setActiveTitle}
        onSelectBorder={setActiveBorder}
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
          className={`absolute top-4 left-0 -translate-x-full z-10 flex items-center gap-1.5 px-3 py-2 rounded-l-xl bg-[#111418] border border-r-0 border-[var(--color-border-dark)] text-[var(--color-text-muted)] hover:text-white text-xs font-medium transition-all duration-300 ${
            isChatOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <X className="w-3.5 h-3.5" />
          Cerrar
        </button>
        <ChatbotTutor 
          progress={progress}
          currentTopic={currentTopicName}
          currentSubmodule={currentSub}
          onUnlockNext={completeCurrentAndAdvance}
        />
      </div>

      {/* Toast notificador de recompensas */}
      {toastMessage && (
        <RewardToast
          title={toastMessage.title}
          subtitle={toastMessage.subtitle}
          icon={toastMessage.icon}
          onClose={() => setToastMessage(null)}
        />
      )}
    </main>
  );
}
