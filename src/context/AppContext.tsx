import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export interface ModuleProgress {
  completed: boolean;
  quizScore?: number;
  quizTotal?: number;
  sectionsVisited: string[];
  xp: number;
}

export interface AppState {
  currentModule: number;
  studentName: string;
  showTechnical: boolean;
  moduleProgress: Record<number, ModuleProgress>;
}

interface AppContextType {
  state: AppState;
  setStudentName: (name: string) => void;
  toggleTechnical: () => void;
  completeModule: (moduleId: number, quizScore?: number, quizTotal?: number) => void;
  visitSection: (moduleId: number, sectionId: string) => void;
  setCurrentModule: (moduleId: number) => void;
  getTotalXP: () => number;
  getCompletedModules: () => number;
}

const defaultState: AppState = {
  currentModule: 0,
  studentName: '',
  showTechnical: false,
  moduleProgress: {},
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AppState>(defaultState);

  const setStudentName = useCallback((name: string) => {
    setState(prev => ({ ...prev, studentName: name }));
  }, []);

  const toggleTechnical = useCallback(() => {
    setState(prev => ({ ...prev, showTechnical: !prev.showTechnical }));
  }, []);

  const completeModule = useCallback((moduleId: number, quizScore?: number, quizTotal?: number) => {
    setState(prev => {
      const existing = prev.moduleProgress[moduleId];
      const alreadyCompleted = existing?.completed ?? false;
      return {
        ...prev,
        moduleProgress: {
          ...prev.moduleProgress,
          [moduleId]: {
            ...existing,
            completed: true,
            quizScore: quizScore ?? existing?.quizScore,
            quizTotal: quizTotal ?? existing?.quizTotal,
            sectionsVisited: existing?.sectionsVisited || [],
            // Only grant the 100 XP completion bonus once
            xp: (existing?.xp || 0) + (alreadyCompleted ? 0 : 100),
          },
        },
      };
    });
  }, []);

  const visitSection = useCallback((moduleId: number, sectionId: string) => {
    setState(prev => {
      const mod = prev.moduleProgress[moduleId] || { completed: false, sectionsVisited: [], xp: 0 };
      if (mod.sectionsVisited.includes(sectionId)) return prev;
      return {
        ...prev,
        moduleProgress: {
          ...prev.moduleProgress,
          [moduleId]: {
            ...mod,
            sectionsVisited: [...mod.sectionsVisited, sectionId],
            xp: mod.xp + 10,
          },
        },
      };
    });
  }, []);

  const setCurrentModule = useCallback((moduleId: number) => {
    setState(prev => ({ ...prev, currentModule: moduleId }));
  }, []);

  const getTotalXP = useCallback(() => {
    return Object.values(state.moduleProgress).reduce((sum, m) => sum + m.xp, 0);
  }, [state.moduleProgress]);

  const getCompletedModules = useCallback(() => {
    return Object.values(state.moduleProgress).filter(m => m.completed).length;
  }, [state.moduleProgress]);

  return (
    <AppContext.Provider value={{
      state, setStudentName, toggleTechnical, completeModule,
      visitSection, setCurrentModule, getTotalXP, getCompletedModules,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppState must be used within AppProvider');
  return ctx;
};
