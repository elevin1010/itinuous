import { useEffect, useRef } from 'react';
import { seededRng } from './utils';
import type { CertVariant } from '../CertificatePreview';

const strokeColors = {
  dark: { curve: (rng: () => number) => `rgba(215, 178, 90, ${0.04 + rng() * 0.06})`, rosette: 'rgba(215, 178, 90, 0.035)' },
  light: { curve: (rng: () => number) => `rgba(140, 110, 50, ${0.06 + rng() * 0.06})`, rosette: 'rgba(140, 110, 50, 0.05)' },
};

export default function GuillochePattern({ hash, width, height, variant = 'dark' }: { hash: string; width: number; height: number; variant?: CertVariant }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    const rng = seededRng(hash + 'guilloche');
    const sc = strokeColors[variant];
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
      ctx.strokeStyle = sc.curve(rng);
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

    const rcx = width * 0.70;
    const rcy = height * 0.68;
    const petals = 6 + Math.floor(rng() * 8);
    const roseR = 80 + rng() * 100;
    ctx.strokeStyle = sc.rosette;
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
  }, [hash, width, height, variant]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="absolute inset-0 pointer-events-none"
    />
  );
}
