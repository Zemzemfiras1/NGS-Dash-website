import { motion } from 'framer-motion';
import GlossaryChip from '@/components/GlossaryChip';
interface Props { onVisit: (id: string) => void; }
const Module07Page4 = ({ onVisit }: Props) => (
  <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} onViewportEnter={() => onVisit('population-dbs')} className="mb-12">
    <h2 className="text-2xl font-bold text-foreground mb-4">🌍 Population Frequency Check</h2>
    <div className="bg-card border border-border rounded-2xl p-6">
      <p className="text-sm text-muted-foreground mb-4"><GlossaryChip term="gnomAD">gnomAD</GlossaryChip> tells us how common a variant is in the general population. Rare variants are more likely to be disease-causing.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-muted/30 rounded-xl p-4 text-center"><p className="text-xs text-muted-foreground">Alex's variant in gnomAD</p><p className="text-2xl font-bold text-destructive mt-1">0.0006%</p><p className="text-xs text-muted-foreground mt-1">Extremely rare</p></div>
        <div className="bg-muted/30 rounded-xl p-4 text-center"><p className="text-xs text-muted-foreground">Common SNP threshold</p><p className="text-2xl font-bold text-foreground mt-1">&gt; 1%</p><p className="text-xs text-muted-foreground mt-1">Likely benign</p></div>
        <div className="bg-muted/30 rounded-xl p-4 text-center"><p className="text-xs text-muted-foreground">Total gnomAD samples</p><p className="text-2xl font-bold text-primary mt-1">807K+</p><p className="text-xs text-muted-foreground mt-1">Diverse populations</p></div>
      </div>
    </div>
  </motion.section>
);
export default Module07Page4;
