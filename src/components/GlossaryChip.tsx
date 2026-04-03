import { useState } from 'react';
import { motion } from 'framer-motion';
import { GLOSSARY } from '@/data/ngsData';

interface GlossaryChipProps {
  term: string;
  definition?: string;
  children?: React.ReactNode;
}

const GlossaryChip = ({ term, definition, children }: GlossaryChipProps) => {
  const [open, setOpen] = useState(false);
  const resolvedDef = definition || GLOSSARY.find(g => g.term.toLowerCase() === term.toLowerCase())?.definition || '';

  return (
    <span className="relative inline">
      <button
        onClick={() => setOpen(!open)}
        className="text-primary font-semibold underline underline-offset-2 decoration-primary/30 decoration-dotted hover:decoration-solid transition-all cursor-help"
      >
        {children || term}
      </button>
      {open && (
        <motion.span
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-card border border-primary/20 rounded-xl p-3 shadow-xl z-50 text-left"
        >
          <span className="block text-xs font-black text-primary uppercase tracking-wide mb-1">{term}</span>
          <span className="block text-xs text-muted-foreground leading-relaxed">{resolvedDef}</span>
        </motion.span>
      )}
    </span>
  );
};

export default GlossaryChip;
