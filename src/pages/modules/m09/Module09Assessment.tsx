import { useState } from 'react';
import { motion } from 'framer-motion';

export const FINAL_QUESTIONS = [
  { question: 'What technology does Illumina use to read DNA?', options: ['Nanopore sensing', 'Sequencing By Synthesis (SBS)', 'Mass spectrometry', 'Sanger chain termination'], correctIndex: 1 },
  { question: 'What does "paired-end" sequencing mean?', options: ['Two samples sequenced together', 'Reading both strands simultaneously', 'Reading a fragment from both ends', 'Using two different flow cells'], correctIndex: 2 },
  { question: 'A Phred score of Q30 means the base call accuracy is:', options: ['99%', '99.9%', '99.99%', '90%'], correctIndex: 1 },
  { question: 'What is the purpose of adapters in library prep?', options: ['Protect DNA from degradation', 'Allow the sequencer to grab and read fragments', 'Increase DNA concentration', 'Remove contaminants'], correctIndex: 1 },
  { question: 'BAM files are:', options: ['Raw sequencing reads', 'Compressed aligned reads', 'Variant call lists', 'Quality control reports'], correctIndex: 1 },
  { question: 'What VAF would you expect for a homozygous variant?', options: ['~0.25', '~0.50', '~0.75', '~1.00'], correctIndex: 3 },
  { question: 'BQSR uses known variant databases to:', options: ['Call new variants', 'Recalibrate base quality scores', 'Remove duplicates', 'Align reads faster'], correctIndex: 1 },
  { question: 'A variant found in 15% of the population in gnomAD is most likely:', options: ['Pathogenic', 'VUS', 'Benign', 'A sequencing error'], correctIndex: 2 },
  { question: 'What ACMG criterion applies to a null variant in a loss-of-function disease gene?', options: ['PM2', 'PP3', 'PVS1', 'BS1'], correctIndex: 2 },
  { question: "Alex's CYP2D6 poor metabolizer status means:", options: ['She metabolizes drugs too fast', 'Standard codeine dosing may be unsafe', 'She needs higher drug doses', "Her DNA is harder to sequence"], correctIndex: 1 },
];

interface Props {
  onComplete: (score: number, answers: (number | null)[]) => void;
}

const Module09Assessment = ({ onComplete }: Props) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(FINAL_QUESTIONS.length).fill(null));

  const handleAnswer = (optIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[current] = optIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (answers.some(a => a === null)) return;
    const score = answers.filter((a, i) => a === FINAL_QUESTIONS[i].correctIndex).length;
    onComplete(score, answers);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-2xl font-bold text-foreground mb-2">🏆 Final Assessment</h2>
      <p className="text-muted-foreground mb-6">{FINAL_QUESTIONS.length} questions covering all modules. Score ≥70% to earn your certificate.</p>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${((current + 1) / FINAL_QUESTIONS.length) * 100}%` }} />
        </div>
        <span className="text-xs font-mono text-muted-foreground">{current + 1}/{FINAL_QUESTIONS.length}</span>
      </div>

      <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-card border border-border rounded-2xl p-6 mb-6">
        <p className="font-bold text-foreground mb-4">{FINAL_QUESTIONS[current].question}</p>
        <div className="space-y-2">
          {FINAL_QUESTIONS[current].options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(i)}
              className={`w-full text-left p-3 rounded-xl border text-sm transition-all ${answers[current] === i ? 'bg-primary/10 border-primary text-foreground font-bold' : 'bg-background border-border text-muted-foreground hover:bg-muted/50'}`}>
              {opt}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="flex justify-between">
        <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0} className="px-4 py-2 rounded-xl text-sm font-bold bg-muted text-muted-foreground disabled:opacity-30">← Previous</button>
        {current < FINAL_QUESTIONS.length - 1
          ? <button onClick={() => setCurrent(c => c + 1)} className="px-4 py-2 rounded-xl text-sm font-bold bg-primary text-primary-foreground">Next →</button>
          : <button onClick={handleSubmit} disabled={answers.some(a => a === null)} className="px-6 py-2 rounded-xl text-sm font-bold bg-primary text-primary-foreground disabled:opacity-50">Submit Assessment</button>
        }
      </div>
    </motion.div>
  );
};


export default Module09Assessment;
