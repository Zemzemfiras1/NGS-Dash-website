import { useState } from 'react';
import { motion } from 'framer-motion';

const COST_DATA = [
  { year: 2001, cost: 100000000 },
  { year: 2003, cost: 50000000 },
  { year: 2005, cost: 20000000 },
  { year: 2007, cost: 10000000 },
  { year: 2009, cost: 100000 },
  { year: 2011, cost: 10000 },
  { year: 2013, cost: 5000 },
  { year: 2015, cost: 1500 },
  { year: 2017, cost: 1000 },
  { year: 2019, cost: 600 },
  { year: 2021, cost: 300 },
  { year: 2023, cost: 200 },
];

interface Props { onNext: () => void; }

const Module01Page3 = ({ onNext }: Props) => {
  const [showCostChart, setShowCostChart] = useState(false);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <h2 className="text-2xl font-black tracking-tight">💰 The Cost Collapse</h2>
      <p className="text-sm text-gray-500">The cost of sequencing a human genome has dropped faster than Moore's Law.</p>

      <button
        onClick={() => setShowCostChart(true)}
        className={`w-full ${showCostChart ? 'hidden' : ''} px-6 py-3 rounded-xl gradient-brand text-white font-bold hover:opacity-90 transition-opacity`}
      >
        Reveal the Chart ⚡
      </button>

      {showCostChart && (
        <motion.div initial={{ opacity: 0, scaleY: 0.8 }} animate={{ opacity: 1, scaleY: 1 }} className="bg-gray-900 rounded-2xl p-6 overflow-hidden">
          <div className="flex items-end gap-1 h-64">
            {COST_DATA.map((d, i) => {
              const maxLog = Math.log10(100000000);
              const height = (Math.log10(Math.max(d.cost, 1)) / maxLog) * 100;
              return (
                <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${height}%` }} transition={{ delay: i * 0.1, duration: 0.5 }} className="flex-1 flex flex-col items-center justify-end group">
                  <div className="w-full rounded-t-lg bg-gradient-to-t from-purple-600 to-pink-400 relative group-hover:from-purple-500 group-hover:to-pink-300 transition-all" style={{ height: '100%' }}>
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-gray-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      ${d.cost >= 1000000 ? `${(d.cost / 1000000).toFixed(0)}M` : d.cost >= 1000 ? `${(d.cost / 1000).toFixed(0)}K` : d.cost}
                    </span>
                  </div>
                  <span className="text-[9px] text-gray-500 mt-1 font-mono">{String(d.year).slice(2)}</span>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">Human genome sequencing cost (log scale)</p>
            <p className="text-sm font-bold text-white mt-1">$100,000,000 → $200</p>
          </div>
        </motion.div>
      )}

      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-4">
        <p className="text-xs font-bold text-amber-800 mb-1">⚡ Faster than Moore's Law</p>
        <p className="text-sm text-amber-700">
          Computer chips double in power every ~2 years (Moore's Law). Sequencing costs halved even faster — roughly every 12 months between 2007 and 2015. This is why genomics exploded.
        </p>
      </div>

      {showCostChart && (
        <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">
          Explore the Pipeline →
        </button>
      )}
    </motion.div>
  );
};

export default Module01Page3;
