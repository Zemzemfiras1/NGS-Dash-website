import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ModuleLayout from '@/components/ModuleLayout';
import { useAppState } from '@/context/AppContext';
import Module02Page1 from './modules/m02/Module02Page1';
import Module02Page2 from './modules/m02/Module02Page2';
import Module02Page3 from './modules/m02/Module02Page3';
import Module02Page4 from './modules/m02/Module02Page4';
import Module02Page5 from './modules/m02/Module02Page5';
import Module02Page6 from './modules/m02/Module02Page6';

const SECTIONS = [
  { id: 'objectives', label: '🎯 Objectives' },
  { id: 'samples',    label: '🩸 Sample Types' },
  { id: 'readtypes',  label: '↔️ Read Types' },
  { id: 'wetlab',     label: '🧪 Virtual Wet Lab' },
  { id: 'consent',    label: '📋 Consent' },
  { id: 'quiz',       label: '✏️ Mini Quiz' },
] as const;

type SectionId = (typeof SECTIONS)[number]['id'];
const PAGE_ORDER: SectionId[] = ['objectives', 'samples', 'readtypes', 'wetlab', 'consent', 'quiz'];

const Module02 = () => {
  const { visitSection } = useAppState();
  const [section, setSection] = useState<SectionId>('objectives');

  const handleSection = (s: SectionId) => { setSection(s); visitSection(2, s); };
  const goNext = () => {
    const idx = PAGE_ORDER.indexOf(section);
    if (idx < PAGE_ORDER.length - 1) handleSection(PAGE_ORDER[idx + 1]);
  };

  return (
    <ModuleLayout moduleId={2}>
      <div className="flex flex-wrap gap-2 mb-6">
        {SECTIONS.map(s => (
          <button key={s.id} onClick={() => handleSection(s.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${section === s.id ? 'gradient-brand text-white' : 'bg-card border border-border text-muted-foreground hover:bg-muted'}`}>
            {s.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {section === 'objectives' && <Module02Page1 key="p1" onNext={goNext} />}
        {section === 'samples'    && <Module02Page2 key="p2" onNext={goNext} />}
        {section === 'readtypes'  && <Module02Page3 key="p3" onNext={goNext} />}
        {section === 'wetlab'     && <Module02Page4 key="p4" onNext={goNext} />}
        {section === 'consent'    && <Module02Page5 key="p5" onNext={goNext} />}
        {section === 'quiz'       && <Module02Page6 key="p6" />}
      </AnimatePresence>
    </ModuleLayout>
  );
};

export default Module02;
