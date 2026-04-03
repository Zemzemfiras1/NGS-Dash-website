import { motion } from 'framer-motion';
import GlossaryChip from '@/components/GlossaryChip';
import { PATIENT_ZERO } from '@/data/ngsData';
interface Props { onNext: () => void; }
const Module04Page1 = ({ onNext }: Props) => (
  <motion.div key="obj" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
      <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2">🎯 Learning Objectives</p>
      <ul className="text-sm text-gray-700 space-y-1.5">
        <li>• Read and interpret a <GlossaryChip term="FASTQ">FASTQ</GlossaryChip> file — the raw output of sequencing</li>
        <li>• Calculate and interpret <GlossaryChip term="Phred Score">Phred quality scores</GlossaryChip></li>
        <li>• Understand what <GlossaryChip term="Coverage">coverage</GlossaryChip> means and why it varies by application</li>
        <li>• Evaluate Alex's sequencing run quality metrics</li>
      </ul>
    </div>
    <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
      <p className="text-xs font-bold text-amber-700 mb-1">👤 Patient Zero — Alex</p>
      <p className="text-sm text-amber-800">Alex's library has finished its 36-hour run on the NovaSeq 6000. The machine generated <strong>800 million reads</strong> across multiple samples. Now we need to check: did the sequencing actually work? Let's look at the raw data.</p>
    </div>
    <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">Explore FASTQ Format →</button>
  </motion.div>
);
export default Module04Page1;
