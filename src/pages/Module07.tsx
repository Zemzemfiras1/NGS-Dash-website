import { motion } from 'framer-motion';
import ModuleLayout from '@/components/ModuleLayout';
import { useAppState } from '@/context/AppContext';
import Module07Page1 from './modules/m07/Module07Page1';
import Module07Page2 from './modules/m07/Module07Page2';
import Module07Page3 from './modules/m07/Module07Page3';
import Module07Page4 from './modules/m07/Module07Page4';
import Module07Page5 from './modules/m07/Module07Page5';

const Module07 = () => {
  const { visitSection } = useAppState();
  const onVisit = (id: string) => visitSection(7, id);

  return (
    <ModuleLayout moduleId={7}>
      <Module07Page1 onVisit={onVisit} />
      <Module07Page2 onVisit={onVisit} />
      <Module07Page3 onVisit={onVisit} />
      <Module07Page4 onVisit={onVisit} />
      <Module07Page5 onVisit={onVisit} />
    </ModuleLayout>
  );
};

export default Module07;
