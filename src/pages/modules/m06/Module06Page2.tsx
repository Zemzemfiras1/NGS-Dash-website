import { useState } from 'react';
import { motion } from 'framer-motion';
import GlossaryChip from '@/components/GlossaryChip';
const PROCESSING_STEPS = [
  { step: 'Sort', icon: '📑', desc: 'Order reads by genomic coordinate for efficient access', tool: 'samtools sort' },
  { step: 'Mark Duplicates', icon: '🔖', desc: 'Flag PCR/optical duplicates to prevent false variant calls', tool: 'Picard MarkDuplicates' },
  { step: 'BQSR', icon: '🎯', desc: 'Recalibrate base quality scores using known variant sites', tool: 'GATK BaseRecalibrator' },
  { step: 'Index', icon: '📇', desc: 'Create .bai index for fast random access to genomic regions', tool: 'samtools index' },
];
interface Props { onVisit: (id: string) => void; }
const Module06Page2 = ({ onVisit }: Props) => {
  const [processStep, setProcessStep] = useState(0);
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} onViewportEnter={() => onVisit('bam-processing')} className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-4">⚙️ BAM Processing Pipeline</h2>
      <p className="text-muted-foreground mb-6">Raw BAM files need four processing steps before variant calling. Each step removes a source of error.</p>
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {PROCESSING_STEPS.map((s, i) => (<button key={s.step} onClick={() => setProcessStep(i)} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${processStep === i ? 'bg-primary text-primary-foreground shadow-md' : i < processStep ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}><span>{s.icon}</span><span>{s.step}</span></button>))}
      </div>
      <motion.div key={processStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <span className="text-4xl">{PROCESSING_STEPS[processStep].icon}</span>
          <div>
            <h3 className="text-lg font-bold text-foreground">{PROCESSING_STEPS[processStep].step}</h3>
            <p className="text-sm text-muted-foreground mt-1">{PROCESSING_STEPS[processStep].desc}</p>
            <div className="mt-3 bg-muted/30 rounded-lg px-3 py-2 font-mono text-xs text-primary">$ {PROCESSING_STEPS[processStep].tool}</div>
            {processStep === 1 && (<div className="mt-3 bg-destructive/10 rounded-lg p-3 text-xs text-destructive"><strong>Why it matters:</strong> Alex's library had ~12% <GlossaryChip term="Duplicate">duplicates</GlossaryChip>. Without marking them, a variant seen in 5 duplicate reads could falsely appear well-supported.</div>)}
            {processStep === 2 && (<div className="mt-3 bg-primary/10 rounded-lg p-3 text-xs text-primary"><strong><GlossaryChip term="BQSR">BQSR</GlossaryChip> uses:</strong> dbSNP and known indel sites to learn systematic errors in base quality scores, then corrects them.</div>)}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
export default Module06Page2;
