import { useState } from 'react';
import { motion } from 'framer-motion';
import MiniQuiz from '@/components/MiniQuiz';
import { useAppState } from '@/context/AppContext';
const QUIZ_QUESTIONS = [
  { question: 'What type of variant is BRCA2 c.5946delT?', options: ['SNP', 'Indel (deletion)', 'Structural variant', 'CNV'], correctIndex: 1, explanation: 'The "del" indicates a deletion of a single base (T) — this is a small indel, specifically a frameshift deletion.' },
  { question: 'What VAF would you expect for a heterozygous germline variant?', options: ['~0.10', '~0.25', '~0.50', '~1.00'], correctIndex: 2, explanation: 'Heterozygous = one of two copies carries the variant, so ~50% of reads should support it (VAF ≈ 0.50).' },
  { question: "Why is a variant's population frequency important?", options: ['Rare variants are always pathogenic', 'Common variants are unlikely to cause rare disease', 'It determines the read depth', 'It changes the MAPQ score'], correctIndex: 1, explanation: "If a variant is common in healthy populations (>1%), it's unlikely to cause a rare genetic disease. Rarity supports pathogenicity." },
];
interface Props { onVisit: (id: string) => void; }
const Module07Page5 = ({ onVisit }: Props) => {
  const { completeModule, setCurrentModule } = useAppState();
  const [quizDone, setQuizDone] = useState(false);
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} onViewportEnter={() => onVisit('quiz')}>
      <MiniQuiz questions={QUIZ_QUESTIONS} onComplete={(score, total) => { completeModule(7, score, total); setQuizDone(true); }} />
      {quizDone && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 text-center"><p className="text-sm text-muted-foreground mb-3">Time to interpret Alex's variant clinically!</p><button onClick={() => setCurrentModule(8)} className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity">Continue to Module 8: Annotation & Interpretation →</button></motion.div>)}
    </motion.section>
  );
};
export default Module07Page5;
