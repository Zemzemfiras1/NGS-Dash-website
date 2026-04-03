import { useState } from 'react';
import { motion } from 'framer-motion';
import GlossaryChip from '@/components/GlossaryChip';
const CALLER_PIPELINE = [
  { step: 'HaplotypeCaller', desc: 'Reassembles reads in active regions and calls SNPs/indels per-sample', icon: '🧬' },
  { step: 'GenotypeGVCFs', desc: 'Joint genotyping across samples for population-scale calling', icon: '👥' },
  { step: 'VQSR / Filtering', desc: 'Machine-learning quality filter separating true variants from artifacts', icon: '🎯' },
];
interface Props { onVisit: (id: string) => void; }
const Module07Page2 = ({ onVisit }: Props) => {
  const [pipelineStep, setPipelineStep] = useState(0);
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} onViewportEnter={() => onVisit('gatk-pipeline')} className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-4">🔧 <GlossaryChip term="GATK">GATK</GlossaryChip> Variant Calling Pipeline</h2>
      <p className="text-muted-foreground mb-6">The gold standard for germline variant calling. GATK's HaplotypeCaller locally reassembles reads to find variants others miss.</p>
      <div className="space-y-3">
        {CALLER_PIPELINE.map((s, i) => (<button key={s.step} onClick={() => setPipelineStep(i)} className={`w-full text-left p-4 rounded-2xl border transition-all ${pipelineStep === i ? 'bg-primary/10 border-primary/30' : 'bg-card border-border hover:bg-muted/50'}`}><div className="flex items-center gap-3"><div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${pipelineStep === i ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>{i + 1}</div><div><p className="font-bold text-foreground text-sm">{s.icon} {s.step}</p><p className="text-xs text-muted-foreground">{s.desc}</p></div></div></button>))}
      </div>
    </motion.section>
  );
};
export default Module07Page2;
