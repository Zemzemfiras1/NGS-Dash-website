import { useState } from 'react';
import { motion } from 'framer-motion';
import ModuleLayout from '@/components/ModuleLayout';
import { useAppState } from '@/context/AppContext';
import Module09Assessment from './modules/m09/Module09Assessment';
import Module09Results from './modules/m09/Module09Results';
import Module09Certificate from './modules/m09/Module09Certificate';

type ViewState = 'name-entry' | 'assessment' | 'results' | 'certificate';

const Module09 = () => {
  const { state, setStudentName, visitSection, completeModule } = useAppState();
  const [view, setView] = useState<ViewState>(state.studentName ? 'assessment' : 'name-entry');
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const handleComplete = (finalScore: number, finalAnswers: (number | null)[]) => {
    setScore(finalScore);
    setAnswers(finalAnswers);
    visitSection(9, 'assessment');
    completeModule(9, finalScore, 10);
    setView('results');
  };

  const handleRetry = () => {
    setScore(0);
    setAnswers([]);
    setView('assessment');
  };

  return (
    <ModuleLayout moduleId={9}>
      {view === 'name-entry' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-2">🏆 Before You Begin</h2>
          <p className="text-muted-foreground mb-6">Enter your full name — it will appear on your certificate.</p>
          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <label className="text-xs font-black text-primary uppercase tracking-widest mb-3 block">👤 Your Name</label>
            <input
              type="text"
              value={state.studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="e.g. Dr. Jane Smith"
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>
          <button
            onClick={() => setView('assessment')}
            disabled={!state.studentName.trim()}
            className="px-6 py-3 rounded-xl text-sm font-bold bg-primary text-primary-foreground disabled:opacity-40 transition-all"
          >
            Start Assessment →
          </button>
        </motion.div>
      )}
      {view === 'assessment'  && <Module09Assessment onComplete={handleComplete} />}
      {view === 'results'     && <Module09Results score={score} answers={answers} onViewCert={() => setView('certificate')} onRetry={handleRetry} />}
      {view === 'certificate' && <Module09Certificate score={score} />}
    </ModuleLayout>
  );
};

export default Module09;
