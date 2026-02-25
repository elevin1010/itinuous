import { useEffect, useRef } from 'react';
import { seededRng } from './utils';

/**
 * Banknote-style guilloche pattern, constrained to the bottom-right quadrant.
 */
export default function GuillochePattern({ hash, width, height }: { hash: string; width: number; height: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    const rng = seededRng(hash + 'guilloche');
    const numCurves = 4 + Math.floor(rng() * 3);

    for (let c = 0; c < numCurves; c++) {
      const cx = width * (0.45 + rng() * 0.5);
      const cy = height * (0.40 + rng() * 0.55);
      const R = 50 + rng() * 140;
      const r = 10 + rng() * 50;
      const d = 5 + rng() * 60;
      const rotations = 20 + Math.floor(rng() * 40);
      const steps = rotations * 100;

      ctx.beginPath();
      ctx.strokeStyle = `rgba(215, 178, 90, ${0.04 + rng() * 0.06})`;
      ctx.lineWidth = 0.3 + rng() * 0.4;

      for (let i = 0; i <= steps; i++) {
        const t = (i / steps) * rotations * Math.PI * 2;
        const x = cx + (R - r) * Math.cos(t) + d * Math.cos(((R - r) / r) * t);
        const y = cy + (R - r) * Math.sin(t) - d * Math.sin(((R - r) / r) * t);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Central rosette — bottom-right
    const rcx = width * 0.70;
    const rcy = height * 0.68;
    const petals = 6 + Math.floor(rng() * 8);
    const roseR = 80 + rng() * 100;
    ctx.strokeStyle = 'rgba(215, 178, 90, 0.035)';
    ctx.lineWidth = 0.5;

    for (let p = 0; p < petals; p++) {
      const angle = (p / petals) * Math.PI * 2;
      ctx.beginPath();
      for (let i = 0; i <= 200; i++) {
        const t = (i / 200) * Math.PI;
        const rr = roseR * Math.sin(petals * t / 2);
        const x = rcx + rr * Math.cos(t + angle);
        const y = rcy + rr * Math.sin(t + angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }, [hash, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="absolute inset-0 pointer-events-none"
    />
  );
}
