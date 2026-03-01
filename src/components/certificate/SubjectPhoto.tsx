import type { CertVariant } from '../CertificatePreview';

export default function SubjectPhoto({ url, variant = 'dark' }: { url: string; variant?: CertVariant }) {
  const borderClass = variant === 'light' ? 'border-[hsl(43_50%_45%)]/40' : 'border-primary/40';
  const bgClass = variant === 'light' ? 'bg-[hsl(40_20%_92%)]' : 'bg-muted/20';

  return (
    <div className="flex flex-col items-center">
      <div className={`w-[160px] h-[160px] border ${borderClass} overflow-hidden ${bgClass}`}>
        <img src={url} alt="Subject" className="w-full h-full object-cover" />
      </div>
      <p className={`text-[9px] font-mono ${variant === 'light' ? 'text-[hsl(0_0%_35%)]' : 'text-muted-foreground/80'} mt-1.5 uppercase tracking-wider`}>
        Subject Photo
      </p>
    </div>
  );
}
