import { motion } from 'framer-motion';
import { useAppState } from '@/context/AppContext';
import { MODULES, PATIENT_ZERO } from '@/data/ngsData';
import { useState } from 'react';

const Landing = () => {
  const { state, setCurrentModule } = useAppState();
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const completedCount = Object.values(state.moduleProgress).filter(m => m.completed).length;
  const totalXP = Object.values(state.moduleProgress).reduce((sum, m) => sum + m.xp, 0);

  const colorClasses: Record<string, string> = {
    violet: 'border-purple-200 bg-purple-50',
    amber: 'border-amber-200 bg-amber-50',
    teal: 'border-teal-200 bg-teal-50',
    blue: 'border-blue-200 bg-blue-50',
    indigo: 'border-indigo-200 bg-indigo-50',
    orange: 'border-orange-200 bg-orange-50',
    pink: 'border-pink-200 bg-pink-50',
    green: 'border-green-200 bg-green-50',
    emerald: 'border-emerald-200 bg-emerald-50',
  };

  const badgeClasses: Record<string, string> = {
    violet: 'bg-purple-100 text-purple-700',
    amber: 'bg-amber-100 text-amber-800',
    teal: 'bg-teal-100 text-teal-700',
    blue: 'bg-blue-100 text-blue-700',
    indigo: 'bg-indigo-100 text-indigo-700',
    orange: 'bg-orange-100 text-orange-700',
    pink: 'bg-pink-100 text-pink-700',
    green: 'bg-green-100 text-green-700',
    emerald: 'bg-emerald-100 text-emerald-700',
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, #fdf4ff, #ecfeff, #f0fdf4, #fff7ed, #fdf4ff)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 14s ease infinite',
        }}
      />

      {/* Floating decorations */}
      {['🧬', '🔬', '🧫', '💊'].map((emoji, i) => {
        const positions = [
          { top: '6%', left: '2%' },
          { top: '12%', right: '4%' },
          { top: '75%', left: '4%' },
          { top: '70%', right: '6%' },
        ];
        return (
          <div
            key={i}
            className="fixed pointer-events-none text-6xl opacity-10"
            style={{
              ...positions[i],
              animation: `float${(i % 2) + 1} ${7 + i * 2}s ease-in-out infinite ${i * 1.5}s`,
            }}
          >
            {emoji}
          </div>
        );
      })}

      <div className="relative z-10 max-w-[960px] mx-auto px-6 py-14">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/80 border border-purple-200 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase text-purple-700 mb-8"
        >
          Powered by <span className="font-black text-primary text-sm">Genoflow</span>
        </motion.div>

        {/* Hero */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-5"
        >
          NGS Learning{' '}
          <span className="gradient-brand-text">Laboratory</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base text-gray-500 max-w-lg leading-relaxed mb-6"
        >
          Master Next-Generation Sequencing from sample to clinical report.
          Follow Patient Alex's journey through the complete NGS pipeline.
        </motion.p>

        {/* Why NGS Matters hooks */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10"
        >
          {[
            { emoji: '🧬', hook: 'A $200 genome test is replacing $10,000 diagnostic odysseys', color: 'bg-purple-50 border-purple-100' },
            { emoji: '🦠', hook: 'COVID variants were tracked in real-time using NGS technology', color: 'bg-teal-50 border-teal-100' },
            { emoji: '💊', hook: 'Cancer treatment is now guided by your DNA, not just your tumor type', color: 'bg-pink-50 border-pink-100' },
          ].map((item, i) => (
            <div key={i} className={`${item.color} border rounded-2xl p-4`}>
              <span className="text-2xl mb-2 block">{item.emoji}</span>
              <p className="text-xs font-semibold text-gray-700 leading-relaxed">{item.hook}</p>
            </div>
          ))}
        </motion.div>

        {/* Patient Zero preview */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 border border-purple-100 rounded-2xl p-5 mb-10 max-w-lg"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-white font-black text-sm">A</div>
            <div>
              <p className="font-bold text-sm text-foreground">Meet {PATIENT_ZERO.name}</p>
              <p className="text-xs text-muted-foreground">{PATIENT_ZERO.age} years old · {PATIENT_ZERO.description}</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            {PATIENT_ZERO.name}'s oncologist ordered a hereditary cancer panel after she found a lump.
            You'll follow her sample through the entire NGS pipeline — from blood draw to clinical report.
            By the end, you'll have identified her variant and understood what it means for her family.
          </p>
        </motion.div>

        {/* Module grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
        >
          {MODULES.map((mod, i) => {
            const progress = state.moduleProgress[mod.id];
            const isSelected = selectedModule === mod.id;
            const isCompleted = progress?.completed;

            return (
              <motion.button
                key={mod.id}
                onClick={() => setSelectedModule(isSelected ? null : mod.id)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`relative text-left rounded-2xl border-2 p-5 transition-all ${
                  colorClasses[mod.color]
                } ${
                  isSelected
                    ? 'shadow-xl border-purple-400 scale-[1.02] ring-2 ring-purple-200'
                    : 'hover:shadow-lg'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-3 left-3 text-[10px] font-black tracking-wider text-white gradient-brand px-2 py-0.5 rounded-full">
                    ✦ SELECTED
                  </span>
                )}
                {isCompleted && (
                  <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-ngs-output text-white text-[10px] font-black flex items-center justify-center">
                    ✓
                  </span>
                )}
                <span className={`inline-block text-[10px] font-black font-mono px-2 py-0.5 rounded-md mb-2 ${badgeClasses[mod.color]}`}>
                  {String(mod.id).padStart(2, '0')}
                </span>
                <h3 className="text-sm font-bold text-gray-800 mb-1.5">{mod.emoji} {mod.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-2">{mod.description}</p>
                <div className="flex flex-wrap gap-1">
                  {mod.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">{tag}</span>
                  ))}
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Launch button */}
        <div className="flex items-center gap-4 flex-wrap">
          <motion.button
            whileHover={{ y: -2, boxShadow: '0 12px 32px rgba(124,58,237,0.4)' }}
            whileTap={{ scale: 0.98 }}
            disabled={selectedModule === null}
            onClick={() => selectedModule && setCurrentModule(selectedModule)}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl gradient-brand text-white text-sm font-bold shadow-lg shadow-purple-500/30 disabled:opacity-40 disabled:shadow-none disabled:cursor-not-allowed transition-all"
          >
            Launch Module 🚀
          </motion.button>
          <span className="text-sm text-gray-400">
            {selectedModule ? `Module ${String(selectedModule).padStart(2, '0')} selected` : 'Select a module to begin'}
          </span>
        </div>

        {/* Progress footer */}
        {completedCount > 0 && (
          <div className="mt-8 flex items-center gap-4 text-xs text-gray-400">
            <span>{completedCount}/{MODULES.length} modules completed</span>
            <span>•</span>
            <span className="font-bold text-primary">{totalXP} XP earned</span>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-6 border-t border-purple-100 flex items-center justify-between text-xs text-gray-400">
          <span>NGS Learning Laboratory</span>
          <span className="font-black text-primary">Genoflow</span>
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-18px) rotate(6deg); }
          66% { transform: translateY(-9px) rotate(-3deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(-5deg); }
        }
      `}</style>
    </div>
  );
};

export default Landing;
