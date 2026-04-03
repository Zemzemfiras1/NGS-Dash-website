import { motion } from 'framer-motion';
const QC_METRICS = [
  { metric: 'Total Reads', value: '800 million', status: '✅', note: 'Paired-end: 400M read pairs × 2 = 800M reads' },
  { metric: 'Read Length', value: '2 × 150 bp', status: '✅', note: 'Paired-end 150bp — standard for clinical panels' },
  { metric: 'Q30 (%)', value: '92.4%', status: '✅', note: '>80% is good, >90% is excellent. 92.4% of bases have <1 in 1000 error rate' },
  { metric: 'Mean Quality', value: 'Q35.2', status: '✅', note: 'Average Phred score across all bases' },
  { metric: 'Adapter Content', value: '1.2%', status: '✅', note: 'Low adapter contamination — size selection worked well' },
  { metric: 'GC Content', value: '41%', status: '✅', note: 'Human genome average is ~41%. Deviation suggests contamination' },
  { metric: 'Duplication Rate', value: '8.3%', status: '✅', note: '<15% is acceptable for 8 PCR cycles. These are optical + PCR duplicates' },
  { metric: 'Coverage', value: '98× mean', status: '✅', note: 'Target was 100×. 98× is excellent — nearly every position read ~100 times' },
];
interface Props { onNext: () => void; }
const Module04Page4 = ({ onNext }: Props) => (
  <motion.div key="qc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
    <h2 className="text-2xl font-black tracking-tight">✅ Alex's Sequencing QC Report</h2>
    <p className="text-sm text-gray-500">Here's the quality control summary from Alex's NovaSeq run. Every metric passed — her data is ready for alignment.</p>
    <div className="space-y-2">{QC_METRICS.map((m, i) => (<motion.div key={i} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card border rounded-2xl p-4 flex items-start gap-3"><span className="text-lg">{m.status}</span><div className="flex-1"><div className="flex items-baseline gap-2"><span className="font-bold text-sm text-foreground">{m.metric}</span><span className="font-mono font-bold text-sm text-primary">{m.value}</span></div><p className="text-xs text-muted-foreground mt-0.5">{m.note}</p></div></motion.div>))}</div>
    <div className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center"><p className="text-sm font-bold text-green-700">🎉 All QC metrics passed!</p><p className="text-xs text-green-600 mt-1">Alex's data is high-quality and ready for the next step: alignment to the human reference genome.</p></div>
    <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">Understand Coverage →</button>
  </motion.div>
);
export default Module04Page4;
