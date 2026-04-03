import { useState } from 'react';
import { motion } from 'framer-motion';
import MiniQuiz from '@/components/MiniQuiz';
import { useAppState } from '@/context/AppContext';
const QUIZ_QUESTIONS = [
  { question: 'How many tiers does the ACMG classification system have?', options: ['3', '4', '5', '7'], correctIndex: 2, explanation: 'ACMG uses 5 tiers: Pathogenic, Likely Pathogenic, VUS, Likely Benign, and Benign.' },
  { question: 'What does VUS stand for?', options: ['Very Unlikely SNP', 'Variant of Uncertain Significance', 'Validated Unique Sequence', 'Variant Under Study'], correctIndex: 1, explanation: 'VUS = Variant of Uncertain Significance. Not enough evidence to classify as pathogenic or benign.' },
  { question: "Why is cascade testing recommended after finding Alex's BRCA2 variant?", options: ['To confirm the lab result', 'To identify at-risk family members', 'To check sequencing quality', 'Insurance requires it'], correctIndex: 1, explanation: 'First-degree relatives have a 50% chance of carrying the same variant. Early detection enables preventive care.' },
];
interface Props { onVisit: (id: string) => void; }
const Module08PageQuiz = ({ onVisit }: Props) => {
  const { completeModule, setCurrentModule } = useAppState();
  const [quizDone, setQuizDone] = useState(false);
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} onViewportEnter={() => onVisit('quiz')} className="mt-12">
      <MiniQuiz questions={QUIZ_QUESTIONS} onComplete={(score, total) => { completeModule(8, score, total); setQuizDone(true); }} />
      {quizDone && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 text-center"><p className="text-sm text-muted-foreground mb-3">Ready for the final assessment?</p><button onClick={() => setCurrentModule(9)} className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity">Continue to Module 9: Final Assessment →</button></motion.div>)}
    </motion.section>
  );
};
export default Module08PageQuiz;
