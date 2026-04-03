import { useState } from 'react';
import { motion } from 'framer-motion';
import GlossaryChip from '@/components/GlossaryChip';
import { PATIENT_ZERO } from '@/data/ngsData';
const SAM_FIELDS = [
  { field: 'QNAME', desc: 'Read name / identifier', example: 'read_42' },
  { field: 'FLAG', desc: 'Bitwise flag (mapped, paired, strand)', example: '99' },
  { field: 'RNAME', desc: 'Reference chromosome', example: 'chr13' },
  { field: 'POS', desc: 'Leftmost mapping position', example: '32,936,732' },
  { field: 'MAPQ', desc: 'Mapping quality score', example: '60' },
  { field: 'CIGAR', desc: 'Alignment operations string', example: '150M' },
  { field: 'SEQ', desc: 'Read sequence', example: 'ATCGATCG…' },
  { field: 'QUAL', desc: 'Base quality ASCII string', example: 'FFFFFFFFF…' },
];
const VCF_COLUMNS = ['CHROM','POS','ID','REF','ALT','QUAL','FILTER','INFO'];
interface Props { onVisit: (id: string) => void; }
const Module06Page1 = ({ onVisit }: Props) => {
  const [activeFormat, setActiveFormat] = useState<'SAM'|'BAM'|'VCF'>('SAM');
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} onViewportEnter={() => onVisit('formats-overview')} className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-4">🗂️ The Three Core File Formats</h2>
      <p className="text-muted-foreground mb-6">After alignment, your data flows through three key formats. Each serves a specific purpose in the pipeline from raw alignment to variant list.</p>
      <div className="flex gap-2 mb-6">
        {(['SAM','BAM','VCF'] as const).map(f => (
          <button key={f} onClick={() => setActiveFormat(f)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeFormat === f ? 'bg-primary text-primary-foreground shadow-md' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}>{f}</button>
        ))}
      </div>
      <div className="bg-card border border-border rounded-2xl p-6">
        {activeFormat === 'SAM' && (<div><h3 className="text-lg font-bold text-foreground mb-2"><GlossaryChip term="SAM">SAM</GlossaryChip> — Sequence Alignment Map</h3><p className="text-sm text-muted-foreground mb-4">Human-readable text file. Every aligned read is one tab-separated line with 11+ fields.</p><div className="overflow-x-auto"><table className="w-full text-xs"><thead><tr className="border-b border-border"><th className="text-left py-2 px-2 text-primary font-bold">Field</th><th className="text-left py-2 px-2 text-muted-foreground">Description</th><th className="text-left py-2 px-2 text-muted-foreground">Alex's Example</th></tr></thead><tbody>{SAM_FIELDS.map(f => (<tr key={f.field} className="border-b border-border/50"><td className="py-2 px-2 font-mono font-bold text-accent-foreground">{f.field}</td><td className="py-2 px-2 text-muted-foreground">{f.desc}</td><td className="py-2 px-2 font-mono text-primary">{f.example}</td></tr>))}</tbody></table></div></div>)}
        {activeFormat === 'BAM' && (<div><h3 className="text-lg font-bold text-foreground mb-2"><GlossaryChip term="BAM">BAM</GlossaryChip> — Binary Alignment Map</h3><p className="text-sm text-muted-foreground mb-4">Compressed binary version of SAM. Same information, ~5× smaller. This is what you actually work with.</p><div className="grid grid-cols-2 gap-4 mt-4"><div className="bg-muted/50 rounded-xl p-4 text-center"><p className="text-2xl font-bold text-destructive">~120 GB</p><p className="text-xs text-muted-foreground mt-1">SAM file (100× WGS)</p></div><div className="bg-muted/50 rounded-xl p-4 text-center"><p className="text-2xl font-bold text-primary">~25 GB</p><p className="text-xs text-muted-foreground mt-1">BAM file (same data)</p></div></div><p className="text-xs text-muted-foreground mt-4 text-center">Alex's BAM: <span className="font-mono text-primary">~25 GB</span> for {PATIENT_ZERO.coverage} coverage WGS</p></div>)}
        {activeFormat === 'VCF' && (<div><h3 className="text-lg font-bold text-foreground mb-2"><GlossaryChip term="VCF">VCF</GlossaryChip> — Variant Call Format</h3><p className="text-sm text-muted-foreground mb-4">The final output — lists every position where Alex's DNA differs from the reference genome.</p><div className="bg-muted/30 rounded-xl p-3 overflow-x-auto font-mono text-xs mb-4"><div className="text-muted-foreground mb-1">## Alex's VCF snippet:</div><div className="flex gap-2 text-primary">{VCF_COLUMNS.map(c => <span key={c} className="min-w-[60px]">{c}</span>)}</div><div className="flex gap-2 mt-1"><span className="min-w-[60px]">chr13</span><span className="min-w-[60px]">32936732</span><span className="min-w-[60px]">.</span><span className="min-w-[60px] text-primary">CT</span><span className="min-w-[60px] text-destructive">C</span><span className="min-w-[60px]">5000</span><span className="min-w-[60px] text-primary">PASS</span><span className="min-w-[60px]">DP=105</span></div></div><p className="text-xs text-muted-foreground">This single line captures Alex's <span className="font-bold text-destructive">{PATIENT_ZERO.variant}</span> — a deletion of T at chr13:32936732.</p></div>)}
      </div>
    </motion.section>
  );
};
export default Module06Page1;
