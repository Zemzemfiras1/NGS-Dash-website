import { useState } from 'react';
import { motion } from 'framer-motion';
import MiniQuiz from '@/components/MiniQuiz';
import { useAppState } from '@/context/AppContext';
const QUIZ_QUESTIONS = [
  { question: 'What is the main advantage of BAM over SAM?', options: ['It contains more data', 'It is compressed (~5× smaller)', 'It is human-readable', 'It includes variant calls'], correctIndex: 1, explanation: 'BAM is the binary, compressed version of SAM — same data, ~5× smaller file size.' },
  { question: 'Why must PCR duplicates be marked before variant calling?', options: ['They slow down the computer', 'They could inflate variant support artificially', 'They change the DNA sequence', 'They are always sequencing errors'], correctIndex: 1, explanation: 'Duplicates are copies of the same original fragment. Counting them as independent evidence inflates confidence in variant calls.' },
  { question: 'Which VCF column shows the reference allele?', options: ['ALT', 'CHROM', 'REF', 'FILTER'], correctIndex: 2, explanation: 'REF contains the reference genome allele at that position. ALT shows the alternative (variant) allele.' },
];
interface Props { onVisit: (id: string) => void; }
const Module06Page4 = ({ onVisit }: Props) => {
  const { completeModule, setCurrentModule } = useAppState();
  const [quizDone, setQuizDone] = useState(false);
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} onViewportEnter={() => onVisit('quiz')}>
      <MiniQuiz questions={QUIZ_QUESTIONS} onComplete={(score, total) => { completeModule(6, score, total); setQuizDone(true); }} />
      {quizDone && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 text-center"><p className="text-sm text-muted-foreground mb-3">Ready to find variants in Alex's data?</p><button onClick={() => setCurrentModule(7)} className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity">Continue to Module 7: Variant Detection →</button></motion.div>)}
    </motion.section>
  );
};
export default Module06Page4;
