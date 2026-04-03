import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MiniQuizProps {
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
  onComplete: (score: number, total: number) => void;
}

const MiniQuiz = ({ questions, onComplete }: MiniQuizProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const q = questions[currentQ];

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.correctIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(c => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      const finalScore = score + (selected === q.correctIndex ? 1 : 0);
      setCompleted(true);
      onComplete(finalScore, questions.length);
    }
  };

  if (completed) {
    const finalScore = score; // score state already updated before setCompleted
    const pct = Math.round((finalScore / questions.length) * 100);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border rounded-2xl p-6 text-center"
      >
        <div className={`text-4xl font-black font-mono mb-2 ${pct >= 70 ? 'text-ngs-output' : 'text-ngs-error'}`}>
          {pct}%
        </div>
        <p className="text-sm text-muted-foreground mb-1">
          {finalScore}/{questions.length} correct
        </p>
        <p className="text-sm font-semibold">
          {pct === 100 ? '🌟 Perfect!' : pct >= 70 ? '✅ Great job!' : '📚 Review and try again!'}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-card border rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-black text-ngs-output uppercase tracking-widest">
          Mini Quiz
        </span>
        <span className="text-xs text-muted-foreground ml-auto font-mono">
          {currentQ + 1}/{questions.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <p className="font-bold text-foreground mb-4">{q.question}</p>

          <div className="flex flex-col gap-2 mb-4">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={answered}
                className={`text-left px-4 py-3 rounded-xl border-2 text-sm transition-all ${
                  answered && idx === q.correctIndex
                    ? 'border-ngs-output bg-ngs-output/5 text-ngs-output font-bold'
                    : answered && idx === selected && idx !== q.correctIndex
                    ? 'border-ngs-error bg-ngs-error/5 text-ngs-error'
                    : selected === idx
                    ? 'border-primary bg-primary/5 font-semibold'
                    : 'border-border hover:border-primary/30 hover:bg-muted/50'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {answered && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-3 rounded-xl text-sm mb-4 ${
                selected === q.correctIndex
                  ? 'bg-ngs-output/5 border border-ngs-output/20 text-foreground'
                  : 'bg-ngs-brand-orange/5 border border-ngs-brand-orange/20 text-foreground'
              }`}
            >
              {q.explanation}
            </motion.div>
          )}

          {answered && (
            <button
              onClick={handleNext}
              className="ml-auto block px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity"
            >
              {currentQ < questions.length - 1 ? 'Next →' : 'Finish Quiz'}
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MiniQuiz;
