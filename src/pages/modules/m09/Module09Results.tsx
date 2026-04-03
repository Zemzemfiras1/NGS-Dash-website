import { motion } from 'framer-motion';
import { FINAL_QUESTIONS } from './Module09Assessment';

interface Props {
  score: number;
  answers: (number | null)[];
  onViewCert: () => void;
  onRetry: () => void;
}

const Module09Results = ({ score, answers, onViewCert, onRetry }: Props) => {
  const passed = score >= 7;
  const pct = Math.round((score / FINAL_QUESTIONS.length) * 100);
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6">
      <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${passed ? 'bg-primary/10' : 'bg-destructive/10'}`}>
        <div>
          <p className="text-4xl font-bold text-foreground">{score}/{FINAL_QUESTIONS.length}</p>
          <p className="text-sm text-muted-foreground">{pct}%</p>
        </div>
      </div>
      <div>
        <p className="text-xl font-bold text-foreground">{passed ? '🎉 Congratulations!' : '📚 Keep Learning!'}</p>
        <p className="text-muted-foreground mt-2">{passed ? `You passed! You answered ${score} out of ${FINAL_QUESTIONS.length} correctly.` : `You need 7/${FINAL_QUESTIONS.length} to pass. Review the modules and try again!`}</p>
      </div>
      <div className="text-left space-y-2 max-w-lg mx-auto">
        {FINAL_QUESTIONS.map((q, i) => (
          <div key={i} className={`p-3 rounded-xl text-xs ${answers[i] === q.correctIndex ? 'bg-primary/10' : 'bg-destructive/10'}`}>
            <span className="font-bold">{answers[i] === q.correctIndex ? '✅' : '❌'} Q{i + 1}:</span>{' '}
            <span className="text-muted-foreground">{q.question}</span>
            {answers[i] !== q.correctIndex && (<p className="mt-1 text-primary font-bold">Correct: {q.options[q.correctIndex]}</p>)}
          </div>
        ))}
      </div>
      {passed
        ? <button onClick={onViewCert} className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity">🎓 View Your Certificate</button>
        : <button onClick={onRetry} className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90">Try Again</button>
      }
    </motion.div>
  );
};

export default Module09Results;
