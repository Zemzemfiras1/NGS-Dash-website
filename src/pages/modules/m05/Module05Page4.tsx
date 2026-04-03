import { motion } from 'framer-motion';
import GlossaryChip from '@/components/GlossaryChip';
const MAPQ_SCENARIOS = [
  { mapq: 60, meaning: 'Uniquely mapped', desc: 'Only one place in the genome this read could come from. Highest confidence.', color: 'bg-green-100 text-green-700', pct: '85%' },
  { mapq: 30, meaning: 'High confidence', desc: 'Very likely correct. Minor ambiguity from similar regions.', color: 'bg-blue-100 text-blue-700', pct: '8%' },
  { mapq: 10, meaning: 'Low confidence', desc: 'Multiple possible locations. Common in segmental duplications.', color: 'bg-amber-100 text-amber-700', pct: '4%' },
  { mapq: 0, meaning: 'Multi-mapped', desc: 'Read maps equally well to multiple locations. Cannot determine true origin.', color: 'bg-red-100 text-red-700', pct: '3%' },
];
interface Props { onNext: () => void; }
const Module05Page4 = ({ onNext }: Props) => (
  <motion.div key="mapq" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
    <h2 className="text-2xl font-black tracking-tight">📊 Understanding MAPQ</h2>
    <p className="text-sm text-gray-500"><GlossaryChip term="MAPQ">MAPQ</GlossaryChip> tells you how confident the aligner is about each read's placement. Formula: MAPQ = -10 × log₁₀(P_wrong_position)</p>
    <div className="space-y-2">{MAPQ_SCENARIOS.map((m, i) => (<motion.div key={i} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-card border rounded-2xl p-4 flex items-start gap-3"><span className={`font-mono font-black text-lg px-2 py-1 rounded-lg ${m.color}`}>{m.mapq}</span><div className="flex-1"><div className="flex items-center gap-2"><span className="font-bold text-sm text-foreground">{m.meaning}</span><span className="ml-auto text-xs font-mono text-muted-foreground">~{m.pct} of reads</span></div><p className="text-xs text-muted-foreground mt-0.5">{m.desc}</p></div></motion.div>))}</div>
    <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-2xl p-4"><p className="text-xs font-bold text-blue-800 mb-1">🔑 Clinical Rule</p><p className="text-sm text-blue-700">Most variant callers require <strong>MAPQ ≥ 20</strong> (99% confidence). For clinical reporting, many labs set the threshold at <strong>MAPQ ≥ 30</strong>. Alex's data: 93% of reads have MAPQ ≥ 30.</p></div>
    <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">See Alex's Results →</button>
  </motion.div>
);
export default Module05Page4;
