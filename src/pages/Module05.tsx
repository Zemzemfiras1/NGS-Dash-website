import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ModuleLayout from '@/components/ModuleLayout';
import { useAppState } from '@/context/AppContext';
import Module05Page1 from './modules/m05/Module05Page1';
import Module05Page2 from './modules/m05/Module05Page2';
import Module05Page3 from './modules/m05/Module05Page3';
import Module05Page4 from './modules/m05/Module05Page4';
import Module05Page5 from './modules/m05/Module05Page5';
import Module05Page6 from './modules/m05/Module05Page6';

const SECTIONS = [
  { id: 'objectives', label: '🎯 Objectives' },
  { id: 'reference',  label: '🧬 Reference Genome' },
  { id: 'alignment',  label: '🗺️ Alignment' },
  { id: 'mapq',       label: '📊 MAPQ Scores' },
  { id: 'alex',       label: "👤 Alex's Results" },
  { id: 'quiz',       label: '✏️ Quiz' },
] as const;

type SectionId = (typeof SECTIONS)[number]['id'];
const PAGE_ORDER: SectionId[] = ['objectives','reference','alignment','mapq','alex','quiz'];

const Module05 = () => {
  const { visitSection } = useAppState();
  const [section, setSection] = useState<SectionId>('objectives');
  const handleSection = (s: SectionId) => { setSection(s); visitSection(5, s); };
  const goNext = () => { const idx = PAGE_ORDER.indexOf(section); if (idx < PAGE_ORDER.length - 1) handleSection(PAGE_ORDER[idx + 1]); };

  return (
    <ModuleLayout moduleId={5}>
      <div className="flex flex-wrap gap-2 mb-6">
        {SECTIONS.map(s => (
          <button key={s.id} onClick={() => handleSection(s.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${section === s.id ? 'gradient-brand text-white' : 'bg-card border border-border text-muted-foreground hover:bg-muted'}`}>
            {s.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {section === 'objectives' && <Module05Page1 key="p1" onNext={goNext} />}
        {section === 'reference'  && <Module05Page2 key="p2" onNext={goNext} />}
        {section === 'alignment'  && <Module05Page3 key="p3" onNext={goNext} />}
        {section === 'mapq'       && <Module05Page4 key="p4" onNext={goNext} />}
        {section === 'alex'       && <Module05Page5 key="p5" onNext={goNext} />}
        {section === 'quiz'       && <Module05Page6 key="p6" />}
      </AnimatePresence>
    </ModuleLayout>
  );
};

export default Module05;
