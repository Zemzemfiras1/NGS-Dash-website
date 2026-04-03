import { useState } from 'react';
import { motion } from 'framer-motion';
import GlossaryChip from '@/components/GlossaryChip';
const VARIANT_TYPES = [
  { type: 'SNP', icon: '🔤', desc: 'Single letter change (e.g., A→G)', example: 'chr17:7674220 C>T', frequency: '~4.1M per genome' },
  { type: 'Indel', icon: '✂️', desc: 'Insertion or deletion of 1-50 bp', example: 'chr13:32936732 CT>C (Alex!)', frequency: '~600K per genome' },
  { type: 'Structural', icon: '🔀', desc: 'Large rearrangements (>50 bp): deletions, duplications, inversions, translocations', example: 'DEL chr7:10000-50000', frequency: '~10K per genome' },
  { type: 'CNV', icon: '📊', desc: 'Copy number changes — gains or losses of large DNA segments', example: 'DUP chr8:100K-500K', frequency: '~1K per genome' },
];
interface Props { onVisit: (id: string) => void; }
const Module07Page1 = ({ onVisit }: Props) => {
  const [activeType, setActiveType] = useState(0);
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} onViewportEnter={() => onVisit('variant-types')} className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-4">🧬 Types of Genetic Variants</h2>
      <p className="text-muted-foreground mb-6">The human genome contains millions of differences from the reference. Most are harmless — the challenge is finding the ones that matter.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {VARIANT_TYPES.map((v, i) => (<button key={v.type} onClick={() => setActiveType(i)} className={`p-3 rounded-xl text-center transition-all ${activeType === i ? 'bg-primary text-primary-foreground shadow-md' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}><span className="text-2xl block">{v.icon}</span><span className="text-xs font-bold mt-1 block"><GlossaryChip term={v.type === 'SNP' ? 'SNP' : v.type === 'Indel' ? 'Indel' : v.type}>{v.type}</GlossaryChip></span></button>))}
      </div>
      <motion.div key={activeType} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <span className="text-4xl">{VARIANT_TYPES[activeType].icon}</span>
          <div className="flex-1"><h3 className="text-lg font-bold text-foreground">{VARIANT_TYPES[activeType].type}</h3><p className="text-sm text-muted-foreground mt-1">{VARIANT_TYPES[activeType].desc}</p><div className="mt-3 flex flex-wrap gap-4"><div className="bg-muted/30 rounded-lg px-3 py-2"><p className="text-xs text-muted-foreground">Example</p><p className="font-mono text-xs text-primary">{VARIANT_TYPES[activeType].example}</p></div><div className="bg-muted/30 rounded-lg px-3 py-2"><p className="text-xs text-muted-foreground">Per genome</p><p className="font-mono text-xs text-foreground">{VARIANT_TYPES[activeType].frequency}</p></div></div></div>
        </div>
      </motion.div>
    </motion.section>
  );
};
export default Module07Page1;
