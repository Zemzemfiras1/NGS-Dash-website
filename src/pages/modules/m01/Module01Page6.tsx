import { motion } from 'framer-motion';
import MiniQuiz from '@/components/MiniQuiz';
import { useAppState } from '@/context/AppContext';

const QUIZ_QUESTIONS = [
  {
    question: 'What is the main advantage of NGS over Sanger sequencing?',
    options: ['It reads longer DNA fragments', 'It reads millions of fragments simultaneously', "It doesn't need a computer", 'It only works on human DNA'],
    correctIndex: 1,
    explanation: 'NGS reads millions of DNA fragments in parallel (at the same time), making it massively faster and cheaper than Sanger sequencing, which reads one fragment at a time.',
  },
  {
    question: 'Approximately how much does it cost to sequence a human genome in 2023?',
    options: ['$3 billion', '$100,000', '$10,000', '$200'],
    correctIndex: 3,
    explanation: 'The cost dropped from $3 billion (2003) to about $200 (2023) — a 15-million-fold reduction in 20 years!',
  },
  {
    question: 'Which sequencing platform is portable enough to fit in your hand?',
    options: ['Illumina NovaSeq', 'Ion Torrent', 'Oxford Nanopore MinION', 'PacBio Revio'],
    correctIndex: 2,
    explanation: "The Oxford Nanopore MinION is a portable sequencer that fits in your hand and connects to a laptop. It's particularly useful in remote settings and field work.",
  },
];

const Module01Page6 = () => {
  const { completeModule, setCurrentModule } = useAppState();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <h2 className="text-2xl font-black tracking-tight">✏️ Module 01 Quiz</h2>
      <MiniQuiz
        questions={QUIZ_QUESTIONS}
        onComplete={(score, total) => {
          completeModule(1, score, total);
        }}
      />
      <div className="flex gap-3 mt-6">
        <button onClick={() => setCurrentModule(2)} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">
          Continue to Module 02 →
        </button>
      </div>
    </motion.div>
  );
};

export default Module01Page6;
