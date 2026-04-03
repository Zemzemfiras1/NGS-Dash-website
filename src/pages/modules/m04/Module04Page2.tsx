import { useState } from 'react';
import { motion } from 'framer-motion';

const FASTQ_LINES = [
  { line: '@SRR123456.1 ALEX_BLOOD_SAMPLE length=150', label: 'Header', color: 'text-purple-600', desc: 'Starts with @. Contains read ID, sample name, and read length.' },
  { line: 'ATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCG...', label: 'Sequence', color: 'text-blue-600', desc: 'The actual DNA bases (A, T, C, G) read by the sequencer. This is one 150bp read.' },
  { line: '+', label: 'Separator', color: 'text-gray-400', desc: 'A simple divider. Sometimes repeats the header, but usually just a +.' },
  { line: 'IIIIIIIIIIIIIIIIIIIFFFFFFFFFFFFFFFBBBBBB99999555555...', label: 'Quality', color: 'text-green-600', desc: 'One ASCII character per base encoding the Phred quality score. I = Q40 (best), ! = Q0 (worst).' },
];

interface Props { onNext: () => void; }

const Module04Page2 = ({ onNext }: Props) => {
  const [revealedLines, setRevealedLines] = useState(0);

  return (
    <motion.div key="fastq" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
      <h2 className="text-2xl font-black tracking-tight">📄 Anatomy of a FASTQ File</h2>
      <p className="text-sm text-gray-500">Every read from the sequencer is stored as 4 lines in a FASTQ file. Click each line to reveal what it means.</p>

      <div className="bg-gray-900 rounded-2xl overflow-hidden font-mono text-xs">
        <div className="px-4 py-2 border-b border-gray-700 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-ngs-output animate-pulse" />
          <span className="text-gray-400">alex_blood_R1.fastq.gz — Read #1 of 400,000,000</span>
        </div>
        <div className="p-4 space-y-1">
          {FASTQ_LINES.map((fl, i) => (
            <div key={i}>
              <button onClick={() => setRevealedLines(Math.max(revealedLines, i + 1))} disabled={i > revealedLines}
                className={`w-full text-left transition-all ${i <= revealedLines ? 'opacity-100' : i === revealedLines ? 'opacity-60 hover:opacity-80' : 'opacity-20'}`}>
                <span className={fl.color}>{fl.line}</span>
              </button>
              {i < revealedLines && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                  className="ml-4 mt-1 mb-2 px-3 py-2 rounded-lg bg-gray-800 border-l-2 border-purple-400">
                  <span className="text-[10px] font-black text-purple-400 uppercase">{fl.label}</span>
                  <p className="text-xs text-gray-300 mt-0.5">{fl.desc}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {revealedLines >= 4 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green-50 border border-green-200 rounded-2xl p-4">
          <p className="text-sm font-bold text-green-700">🎉 You've decoded a FASTQ read!</p>
          <p className="text-xs text-green-600 mt-1">Alex has 800 million of these (400M per file for paired-end). That's ~120 GB of compressed data.</p>
        </motion.div>
      )}

      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-2xl p-4">
        <p className="text-xs font-bold text-blue-800 mb-1">💡 Why paired-end?</p>
        <p className="text-sm text-blue-700">Alex has two FASTQ files: R1 (forward reads) and R2 (reverse reads). Each pair came from the same DNA fragment, read from both ends. This helps with alignment accuracy and detecting structural variants.</p>
      </div>

      {revealedLines >= 4 && (
        <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">Explore Phred Scores →</button>
      )}
    </motion.div>
  );
};

export default Module04Page2;
