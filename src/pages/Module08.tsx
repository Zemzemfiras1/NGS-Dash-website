import { useState } from 'react';
import { motion } from 'framer-motion';
import ModuleLayout from '@/components/ModuleLayout';
import { useAppState } from '@/context/AppContext';
import Module08PageACMG from './modules/m08/Module08PageACMG';
import Module08PageReport from './modules/m08/Module08PageReport';
import Module08PageEthics from './modules/m08/Module08PageEthics';
import Module08PageQuiz from './modules/m08/Module08PageQuiz';

type TabId = 'acmg' | 'report' | 'ethics';
const TABS = [
  { id: 'acmg'   as TabId, label: '🏥 ACMG Classification' },
  { id: 'report' as TabId, label: '📋 Clinical Report' },
  { id: 'ethics' as TabId, label: '⚖️ Ethics & PGx' },
];

const Module08 = () => {
  const { visitSection } = useAppState();
  const [activeTab, setActiveTab] = useState<TabId>('acmg');
  const onVisit = (id: string) => visitSection(8, id);

  return (
    <ModuleLayout moduleId={8}>
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {TABS.map(tab => (
          <button key={tab.id} onClick={() => { setActiveTab(tab.id); onVisit(tab.id); }}
            className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-primary text-primary-foreground shadow-md' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}>
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'acmg'   && <Module08PageACMG />}
      {activeTab === 'report' && <Module08PageReport />}
      {activeTab === 'ethics' && <Module08PageEthics />}

      <Module08PageQuiz onVisit={onVisit} />
    </ModuleLayout>
  );
};

export default Module08;
