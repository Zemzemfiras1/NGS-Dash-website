import { motion } from 'framer-motion';
import ModuleLayout from '@/components/ModuleLayout';
import { useAppState } from '@/context/AppContext';
import Module06Page1 from './modules/m06/Module06Page1';
import Module06Page2 from './modules/m06/Module06Page2';
import Module06Page3 from './modules/m06/Module06Page3';
import Module06Page4 from './modules/m06/Module06Page4';

const Module06 = () => {
  const { visitSection } = useAppState();
  const onVisit = (id: string) => visitSection(6, id);

  return (
    <ModuleLayout moduleId={6}>
      <Module06Page1 onVisit={onVisit} />
      <Module06Page2 onVisit={onVisit} />
      <Module06Page3 onVisit={onVisit} />
      <Module06Page4 onVisit={onVisit} />
    </ModuleLayout>
  );
};

export default Module06;
