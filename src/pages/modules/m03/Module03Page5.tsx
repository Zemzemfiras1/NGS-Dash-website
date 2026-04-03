import { motion } from 'framer-motion';
import MiniQuiz from '@/components/MiniQuiz';
import { useAppState } from '@/context/AppContext';

const QUIZ_QUESTIONS = [
  { question: "In Illumina sequencing, what is the purpose of bridge amplification?", options: ['To read both ends of a fragment', 'To create ~1,000 identical copies of each molecule in a cluster for stronger signal', 'To remove sequencing errors', 'To attach adapters to fragments'], correctIndex: 1, explanation: 'Each original molecule needs to be amplified into a cluster of ~1,000 copies so the fluorescent signal is strong enough for the camera to detect.' },
  { question: 'Which platform is best suited for field-based sequencing in a low-resource setting?', options: ['Illumina NovaSeq X', 'PacBio Revio', 'Oxford Nanopore MinION', 'MGI DNBSEQ-T7'], correctIndex: 2, explanation: 'The MinION is portable (USB-sized), costs ~$1,000, runs on a laptop, and provides real-time results — ideal for field work and low-resource settings.' },
  { question: 'What is the key trade-off between short-read (Illumina) and long-read (Nanopore/PacBio) sequencing?', options: ['Short reads are always more expensive', 'Long reads can span repetitive regions but historically had higher error rates', 'Short reads give longer sequences', 'There is no trade-off — long reads are better in every way'], correctIndex: 1, explanation: 'Short reads are highly accurate and cost-effective but struggle with repetitive regions. Long reads span these regions but traditionally had higher error rates (now largely overcome by HiFi and improved basecalling).' },
];

const Module03Page5 = () => {
  const { completeModule } = useAppState();
  return (
    <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <MiniQuiz questions={QUIZ_QUESTIONS} onComplete={(score, total) => completeModule(3, score, total)} />
    </motion.div>
  );
};

export default Module03Page5;
