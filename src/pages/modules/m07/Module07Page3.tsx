import { motion } from 'framer-motion';
import GlossaryChip from '@/components/GlossaryChip';
import { PATIENT_ZERO } from '@/data/ngsData';
const FILTER_CRITERIA = [
  { metric: 'Read Depth (DP)', pass: '≥ 20', alex: '105', status: 'pass' },
  { metric: 'Variant Quality (QUAL)', pass: '≥ 30', alex: '5000', status: 'pass' },
  { metric: 'VAF', pass: '0.2-0.8 (germline het)', alex: '0.48', status: 'pass' },
  { metric: 'Strand Bias', pass: '< 0.01', alex: '0.001', status: 'pass' },
  { metric: 'MAPQ', pass: '≥ 20', alex: '60', status: 'pass' },
];
interface Props { onVisit: (id: string) => void; }
const Module07Page3 = ({ onVisit }: Props) => (
  <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} onViewportEnter={() => onVisit('variant-filtering')} className="mb-12">
    <h2 className="text-2xl font-bold text-foreground mb-4">🎯 Filtering: Real vs Noise</h2>
    <p className="text-muted-foreground mb-4">Not every variant call is real. Quality filters separate true variants from sequencing artifacts. Let's check Alex's <span className="font-bold text-destructive">{PATIENT_ZERO.variant}</span>:</p>
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <table className="w-full text-sm">
        <thead><tr className="border-b border-border bg-muted/30"><th className="text-left py-3 px-4 text-xs font-bold text-muted-foreground">Metric</th><th className="text-left py-3 px-4 text-xs font-bold text-muted-foreground">Threshold</th><th className="text-left py-3 px-4 text-xs font-bold text-muted-foreground">Alex's Value</th><th className="text-center py-3 px-4 text-xs font-bold text-muted-foreground">Status</th></tr></thead>
        <tbody>{FILTER_CRITERIA.map(f => (<tr key={f.metric} className="border-b border-border/50"><td className="py-2 px-4 text-foreground font-medium text-xs">{f.metric}</td><td className="py-2 px-4 font-mono text-xs text-muted-foreground">{f.pass}</td><td className="py-2 px-4 font-mono text-xs text-primary font-bold">{f.alex}</td><td className="py-2 px-4 text-center text-primary font-bold text-xs">✅ PASS</td></tr>))}</tbody>
      </table>
    </div>
    <p className="text-xs text-muted-foreground mt-3 text-center">Alex's <GlossaryChip term="VAF">VAF</GlossaryChip> of 0.48 is near the expected 0.50 for a heterozygous germline variant — strong evidence this is real.</p>
  </motion.section>
);
export default Module07Page3;
