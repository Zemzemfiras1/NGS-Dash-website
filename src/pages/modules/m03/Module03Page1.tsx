import { motion } from 'framer-motion';
import GlossaryChip from '@/components/GlossaryChip';

interface Props { onNext: () => void; }

const Module03Page1 = ({ onNext }: Props) => (
  <motion.div key="obj" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
    <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5">
      <p className="text-xs font-black text-purple-600 uppercase tracking-widest mb-2">🎯 Learning Objectives</p>
      <ul className="text-sm text-gray-700 space-y-1.5">
        <li>• Explain how Illumina's <GlossaryChip term="SBS">Sequencing by Synthesis</GlossaryChip> works, step by step</li>
        <li>• Describe <GlossaryChip term="Cluster">bridge amplification</GlossaryChip> and why clusters are needed</li>
        <li>• Compare Illumina, Nanopore, PacBio, and MGI platforms</li>
        <li>• Understand the trade-offs between short and long reads</li>
      </ul>
    </div>
    <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
      <p className="text-xs font-bold text-amber-700 mb-1">👤 Patient Zero — Alex</p>
      <p className="text-sm text-amber-800">
        Alex's library has been loaded onto an <strong>Illumina NovaSeq 6000</strong> — the workhorse of clinical genomics.
        Over the next ~36 hours, the machine will read her DNA fragments using Sequencing by Synthesis. Let's see how it works.
      </p>
    </div>
    <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">Watch SBS in Action →</button>
  </motion.div>
);

export default Module03Page1;
