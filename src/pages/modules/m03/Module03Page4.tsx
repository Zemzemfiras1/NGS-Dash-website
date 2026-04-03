import { motion } from 'framer-motion';

interface Props { onNext: () => void; }

const Module03Page4 = ({ onNext }: Props) => (
  <motion.div key="longshort" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
    <h2 className="text-2xl font-black tracking-tight">📏 Short Reads vs Long Reads</h2>
    <p className="text-sm text-muted-foreground">This is a fundamental split in NGS. Each has strengths the other can't match.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border-2 border-ngs-raw/30 bg-ngs-raw/5 rounded-2xl p-5 space-y-3">
        <h3 className="font-bold text-sm">🔹 Short Reads (Illumina)</h3>
        <div className="bg-white/80 rounded-xl p-3 font-mono text-[10px] space-y-1">
          {Array.from({ length: 4 }, (_, i) => <div key={i} className="h-2 bg-ngs-raw/40 rounded" style={{ width: `${30 + (i * 3)}%` }} />)}
          <p className="text-muted-foreground mt-1">150 bp each — many short fragments</p>
        </div>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>✅ Highest accuracy (99.9%)</li>
          <li>✅ Lowest cost per base</li>
          <li>✅ Best for SNPs, small indels</li>
          <li>❌ Can't span repeats or structural variants</li>
          <li>❌ Alignment ambiguity in repetitive regions</li>
        </ul>
      </div>
      <div className="border-2 border-ngs-processing/30 bg-ngs-processing/5 rounded-2xl p-5 space-y-3">
        <h3 className="font-bold text-sm">🔸 Long Reads (Nanopore / PacBio)</h3>
        <div className="bg-white/80 rounded-xl p-3 font-mono text-[10px] space-y-1">
          {Array.from({ length: 2 }, (_, i) => <div key={i} className="h-2 bg-ngs-processing/40 rounded" style={{ width: `${80 + (i * 10)}%` }} />)}
          <p className="text-muted-foreground mt-1">10,000+ bp — fewer but much longer</p>
        </div>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>✅ Spans repetitive regions</li>
          <li>✅ Detects structural variants</li>
          <li>✅ Enables de novo assembly</li>
          <li>✅ Direct RNA/methylation detection</li>
          <li>⚠️ Higher error rate (improving with HiFi)</li>
        </ul>
      </div>
    </div>

    <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4">
      <p className="text-xs font-bold text-indigo-700 mb-2">🆕 No Reference? De Novo Assembly</p>
      <p className="text-xs text-indigo-600 leading-relaxed">
        When there's no reference genome (novel pathogen, non-model organism), we assemble from scratch — <em>de novo</em>.
        This is how the first SARS-CoV-2 genome was assembled in January 2020. Long reads make this dramatically easier
        because they span the overlaps needed to stitch fragments together.
      </p>
    </div>

    <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
      <p className="text-xs font-bold text-purple-700 mb-2">🧠 Misconception Challenge</p>
      <p className="text-sm text-gray-700 mb-2">"Long reads will replace short reads completely within 5 years." — True or False?</p>
      <details className="text-xs text-gray-600">
        <summary className="cursor-pointer font-bold text-purple-600 hover:text-purple-800">Reveal Answer</summary>
        <p className="mt-2 p-3 bg-white rounded-xl">
          <strong>False!</strong> Short reads and long reads are <em>complementary</em>, not competing. Short reads remain
          unbeatable for cost-effective SNP detection and clinical panels. Long reads excel at structural variants
          and assembly. Many cutting-edge projects use <strong>both</strong> (hybrid assembly).
        </p>
      </details>
    </div>

    <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">Take the Mini Quiz →</button>
  </motion.div>
);

export default Module03Page4;
