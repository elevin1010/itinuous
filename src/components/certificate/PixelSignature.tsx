import { useEffect, useRef } from 'react';
import { seededRng } from './utils';
import type { CertVariant } from '../CertificatePreview';

const palettes = {
  dark: [
    [215, 178, 90], [180, 148, 68], [240, 210, 130],
    [30, 30, 30], [50, 50, 50], [80, 70, 50],
    [160, 130, 70], [20, 20, 20],
  ],
  light: [
    [180, 148, 68], [160, 130, 60], [200, 170, 90],
    [230, 225, 215], [215, 210, 200], [190, 175, 140],
    [140, 110, 50], [240, 235, 225],
  ],
};

export default function PixelSignature({ hash, size = 160, variant = 'dark' }: { hash: string; size?: number; variant?: CertVariant }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellCount = 10;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const cellSize = size / cellCount;
    const rng = seededRng(hash);
    const palette = palettes[variant];
    for (let y = 0; y < cellCount; y++) {
      for (let x = 0; x < cellCount; x++) {
        const color = palette[Math.floor(rng() * palette.length)];
        ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }, [hash, size, variant]);

  const borderClass = variant === 'light' ? 'border-[hsl(43_50%_45%)]/30' : 'border-primary/30';
  const textClass = variant === 'light' ? 'text-[hsl(0_0%_50%)]' : 'text-muted-foreground/50';

  return (
    <div className="flex flex-col items-center">
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className={`border ${borderClass}`}
        style={{ imageRendering: 'pixelated' }}
      />
      <p className={`text-[9px] font-mono ${textClass} mt-1.5 uppercase tracking-wider`}>
        Color Signature
      </p>
    </div>
  );
}
