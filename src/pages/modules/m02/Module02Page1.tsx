import { motion } from 'framer-motion';
import GlossaryChip from '@/components/GlossaryChip';

interface Props { onNext: () => void; }

const Module02Page1 = ({ onNext }: Props) => (
  <motion.div key="obj" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
    <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5">
      <p className="text-xs font-black text-purple-600 uppercase tracking-widest mb-2">🎯 Learning Objectives</p>
      <ul className="text-sm text-gray-700 space-y-1.5">
        <li>• Identify 8 common NGS sample types and their characteristics</li>
        <li>• Explain the difference between <GlossaryChip term="Single-End" /> and <GlossaryChip term="Paired-End" /> sequencing</li>
        <li>• Walk through all 8 steps of <GlossaryChip term="Library Prep" /> from sample QC to flow cell loading</li>
        <li>• Understand why quality checkpoints prevent wasted sequencing runs</li>
        <li>• Experience an informed consent process for genetic testing</li>
      </ul>
    </div>
    <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
      <p className="text-xs font-bold text-amber-700 mb-1">👤 Patient Zero — Alex</p>
      <p className="text-sm text-amber-800">
        Alex's oncologist ordered a hereditary cancer panel. A blood sample was drawn — the gold standard for germline testing.
        Now we need to prepare that blood DNA into a <GlossaryChip term="Library Prep">sequencing library</GlossaryChip> the machine can read.
      </p>
    </div>
    <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">
      Explore Sample Types →
    </button>
  </motion.div>
);

export default Module02Page1;
