import { motion } from 'framer-motion';
import MiniQuiz from '@/components/MiniQuiz';
import { useAppState } from '@/context/AppContext';
const QUIZ_QUESTIONS = [
  { question: 'What does MAPQ 0 mean for an aligned read?', options: ['The read failed quality control', 'The read maps equally well to multiple locations', 'The read has no mismatches', 'The read is from a repeat region and should be deleted'], correctIndex: 1, explanation: "MAPQ 0 means the aligner found multiple equally good placements. It randomly picked one but has zero confidence it's correct. These reads are typically excluded from variant calling." },
  { question: 'Why is the human reference genome not a "perfect" representation of any one person?', options: ["It's too old", "It's a mosaic from multiple donors and each person has ~4–5 million variants", 'It only contains chromosome 1', 'It was sequenced with errors'], correctIndex: 1, explanation: "GRCh38 is a composite from multiple individuals. Every person differs at ~4–5 million positions. That's why we align reads to find YOUR variants — differences from this consensus reference." },
  { question: 'In BWA-MEM\'s "seed and extend" approach, what is a "seed"?', options: ['The entire 150bp read', 'A short exact-match substring (~19bp) used to find candidate positions', 'The quality score of the first base', 'The adapter sequence'], correctIndex: 1, explanation: 'Seeds are short substrings (~19bp) that BWA matches exactly against the indexed reference. Once candidate positions are found, the full read is aligned with Smith-Waterman allowing mismatches and gaps.' },
];
const Module05Page6 = () => {
  const { completeModule, setCurrentModule } = useAppState();
  return (
    <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
      <h2 className="text-2xl font-black tracking-tight">✏️ Module 05 Quiz</h2>
      <MiniQuiz questions={QUIZ_QUESTIONS} onComplete={(score, total) => completeModule(5, score, total)} />
      <div className="flex gap-3 mt-6"><button onClick={() => setCurrentModule(6)} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">Continue to Module 06 →</button></div>
    </motion.div>
  );
};
export default Module05Page6;
