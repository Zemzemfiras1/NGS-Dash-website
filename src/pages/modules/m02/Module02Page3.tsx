import { motion } from 'framer-motion';
import GlossaryChip from '@/components/GlossaryChip';

interface Props { onNext: () => void; }

const Module02Page3 = ({ onNext }: Props) => (
  <motion.div key="readtypes" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
    <h2 className="text-2xl font-black tracking-tight">↔️ Single-End vs Paired-End</h2>
    <p className="text-sm text-muted-foreground">One of the most important decisions before sequencing. It changes everything downstream.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border-2 border-ngs-raw/30 bg-ngs-raw/5 rounded-2xl p-5 space-y-3">
        <h3 className="font-bold text-sm flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-ngs-raw/20 text-ngs-raw flex items-center justify-center text-xs font-black">1</span>
          <GlossaryChip term="Single-End">Single-End Reads</GlossaryChip>
        </h3>
        <div className="bg-white/80 rounded-xl p-3 font-mono text-xs space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-[10px] w-16">Fragment:</span>
            <div className="flex-1 h-4 bg-muted rounded relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-2/5 bg-ngs-raw/40 rounded-l flex items-center justify-center text-[9px] text-white font-bold">Read →</div>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground mt-2">Reads ONE end only. Faster, cheaper, less data.</p>
        </div>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>✅ Cheaper per read</li>
          <li>✅ Sufficient for gene expression (RNA-seq)</li>
          <li>❌ Cannot detect structural variants well</li>
          <li>❌ Poor alignment in repetitive regions</li>
        </ul>
      </div>

      <div className="border-2 border-ngs-output/30 bg-ngs-output/5 rounded-2xl p-5 space-y-3">
        <h3 className="font-bold text-sm flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-ngs-output/20 text-ngs-output flex items-center justify-center text-xs font-black">2</span>
          <GlossaryChip term="Paired-End">Paired-End Reads</GlossaryChip>
        </h3>
        <div className="bg-white/80 rounded-xl p-3 font-mono text-xs space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-[10px] w-16">Fragment:</span>
            <div className="flex-1 h-4 bg-muted rounded relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-2/5 bg-ngs-output/40 rounded-l flex items-center justify-center text-[9px] text-white font-bold">R1 →</div>
              <div className="absolute inset-y-0 right-0 w-2/5 bg-ngs-output/60 rounded-r flex items-center justify-center text-[9px] text-white font-bold">← R2</div>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground mt-2">Reads BOTH ends. More data, better mapping.</p>
        </div>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>✅ Better alignment accuracy</li>
          <li>✅ Detects structural variants & fusions</li>
          <li>✅ Resolves repetitive regions</li>
          <li>✅ Preferred for clinical panels</li>
        </ul>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
          <p className="text-[10px] font-bold text-amber-700">👤 Alex uses paired-end 2×150 bp reads — the clinical standard for hereditary cancer panels.</p>
        </div>
      </div>
    </div>

    <div className="bg-ngs-error/5 border border-ngs-error/20 rounded-2xl p-4">
      <p className="text-xs font-bold text-ngs-error mb-2">⚠️ What Happens with the Wrong Choice?</p>
      <div className="space-y-2 text-xs text-muted-foreground">
        <p>• Using single-end for a <strong>structural variant study</strong>? You'll miss most deletions, duplications, and translocations — the reads can't span breakpoints.</p>
        <p>• Using paired-end for a simple <strong>gene expression count</strong>? You're paying double for data you don't need.</p>
      </div>
    </div>

    <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
      <p className="text-xs font-bold text-purple-700 mb-2">🧠 Misconception Challenge</p>
      <p className="text-sm text-gray-700 mb-2">"Paired-end reads give you TWICE the coverage of single-end reads." — True or False?</p>
      <details className="text-xs text-gray-600">
        <summary className="cursor-pointer font-bold text-purple-600 hover:text-purple-800">Reveal Answer</summary>
        <p className="mt-2 p-3 bg-white rounded-xl">
          <strong>False!</strong> Paired-end gives you two reads per fragment, but they come from the SAME fragment.
          You get more <em>information</em> per fragment (both ends + insert size), not more <em>coverage</em>.
          Coverage depends on total number of bases sequenced, not read pairing.
        </p>
      </details>
    </div>

    <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">
      Enter the Virtual Wet Lab →
    </button>
  </motion.div>
);

export default Module02Page3;
