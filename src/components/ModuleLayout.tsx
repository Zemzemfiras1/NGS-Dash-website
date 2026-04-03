import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useAppState } from '@/context/AppContext';
import { MODULES } from '@/data/ngsData';
import { PATIENT_ZERO } from '@/data/ngsData';

interface ModuleLayoutProps {
  moduleId: number;
  children: ReactNode;
}

const ModuleLayout = ({ moduleId, children }: ModuleLayoutProps) => {
  const { state, setCurrentModule } = useAppState();
  const mod = MODULES.find(m => m.id === moduleId)!;
  const progress = state.moduleProgress[moduleId];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-[44px] z-40 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setCurrentModule(0)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-primary/20 text-primary text-xs font-bold hover:bg-primary/5 transition-colors"
          >
            ← Home
          </button>
          <span className="text-sm font-bold text-foreground">{mod.emoji} {mod.title}</span>
          <div className="ml-auto flex items-center gap-2">
            {progress && (
              <div className="flex items-center gap-2">
                <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-brand rounded-full transition-all duration-500"
                    style={{ width: progress.completed ? '100%' : `${Math.min((progress.sectionsVisited.length / 6) * 100, 95)}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-primary font-mono">
                  {progress.xp} XP
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* You Are Here card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 pt-6"
      >
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 mb-6">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">📍 You Are Here</p>
          <p className="text-sm text-muted-foreground">
            Module {moduleId} of {MODULES.length} — {mod.description}
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pb-24">
        {children}
      </div>
    </div>
  );
};

export default ModuleLayout;
