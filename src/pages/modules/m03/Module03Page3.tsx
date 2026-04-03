import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PLATFORMS = [
  { name: 'Illumina NovaSeq X', gen: '2nd Gen (SBS)', readLength: '2×150 bp', accuracy: '99.9%', throughput: '16 Tb/run', costPerGb: '~$2', runTime: '~48 hrs', bestFor: 'Clinical panels, WGS, WES, RNA-seq', icon: '🔬', isAlex: true },
  { name: 'Oxford Nanopore MinION', gen: '3rd Gen (Nanopore)', readLength: '10 kb–2 Mb', accuracy: '95–99%', throughput: '50 Gb/flow cell', costPerGb: '~$20', runTime: 'Real-time', bestFor: 'Structural variants, metagenomics, field work', icon: '🧫' },
  { name: 'PacBio Revio (HiFi)', gen: '3rd Gen (SMRT)', readLength: '10–25 kb (HiFi)', accuracy: '99.9% (HiFi)', throughput: '360 Gb/run', costPerGb: '~$8', runTime: '~24 hrs', bestFor: 'De novo assembly, phasing, repeat expansions', icon: '🧬' },
  { name: 'MGI DNBSEQ-T7', gen: '2nd Gen (DNB)', readLength: '2×150 bp', accuracy: '99.9%', throughput: '6 Tb/run', costPerGb: '~$3', runTime: '~24 hrs', bestFor: 'Large-scale WGS, population genomics', icon: '📊' },
];

interface Props { onNext: () => void; }

const Module03Page3 = ({ onNext }: Props) => {
  const [expandedPlatform, setExpandedPlatform] = useState<string | null>(null);

  return (
    <motion.div key="platforms" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
      <h2 className="text-2xl font-black tracking-tight">📊 Sequencing Platforms</h2>
      <p className="text-sm text-muted-foreground">Click any platform to see full specs. Each serves different use cases.</p>

      <div className="space-y-3">
        {PLATFORMS.map((p) => (
          <motion.button key={p.name} whileHover={{ y: -1 }}
            onClick={() => setExpandedPlatform(expandedPlatform === p.name ? null : p.name)}
            className={`w-full text-left rounded-2xl border-2 p-4 transition-all ${expandedPlatform === p.name ? 'border-primary shadow-lg bg-primary/5' : 'border-border bg-card hover:shadow-md'} ${p.isAlex ? 'ring-1 ring-amber-300' : ''}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{p.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm">{p.name}</span>
                  {p.isAlex && <span className="text-[10px] font-black bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full">ALEX</span>}
                </div>
                <span className="text-[10px] text-muted-foreground">{p.gen}</span>
              </div>
              <span className="text-xs text-muted-foreground">{expandedPlatform === p.name ? '▼' : '▶'}</span>
            </div>
            <AnimatePresence>
              {expandedPlatform === p.name && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-3 space-y-2">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[['Read Length', p.readLength], ['Accuracy', p.accuracy], ['Throughput', p.throughput], ['Cost/Gb', p.costPerGb], ['Run Time', p.runTime], ['Best For', p.bestFor]].map(([label, val]) => (
                      <div key={label} className="bg-muted/50 rounded-lg p-2">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">{label}</p>
                        <p className="text-xs font-semibold">{val}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4">
        <p className="text-xs font-bold text-teal-700 mb-2">🌍 Nanopore: Sequencing for the World</p>
        <p className="text-xs text-teal-600 leading-relaxed">
          The Oxford Nanopore MinION costs ~$1,000 (vs $1M+ for a NovaSeq), runs on a laptop, and provides real-time results.
          In Africa, Southeast Asia, and Latin America, Nanopore IS NGS. It was used to track Ebola, Zika, and COVID in the field.
          The trade-off? Higher error rate per read — but improving rapidly with new basecalling AI.
        </p>
      </div>

      <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">Short vs Long Reads →</button>
    </motion.div>
  );
};

export default Module03Page3;
