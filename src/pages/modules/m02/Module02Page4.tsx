import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LIB_PREP_STEPS = [
  { id: 'qc', step: 0, emoji: '📏', title: 'Sample QC & Quantification', simple: 'Before starting, we measure how much DNA we have and check its quality — like weighing ingredients before cooking.', technical: 'Qubit fluorometer for dsDNA quantification. NanoDrop for 260/280 purity ratio (>1.8 = pure). Bioanalyzer/TapeStation for fragment size distribution and DIN (DNA Integrity Number).', alexNote: "Alex's blood sample yields 2.1 µg gDNA with 260/280 = 1.89 and DIN = 8.2 — excellent quality.", failMode: 'Low DIN (<3) → degraded DNA. You might need FFPE protocol instead. Low quantity → whole genome amplification (introduces bias).' },
  { id: 'fragment', step: 1, emoji: '✂️', title: 'Fragmentation', simple: 'We break the long DNA into small pieces. Imagine tearing a 3-billion-letter book into short paragraphs of ~300 letters each.', technical: "Covaris ultrasonication (mechanical) or enzymatic fragmentation (e.g., Illumina's tagmentation). Target: 200–500 bp fragments. Mechanical is more uniform; enzymatic is faster and needs less input.", alexNote: "Alex's gDNA is sonicated to a target of ~350 bp insert size using a Covaris E220.", failMode: 'Over-fragmentation → fragments too short for mapping. Under-fragmentation → poor cluster generation. Check with Bioanalyzer after.' },
  { id: 'endrepair', step: 2, emoji: '🔧', title: 'End Repair & A-Tailing', simple: 'Fragmentation creates ragged edges. We smooth them out and add a single "A" letter to each end — like adding a hook.', technical: "T4 DNA polymerase fills in 5' overhangs and removes 3' overhangs (blunt-ending). Klenow fragment adds a single deoxyadenosine (A) to 3' ends. This A-tail prevents self-ligation and enables adapter ligation.", alexNote: 'End repair and A-tailing done in a single reaction tube. 30 min at 20°C, then 30 min at 65°C.', failMode: "Incomplete A-tailing → adapters won't ligate properly → massive library loss. Always use fresh reagents." },
  { id: 'adapter', step: 3, emoji: '🔗', title: 'Adapter Ligation', simple: 'We attach small synthetic DNA sequences (adapters) to both ends of each fragment. These are like barcodes + handles — the sequencer grabs fragments by their adapters.', technical: 'Y-shaped adapters with a T-overhang complementary to the A-tail. Contains: P5/P7 flow cell binding sequences, index (i7/i5) for multiplexing, and sequencing primer binding sites. T4 DNA ligase catalyzes the reaction.', alexNote: "Unique dual index adapters (UDI) are ligated to Alex's fragments. Index combination allows demultiplexing from other samples run together.", failMode: 'Adapter dimers: adapters ligate to each other instead of fragments. These are ~120 bp and sequence very efficiently, wasting reads. Visible as a sharp peak on Bioanalyzer.' },
  { id: 'size', step: 4, emoji: '📐', title: 'Size Selection', simple: 'Not all fragments are the right size. We keep only the ones between 300–500 bp — like filtering out pages that are too short or too long.', technical: 'SPRI bead-based selection (AMPure XP) using double-sided size selection: 0.6× ratio removes >600 bp fragments, then 0.8× ratio removes <200 bp fragments. Alternative: gel-based (BluePippin) for precise cutoffs.', alexNote: "Double-sided SPRI bead cleanup selects 300–500 bp fragments from Alex's library.", failMode: "Wrong bead ratios → too narrow or too broad size distribution. If adapter dimers survive this step, they'll dominate sequencing." },
  { id: 'amplify', step: 5, emoji: '🔄', title: 'Library Amplification (PCR)', simple: 'We make copies of every fragment to have enough material. But too many copies create duplicates that confuse the analysis later.', technical: 'PCR using P5/P7 primers. Typically 6–10 cycles for standard input (1 µg). Low-input protocols may need 12–15 cycles, increasing duplicate rate and GC bias. PCR-free protocols exist for high-input samples and are preferred.', alexNote: "Alex's library amplified with 8 PCR cycles — a good balance between yield and duplicate rate.", failMode: 'Too many PCR cycles → high duplicate rate → wasted sequencing capacity. Too few → insufficient library yield for loading.' },
  { id: 'libqc', step: 6, emoji: '✅', title: 'Library QC', simple: 'Final check: is the library good enough to sequence? We measure its size, quantity, and look for contamination.', technical: 'Bioanalyzer/TapeStation for size distribution (expect peak at insert + adapters ≈ 470 bp for 350 bp insert). Qubit for concentration. qPCR for functional library quantification (only counts molecules with both adapters). Expect >2 nM.', alexNote: "Alex's library: peak at 468 bp, concentration 12.4 nM by qPCR. No adapter dimer peak. Ready to sequence!", failMode: 'Adapter dimer peak at ~120 bp → redo size selection. Broad smear instead of peak → fragmentation was uneven. Concentration <0.5 nM → may need to re-prep.', showTrace: true },
  { id: 'load', step: 7, emoji: '🔬', title: 'Loading on Flow Cell', simple: "The library is loaded onto the sequencing machine's flow cell — a glass slide where the actual reading happens. This is the handoff from wet lab to machine.", technical: 'Library diluted to optimal loading concentration (typically 1.5–2.0 nM for NovaSeq). Denatured with NaOH, mixed with PhiX control (1–5% spike-in for quality metrics). Loaded into the flow cell cartridge.', alexNote: "Alex's library loaded at 1.8 nM onto a NovaSeq 6000 S4 flow cell with 1% PhiX spike-in. Run time: ~36 hours for 2×150 bp.", failMode: "Over-loading → overcrowded clusters → poor quality. Under-loading → wasted capacity. PhiX spike-in too low → can't calibrate properly." },
];

interface Props { onNext: () => void; }

const Module02Page4 = ({ onNext }: Props) => {
  const [wetLabStep, setWetLabStep] = useState(0);
  const [showTechnical, setShowTechnical] = useState(false);
  const [showFailMode, setShowFailMode] = useState(false);
  const [showTraceGood, setShowTraceGood] = useState(true);
  const currentStep = LIB_PREP_STEPS[wetLabStep];

  return (
    <motion.div key="wetlab" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black tracking-tight">🧪 Virtual Wet Lab</h2>
        <button onClick={() => setShowTechnical(!showTechnical)}
          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${showTechnical ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
          {showTechnical ? '🔬 Technical ON' : '📖 Simple Mode'}
        </button>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="bg-muted/50 px-4 py-2 flex items-center gap-4 text-xs text-muted-foreground border-b border-border">
          <span>🧊 Sample: Alex — Blood</span>
          <span>🔬 Protocol: Standard gDNA Library Prep</span>
          <span className="ml-auto font-bold text-primary font-mono">Step {wetLabStep + 1} / {LIB_PREP_STEPS.length}</span>
        </div>
        <div className="px-4 pt-3">
          <div className="flex gap-1">
            {LIB_PREP_STEPS.map((s, i) => (
              <button key={i} onClick={() => setWetLabStep(i)}
                className={`flex-1 h-2 rounded-full transition-all ${i < wetLabStep ? 'bg-ngs-output' : i === wetLabStep ? 'gradient-brand' : 'bg-muted'}`} />
            ))}
          </div>
        </div>
        <div className="p-5 space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{currentStep.emoji}</span>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Step {currentStep.step + 1}</p>
              <h3 className="font-bold text-lg">{currentStep.title}</h3>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{showTechnical ? currentStep.technical : currentStep.simple}</p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
            <p className="text-[10px] font-bold text-amber-700 mb-1">👤 Alex's Sample</p>
            <p className="text-xs text-amber-800">{currentStep.alexNote}</p>
          </div>
          <button onClick={() => setShowFailMode(!showFailMode)} className="text-xs font-bold text-ngs-error hover:underline">
            {showFailMode ? '▼ Hide failure modes' : '▶ What can go wrong?'}
          </button>
          <AnimatePresence>
            {showFailMode && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                className="bg-ngs-error/5 border border-ngs-error/20 rounded-xl p-3">
                <p className="text-xs text-ngs-error font-bold mb-1">⚠️ Failure Mode</p>
                <p className="text-xs text-muted-foreground">{currentStep.failMode}</p>
              </motion.div>
            )}
          </AnimatePresence>
          {currentStep.showTrace && (
            <div className="space-y-2">
              <div className="flex gap-2">
                <button onClick={() => setShowTraceGood(true)} className={`text-xs px-3 py-1 rounded-lg font-bold ${showTraceGood ? 'bg-ngs-output text-white' : 'bg-muted text-muted-foreground'}`}>✅ Good Library</button>
                <button onClick={() => setShowTraceGood(false)} className={`text-xs px-3 py-1 rounded-lg font-bold ${!showTraceGood ? 'bg-ngs-error text-white' : 'bg-muted text-muted-foreground'}`}>❌ Failed Library</button>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 h-32 flex items-end gap-0.5">
                {showTraceGood
                  ? Array.from({ length: 40 }, (_, i) => { const x = (i / 40) * 1000; const peak = Math.exp(-Math.pow((x - 470) / 80, 2)) * 100; return <div key={i} className="flex-1 bg-ngs-output/70 rounded-t" style={{ height: `${Math.max(peak, 2)}%` }} />; })
                  : Array.from({ length: 40 }, (_, i) => { const x = (i / 40) * 1000; const dimer = Math.exp(-Math.pow((x - 120) / 15, 2)) * 100; const lib = Math.exp(-Math.pow((x - 470) / 80, 2)) * 25; const h = Math.max(dimer, lib, 2); return <div key={i} className={`flex-1 rounded-t ${dimer > lib ? 'bg-ngs-error/70' : 'bg-ngs-output/40'}`} style={{ height: `${h}%` }} />; })
                }
              </div>
              <p className="text-[10px] text-muted-foreground text-center">
                {showTraceGood ? 'Clean peak at ~470 bp. No adapter dimers. Library is ready!' : '⚠️ Sharp peak at ~120 bp = adapter dimers! Library needs re-prep or additional size selection.'}
              </p>
            </div>
          )}
        </div>
        <div className="px-5 pb-5 flex items-center justify-between">
          <button onClick={() => setWetLabStep(Math.max(0, wetLabStep - 1))} disabled={wetLabStep === 0}
            className="px-4 py-2 rounded-xl text-xs font-bold border border-border hover:bg-muted transition-all disabled:opacity-30">← Previous</button>
          <div className="flex gap-1.5">
            {LIB_PREP_STEPS.map((_, i) => <button key={i} onClick={() => setWetLabStep(i)} className={`w-2 h-2 rounded-full ${i === wetLabStep ? 'bg-primary' : 'bg-muted'}`} />)}
          </div>
          {wetLabStep < LIB_PREP_STEPS.length - 1
            ? <button onClick={() => setWetLabStep(wetLabStep + 1)} className="px-4 py-2 rounded-xl text-xs font-bold gradient-brand text-white hover:opacity-90 transition-opacity">Next Step →</button>
            : <button onClick={onNext} className="px-4 py-2 rounded-xl text-xs font-bold bg-ngs-output text-white hover:opacity-90 transition-opacity">Library Ready! Continue →</button>
          }
        </div>
      </div>
    </motion.div>
  );
};

export default Module02Page4;
