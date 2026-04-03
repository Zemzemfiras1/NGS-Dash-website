import { motion } from 'framer-motion';
import GlossaryChip from '@/components/GlossaryChip';
import { PATIENT_ZERO } from '@/data/ngsData';
const ACMG_TIERS = [
  { tier: 'Pathogenic', color: 'bg-destructive text-destructive-foreground', desc: 'Causes disease — strong evidence from research and clinical data', icon: '🔴' },
  { tier: 'Likely Pathogenic', color: 'bg-destructive/70 text-destructive-foreground', desc: '>90% chance of causing disease — act clinically but confirm', icon: '🟠' },
  { tier: 'VUS', color: 'bg-muted text-muted-foreground', desc: 'Uncertain significance — not enough evidence either way', icon: '🟡' },
  { tier: 'Likely Benign', color: 'bg-primary/30 text-primary', desc: '>90% chance of being harmless', icon: '🟢' },
  { tier: 'Benign', color: 'bg-primary/20 text-primary', desc: 'Does not cause disease — well-established', icon: '⚪' },
];
const ACMG_CRITERIA = [
  { code: 'PVS1', strength: 'Very Strong', desc: 'Null variant in a gene where loss-of-function causes disease', alex: true },
  { code: 'PM2', strength: 'Moderate', desc: 'Absent or extremely rare in population databases', alex: true },
  { code: 'PP3', strength: 'Supporting', desc: 'Computational evidence supports deleterious effect', alex: true },
  { code: 'PP5', strength: 'Supporting', desc: 'Reputable source reports variant as pathogenic', alex: true },
];
const Module08PageACMG = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-4">🏥 The <GlossaryChip term="ACMG">ACMG</GlossaryChip> 5-Tier System</h2>
      <p className="text-muted-foreground mb-6">Every clinical variant is classified into one of five categories based on accumulated evidence.</p>
      <div className="space-y-3">{ACMG_TIERS.map(t => (<div key={t.tier} className={`${t.color} rounded-2xl p-4 flex items-center gap-4`}><span className="text-2xl">{t.icon}</span><div><p className="font-bold text-sm">{t.tier}</p><p className="text-xs opacity-80">{t.desc}</p></div>{t.tier === 'Pathogenic' && (<span className="ml-auto text-xs font-bold bg-background/20 rounded-lg px-3 py-1">← Alex's variant</span>)}</div>))}</div>
    </section>
    <section>
      <h3 className="text-lg font-bold text-foreground mb-4">🔍 Evidence for Alex's {PATIENT_ZERO.variant}</h3>
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <table className="w-full text-sm"><thead><tr className="border-b border-border bg-muted/30"><th className="text-left py-3 px-4 text-xs font-bold text-muted-foreground">Code</th><th className="text-left py-3 px-4 text-xs font-bold text-muted-foreground">Strength</th><th className="text-left py-3 px-4 text-xs font-bold text-muted-foreground">Criterion</th></tr></thead><tbody>{ACMG_CRITERIA.map(c => (<tr key={c.code} className="border-b border-border/50"><td className="py-2 px-4 font-mono font-bold text-primary text-xs">{c.code}</td><td className="py-2 px-4 text-xs text-foreground">{c.strength}</td><td className="py-2 px-4 text-xs text-muted-foreground">{c.desc}</td></tr>))}</tbody></table>
      </div>
      <p className="text-xs text-muted-foreground mt-3 text-center">PVS1 + PM2 + 2×PP = <span className="font-bold text-destructive">Pathogenic</span> classification</p>
    </section>
  </motion.div>
);
export default Module08PageACMG;
