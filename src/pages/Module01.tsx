import { useState } from 'react';
import { motion } from 'framer-motion';
import ModuleLayout from '@/components/ModuleLayout';
import { useAppState } from '@/context/AppContext';
import Module01Page1 from './modules/m01/Module01Page1';
import Module01Page2 from './modules/m01/Module01Page2';
import Module01Page3 from './modules/m01/Module01Page3';
import Module01Page4 from './modules/m01/Module01Page4';
import Module01Page5 from './modules/m01/Module01Page5';
import Module01Page6 from './modules/m01/Module01Page6';

const SECTIONS = [
  { id: 'intro',    label: '📖 Introduction' },
  { id: 'timeline', label: '🕐 Timeline' },
  { id: 'cost',     label: '💰 Cost Revolution' },
  { id: 'pipeline', label: '🔗 Pipeline Overview' },
  { id: 'alex',     label: '👤 Meet Alex' },
  { id: 'quiz',     label: '✏️ Mini Quiz' },
] as const;

type SectionId = (typeof SECTIONS)[number]['id'];
const PAGE_ORDER: SectionId[] = ['intro', 'timeline', 'cost', 'pipeline', 'alex', 'quiz'];

const Module01 = () => {
  const { visitSection } = useAppState();
  const [section, setSection] = useState<SectionId>('intro');

  const handleSection = (s: SectionId) => { setSection(s); visitSection(1, s); };
  const goNext = () => {
    const idx = PAGE_ORDER.indexOf(section);
    if (idx < PAGE_ORDER.length - 1) handleSection(PAGE_ORDER[idx + 1]);
  };

  return (
    <ModuleLayout moduleId={1}>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-purple-50 border border-purple-100 rounded-2xl p-5 mb-6">
        <p className="text-xs font-black text-purple-600 uppercase tracking-widest mb-2">🎯 Learning Objectives</p>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Explain what NGS is and why it replaced Sanger sequencing</li>
          <li>• Name the major sequencing platforms and their key differences</li>
          <li>• Describe the complete NGS pipeline from sample to clinical report</li>
          <li>• Understand why NGS costs dropped from $3 billion to $200</li>
        </ul>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-6">
        {SECTIONS.map(s => (
          <button key={s.id} onClick={() => handleSection(s.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${section === s.id ? 'gradient-brand text-white' : 'bg-card border border-border text-muted-foreground hover:bg-muted'}`}>
            {s.label}
          </button>
        ))}
      </div>

      {section === 'intro'    && <Module01Page1 onNext={goNext} />}
      {section === 'timeline' && <Module01Page2 onNext={goNext} />}
      {section === 'cost'     && <Module01Page3 onNext={goNext} />}
      {section === 'pipeline' && <Module01Page4 onNext={goNext} />}
      {section === 'alex'     && <Module01Page5 onNext={goNext} />}
      {section === 'quiz'     && <Module01Page6 />}
    </ModuleLayout>
  );
};

export default Module01;
