import { useState } from 'react';
import { motion } from 'framer-motion';

const GENERATIONS = [
  { era: '1977', name: 'Sanger Sequencing', gen: '1st Generation', readLength: '~800 bp', costPerGenome: '$3,000,000,000', costNum: 3000000000, throughput: '1 read at a time', funFact: 'It took 13 years and $3 billion to sequence the first human genome.', color: 'from-amber-400 to-orange-500', bg: 'bg-amber-50 border-amber-200' },
  { era: '2005', name: '454 Pyrosequencing', gen: '2nd Generation (early)', readLength: '~400 bp', costPerGenome: '$1,000,000', costNum: 1000000, throughput: '200,000 reads/run', funFact: 'Used light signals from pyrophosphate release. Discontinued in 2016.', color: 'from-teal-400 to-cyan-500', bg: 'bg-teal-50 border-teal-200' },
  { era: '2006', name: 'Illumina (Solexa)', gen: '2nd Generation', readLength: '150-300 bp', costPerGenome: '$200', costNum: 200, throughput: 'Billions of reads/run', funFact: 'Dominates >80% of all sequencing worldwide. Uses sequencing by synthesis (SBS).', color: 'from-blue-400 to-indigo-500', bg: 'bg-blue-50 border-blue-200' },
  { era: '2011', name: 'Ion Torrent', gen: '2nd Generation', readLength: '200-600 bp', costPerGenome: '$1,000', costNum: 1000, throughput: 'Millions of reads/run', funFact: 'Detects pH changes when nucleotides are incorporated. No optics needed!', color: 'from-green-400 to-emerald-500', bg: 'bg-green-50 border-green-200' },
  { era: '2014', name: 'Oxford Nanopore', gen: '3rd Generation', readLength: '10,000-2,000,000+ bp', costPerGenome: '$900', costNum: 900, throughput: 'Real-time streaming', funFact: 'Reads DNA by pulling it through a nanopore. Portable — the MinION fits in your hand!', color: 'from-purple-400 to-pink-500', bg: 'bg-purple-50 border-purple-200' },
  { era: '2015', name: 'PacBio HiFi', gen: '3rd Generation', readLength: '10,000-25,000 bp', costPerGenome: '$1,000', costNum: 1000, throughput: 'Millions of reads/run', funFact: 'Reads the same molecule multiple times for >99.9% accuracy on long reads.', color: 'from-rose-400 to-red-500', bg: 'bg-rose-50 border-rose-200' },
];

interface Props { onNext: () => void; }

const Module01Page2 = ({ onNext }: Props) => {
  const [unlockedGen, setUnlockedGen] = useState(0);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <h2 className="text-2xl font-black tracking-tight">🕐 The Sequencing Revolution</h2>
      <p className="text-sm text-gray-500 mb-4">Click each generation to unlock its details. Follow the evolution from Sanger to Nanopore.</p>

      <div className="space-y-3">
        {GENERATIONS.map((gen, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
            <button
              onClick={() => setUnlockedGen(Math.max(unlockedGen, i + 1))}
              className={`w-full text-left rounded-2xl border-2 overflow-hidden transition-all ${gen.bg} ${
                i < unlockedGen ? 'opacity-100' : i === unlockedGen ? 'opacity-100 hover:shadow-lg' : 'opacity-30 cursor-not-allowed'
              }`}
              disabled={i > unlockedGen}
            >
              <div className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-black text-white px-2 py-0.5 rounded-md bg-gradient-to-r ${gen.color}`}>{gen.era}</span>
                  <span className="text-xs font-bold text-gray-400">{gen.gen}</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{gen.name}</h3>

                {i < unlockedGen && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-2 space-y-2">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white/60 rounded-xl p-2"><p className="text-[10px] font-bold text-gray-400 uppercase">Read Length</p><p className="text-xs font-bold text-gray-700">{gen.readLength}</p></div>
                      <div className="bg-white/60 rounded-xl p-2"><p className="text-[10px] font-bold text-gray-400 uppercase">Cost/Genome</p><p className="text-xs font-bold text-gray-700">{gen.costPerGenome}</p></div>
                      <div className="bg-white/60 rounded-xl p-2"><p className="text-[10px] font-bold text-gray-400 uppercase">Throughput</p><p className="text-xs font-bold text-gray-700">{gen.throughput}</p></div>
                    </div>
                    <p className="text-xs text-gray-500 italic">💡 {gen.funFact}</p>
                  </motion.div>
                )}

                {i === unlockedGen && <p className="text-xs text-purple-500 font-bold mt-1">Click to unlock →</p>}
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {unlockedGen >= GENERATIONS.length && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center">
          <p className="text-sm font-bold text-green-700">🎉 You've unlocked all generations!</p>
          <p className="text-xs text-green-600 mt-1">From $3 billion to $200 — that's a 15-million-fold cost reduction in 20 years.</p>
          <button onClick={onNext} className="mt-3 px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">
            See the Cost Chart →
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Module01Page2;
