"use client";

import { useState, useEffect } from "react";
import { courseData } from "../data/courseContent";
import { db } from "../lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export interface UserProgress {
  id: string; // The secret code
  name: string;
  age: number;
  currentModuleId: string;
  currentSubmoduleId: string;
  completedSubmodules: string[];
  lessonsCache: Record<string, string>;
}

export interface AppState {
  activeProfileId: string | null;
  profiles: UserProgress[];
}

const STORAGE_KEY = "unity_lms_appstate";

// Generates a short, readable random code like: ABC-123
export const generateSecretCode = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Removed similar looking chars
  let code = "";
  for(let i=0; i<3; i++) code += chars[Math.floor(Math.random() * chars.length)];
  code += "-";
  for(let i=0; i<3; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
};

const createDefaultProfile = (name: string, age: number): UserProgress => ({
  id: generateSecretCode(),
  name,
  age,
  currentModuleId: courseData[0].id,
  currentSubmoduleId: courseData[0].submodules[0].id,
  completedSubmodules: [],
  lessonsCache: {},
});

export function useProgress() {
  const [appState, setAppState] = useState<AppState | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Sync to Firebase whenever progress updates
  const syncToFirebase = async (profile: UserProgress) => {
    try {
      await setDoc(doc(db, "users", profile.id), profile);
      console.log(`Progreso guardado en la nube para ${profile.id}`);
    } catch (e) {
      console.error("Error sincronizando con Firebase", e);
    }
  };

  // Pull from Firebase for a specific ID
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
      // Load from local storage
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
        // Silently sync the active profile from Firebase in background if one is active
        if (localState.activeProfileId) {
           const cloudProfile = await fetchFromFirebase(localState.activeProfileId);
           if (cloudProfile) {
              // Update local state with fresh cloud data
              const mapped = localState.profiles.map(p => p.id === cloudProfile.id ? cloudProfile : p);
              // Handle case where profile exists locally but has new data
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

  const activeProfile = appState?.profiles.find(p => p.id === appState.activeProfileId) || null;

  const saveProgress = (updatedProfile: UserProgress) => {
    if (!appState) return;
    const newProfiles = appState.profiles.map(p => p.id === updatedProfile.id ? updatedProfile : p);
    saveAppState({ ...appState, profiles: newProfiles });
    syncToFirebase(updatedProfile); // Subir a la nube
  };

  const createProfile = async (name: string, age: number) => {
    if (!appState) return;
    const newProfile = createDefaultProfile(name, age);
    
    // Save locally
    saveAppState({
      ...appState,
      profiles: [...appState.profiles, newProfile],
      activeProfileId: newProfile.id
    });

    // Save initial state to cloud
    await syncToFirebase(newProfile);
    return newProfile;
  };

  const loginWithSecretCode = async (code: string) => {
    if (!appState) return false;
    const cCode = code.toUpperCase().trim();
    
    // Check local first
    const existingLocal = appState.profiles.find(p => p.id === cCode);
    if (existingLocal) {
       switchProfile(cCode);
       return true;
    }

    // Check Cloud
    const cloudProfile = await fetchFromFirebase(cCode);
    if (cloudProfile) {
       // Save it locally and switch to it
       saveAppState({
         ...appState,
         profiles: [...appState.profiles, cloudProfile],
         activeProfileId: cloudProfile.id
       });
       return true;
    }
    
    return false; // Code not found
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
      // Next submodule in same module
      nextSubId = currentMod.submodules[currentSubIdx + 1].id;
    } else if (currentModIdx + 1 < courseData.length) {
      // First submodule of next module
      nextModId = courseData[currentModIdx + 1].id;
      nextSubId = courseData[currentModIdx + 1].submodules[0].id;
    }

    saveProgress({
      ...activeProfile,
      completedSubmodules: Array.from(newCompleted),
      currentModuleId: nextModId,
      currentSubmoduleId: nextSubId,
    });
  };

  return {
    appState,
    progress: activeProfile,
    isLoaded,
    saveProgress,
    completeCurrentAndAdvance,
    createProfile,
    loginWithSecretCode,
    switchProfile,
    deleteProfile,
    cacheLesson,
    courseData
  };
}
