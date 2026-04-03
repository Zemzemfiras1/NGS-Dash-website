import { useAppState } from '@/context/AppContext';
import PipelineMiniMap from '@/components/PipelineMiniMap';
import Landing from '@/pages/Landing';
import Module01 from '@/pages/Module01';
import Module02 from '@/pages/Module02';
import Module03 from '@/pages/Module03';
import Module04 from '@/pages/Module04';
import Module05 from '@/pages/Module05';
import Module06 from '@/pages/Module06';
import Module07 from '@/pages/Module07';
import Module08 from '@/pages/Module08';
import Module09 from '@/pages/Module09';

const Index = () => {
  const { state } = useAppState();

  const renderModule = () => {
    switch (state.currentModule) {
      case 0: return <Landing />;
      case 1: return <Module01 />;
      case 2: return <Module02 />;
      case 3: return <Module03 />;
      case 4: return <Module04 />;
      case 5: return <Module05 />;
      case 6: return <Module06 />;
      case 7: return <Module07 />;
      case 8: return <Module08 />;
      case 9: return <Module09 />;
      default: return <Landing />;
    }
  };

  return (
    <div className="min-h-screen">
      {state.currentModule > 0 && <PipelineMiniMap />}
      {renderModule()}
    </div>
  );
};

export default Index;