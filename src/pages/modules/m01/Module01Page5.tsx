import { motion } from 'framer-motion';
import { PATIENT_ZERO } from '@/data/ngsData';

interface Props { onNext: () => void; }

const Module01Page5 = ({ onNext }: Props) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
    <h2 className="text-2xl font-black tracking-tight">👤 Meet Patient Alex</h2>

    <div className="bg-white border-2 border-purple-200 rounded-2xl overflow-hidden shadow-lg">
      <div className="gradient-brand p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-black">A</div>
          <div>
            <h3 className="text-xl font-black">{PATIENT_ZERO.name}</h3>
            <p className="text-sm opacity-90">{PATIENT_ZERO.age} years old · {PATIENT_ZERO.description}</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <p className="text-sm text-gray-600 leading-relaxed">
          Alex is a 34-year-old mother of two. During a routine self-exam, she found a lump.
          Her doctor referred her to an oncologist, who ordered a <strong>hereditary cancer gene panel</strong> —
          an NGS test that checks dozens of cancer-related genes simultaneously.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-2xl p-4">
          <p className="text-xs font-bold text-blue-800 mb-1">🧬 Why NGS?</p>
          <p className="text-sm text-blue-700">
            Before NGS, testing one gene cost thousands and took weeks.
            A hereditary cancer panel tests 50+ genes at once, faster and cheaper.
            Alex's test will look for variants in genes like BRCA1, BRCA2, TP53, and more.
          </p>
        </div>

        <h4 className="font-bold text-sm text-gray-700">Your mission across all 9 modules:</h4>
        <div className="grid grid-cols-2 gap-2">
          {[
            { mod: '02', task: "Prepare Alex's DNA library" },
            { mod: '04', task: 'Check her sequencing quality' },
            { mod: '05', task: 'Align her reads to the genome' },
            { mod: '07', task: 'Find her variant' },
            { mod: '08', task: 'Classify it clinically' },
            { mod: '09', task: 'Earn your certificate' },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-3">
              <span className="text-[10px] font-black text-purple-500">MODULE {item.mod}</span>
              <p className="text-xs text-gray-700 font-semibold">{item.task}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 italic">
          By the end, you'll have identified BRCA2 c.5946delT — a pathogenic frameshift variant — and understood what it means for Alex and her family.
        </p>
      </div>
    </div>

    <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">
      Take the Module Quiz →
    </button>
  </motion.div>
);

export default Module01Page5;
