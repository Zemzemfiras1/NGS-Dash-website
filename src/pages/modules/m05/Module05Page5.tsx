import { motion } from 'framer-motion';
const ALEX_STATS = [
  { metric: 'Total Reads Aligned', value: '792M / 800M', pct: '99.0%', status: '✅' },
  { metric: 'Properly Paired', value: '776M', pct: '97.0%', status: '✅' },
  { metric: 'MAPQ ≥ 30', value: '744M', pct: '93.0%', status: '✅' },
  { metric: 'On-Target Reads', value: '712M', pct: '89.0%', status: '✅' },
  { metric: 'Mean Insert Size', value: '342 bp', pct: '—', status: '✅' },
  { metric: 'Chimeric Reads', value: '0.8%', pct: '<2%', status: '✅' },
];
interface Props { onNext: () => void; }
const Module05Page5 = ({ onNext }: Props) => (
  <motion.div key="alex" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
    <h2 className="text-2xl font-black tracking-tight">👤 Alex's Alignment Report</h2>
    <p className="text-sm text-gray-500">After running BWA-MEM on Alex's paired FASTQ files against GRCh38:</p>
    <div className="space-y-2">{ALEX_STATS.map((s, i) => (<motion.div key={i} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card border rounded-2xl p-4 flex items-center gap-3"><span className="text-lg">{s.status}</span><div className="flex-1"><span className="font-bold text-sm text-foreground">{s.metric}</span><span className="ml-2 font-mono text-sm text-primary font-bold">{s.value}</span></div><span className="text-xs font-mono text-muted-foreground">{s.pct}</span></motion.div>))}</div>
    <div className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center"><p className="text-sm font-bold text-green-700">🎉 Alignment complete!</p><p className="text-xs text-green-600 mt-1">Alex's reads are now mapped to GRCh38. The output BAM file is ~45 GB. Next step: processing (deduplication, BQSR) before variant calling.</p></div>
    <div className="bg-purple-50 border-l-4 border-purple-400 rounded-r-2xl p-4"><p className="text-xs font-bold text-purple-800 mb-1">📍 Where are we in the pipeline?</p><p className="text-sm text-purple-700">✅ Sample → ✅ Library Prep → ✅ Sequencing → ✅ Quality Check → <strong>✅ Alignment</strong> → ⬜ Processing → ⬜ Variant Calling → ⬜ Annotation</p></div>
    <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">Take the Quiz →</button>
  </motion.div>
);
export default Module05Page5;
