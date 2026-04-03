import { useAppState } from '@/context/AppContext';
import { MODULES } from '@/data/ngsData';
import { cn } from '@/lib/utils';

const PipelineMiniMap = () => {
  const { state, setCurrentModule } = useAppState();

  return (
    <div className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setCurrentModule(0)}
            className={cn(
              'shrink-0 px-2 py-1 rounded-lg text-xs font-bold transition-all',
              state.currentModule === 0
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-muted'
            )}
          >
            🏠
          </button>
          {MODULES.map((mod, i) => {
            const progress = state.moduleProgress[mod.id];
            const isCurrent = state.currentModule === mod.id;
            const isCompleted = progress?.completed;

            return (
              <div key={mod.id} className="flex items-center shrink-0">
                <div className="w-4 h-[2px] bg-border" />
                <button
                  onClick={() => setCurrentModule(mod.id)}
                  className={cn(
                    'flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold transition-all whitespace-nowrap',
                    isCurrent && 'bg-primary text-primary-foreground shadow-md scale-105',
                    isCompleted && !isCurrent && 'bg-ngs-output/10 text-ngs-output',
                    !isCurrent && !isCompleted && 'text-muted-foreground hover:bg-muted'
                  )}
                  title={mod.title}
                >
                  <span>{mod.emoji}</span>
                  <span className="hidden md:inline">{mod.short}</span>
                  {isCompleted && <span className="text-[10px]">✓</span>}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PipelineMiniMap;
