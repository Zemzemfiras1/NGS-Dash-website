import { motion } from 'framer-motion';
import GlossaryChip from '@/components/GlossaryChip';
interface Props { onNext: () => void; }
const Module05Page1 = ({ onNext }: Props) => (
  <motion.div key="obj" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
    <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
      <p className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-2">🎯 Learning Objectives</p>
      <ul className="text-sm text-gray-700 space-y-1.5">
        <li>• Explain what a <GlossaryChip term="Reference Genome">reference genome</GlossaryChip> is and why we need one</li>
        <li>• Describe how <GlossaryChip term="Alignment">BWA-MEM</GlossaryChip> aligns reads using seed-and-extend</li>
        <li>• Interpret <GlossaryChip term="MAPQ">MAPQ</GlossaryChip> scores and understand mapping confidence</li>
        <li>• Evaluate Alex's alignment statistics</li>
      </ul>
    </div>
    <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
      <p className="text-xs font-bold text-amber-700 mb-1">👤 Patient Zero — Alex</p>
      <p className="text-sm text-amber-800">Alex's FASTQ files passed QC. Now we need to figure out <strong>where each read came from</strong> in the genome. That's alignment — mapping 800 million puzzle pieces onto the 3.2-billion-letter reference genome.</p>
    </div>
    <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">Explore the Reference Genome →</button>
  </motion.div>
);
export default Module05Page1;
