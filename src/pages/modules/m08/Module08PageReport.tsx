import { motion } from 'framer-motion';
import GlossaryChip from '@/components/GlossaryChip';
import { PATIENT_ZERO } from '@/data/ngsData';
const Module08PageReport = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
    <h2 className="text-2xl font-bold text-foreground mb-4">📋 Alex's Clinical Report</h2>
    <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 space-y-6">
      <div className="border-b border-border pb-4"><p className="text-xs font-bold text-primary uppercase tracking-wider">Genomic Testing Report</p><p className="text-lg font-bold text-foreground mt-1">Hereditary Cancer Panel — 84 Genes</p></div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div><p className="text-xs text-muted-foreground">Patient</p><p className="font-bold text-foreground">{PATIENT_ZERO.name}, {PATIENT_ZERO.age}F</p></div>
        <div><p className="text-xs text-muted-foreground">Sample</p><p className="font-bold text-foreground">{PATIENT_ZERO.sample}</p></div>
        <div><p className="text-xs text-muted-foreground">Platform</p><p className="font-bold text-foreground">{PATIENT_ZERO.platform}</p></div>
        <div><p className="text-xs text-muted-foreground">Coverage</p><p className="font-bold text-foreground">{PATIENT_ZERO.coverage}</p></div>
      </div>
      <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4"><p className="text-xs font-bold text-destructive uppercase tracking-wider mb-2">Positive Finding</p><p className="font-bold text-foreground">{PATIENT_ZERO.variant}</p><p className="text-sm text-muted-foreground mt-1">{PATIENT_ZERO.variantType} in BRCA2 (exon 11)</p><p className="text-sm text-muted-foreground">Classification: <span className="font-bold text-destructive">{PATIENT_ZERO.acmgClassification}</span></p></div>
      <div className="bg-primary/5 border border-primary/10 rounded-xl p-4"><p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Clinical Significance</p><ul className="text-sm text-muted-foreground space-y-1"><li>• Elevated lifetime risk for breast (45-85%) and ovarian (11-31%) cancer</li><li>• Eligible for enhanced surveillance, risk-reducing surgery discussion</li><li>• <GlossaryChip term="Cascade Testing">Cascade testing</GlossaryChip> recommended for first-degree relatives</li></ul></div>
      <div className="bg-muted/30 rounded-xl p-4"><p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Pharmacogenomics</p><p className="text-sm text-foreground font-bold">{PATIENT_ZERO.pgxFinding}</p><p className="text-xs text-muted-foreground mt-1">{PATIENT_ZERO.pgxImplication}</p></div>
    </div>
  </motion.div>
);
export default Module08PageReport;
