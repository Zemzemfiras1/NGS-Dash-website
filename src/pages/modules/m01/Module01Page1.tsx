import { motion } from 'framer-motion';

interface Props {
  onNext: () => void;
}

const Module01Page1 = ({ onNext }: Props) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
    <h2 className="text-3xl font-black tracking-tight">What is <span className="gradient-brand-text">Next-Generation Sequencing</span>?</h2>
    <p className="text-base text-gray-600 leading-relaxed">
      Imagine you have a book with 3 billion letters, and you need to read every single one.
      That book is the human genome — your complete DNA instruction manual.
    </p>
    <p className="text-base text-gray-600 leading-relaxed">
      <strong>First-generation sequencing</strong> (Sanger, 1977) read this book one tiny page at a time.
      It took <strong>13 years</strong> and <strong>$3 billion</strong> to read the first human genome.
    </p>
    <p className="text-base text-gray-600 leading-relaxed">
      <strong>Next-Generation Sequencing (NGS)</strong> changed everything. Instead of reading one page at a time,
      it shreds the book into millions of fragments and reads them <em>all simultaneously</em>.
      Today, an entire human genome can be sequenced in <strong>24 hours</strong> for about <strong>$200</strong>.
    </p>

    <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-2xl p-4">
      <p className="text-xs font-bold text-blue-800 mb-1">💡 Think of it this way</p>
      <p className="text-sm text-blue-700">
        Sanger = reading a book one page at a time, front to back.
        NGS = photocopying the book 100 times, shredding all copies, then having thousands of people
        read the pieces simultaneously and using a computer to reassemble them.
      </p>
    </div>

    <div className="flex gap-3 mt-4">
      <button onClick={onNext} className="px-5 py-2 rounded-xl gradient-brand text-white text-sm font-bold hover:opacity-90 transition-opacity">
        Explore the Timeline →
      </button>
    </div>
  </motion.div>
);

export default Module01Page1;
