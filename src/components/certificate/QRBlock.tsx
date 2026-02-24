import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

export default function QRBlock({ data, size = 80 }: { data: string; size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    QRCode.toCanvas(canvas, data, {
      width: size,
      margin: 1,
      color: { dark: '#D7B25A', light: '#00000000' },
      errorCorrectionLevel: 'M',
    }).catch(() => {});
  }, [data, size]);

  return (
    <div className="flex flex-col items-center">
      <canvas ref={canvasRef} className="border border-primary/20" />
      <p className="text-[8px] font-mono text-muted-foreground/40 mt-1 uppercase tracking-wider">
        Scan to Verify
      </p>
    </div>
  );
}
