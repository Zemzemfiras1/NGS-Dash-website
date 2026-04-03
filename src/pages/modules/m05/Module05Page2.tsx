import { motion } from 'framer-motion';
const REF_GENOME_FACTS = [
  { label: 'Name', value: 'GRCh38 / hg38', note: 'Genome Reference Consortium Human Build 38 (2013, updated regularly)' },
  { label: 'Size', value: '3.2 billion bp', note: '24 chromosomes (1–22, X, Y) + mitochondria + unplaced contigs' },
  { label: 'Genes', value: '~20,000', note: 'Protein-coding genes. Total including non-coding: ~60,000' },
  { label: 'Repetitive', value: '~50%', note: 'Half the genome is repetitive sequences — the main challenge for short-read alignment' },
  { label: 'Variants', value: '~4–5 million/person', note: 'Each person differs from the reference at ~4–5 million positions' },
];
interface Props { onNext: () => void; }
const Module05Page2 = ({ onNext }: Props) => (
  <motion.div key="ref" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
    <h2 className="text-2xl font-black tracking-tight">🧬 The Human Reference Genome</h2>
    <p className="text-sm text-gray-500">The reference genome is the "master map" we align reads against. It's not from one person — it's a composite from multiple donors.</p>
    <div className="space-y-2">{REF_GENOME_FACTS.map((f, i) => (<motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }} className="bg-card border rounded-2xl p-4 flex items-start gap-3"><span className="font-mono text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg shrink-0">{f.label}</span><div><span className="font-bold text-sm text-foreground">{f.value}</span><p className="text-xs text-muted-foreground mt-0.5">{f.note}</p></div></motion.div>))}</div>
    <div className="bg-purple-50 border-l-4 border-purple-400 rounded-r-2xl p-4"><p className="text-xs font-bold text-purple-800 mb-1">⚠️ The Repeat Problem</p><p className="text-sm text-purple-700">~50% of the human genome is repetitive. A 150bp read from a repeat region might match thousands of locations equally well — that's why MAPQ scores matter and why long-read sequencing is so valuable.</p></div>
    <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">How BWA-MEM Aligns →</button>
  </motion.div>
);
export default Module05Page2;
