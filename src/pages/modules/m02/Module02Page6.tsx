import { motion } from 'framer-motion';
import MiniQuiz from '@/components/MiniQuiz';
import { useAppState } from '@/context/AppContext';

const QUIZ_QUESTIONS = [
  {
    question: 'Why do we add adapters to DNA fragments during library preparation?',
    options: ['To make the DNA more colorful under a microscope', 'So the sequencing machine can grab, amplify, and read the fragments', 'To protect the DNA from degradation', 'To change the DNA sequence for better results'],
    correctIndex: 1,
    explanation: 'Adapters contain the sequences needed for flow cell binding (P5/P7), multiplexing (indexes), and sequencing primer binding.',
  },
  {
    question: 'What is the key difference between paired-end and single-end sequencing?',
    options: ['Paired-end uses two different machines', 'Single-end reads both ends of a fragment', 'Paired-end reads both ends of the same fragment, giving more information', 'There is no real difference — they produce identical data'],
    correctIndex: 2,
    explanation: 'Paired-end reads both ends of the same DNA fragment. This provides more mapping information, helps detect structural variants, and resolves repetitive regions better.',
  },
  {
    question: "Alex's blood sample is considered \"gold standard\" for germline testing. Why?",
    options: ['Blood is always available in large quantities', 'Blood DNA is high-quality, minimally degraded, and represents the germline genome', 'Blood samples are cheaper to process', 'Blood contains only cancer DNA'],
    correctIndex: 1,
    explanation: 'Blood provides high-quality, high-molecular-weight germline DNA with minimal degradation. Unlike tumor biopsies, it represents the inherited genome.',
  },
];

const Module02Page6 = () => {
  const { completeModule } = useAppState();
  return (
    <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <MiniQuiz questions={QUIZ_QUESTIONS} onComplete={(score, total) => completeModule(2, score, total)} />
    </motion.div>
  );
};

export default Module02Page6;
