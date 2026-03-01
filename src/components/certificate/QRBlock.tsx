import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import type { CertVariant } from '../CertificatePreview';

export default function QRBlock({ data, size = 80, variant = 'dark' }: { data: string; size?: number; variant?: CertVariant }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const darkColor = variant === 'light' ? '#8C6E32' : '#D7B25A';
    QRCode.toCanvas(canvas, data, {
      width: size,
      margin: 1,
      color: { dark: darkColor, light: '#00000000' },
      errorCorrectionLevel: 'M',
    }).catch(() => {});
  }, [data, size, variant]);

  const borderClass = variant === 'light' ? 'border-[hsl(43_50%_45%)]/30' : 'border-primary/20';
  const textClass = variant === 'light' ? 'text-[hsl(0_0%_35%)]' : 'text-muted-foreground/75';

  return (
    <div className="flex flex-col items-center">
      <p className={`text-[8px] font-mono ${textClass} mb-1 uppercase tracking-wider`}>
        Status: Active
      </p>
      <canvas ref={canvasRef} className={`border ${borderClass}`} />
      <p className={`text-[8px] font-mono ${textClass} mt-1 uppercase tracking-wider`}>
        Verify Status
      </p>
    </div>
  );
}
