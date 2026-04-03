import { motion } from 'framer-motion';
import GlossaryChip from '@/components/GlossaryChip';
const COVERAGE_SCENARIOS = [
  { name: 'WGS (germline)', coverage: '30×', cost: '$$', why: '30× catches heterozygous variants (present in ~50% of reads). For inherited conditions.' },
  { name: 'Clinical Panel', coverage: '100–500×', cost: '$', why: "Higher coverage = higher confidence for clinical decisions. Alex's test uses 100×." },
  { name: 'Somatic (tumor)', coverage: '200–1000×', cost: '$$$', why: 'Tumor variants may be in only 5% of cells. Need deep coverage to detect them.' },
  { name: 'Liquid Biopsy', coverage: '1000–10,000×', cost: '$$$$', why: 'cfDNA is extremely scarce. Ultra-deep coverage needed to find rare tumor fragments.' },
];
interface Props { onNext: () => void; }
const Module04Page5 = ({ onNext }: Props) => (
  <motion.div key="cov" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
    <h2 className="text-2xl font-black tracking-tight">📊 Understanding Coverage</h2>
    <p className="text-sm text-gray-500"><GlossaryChip term="Coverage">Coverage</GlossaryChip> = how many times each base in the genome was read. More coverage = more confidence, but more cost.</p>
    <div className="bg-gray-900 rounded-2xl p-5">
      <p className="text-xs text-gray-400 font-mono mb-3">Coverage formula:</p>
      <p className="text-center text-white font-mono text-lg">Coverage = <span className="text-purple-400">(Reads × Read Length)</span> / <span className="text-pink-400">Genome Size</span></p>
      <p className="text-center text-gray-400 font-mono text-sm mt-2">= <span className="text-purple-400">(800M × 150bp)</span> / <span className="text-pink-400">3.2 billion bp</span> ≈ <span className="text-green-400 font-bold">37.5×</span></p>
      <p className="text-xs text-gray-500 mt-2 text-center">But Alex's panel only targets ~2% of the genome → effective coverage ≈ <span className="text-green-400 font-bold">98×</span> on target</p>
    </div>
    <h3 className="text-lg font-black mt-4">Coverage by Application</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{COVERAGE_SCENARIOS.map((cs, i) => (<motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-card border rounded-2xl p-4"><div className="flex items-center gap-2 mb-1"><span className="font-bold text-sm text-foreground">{cs.name}</span><span className="ml-auto font-mono text-xs text-primary font-bold">{cs.coverage}</span></div><span className="text-[10px] font-bold text-muted-foreground">{cs.cost}</span><p className="text-xs text-muted-foreground mt-1">{cs.why}</p></motion.div>))}</div>
    <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-2xl p-4"><p className="text-xs font-bold text-blue-800 mb-1">💡 Why 100× for Alex?</p><p className="text-sm text-blue-700">Alex's germline panel needs high confidence for clinical reporting. At 100×, a heterozygous variant (50% allele frequency) will appear in ~50 reads — more than enough for a confident call.</p></div>
    <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">Take the Quiz →</button>
  </motion.div>
);
export default Module04Page5;
