import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ModuleLayout from '@/components/ModuleLayout';
import { useAppState } from '@/context/AppContext';
import Module04Page1 from './modules/m04/Module04Page1';
import Module04Page2 from './modules/m04/Module04Page2';
import Module04Page3 from './modules/m04/Module04Page3';
import Module04Page4 from './modules/m04/Module04Page4';
import Module04Page5 from './modules/m04/Module04Page5';
import Module04Page6 from './modules/m04/Module04Page6';

const SECTIONS = [
  { id: 'objectives', label: '🎯 Objectives' },
  { id: 'fastq',      label: '📄 FASTQ Format' },
  { id: 'phred',      label: '📏 Phred Scores' },
  { id: 'qc',         label: "✅ Alex's QC" },
  { id: 'coverage',   label: '📊 Coverage' },
  { id: 'quiz',       label: '✏️ Quiz' },
] as const;

type SectionId = (typeof SECTIONS)[number]['id'];
const PAGE_ORDER: SectionId[] = ['objectives','fastq','phred','qc','coverage','quiz'];

const Module04 = () => {
  const { visitSection } = useAppState();
  const [section, setSection] = useState<SectionId>('objectives');
  const handleSection = (s: SectionId) => { setSection(s); visitSection(4, s); };
  const goNext = () => { const idx = PAGE_ORDER.indexOf(section); if (idx < PAGE_ORDER.length - 1) handleSection(PAGE_ORDER[idx + 1]); };

  return (
    <ModuleLayout moduleId={4}>
      <div className="flex flex-wrap gap-2 mb-6">
        {SECTIONS.map(s => (
          <button key={s.id} onClick={() => handleSection(s.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${section === s.id ? 'gradient-brand text-white' : 'bg-card border border-border text-muted-foreground hover:bg-muted'}`}>
            {s.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {section === 'objectives' && <Module04Page1 key="p1" onNext={goNext} />}
        {section === 'fastq'      && <Module04Page2 key="p2" onNext={goNext} />}
        {section === 'phred'      && <Module04Page3 key="p3" onNext={goNext} />}
        {section === 'qc'         && <Module04Page4 key="p4" onNext={goNext} />}
        {section === 'coverage'   && <Module04Page5 key="p5" onNext={goNext} />}
        {section === 'quiz'       && <Module04Page6 key="p6" />}
      </AnimatePresence>
    </ModuleLayout>
  );
};

export default Module04;
