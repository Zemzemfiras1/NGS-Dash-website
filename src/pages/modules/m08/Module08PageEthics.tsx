import { motion } from 'framer-motion';
import GlossaryChip from '@/components/GlossaryChip';
const Module08PageEthics = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-4">⚖️ Ethical Considerations</h2>
      <div className="space-y-4">
        {[{ q: 'Should Alex tell her family?', detail: 'Her sisters and children may carry the same BRCA2 variant. Cascade testing could save lives — but disclosure is a personal choice with emotional weight.' }, { q: 'What about incidental findings?', detail: "Panel testing might reveal variants in other genes Alex didn't ask about. Labs must have policies for returning (or not returning) secondary findings." }, { q: 'Insurance & discrimination', detail: 'GINA protects against health insurance discrimination in the US, but gaps exist for life and disability insurance.' }, { q: 'VUS anxiety', detail: 'What if a VUS is found instead? Patients may experience distress from uncertain results. Genetic counseling is essential.' }].map(item => (<div key={item.q} className="bg-card border border-border rounded-2xl p-5"><p className="font-bold text-foreground text-sm mb-2">{item.q}</p><p className="text-xs text-muted-foreground">{item.detail}</p></div>))}
      </div>
    </section>
    <section>
      <h3 className="text-lg font-bold text-foreground mb-4">💊 <GlossaryChip term="Pharmacogenomics">Pharmacogenomics</GlossaryChip> Deep Dive</h3>
      <div className="bg-card border border-border rounded-2xl p-6"><p className="text-sm text-muted-foreground mb-4">Alex's genome also revealed she is a <span className="font-bold text-primary">CYP2D6 poor metabolizer</span>. This affects drug processing:</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div className="bg-destructive/10 rounded-xl p-4"><p className="text-xs font-bold text-destructive">⚠️ Avoid</p><p className="text-sm text-foreground mt-1">Codeine, tramadol (reduced activation → poor pain relief or toxicity)</p></div><div className="bg-primary/10 rounded-xl p-4"><p className="text-xs font-bold text-primary">✅ Consider</p><p className="text-sm text-foreground mt-1">Alternative analgesics; adjust tamoxifen dosing if needed</p></div></div></div>
    </section>
  </motion.div>
);
export default Module08PageEthics;
