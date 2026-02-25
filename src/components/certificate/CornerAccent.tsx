import type { CertVariant } from '../CertificatePreview';

export default function CornerAccent({ position, variant = 'dark' }: { position: 'tl' | 'tr' | 'bl' | 'br'; variant?: CertVariant }) {
  const borderColor = variant === 'light' ? 'border-[hsl(43_50%_45%)]/50' : 'border-primary/60';
  const base = `absolute w-5 h-5 ${borderColor}`;
  const styles: Record<string, string> = {
    tl: `${base} top-3 left-3 border-t border-l`,
    tr: `${base} top-3 right-3 border-t border-r`,
    bl: `${base} bottom-3 left-3 border-b border-l`,
    br: `${base} bottom-3 right-3 border-b border-r`,
  };
  return <div className={styles[position]} />;
}
