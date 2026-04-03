import { motion } from 'framer-motion';
interface Props { onVisit: (id: string) => void; }
const Module06Page3 = ({ onVisit }: Props) => (
  <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} onViewportEnter={() => onVisit('alex-processing')} className="mb-12">
    <h2 className="text-2xl font-bold text-foreground mb-4">📋 Alex's File Processing Summary</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {[{ label: 'Raw BAM', value: '~28 GB', sub: 'Unsorted, with duplicates' }, { label: 'Processed BAM', value: '~25 GB', sub: 'Sorted, deduped, recalibrated' }, { label: 'Final VCF', value: '~150 MB', sub: '~4.5M variant calls' }].map(item => (
        <div key={item.label} className="bg-card border border-border rounded-2xl p-5 text-center">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{item.label}</p>
          <p className="text-2xl font-bold text-primary mt-1">{item.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
        </div>
      ))}
    </div>
  </motion.section>
);
export default Module06Page3;
