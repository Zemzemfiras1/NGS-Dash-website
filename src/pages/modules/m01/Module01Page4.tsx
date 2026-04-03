import { motion } from 'framer-motion';
import { useAppState } from '@/context/AppContext';

const PIPELINE_STEPS = [
  { emoji: '🩸', label: 'Sample', module: 2 },
  { emoji: '🧪', label: 'Library Prep', module: 2 },
  { emoji: '🔬', label: 'Sequencing', module: 3 },
  { emoji: '📊', label: 'Quality Check', module: 4 },
  { emoji: '🗺️', label: 'Alignment', module: 5 },
  { emoji: '🗂️', label: 'Processing', module: 6 },
  { emoji: '🧬', label: 'Variant Calling', module: 7 },
  { emoji: '🔍', label: 'Annotation', module: 8 },
  { emoji: '📋', label: 'Clinical Report', module: 8 },
];

interface Props { onNext: () => void; }

const Module01Page4 = ({ onNext }: Props) => {
  const { setCurrentModule } = useAppState();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <h2 className="text-2xl font-black tracking-tight">🔗 The NGS Pipeline</h2>
      <p className="text-sm text-gray-500 mb-2">Every NGS experiment follows this pipeline. Click any step to learn more — or jump to its module.</p>

      <div className="space-y-2">
        {PIPELINE_STEPS.map((step, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            onClick={() => setCurrentModule(step.module)}
            className="w-full flex items-center gap-3 bg-card border border-border rounded-2xl p-4 hover:border-primary/30 hover:shadow-md transition-all text-left group"
          >
            <span className="text-2xl">{step.emoji}</span>
            <div className="flex-1">
              <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{step.label}</p>
              <p className="text-[10px] text-muted-foreground">Module {String(step.module).padStart(2, '0')}</p>
            </div>
            {i < PIPELINE_STEPS.length - 1 && <span className="text-gray-300 text-lg">→</span>}
          </motion.button>
        ))}
      </div>

      <div className="bg-purple-50 border-l-4 border-purple-400 rounded-r-2xl p-4">
        <p className="text-xs font-bold text-purple-800 mb-1">🔑 The Big Picture</p>
        <p className="text-sm text-purple-700">
          A FASTQ file (raw data) becomes a clinical report through these steps.
          Each step transforms the data. Skip one, and your results are unreliable.
        </p>
      </div>

      <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">
        Meet Patient Alex →
      </button>
    </motion.div>
  );
};

export default Module01Page4;
