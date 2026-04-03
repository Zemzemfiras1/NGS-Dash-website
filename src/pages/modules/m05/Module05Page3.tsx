import { useState } from 'react';
import { motion } from 'framer-motion';
const ALIGNMENT_STEPS = [
  { emoji: '📚', title: 'Index the Reference', desc: 'BWA-MEM builds a suffix array index of the reference genome (GRCh38). This is done once and allows ultra-fast lookups.', simple: 'Like creating an index at the back of a textbook — lets you jump to any page instantly instead of reading front to back.' },
  { emoji: '🌱', title: 'Seed & Extend', desc: 'Each read is split into short "seeds" (~19bp). BWA finds exact matches in the index, then extends them with Smith-Waterman alignment allowing mismatches.', simple: 'Search for a few unique words from a quote to find the right page, then read around them to confirm the full match.' },
  { emoji: '🧩', title: 'Paired-End Rescue', desc: "If one mate maps confidently but the other doesn't, BWA searches near the mapped mate's position (within expected insert size ~350bp).", simple: 'If you find one end of a torn page, you know the other end must be nearby.' },
  { emoji: '📊', title: 'MAPQ Assignment', desc: 'Each alignment gets a Mapping Quality score (0–60). MAPQ = -10 × log₁₀(P_wrong). MAPQ 60 means <1 in 1,000,000 chance of wrong placement.', simple: '"How sure are we this read belongs here?" 60 = very sure, 0 = could go anywhere.' },
  { emoji: '📝', title: 'SAM/BAM Output', desc: 'Results are written as SAM (text) then converted to BAM (compressed binary). Each line = one read with its position, quality, and alignment details.', simple: 'The final answer sheet: every read gets a position on the genome map, stored in a compact file.' },
];
interface Props { onNext: () => void; }
const Module05Page3 = ({ onNext }: Props) => {
  const [alignStep, setAlignStep] = useState(0);
  return (
    <motion.div key="align" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
      <h2 className="text-2xl font-black tracking-tight">🗺️ How BWA-MEM Aligns Reads</h2>
      <p className="text-sm text-gray-500">BWA-MEM is the most widely used aligner for short reads. Click through each step.</p>
      <div className="space-y-3">{ALIGNMENT_STEPS.map((step, i) => (<motion.button key={i} onClick={() => setAlignStep(Math.max(alignStep, i + 1))} disabled={i > alignStep} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className={`w-full text-left rounded-2xl border-2 p-4 transition-all ${i < alignStep ? 'bg-indigo-50 border-indigo-200 opacity-100' : i === alignStep ? 'bg-card border-border hover:shadow-lg opacity-100' : 'bg-card border-border opacity-30'}`}><div className="flex items-center gap-2 mb-1"><span className="text-xl">{step.emoji}</span><span className="font-bold text-sm text-foreground">{step.title}</span>{i < alignStep && <span className="ml-auto text-xs text-ngs-output font-bold">✓</span>}{i === alignStep && <span className="ml-auto text-xs text-primary font-bold">Click to explore →</span>}</div>{i < alignStep && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 space-y-1"><p className="text-xs text-gray-500">{step.simple}</p><p className="text-[11px] text-muted-foreground italic">{step.desc}</p></motion.div>)}</motion.button>))}</div>
      {alignStep >= ALIGNMENT_STEPS.length && (<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center"><p className="text-sm font-bold text-green-700">🎉 You've walked through the BWA-MEM pipeline!</p><p className="text-xs text-green-600 mt-1">This entire process runs on 800 million reads in about 2–4 hours on a modern server.</p><button onClick={onNext} className="mt-3 px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">MAPQ Scores →</button></motion.div>)}
    </motion.div>
  );
};
export default Module05Page3;
