"use client";

import { useState, useEffect } from "react";
import { courseData } from "../data/courseContent";
import { db } from "../lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export interface DevLogEntry {
  id: string;
  date: string;
  worldTitle: string;
  achieved: string;
  bug: string;
  nextIdea: string;
}

export interface ProjectVersion {
  id: string;
  version: string;
  date: string;
  title: string;
  notes: string;
}

export interface UserProgress {
  id: string; // The secret code
  name: string;
  age: number;
  pin?: string; // Optional personal security password/PIN
  currentModuleId: string;
  currentSubmoduleId: string;
  completedSubmodules: string[];
  lessonsCache: Record<string, string>;
  avatar?: string;
  xp?: number;
  coins?: number;
  badges?: string[];
  devLogs?: DevLogEntry[];
  versions?: ProjectVersion[];
  unlockedThemes?: string[];
  activeTheme?: string;
  unlockedTitles?: string[];
  activeTitle?: string;
  isVipUnlocked?: boolean;
  unlockedBorders?: string[];
  activeBorder?: string;
}

export interface AppState {
  activeProfileId: string | null;
  profiles: UserProgress[];
}

const STORAGE_KEY = "unity_lms_appstate";

export const generateSecretCode = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for(let i=0; i<3; i++) code += chars[Math.floor(Math.random() * chars.length)];
  code += "-";
  for(let i=0; i<3; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
};

const createDefaultProfile = (name: string, age: number, pin?: string): UserProgress => ({
  id: generateSecretCode(),
  name,
  age,
  pin: pin && pin.trim() ? pin.trim() : undefined,
  currentModuleId: courseData[0].id,
  currentSubmoduleId: courseData[0].submodules[0].id,
  completedSubmodules: [],
  lessonsCache: {},
  xp: 0,
  coins: 0,
  badges: [],
  devLogs: [],
  versions: [
    {
      id: "v1",
      version: "v0.1",
      date: new Date().toLocaleDateString("es-ES"),
      title: "Creación del Proyecto de Godot 4",
      notes: "Proyecto inicial iniciado en Nexus Game Lab."
    }
  ],
  unlockedThemes: ["theme_cyberpunk"],
  activeTheme: "theme_cyberpunk",
  unlockedTitles: ["Cadete de Laboratorio"],
  activeTitle: "Cadete de Laboratorio"
});

export function useProgress() {
  const [appState, setAppState] = useState<AppState | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ title: string; subtitle: string; icon?: string } | null>(null);

  const syncToFirebase = async (profile: UserProgress) => {
    try {
      await setDoc(doc(db, "users", profile.id), profile);
    } catch (e) {
      console.error("Error sincronizando con Firebase", e);
    }
  };

  const fetchFromFirebase = async (id: string): Promise<UserProgress | null> => {
    try {
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data() as UserProgress;
      }
    } catch (e) {
      console.error("Error obteniendo datos de Firebase", e);
    }
    return null;
  };

  useEffect(() => {
    const loadState = async () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      let localState: AppState | null = null;
      
      if (stored) {
        try {
          localState = JSON.parse(stored);
        } catch (e) {
          console.error("Failed to parse progress", e);
        }
      } 
      
      if (localState) {
        setAppState(localState);
        if (localState.activeProfileId) {
           const cloudProfile = await fetchFromFirebase(localState.activeProfileId);
           if (cloudProfile) {
              const mapped = localState.profiles.map(p => p.id === cloudProfile.id ? cloudProfile : p);
              if (!mapped.find(x => x.id === cloudProfile.id)) {
                mapped.push(cloudProfile);
              }
              const newState = { ...localState, profiles: mapped };
              setAppState(newState);
              localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
           }
        }
      } else {
        setAppState({ activeProfileId: null, profiles: [] });
      }
      setIsLoaded(true);
    };

    loadState();
  }, []);

  const saveAppState = (newState: AppState) => {
    setAppState(newState);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
  };

  const activeProfileRaw = appState?.profiles.find(p => p.id === appState.activeProfileId) || null;

  const activeProfile: UserProgress | null = activeProfileRaw ? {
    ...activeProfileRaw,
    xp: activeProfileRaw.xp ?? 0,
    coins: activeProfileRaw.coins ?? 0,
    badges: activeProfileRaw.badges ?? [],
    devLogs: activeProfileRaw.devLogs ?? [],
    versions: activeProfileRaw.versions ?? [],
    unlockedThemes: activeProfileRaw.unlockedThemes ?? ["theme_cyberpunk"],
    activeTheme: activeProfileRaw.activeTheme ?? "theme_cyberpunk",
    unlockedTitles: activeProfileRaw.unlockedTitles ?? ["Cadete de Laboratorio"],
    activeTitle: activeProfileRaw.activeTitle ?? "Cadete de Laboratorio",
    isVipUnlocked: activeProfileRaw.isVipUnlocked ?? false,
    unlockedBorders: activeProfileRaw.unlockedBorders ?? [],
    activeBorder: activeProfileRaw.activeBorder ?? "",
    currentModuleId: courseData.find(m => m.id === activeProfileRaw.currentModuleId)
      ? activeProfileRaw.currentModuleId 
      : (courseData.find(m => m.submodules.some(s => s.id === activeProfileRaw.currentSubmoduleId))?.id || courseData[0].id),
    currentSubmoduleId: courseData.flatMap(m => m.submodules).some(s => s.id === activeProfileRaw.currentSubmoduleId)
      ? activeProfileRaw.currentSubmoduleId
      : courseData[0].submodules[0].id
  } : null;

  const saveProgress = (updatedProfile: UserProgress) => {
    if (!appState) return;
    const newProfiles = appState.profiles.map(p => p.id === updatedProfile.id ? updatedProfile : p);
    saveAppState({ ...appState, profiles: newProfiles });
    syncToFirebase(updatedProfile);
  };

  const createProfile = async (name: string, age: number, pin?: string) => {
    if (!appState) return;
    const newProfile = createDefaultProfile(name, age, pin);
    
    saveAppState({
      ...appState,
      profiles: [...appState.profiles, newProfile],
      activeProfileId: newProfile.id
    });

    await syncToFirebase(newProfile);
    return newProfile;
  };

  const loginWithSecretCode = async (code: string) => {
    if (!appState) return null;
    const cCode = code.toUpperCase().trim();
    
    const existingLocal = appState.profiles.find(p => p.id === cCode);
    if (existingLocal) {
       return existingLocal;
    }

    const cloudProfile = await fetchFromFirebase(cCode);
    if (cloudProfile) {
       saveAppState({
         ...appState,
         profiles: [...appState.profiles, cloudProfile],
         activeProfileId: cloudProfile.id
       });
       return cloudProfile;
    }
    
    return null;
  };

  const updatePin = (newPin: string) => {
    if (!activeProfile) return;
    saveProgress({
      ...activeProfile,
      pin: newPin.trim() ? newPin.trim() : undefined
    });
  };

  const switchProfile = (id: string | null) => {
    if (!appState) return;
    saveAppState({ ...appState, activeProfileId: id });
  };

  const deleteProfile = (id: string) => {
    if (!appState) return;
    const newProfiles = appState.profiles.filter(p => p.id !== id);
    saveAppState({
      ...appState,
      profiles: newProfiles,
      activeProfileId: appState.activeProfileId === id ? null : appState.activeProfileId
    });
  };
    
  const updateAvatar = (avatarDataUrl: string) => {
    if (!activeProfile) return;
    saveProgress({
      ...activeProfile,
      avatar: avatarDataUrl
    });
  };

  const addXP = (amount: number) => {
    if (!activeProfile) return;
    const newXP = (activeProfile.xp || 0) + amount;
    saveProgress({
      ...activeProfile,
      xp: newXP
    });
  };

  const addCoins = (amount: number) => {
    if (!activeProfile) return;
    const newCoins = (activeProfile.coins || 0) + amount;
    saveProgress({
      ...activeProfile,
      coins: newCoins
    });
  };

  const unlockBadge = (badgeId: string) => {
    if (!activeProfile) return;
    const currentBadges = activeProfile.badges || [];
    if (!currentBadges.includes(badgeId)) {
      saveProgress({
        ...activeProfile,
        badges: [...currentBadges, badgeId],
        xp: (activeProfile.xp || 0) + 100,
        coins: (activeProfile.coins || 0) + 100
      });
      setToastMessage({
        title: "¡NUEVA INSIGNIA DESBLOQUEADA!",
        subtitle: "+100 XP & +100 Monedas NEXUS 🪙",
        icon: "🏆"
      });
    }
  };

  const addDevLog = (log: { worldTitle: string; achieved: string; bug: string; nextIdea: string }) => {
    if (!activeProfile) return;
    const newEntry: DevLogEntry = {
      id: "log_" + Date.now(),
      date: new Date().toLocaleDateString("es-ES"),
      ...log
    };
    const currentLogs = activeProfile.devLogs || [];
    const currentBadges = activeProfile.badges || [];
    const updatedBadges = currentBadges.includes("b_devlog_writer") ? currentBadges : [...currentBadges, "b_devlog_writer"];
    
    saveProgress({
      ...activeProfile,
      devLogs: [newEntry, ...currentLogs],
      badges: updatedBadges,
      xp: (activeProfile.xp || 0) + 50,
      coins: (activeProfile.coins || 0) + 50
    });

    setToastMessage({
      title: "¡ENTRADA REGISTRADA EN DEVLOG!",
      subtitle: "+50 XP & +50 Monedas NEXUS 🪙",
      icon: "📝"
    });
  };

  const buyStoreItem = (itemType: "theme" | "title" | "border", itemId: string, price: number, value: string) => {
    if (!activeProfile) return false;
    const currentCoins = activeProfile.coins || 0;
    if (currentCoins < price) return false;

    const newCoins = currentCoins - price;

    if (itemType === "theme") {
      const currentThemes = activeProfile.unlockedThemes || ["theme_cyberpunk"];
      const updatedThemes = currentThemes.includes(itemId) ? currentThemes : [...currentThemes, itemId];
      saveProgress({
        ...activeProfile,
        coins: newCoins,
        unlockedThemes: updatedThemes,
        activeTheme: itemId
      });
    } else if (itemType === "title") {
      const currentTitles = activeProfile.unlockedTitles || ["Cadete de Laboratorio"];
      const updatedTitles = currentTitles.includes(value) ? currentTitles : [...currentTitles, value];
      saveProgress({
        ...activeProfile,
        coins: newCoins,
        unlockedTitles: updatedTitles,
        activeTitle: value
      });
    } else if (itemType === "border") {
      const currentBorders = activeProfile.unlockedBorders || [];
      const updatedBorders = currentBorders.includes(itemId) ? currentBorders : [...currentBorders, itemId];
      saveProgress({
        ...activeProfile,
        coins: newCoins,
        unlockedBorders: updatedBorders,
        activeBorder: value
      });
    }

    setToastMessage({
      title: "¡COMPRA EN LA TIENDA NEXUS!",
      subtitle: `Has canjeado ${value}`,
      icon: "🪙"
    });
    return true;
  };

  const unlockVipVault = () => {
    if (!activeProfile) return false;
    const currentCoins = activeProfile.coins || 0;
    const VIP_PRICE = 1837;
    if (currentCoins < VIP_PRICE) return false;

    saveProgress({
      ...activeProfile,
      coins: currentCoins - VIP_PRICE,
      isVipUnlocked: true
    });

    setToastMessage({
      title: "⚡ ¡BÓVEDA SECRETA OMEGA DESBLOQUEADA!",
      subtitle: "Acceso permanente concedido al Sector Zero 🌌",
      icon: "👑"
    });
    return true;
  };

  const setActiveBorder = (borderValue: string) => {
    if (!activeProfile) return;
    saveProgress({
      ...activeProfile,
      activeBorder: borderValue
    });
  };

  const setActiveTheme = (themeId: string) => {
    if (!activeProfile) return;
    saveProgress({
      ...activeProfile,
      activeTheme: themeId
    });
  };

  const setActiveTitle = (title: string) => {
    if (!activeProfile) return;
    saveProgress({
      ...activeProfile,
      activeTitle: title
    });
  };

  const cacheLesson = (submoduleId: string, markdownContent: string) => {
    if (!activeProfile) return;
    let cacheUpdates = { ...activeProfile.lessonsCache };
    cacheUpdates[submoduleId] = markdownContent;

    const updatedProfile = {
      ...activeProfile,
      lessonsCache: cacheUpdates
    };
    saveProgress(updatedProfile);
  };

  const completeCurrentAndAdvance = () => {
    if (!activeProfile) return;

    const currentModIdx = courseData.findIndex(m => m.id === activeProfile.currentModuleId);
    if (currentModIdx === -1) return;
    const currentMod = courseData[currentModIdx];

    const currentSubIdx = currentMod.submodules.findIndex(s => s.id === activeProfile.currentSubmoduleId);
    if (currentSubIdx === -1) return;

    const newCompleted = new Set(activeProfile.completedSubmodules);
    newCompleted.add(activeProfile.currentSubmoduleId);

    // Determine next submodule
    let nextModId = activeProfile.currentModuleId;
    let nextSubId = activeProfile.currentSubmoduleId;

    if (currentSubIdx + 1 < currentMod.submodules.length) {
      nextSubId = currentMod.submodules[currentSubIdx + 1].id;
    } else if (currentModIdx + 1 < courseData.length) {
      nextModId = courseData[currentModIdx + 1].id;
      nextSubId = courseData[currentModIdx + 1].submodules[0].id;
    }

    // Auto unlock badges based on progress milestones
    const currentBadges = activeProfile.badges || [];
    const updatedBadges = new Set(currentBadges);
    
    if (activeProfile.currentSubmoduleId.startsWith("02-")) updatedBadges.add("b_scene_3d");
    if (activeProfile.currentSubmoduleId.startsWith("03-")) updatedBadges.add("b_light_master");
    if (activeProfile.currentSubmoduleId.startsWith("04-")) updatedBadges.add("b_physics_pro");
    if (activeProfile.currentSubmoduleId.startsWith("05-")) updatedBadges.add("b_hud_designer");
    if (activeProfile.currentSubmoduleId.startsWith("08-")) updatedBadges.add("b_player_character");
    if (activeProfile.currentSubmoduleId.startsWith("04A-")) updatedBadges.add("b_console_print");
    if (activeProfile.currentSubmoduleId.startsWith("10-")) updatedBadges.add("b_player_playable");
    if (activeProfile.currentSubmoduleId.startsWith("11-")) updatedBadges.add("b_backup_hero");
    if (activeProfile.currentSubmoduleId.startsWith("05B-")) updatedBadges.add("b_dev_tweak");
    if (activeProfile.currentSubmoduleId.startsWith("13-")) updatedBadges.add("b_code_debugger");
    if (activeProfile.currentSubmoduleId.startsWith("14-")) updatedBadges.add("b_camera_follow");
    if (activeProfile.currentSubmoduleId.startsWith("06A-") || activeProfile.currentSubmoduleId.startsWith("15-")) updatedBadges.add("b_input_master");
    if (activeProfile.currentSubmoduleId.startsWith("16-")) updatedBadges.add("b_asset_explorer");
    if (activeProfile.currentSubmoduleId.startsWith("17-")) updatedBadges.add("b_platform_architect");
    if (activeProfile.currentSubmoduleId.startsWith("07A-")) updatedBadges.add("b_if_master");
    if (activeProfile.currentSubmoduleId.startsWith("07B-")) updatedBadges.add("b_function_hero");
    if (activeProfile.currentSubmoduleId.startsWith("18-")) updatedBadges.add("b_respawn_master");
    if (activeProfile.currentSubmoduleId.startsWith("19-")) updatedBadges.add("b_coin_collector");
    if (activeProfile.currentSubmoduleId.startsWith("08A-")) updatedBadges.add("b_node_manipulator");
    if (activeProfile.currentSubmoduleId.startsWith("08B-")) updatedBadges.add("b_signal_master");
    if (activeProfile.currentSubmoduleId.startsWith("20-")) updatedBadges.add("b_score_manager");
    if (activeProfile.currentSubmoduleId.startsWith("21-")) updatedBadges.add("b_coin_route");
    if (activeProfile.currentSubmoduleId.startsWith("22-")) updatedBadges.add("b_camera_arm");
    if (activeProfile.currentSubmoduleId.startsWith("23-")) updatedBadges.add("b_orbital_camera");
    if (activeProfile.currentSubmoduleId.startsWith("24-")) updatedBadges.add("b_character_model");
    if (activeProfile.currentSubmoduleId.startsWith("25-")) updatedBadges.add("b_animated_hero");
    if (activeProfile.currentSubmoduleId.startsWith("26-")) updatedBadges.add("b_bgm_master");
    if (activeProfile.currentSubmoduleId.startsWith("27-")) updatedBadges.add("b_sfx_hero");
    if (activeProfile.currentSubmoduleId.startsWith("28-")) updatedBadges.add("b_game_director");
    if (activeProfile.currentSubmoduleId.startsWith("P1-")) updatedBadges.add("b_datalab_ready");
    if (activeProfile.currentSubmoduleId.startsWith("P2-")) updatedBadges.add("b_data_architect");
    if (activeProfile.currentSubmoduleId.startsWith("P3-")) updatedBadges.add("b_dynamic_data");
    if (activeProfile.currentSubmoduleId.startsWith("P4-")) updatedBadges.add("b_systems_designer");
    if (activeProfile.currentSubmoduleId.startsWith("P5-")) updatedBadges.add("b_if_else_master");
    if (activeProfile.currentSubmoduleId.startsWith("P6-")) updatedBadges.add("b_rules_designer");
    if (activeProfile.currentSubmoduleId.startsWith("P7-")) updatedBadges.add("b_array_master");
    if (activeProfile.currentSubmoduleId.startsWith("P8-")) updatedBadges.add("b_world_organizer");
    if (activeProfile.currentSubmoduleId.startsWith("P9-")) updatedBadges.add("b_function_creator");
    if (activeProfile.currentSubmoduleId.startsWith("P10-")) updatedBadges.add("b_ability_builder");
    if (activeProfile.currentSubmoduleId.startsWith("P11-")) updatedBadges.add("b_ui_whisperer");
    if (activeProfile.currentSubmoduleId.startsWith("P12-")) updatedBadges.add("b_ui_wizard");
    if (activeProfile.currentSubmoduleId.startsWith("P13-")) updatedBadges.add("b_input_customizer");
    if (activeProfile.currentSubmoduleId.startsWith("P14-")) updatedBadges.add("b_inventory_keeper");
    if (activeProfile.currentSubmoduleId.startsWith("P15-")) updatedBadges.add("b_state_master");
    if (activeProfile.currentSubmoduleId.startsWith("P16-")) updatedBadges.add("b_event_director");

    saveProgress({
      ...activeProfile,
      completedSubmodules: Array.from(newCompleted),
      currentModuleId: nextModId,
      currentSubmoduleId: nextSubId,
      xp: (activeProfile.xp || 0) + 100,
      coins: (activeProfile.coins || 0) + 100,
      badges: Array.from(updatedBadges)
    });

    setToastMessage({
      title: "🎉 ¡MISIÓN COMPLETADA!",
      subtitle: "+100 XP & +100 Monedas NEXUS 🪙 ganadas",
      icon: "⚡"
    });
  };

  return {
    appState,
    progress: activeProfile,
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
    addXP,
    addCoins,
    unlockBadge,
    addDevLog,
    buyStoreItem,
    unlockVipVault,
    setActiveTheme,
    setActiveTitle,
    setActiveBorder,
    courseData
  };
}
