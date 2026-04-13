"use client";

import { useState, useEffect } from "react";
import { courseData } from "../data/courseContent";

export interface UserProgress {
  id: string;
  name: string;
  age: number;
  currentModuleId: string;
  currentSubmoduleId: string;
  completedSubmodules: string[];
  lessonsCache: Record<string, string>; // Maps submodule ID to Markdown lesson text
}

export interface AppState {
  activeProfileId: string | null;
  profiles: UserProgress[];
}

const STORAGE_KEY = "unity_lms_appstate";

const createDefaultProfile = (name: string, age: number): UserProgress => ({
  id: Math.random().toString(36).substring(2, 9),
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

  useEffect(() => {
    // Load from local storage
    const stored = localStorage.getItem(STORAGE_KEY);
    const oldStored = localStorage.getItem("unity_lms_progress"); // The old key used before multi-profile

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setAppState({ ...parsed, activeProfileId: null });
      } catch (e) {
        console.error("Failed to parse progress", e);
        setAppState({ activeProfileId: null, profiles: [] });
      }
    } else if (oldStored) { // MIGRATION FROM OLD V1 DATA
      try {
        const parsedOld = JSON.parse(oldStored);
        if (parsedOld && typeof parsedOld.name === "string") {
            const migratedProfile = {
                ...parsedOld,
                id: Math.random().toString(36).substring(2, 9),
                lessonsCache: {}
            };
            setAppState({
                activeProfileId: null, // Force to select screen to see migration
                profiles: [migratedProfile],
            });
        }
      } catch(e) {
        setAppState({ activeProfileId: null, profiles: [] });
      }
    } else {
      setAppState({ activeProfileId: null, profiles: [] });
    }
    setIsLoaded(true);
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
  };

  const createProfile = (name: string, age: number) => {
    if (!appState) return;
    const newProfile = createDefaultProfile(name, age);
    saveAppState({
      ...appState,
      profiles: [...appState.profiles, newProfile],
      activeProfileId: newProfile.id
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

  const cacheLesson = (submoduleId: string, markdownContent: string) => {
    if (!activeProfile) return;
    const updatedProfile = {
      ...activeProfile,
      lessonsCache: {
        ...activeProfile.lessonsCache,
        [submoduleId]: markdownContent
      }
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
    } else {
      // Course completed
      console.log("Course completed!");
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
    switchProfile,
    deleteProfile,
    cacheLesson,
    courseData
  };
}
