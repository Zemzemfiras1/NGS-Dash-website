import { useState } from 'react';
import { motion } from 'framer-motion';
import { PATIENT_ZERO } from '@/data/ngsData';

const CONSENT_ITEMS = [
  { id: 'purpose', label: 'I understand the test will look for inherited gene variants that may increase cancer risk', required: true },
  { id: 'scope', label: 'I understand the test may reveal unexpected findings (incidental findings) unrelated to my referral', required: true },
  { id: 'family', label: 'I understand that results may have implications for my biological family members', required: true },
  { id: 'limits', label: 'I understand that not all variants can be classified — some may be "variants of uncertain significance" (VUS)', required: true },
  { id: 'data', label: 'I consent to my anonymized genomic data being used for research purposes', required: false },
  { id: 'recontact', label: 'I wish to be re-contacted if the interpretation of my results changes in the future', required: false },
];

interface Props { onNext: () => void; }

const Module02Page5 = ({ onNext }: Props) => {
  const [consentChecks, setConsentChecks] = useState<Record<string, boolean>>({});
  const [consentSubmitted, setConsentSubmitted] = useState(false);
  const allRequiredConsented = CONSENT_ITEMS.filter(c => c.required).every(c => consentChecks[c.id]);

  return (
    <motion.div key="consent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
      <h2 className="text-2xl font-black tracking-tight">📋 Informed Consent</h2>
      <p className="text-sm text-muted-foreground">
        Before Alex's sample is processed, she must sign an informed consent form.
        Real genetic testing requires this — it's a legal and ethical necessity.
      </p>

      <div className="bg-card border-2 border-border rounded-2xl overflow-hidden">
        <div className="bg-muted/50 px-5 py-3 border-b border-border">
          <p className="text-sm font-bold">CONSENT FOR GENETIC TESTING</p>
          <p className="text-[10px] text-muted-foreground">Hereditary Cancer Panel — Clinical Genomics Laboratory</p>
        </div>
        <div className="p-5 space-y-3">
          <p className="text-xs text-muted-foreground mb-2">Patient: <strong>{PATIENT_ZERO.name}</strong>, {PATIENT_ZERO.age} years old</p>
          {CONSENT_ITEMS.map((item) => (
            <label key={item.id} className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${consentChecks[item.id] ? 'border-ngs-output bg-ngs-output/5' : 'border-border hover:border-primary/30'}`}>
              <input type="checkbox" checked={consentChecks[item.id] || false}
                onChange={(e) => setConsentChecks(prev => ({ ...prev, [item.id]: e.target.checked }))}
                className="mt-0.5 accent-primary" disabled={consentSubmitted} />
              <div>
                <p className="text-xs leading-relaxed">{item.label}</p>
                {item.required && <span className="text-[10px] text-ngs-error font-bold">Required</span>}
              </div>
            </label>
          ))}
        </div>
        <div className="px-5 pb-5">
          {!consentSubmitted ? (
            <button onClick={() => setConsentSubmitted(true)} disabled={!allRequiredConsented}
              className="w-full py-3 rounded-xl text-sm font-bold gradient-brand text-white disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 transition-all">
              Sign Consent ✍️
            </button>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-ngs-output/10 border border-ngs-output/30 rounded-xl p-4 text-center">
              <p className="text-sm font-bold text-ngs-output mb-1">✅ Consent Signed</p>
              <p className="text-xs text-muted-foreground">
                Alex's sample can now be processed. In a real clinical lab, this form is stored in the patient's medical record.
                {!consentChecks['data'] && " Alex chose NOT to share anonymized data for research — and that's perfectly OK."}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
        <p className="text-xs font-bold text-purple-700 mb-1">💡 Why This Matters</p>
        <p className="text-xs text-purple-600">
          Genetic test results can reveal unexpected findings, affect insurance, and have implications for family members.
          Informed consent ensures the patient understands the scope and limitations BEFORE testing begins.
        </p>
      </div>

      <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">
        Take the Mini Quiz →
      </button>
    </motion.div>
  );
};

export default Module02Page5;
