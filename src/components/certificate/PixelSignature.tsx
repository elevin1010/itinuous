import { useEffect, useRef } from 'react';
import { seededRng } from './utils';

export default function PixelSignature({ hash, size = 160 }: { hash: string; size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellCount = 10;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const cellSize = size / cellCount;
    const rng = seededRng(hash);
    const palette = [
      [215, 178, 90], [180, 148, 68], [240, 210, 130],
      [30, 30, 30], [50, 50, 50], [80, 70, 50],
      [160, 130, 70], [20, 20, 20],
    ];
    for (let y = 0; y < cellCount; y++) {
      for (let x = 0; x < cellCount; x++) {
        const color = palette[Math.floor(rng() * palette.length)];
        ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }, [hash, size]);

  return (
    <div className="flex flex-col items-center">
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="border border-primary/30"
        style={{ imageRendering: 'pixelated' }}
      />
      <p className="text-[9px] font-mono text-muted-foreground/50 mt-1.5 uppercase tracking-wider">
        Color Signature
      </p>
    </div>
  );
}
