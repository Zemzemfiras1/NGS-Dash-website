import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useAppState } from '@/context/AppContext';
import { MODULES } from '@/data/ngsData';
import { FINAL_QUESTIONS } from './Module09Assessment';
import genoflowLogo from '@/assets/genoflow-logo.svg';
import stampSignature from '@/assets/stamp-signature.jpg';
import NourMathSignature from  '@/assets/NM-signature.jpg'
import KimCoetSignature from  '@/assets/KC-signature.jpg'
import SalMaalSignature from  '@/assets/SM-signature.jpg'
import FirasZemSignature from  '@/assets/FZ-signature.jpg'

interface Props { score: number; }

const Module09Certificate = ({ score }: Props) => {
  const { state, setCurrentModule } = useAppState();
  const certRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState<'png' | 'pdf' | null>(null);
  const total = FINAL_QUESTIONS.length;
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 70;

  const getCertCanvas = useCallback(async () => {
    if (!certRef.current) return null;
    // Wait for images to load
    const images = certRef.current.querySelectorAll('img');
    await Promise.all(
      Array.from(images).map(
        (img) =>
          new Promise<void>((resolve) => {
            if (img.complete) return resolve();
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
      )
    );
    return html2canvas(certRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
    });
  }, []);

  const handleDownloadPNG = useCallback(async () => {
    setDownloading('png');
    try {
      const canvas = await getCertCanvas();
      if (!canvas) return;
      const link = document.createElement('a');
      link.download = `NGS_Certificate_${(state.studentName || 'Student').replace(/\s+/g, '_')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (e) {
      console.error('PNG download failed:', e);
    } finally {
      setDownloading(null);
    }
  }, [getCertCanvas, state.studentName]);

  const handleDownloadPDF = useCallback(async () => {
    setDownloading('pdf');
    try {
      const canvas = await getCertCanvas();
      if (!canvas) return;
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      // Landscape A4 to fit certificate nicely
      const pdf = new jsPDF({
        orientation: imgWidth > imgHeight ? 'landscape' : 'portrait',
        unit: 'px',
        format: [imgWidth, imgHeight],
      });
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`NGS_Certificate_${(state.studentName || 'Student').replace(/\s+/g, '_')}.pdf`);
    } catch (e) {
      console.error('PDF download failed:', e);
    } finally {
      setDownloading(null);
    }
  }, [getCertCanvas, state.studentName]);

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center py-4">
      <div ref={certRef} id="cert-card" style={{
        width: '100%', maxWidth: '720px', background: '#fff', border: '3px solid #c9a84c',
        borderRadius: '4px', fontFamily: "'Georgia', 'Times New Roman', serif", position: 'relative',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      }}>
        {/* Corner decorations */}
        {['top-left','top-right','bottom-left','bottom-right'].map(pos => {
          const isTop = pos.includes('top');
          const isLeft = pos.includes('left');
          return (
            <div key={pos} style={{
              position: 'absolute', width: '40px', height: '40px',
              [isTop ? 'top' : 'bottom']: '12px',
              [isLeft ? 'left' : 'right']: '12px',
              borderTop: isTop ? '3px solid #c9a84c' : 'none',
              borderBottom: !isTop ? '3px solid #c9a84c' : 'none',
              borderLeft: isLeft ? '3px solid #c9a84c' : 'none',
              borderRight: !isLeft ? '3px solid #c9a84c' : 'none',
            }} />
          );
        })}

        <div style={{ padding: '48px 56px 24px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '8px' }}>
            <div style={{ borderBottom: '2px solid #c9a84c', paddingBottom: '20px', marginBottom: '0' }}>
              <p style={{ color: '#c9a84c', fontSize: '11px', fontWeight: 700, letterSpacing: '5px', textTransform: 'uppercase', margin: '0 0 12px' }}>Certificate of Achievement</p>
              <h2 style={{ color: '#1a2744', fontSize: '32px', fontWeight: 800, margin: '0 0 8px', fontFamily: "'Georgia', serif" }}>NGS Techniques Proficiency</h2>
              <p style={{ color: '#6b7280', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', margin: 0 }}>Molecular Biology — NGS Learning Laboratory</p>
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderBottom: '1px solid #c9a84c', margin: '0 0 24px' }} />

          {/* Certifies */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <p style={{ color: '#6b7280', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 12px' }}>This Certifies That</p>
            <p style={{ color: '#1a2744', fontSize: '42px', fontWeight: 700, fontStyle: 'italic', margin: '0 0 8px', fontFamily: "'Georgia', serif" }}>{state.studentName || 'Student'}</p>
            <div style={{ width: '200px', height: '2px', background: '#c9a84c', margin: '0 auto 20px' }} />
            <p style={{ color: '#4b5563', fontSize: '14px', maxWidth: '480px', margin: '0 auto 20px', lineHeight: 1.7 }}>
              has successfully demonstrated proficiency and mastery of Next-Generation Sequencing techniques, completing all modules of the NGS Learning Laboratory program and passing the final assessment with distinction.
            </p>
            <p style={{ color: '#1a2744', fontSize: '16px', fontWeight: 800, margin: '0 0 20px' }}>
              NGS Techniques Proficiency Program · GenoFlow Agency
            </p>
          </div>

          {/* Score boxes */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
            {[
              { value: `${score}/${total}`, label: 'Final Score' },
              { value: `${percentage}%`, label: 'Percentage' },
              { value: passed ? 'PASS' : 'FAIL', label: 'Status' },
            ].map(({ value, label }) => (
              <div key={label} style={{
                border: '2px solid #c9a84c', borderRadius: '8px', padding: '14px 28px',
                textAlign: 'center', background: '#fdf8ec', minWidth: '120px',
              }}>
                <p style={{ color: '#1a2744', fontSize: '24px', fontWeight: 800, margin: '0 0 4px' }}>{value}</p>
                <p style={{ color: '#c9a84c', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>{label}</p>
              </div>
            ))}
          </div>

          {/* Modules completed */}
          <div style={{
            background: '#fafaf8', border: '1px solid #e5e7eb', borderRadius: '8px',
            padding: '16px 24px', marginBottom: '28px',
          }}>
            <p style={{ color: '#6b7280', fontSize: '10px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', textAlign: 'center', margin: '0 0 12px' }}>Modules Completed</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px 16px' }}>
              {MODULES.map(m => (
                <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#374151' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c9a84c', flexShrink: 0 }} />
                  {m.short}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
            justifyItems: 'center',
            alignItems: 'end',
            marginBottom: '8px',
            position: 'relative',
          }}>
            {/* Signature 1 */}
            <div style={{ textAlign: 'center' }}>
                <img src={NourMathSignature} alt="Dr. Nour Signature" style={{ width: '100px', height: 'auto', margin: '0 auto 4px', display: 'block', objectFit: 'contain' }} />
                <div style={{ width: '120px', height: '1px', background: '#c9a84c', margin: '0 auto 8px' }} />
                <p style={{ color: '#1a2744', fontSize: '12px', fontWeight: 700, margin: '0 0 2px' }}>Dr. Mathlouthi Nourelhouda</p>
                <p style={{ color: '#6b7280', fontSize: '10px', margin: '0 0 1px' }}>PhD in Molecular Biology</p>
                <p style={{ color: '#6b7280', fontSize: '10px', margin: 0 }}>Founder, GenoFlow Agency</p>
            </div>

            {/* Signature 2 */}
            <div style={{ textAlign: 'center' }}>
                <img src={FirasZemSignature} alt="Dr. Firas Signature" style={{ width: '100px', height: 'auto', margin: '0 auto 4px', display: 'block', objectFit: 'contain' }} />
                <div style={{ width: '120px', height: '1px', background: '#c9a84c', margin: '0 auto 8px' }} />
                <p style={{ color: '#1a2744', fontSize: '12px', fontWeight: 700, margin: '0 0 2px' }}>Mr. Firas Zemzem</p>
                <p style={{ color: '#6b7280', fontSize: '10px', margin: '0 0 1px' }}>PhD in Bioinformatics</p>
                <p style={{ color: '#6b7280', fontSize: '10px', margin: 0 }}>Scientific Advisor</p>
            </div>

            {/* Signature 3 */}
            <div style={{ textAlign: 'center' }}>
                <img src={KimCoetSignature} alt="Mrs. Kimberly Signature" style={{ width: '100px', height: 'auto', margin: '0 auto 4px', display: 'block', objectFit: 'contain' }} />
                <div style={{ width: '120px', height: '1px', background: '#c9a84c', margin: '0 auto 8px' }} />
                <p style={{ color: '#1a2744', fontSize: '12px', fontWeight: 700, margin: '0 0 2px' }}>Mrs. Kimberly Christine Coetzer</p>
                <p style={{ color: '#6b7280', fontSize: '10px', margin: '0 0 1px' }}>PhD in Genomics</p>
                <p style={{ color: '#6b7280', fontSize: '10px', margin: 0 }}>Scientific Advisor</p>
            </div>

            {/* Signature 4 */}
            <div style={{ textAlign: 'center' }}>
                <img src={SalMaalSignature} alt="Mrs. Salma Signature" style={{ width: '100px', height: 'auto', margin: '0 auto 4px', display: 'block', objectFit: 'contain' }} />
                <div style={{ width: '120px', height: '1px', background: '#c9a84c', margin: '0 auto 8px' }} />
                <p style={{ color: '#1a2744', fontSize: '12px', fontWeight: 700, margin: '0 0 2px' }}>Mrs. Salma Maalaoui</p>
                <p style={{ color: '#6b7280', fontSize: '10px', margin: '0 0 1px' }}>MSc in Genomics</p>
                <p style={{ color: '#6b7280', fontSize: '10px', margin: 0 }}>Scientific Advisor</p>
            </div>

            {/* Issued by / Contact Info with Stamp Overlay */}
            <div style={{ 
              gridColumn: '1 / -1', 
              textAlign: 'center', 
              marginTop: '24px', 
              fontFamily: "'Georgia', 'Times New Roman', serif", 
              fontSize: '12px', 
              color: '#1a2740', 
              lineHeight: 1.5, 
              whiteSpace: 'normal',
              position: 'relative',
              paddingBottom: '80px',
            }}>
                {/* Stamp Overlay - positioned to left to show contact info */}
                <img 
                  src={stampSignature} 
                  alt="Stamp" 
                  style={{ 
                    position: 'absolute',
                    bottom: '-20px',
                    left: '25%',
                    transform: 'translateX(-50%) rotate(-15deg)',
                    width: '140px',
                    height: 'auto',
                    opacity: 0.8,
                    pointerEvents: 'none',
                    mixBlendMode: 'multiply',
                    zIndex: 10,
                  }} 
                />
                
                <span style={{ color: '#6b7280', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', marginBottom: '4px' }}>
                  ISSUED BY
                  <img src={genoflowLogo} alt="GenoFlow" style={{ width: '20px', height: '20px', display: 'inline-block', marginLeft: '8px', marginRight: '8px' }} />
                </span>
                <div>GenoFlow Agency | +216 28 533 434 | noor@genoflow.bio</div>
              </div>
            </div>
        </div>

        {/* Bottom navy bar */}
        <div style={{ height: '10px', background: '#1a2744', borderRadius: '0 0 2px 2px' }} />
      </div>

      {/* Download & navigation buttons */}
      <div className="flex flex-col items-center gap-4 mt-8">
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadPNG}
            disabled={downloading !== null}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border-2 border-primary bg-primary/5 text-primary hover:bg-primary/10 disabled:opacity-50 transition-all"
          >
            {downloading === 'png' ? (
              <span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            ) : (
              '🖼️'
            )}
            Download PNG
          </button>
          <button
            onClick={handleDownloadPDF}
            disabled={downloading !== null}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border-2 border-primary bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 transition-all"
          >
            {downloading === 'pdf' ? (
              <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
            ) : (
              '📄'
            )}
            Download PDF
          </button>
        </div>
        <button onClick={() => setCurrentModule(0)} className="px-6 py-3 bg-muted text-muted-foreground rounded-xl font-bold hover:opacity-90 transition-opacity">
          ← Return to Home
        </button>
      </div>
    </motion.div>
  );
};

export default Module09Certificate;
