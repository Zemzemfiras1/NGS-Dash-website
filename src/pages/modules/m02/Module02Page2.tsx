import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SAMPLE_TYPES = [
  { id: 'blood', emoji: '🩸', name: 'Blood (germline)', nucleicAcid: 'gDNA', quality: 'High', input: '1–2 µg', readType: 'Paired-end', readLength: '150 bp', coverage: '100×', note: 'Gold standard. High-quality DNA, minimal degradation.', isAlex: true },
  { id: 'ffpe', emoji: '🧫', name: 'FFPE Tumor', nucleicAcid: 'Degraded gDNA', quality: 'Poor', input: '200 ng', readType: 'Paired-end', readLength: '75 bp', coverage: '500×', note: 'Formalin cross-links degrade DNA. Needs special prep and shorter reads.' },
  { id: 'liquid', emoji: '💧', name: 'Liquid Biopsy (cfDNA)', nucleicAcid: 'Circulating DNA', quality: 'Ultra-low input', input: '1–10 ng', readType: 'Paired-end', readLength: '150 bp', coverage: '1000×+', note: 'Cell-free DNA fragments in blood. Non-invasive but extremely scarce.' },
  { id: 'rna', emoji: '🧬', name: 'RNA (tissue)', nucleicAcid: 'RNA → cDNA', quality: 'Variable', input: '100 ng–1 µg', readType: 'Paired-end', readLength: '75–150 bp', coverage: '30–50M reads', note: 'Requires reverse transcription to cDNA. Measures gene expression.' },
  { id: 'saliva', emoji: '🦷', name: 'Saliva', nucleicAcid: 'gDNA', quality: 'Moderate', input: '1–2 µg', readType: 'Paired-end', readLength: '150 bp', coverage: '30×', note: 'Easy to collect but often contaminated with bacteria (up to 60%).' },
  { id: 'microbiome', emoji: '🦠', name: 'Microbiome (stool)', nucleicAcid: 'Metagenomic DNA', quality: 'Complex', input: 'Variable', readType: 'Paired-end', readLength: '250 bp', coverage: 'Varies', note: 'Mix of thousands of species. No single reference genome.' },
  { id: 'amnio', emoji: '👶', name: 'Amniotic Fluid', nucleicAcid: 'Fetal DNA', quality: 'Low volume', input: '10–100 ng', readType: 'Paired-end', readLength: '150 bp', coverage: '30×', note: 'Precious sample. Non-invasive alternatives (NIPT) increasingly preferred.' },
  { id: 'fresh_tumor', emoji: '🧠', name: 'Fresh Tumor', nucleicAcid: 'gDNA + RNA', quality: 'High (if fast)', input: '1 µg', readType: 'Paired-end', readLength: '150 bp', coverage: '200×', note: 'Best quality tumor DNA but requires rapid processing before degradation.' },
];

interface Props { onNext: () => void; }

const Module02Page2 = ({ onNext }: Props) => {
  const [selectedSample, setSelectedSample] = useState<string | null>(null);

  return (
    <motion.div key="samples" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
      <h2 className="text-2xl font-black tracking-tight">🩸 What Can We Sequence?</h2>
      <p className="text-sm text-muted-foreground">Each sample type has different DNA quality, quantity, and challenges. Click to explore.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SAMPLE_TYPES.map((s) => (
          <motion.button key={s.id} whileHover={{ y: -2 }}
            onClick={() => setSelectedSample(selectedSample === s.id ? null : s.id)}
            className={`text-left rounded-2xl border-2 p-4 transition-all ${
              selectedSample === s.id ? 'border-primary shadow-lg ring-2 ring-primary/20 bg-primary/5' : 'border-border bg-card hover:shadow-md'
            } ${s.isAlex ? 'ring-1 ring-amber-300' : ''}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{s.emoji}</span>
              <span className="font-bold text-sm">{s.name}</span>
              {s.isAlex && <span className="text-[10px] font-black bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full">ALEX</span>}
            </div>
            <AnimatePresence>
              {selectedSample === s.id && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-2 mt-2">
                  <div className="grid grid-cols-2 gap-2">
                    {[['Nucleic Acid', s.nucleicAcid], ['Quality', s.quality], ['Input', s.input], ['Read Type', s.readType], ['Read Length', s.readLength], ['Coverage', s.coverage]].map(([label, val]) => (
                      <div key={label} className="bg-muted/50 rounded-lg p-2">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">{label}</p>
                        <p className="text-xs font-semibold">{val}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.note}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>

      <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">
        Single vs Paired-End →
      </button>
    </motion.div>
  );
};

export default Module02Page2;
