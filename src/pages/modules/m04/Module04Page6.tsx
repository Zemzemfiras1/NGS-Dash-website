import { motion } from 'framer-motion';
import MiniQuiz from '@/components/MiniQuiz';
import { useAppState } from '@/context/AppContext';
const QUIZ_QUESTIONS = [
  { question: 'What does a Phred quality score of Q30 mean?', options: ['30% chance of error', '1 in 30 chance of error', '1 in 1,000 chance of error', '30 bases were sequenced'], correctIndex: 2, explanation: 'Q30 means the probability of error is 10^(-30/10) = 10^(-3) = 1 in 1,000. This is the clinical threshold — 99.9% accuracy per base.' },
  { question: 'A FASTQ file has 4 lines per read. What does the 4th line encode?', options: ['The reference genome position', 'The DNA sequence again', 'Quality scores (one per base)', 'The sample barcode'], correctIndex: 2, explanation: 'Line 4 contains ASCII-encoded Phred quality scores — one character per base. Each character maps to a confidence level for that base call.' },
  { question: 'Why does a liquid biopsy need 1,000–10,000× coverage while germline WGS only needs 30×?', options: ['Liquid biopsy reads are shorter', 'cfDNA variants may be in <1% of molecules', 'The sequencer runs faster at higher coverage', 'Liquid biopsy uses RNA instead of DNA'], correctIndex: 1, explanation: 'Cell-free tumor DNA (ctDNA) may represent <1% of total cfDNA. You need thousands of reads at each position to reliably detect such rare variants above noise.' },
];
const Module04Page6 = () => {
  const { completeModule, setCurrentModule } = useAppState();
  return (
    <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
      <h2 className="text-2xl font-black tracking-tight">✏️ Module 04 Quiz</h2>
      <MiniQuiz questions={QUIZ_QUESTIONS} onComplete={(score, total) => completeModule(4, score, total)} />
      <div className="flex gap-3 mt-6"><button onClick={() => setCurrentModule(5)} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">Continue to Module 05 →</button></div>
    </motion.div>
  );
};
export default Module04Page6;
