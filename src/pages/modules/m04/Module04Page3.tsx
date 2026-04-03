import { motion } from 'framer-motion';
const PHRED_TABLE = [
  { score: 10, accuracy: '90%', error: '1 in 10', ascii: '+', grade: '❌ Poor', color: 'bg-red-100 text-red-700' },
  { score: 20, accuracy: '99%', error: '1 in 100', ascii: '5', grade: '⚠️ OK', color: 'bg-amber-100 text-amber-700' },
  { score: 30, accuracy: '99.9%', error: '1 in 1,000', ascii: '?', grade: '✅ Good', color: 'bg-green-100 text-green-700' },
  { score: 40, accuracy: '99.99%', error: '1 in 10,000', ascii: 'I', grade: '🌟 Excellent', color: 'bg-blue-100 text-blue-700' },
];
interface Props { onNext: () => void; }
const Module04Page3 = ({ onNext }: Props) => (
  <motion.div key="phred" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
    <h2 className="text-2xl font-black tracking-tight">📏 Phred Quality Scores</h2>
    <p className="text-sm text-gray-500">Every base in a FASTQ file has a quality score. The formula: <strong>Q = -10 × log₁₀(P)</strong> where P is the probability of error.</p>
    <div className="rounded-2xl border overflow-hidden">
      <table className="w-full text-sm">
        <thead><tr className="bg-muted"><th className="px-4 py-2 text-left font-bold text-xs">Phred (Q)</th><th className="px-4 py-2 text-left font-bold text-xs">Accuracy</th><th className="px-4 py-2 text-left font-bold text-xs">Error Rate</th><th className="px-4 py-2 text-left font-bold text-xs">ASCII</th><th className="px-4 py-2 text-left font-bold text-xs">Grade</th></tr></thead>
        <tbody>{PHRED_TABLE.map((row, i) => (<motion.tr key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="border-t border-border"><td className="px-4 py-3 font-mono font-bold">Q{row.score}</td><td className="px-4 py-3">{row.accuracy}</td><td className="px-4 py-3 font-mono text-xs">{row.error}</td><td className="px-4 py-3 font-mono text-lg">{row.ascii}</td><td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-md text-xs font-bold ${row.color}`}>{row.grade}</span></td></motion.tr>))}</tbody>
      </table>
    </div>
    <div className="bg-purple-50 border-l-4 border-purple-400 rounded-r-2xl p-4"><p className="text-xs font-bold text-purple-800 mb-1">🔑 Clinical Threshold: Q30</p><p className="text-sm text-purple-700">Most clinical labs require ≥80% of bases at Q30 or above. Alex's run achieved 92.4% — excellent quality. Below Q20, base calls become unreliable for variant detection.</p></div>
    <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-4"><p className="text-xs font-bold text-amber-800 mb-1">🧮 Try the math</p><p className="text-sm text-amber-700">Q30 → P = 10^(-3) = 0.001 → 1 error per 1,000 bases.<br />In a 150bp read at Q30, you'd expect ~0.15 errors per read — less than one wrong letter!</p></div>
    <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">View Alex's QC Report →</button>
  </motion.div>
);
export default Module04Page3;
