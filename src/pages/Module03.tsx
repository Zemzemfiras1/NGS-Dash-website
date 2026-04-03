import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ModuleLayout from '@/components/ModuleLayout';
import { useAppState } from '@/context/AppContext';
import Module03Page1 from './modules/m03/Module03Page1';
import Module03Page2 from './modules/m03/Module03Page2';
import Module03Page3 from './modules/m03/Module03Page3';
import Module03Page4 from './modules/m03/Module03Page4';
import Module03Page5 from './modules/m03/Module03Page5';

const SECTIONS = [
  { id: 'objectives', label: '🎯 Objectives' },
  { id: 'sbs',        label: '🔬 SBS Animation' },
  { id: 'platforms',  label: '📊 Platforms' },
  { id: 'longshort',  label: '📏 Long vs Short' },
  { id: 'quiz',       label: '✏️ Mini Quiz' },
] as const;

type SectionId = (typeof SECTIONS)[number]['id'];
const PAGE_ORDER: SectionId[] = ['objectives', 'sbs', 'platforms', 'longshort', 'quiz'];

const Module03 = () => {
  const { visitSection } = useAppState();
  const [section, setSection] = useState<SectionId>('objectives');
  const handleSection = (s: SectionId) => { setSection(s); visitSection(3, s); };
  const goNext = () => { const idx = PAGE_ORDER.indexOf(section); if (idx < PAGE_ORDER.length - 1) handleSection(PAGE_ORDER[idx + 1]); };

  return (
    <ModuleLayout moduleId={3}>
      <div className="flex flex-wrap gap-2 mb-6">
        {SECTIONS.map(s => (
          <button key={s.id} onClick={() => handleSection(s.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${section === s.id ? 'gradient-brand text-white' : 'bg-card border border-border text-muted-foreground hover:bg-muted'}`}>
            {s.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {section === 'objectives' && <Module03Page1 key="p1" onNext={goNext} />}
        {section === 'sbs'        && <Module03Page2 key="p2" onNext={goNext} />}
        {section === 'platforms'  && <Module03Page3 key="p3" onNext={goNext} />}
        {section === 'longshort'  && <Module03Page4 key="p4" onNext={goNext} />}
        {section === 'quiz'       && <Module03Page5 key="p5" />}
      </AnimatePresence>
    </ModuleLayout>
  );
};

export default Module03;
