import { useState } from 'react';
import { motion } from 'framer-motion';

const SBS_STEPS = [
  { emoji: '🧲', title: 'Library Binding', desc: 'Single-stranded library molecules hybridize to complementary oligos (P5/P7) on the flow cell surface.', simple: 'DNA sticks to the glass slide.' },
  { emoji: '🌉', title: 'Bridge Amplification', desc: 'Each molecule bends over and binds to a nearby oligo, forming a bridge. DNA polymerase extends to create a copy. Repeated ~35 cycles to form a cluster of ~1,000 identical copies.', simple: 'One DNA molecule makes ~1,000 copies of itself on the spot — like stamping copies around a single point.' },
  { emoji: '🔵', title: 'Cluster Linearization', desc: "Reverse strands are cleaved and washed away. Forward strands are blocked at the 3' end. Sequencing primer is annealed.", simple: 'We clean up the cluster so all copies face the same direction, ready to be read.' },
  { emoji: '🧪', title: 'Add Fluorescent Nucleotides', desc: "All four dNTPs (A, T, C, G) are added simultaneously, each labeled with a different fluorescent dye and blocked at the 3' hydroxyl (reversible terminator).", simple: 'We flood the surface with all 4 DNA letters, each glowing a different color. Only ONE can attach per cycle.' },
  { emoji: '📸', title: 'Imaging', desc: 'A laser excites the fluorophore. A camera captures the color of each cluster. The color reveals which base was incorporated: A=green, C=blue, G=yellow, T=red (varies by chemistry).', simple: 'A camera takes a photo. Each glowing dot = one cluster = one base identified.' },
  { emoji: '✂️', title: 'Cleavage & Repeat', desc: "The fluorophore and 3' block are chemically cleaved, regenerating a free 3' hydroxyl. The next nucleotide can now be incorporated. This cycle repeats 150–300 times (= read length).", simple: 'We remove the color tag, unblock the end, and repeat. Each cycle reads one more letter. 150 cycles = 150 bp read.' },
];

interface Props { onNext: () => void; }

const Module03Page2 = ({ onNext }: Props) => {
  const [sbsStep, setSbsStep] = useState(0);
  const [showTechnical, setShowTechnical] = useState(false);

  return (
    <motion.div key="sbs" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black tracking-tight">🔬 Sequencing by Synthesis</h2>
        <button onClick={() => setShowTechnical(!showTechnical)}
          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${showTechnical ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
          {showTechnical ? '🔬 Technical ON' : '📖 Simple Mode'}
        </button>
      </div>

      <div className="bg-gray-900 rounded-2xl overflow-hidden">
        <div className="px-4 py-2 flex items-center gap-2 border-b border-gray-700">
          <div className="w-2 h-2 rounded-full bg-ngs-output animate-pulse" />
          <span className="text-xs text-gray-400 font-mono">Illumina NovaSeq 6000 — Flow Cell View</span>
          <span className="ml-auto text-xs text-gray-500 font-mono">Step {sbsStep + 1} / {SBS_STEPS.length}</span>
        </div>
        <div className="p-6 flex justify-center">
          <div className="relative w-64 h-40">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border border-gray-700" />
            <div className="absolute inset-0 flex items-center justify-center gap-3 p-4">
              {sbsStep === 0 && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex flex-wrap gap-2 justify-center">{Array.from({ length: 6 }, (_, i) => <div key={i} className="w-3 h-3 rounded-full bg-ngs-raw/60" />)}<p className="text-[10px] text-gray-500 w-full text-center mt-2">Single molecules bind to surface</p></motion.div>}
              {sbsStep === 1 && <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex flex-wrap gap-2 justify-center">{Array.from({ length: 6 }, (_, i) => <div key={i} className="w-8 h-8 rounded-full bg-ngs-raw/30 flex items-center justify-center"><div className="w-4 h-4 rounded-full bg-ngs-raw/70 animate-pulse" /></div>)}<p className="text-[10px] text-gray-500 w-full text-center mt-2">Clusters forming (~1,000 copies each)</p></motion.div>}
              {sbsStep === 2 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2 justify-center">{Array.from({ length: 6 }, (_, i) => <div key={i} className="w-8 h-8 rounded-full bg-ngs-raw/50 flex items-center justify-center text-[10px] text-white font-bold">→</div>)}<p className="text-[10px] text-gray-500 w-full text-center mt-2">Clusters linearized, primer annealed</p></motion.div>}
              {(sbsStep === 3 || sbsStep === 4) && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2 justify-center">{['bg-green-400','bg-blue-400','bg-yellow-400','bg-green-400','bg-red-400','bg-blue-400'].map((color, i) => <motion.div key={i} animate={sbsStep === 4 ? { scale: [1, 1.3, 1] } : {}} transition={{ delay: i * 0.1, repeat: sbsStep === 4 ? Infinity : 0, duration: 1 }} className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-[10px] text-white font-bold ${sbsStep === 4 ? 'shadow-lg' : 'opacity-70'}`}>{['A','C','G','A','T','C'][i]}</motion.div>)}<p className="text-[10px] text-gray-500 w-full text-center mt-2">{sbsStep === 3 ? 'Fluorescent nucleotides incorporate' : '📸 Camera captures colors!'}</p></motion.div>}
              {sbsStep === 5 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center"><div className="flex gap-2 justify-center mb-3">{Array.from({ length: 6 }, (_, i) => <motion.div key={i} animate={{ opacity: [1, 0.3, 1] }} transition={{ delay: i * 0.15, duration: 1.5, repeat: Infinity }} className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-[10px] text-gray-400 font-bold">✂️</motion.div>)}</div><p className="text-[10px] text-gray-500">Cleave → Wash → Next cycle. Repeat 150×</p></motion.div>}
            </div>
          </div>
        </div>
        <div className="px-6 pb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{SBS_STEPS[sbsStep].emoji}</span>
            <h3 className="font-bold text-white text-sm">{SBS_STEPS[sbsStep].title}</h3>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">{showTechnical ? SBS_STEPS[sbsStep].desc : SBS_STEPS[sbsStep].simple}</p>
        </div>
        <div className="px-6 pb-4 flex items-center justify-between">
          <button onClick={() => setSbsStep(Math.max(0, sbsStep - 1))} disabled={sbsStep === 0} className="text-xs text-gray-400 hover:text-white disabled:opacity-30">← Back</button>
          <div className="flex gap-1.5">{SBS_STEPS.map((_, i) => <button key={i} onClick={() => setSbsStep(i)} className={`w-2 h-2 rounded-full ${i === sbsStep ? 'bg-primary' : 'bg-gray-600'}`} />)}</div>
          {sbsStep < SBS_STEPS.length - 1 ? <button onClick={() => setSbsStep(sbsStep + 1)} className="text-xs text-primary font-bold hover:underline">Next →</button> : <button onClick={onNext} className="text-xs text-ngs-output font-bold hover:underline">Platforms →</button>}
        </div>
      </div>

      <details className="bg-gray-900 rounded-xl overflow-hidden">
        <summary className="px-4 py-2 text-xs text-gray-500 cursor-pointer hover:text-gray-300 font-mono">💻 Show Real Command — running Illumina sequencer</summary>
        <div className="px-4 pb-3 text-xs text-green-400 font-mono">
          <p className="text-gray-500"># The sequencer runs automatically after loading</p>
          <p className="text-gray-500"># Output: BCL files → converted to FASTQ</p>
          <p className="mt-1">bcl2fastq --runfolder-dir /data/run001/ \</p>
          <p className="pl-4">--output-dir /data/fastq/ \</p>
          <p className="pl-4">--sample-sheet SampleSheet.csv</p>
        </div>
      </details>
    </motion.div>
  );
};

export default Module03Page2;
