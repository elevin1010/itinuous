import { useEffect, useRef } from 'react';
import { seededRng } from './utils';
import type { CertVariant } from '../CertificatePreview';

const colors = {
  dark: { s1: 'rgba(215, 178, 90, 0.14)', s2: 'rgba(215, 178, 90, 0.12)', s3: 'rgba(215, 178, 90, 0.08)' },
  light: { s1: 'rgba(160, 130, 60, 0.10)', s2: 'rgba(160, 130, 60, 0.08)', s3: 'rgba(160, 130, 60, 0.06)' },
};

export default function MoirePattern({ hash, width, height, variant = 'dark' }: { hash: string; width: number; height: number; variant?: CertVariant }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);
    const rng = seededRng(hash);
    const maxR = Math.max(width, height) * 0.8;
    const c = colors[variant];

    const cx1 = width * (0.3 + rng() * 0.4);
    const cy1 = height * (0.3 + rng() * 0.4);
    const freq1 = 5 + rng() * 5;
    ctx.strokeStyle = c.s1;
    ctx.lineWidth = 0.6;
    for (let r = freq1; r < maxR; r += freq1) {
      ctx.beginPath();
      ctx.ellipse(cx1, cy1, r, r * 0.85, rng() * 0.3, 0, Math.PI * 2);
      ctx.stroke();
    }

    const cx2 = cx1 + (rng() - 0.5) * width * 0.25;
    const cy2 = cy1 + (rng() - 0.5) * height * 0.25;
    const freq2 = 5 + rng() * 5;
    ctx.strokeStyle = c.s2;
    for (let r = freq2; r < maxR; r += freq2) {
      ctx.beginPath();
      ctx.ellipse(cx2, cy2, r * 0.9, r, rng() * 0.3, 0, Math.PI * 2);
      ctx.stroke();
    }

    const cx3 = width * (0.4 + rng() * 0.2);
    const cy3 = height * (0.4 + rng() * 0.2);
    const freq3 = 3 + rng() * 4;
    ctx.strokeStyle = c.s3;
    ctx.lineWidth = 0.4;
    for (let r = freq3; r < maxR * 0.6; r += freq3) {
      ctx.beginPath();
      ctx.ellipse(cx3, cy3, r * 1.1, r * 0.7, rng() * 0.5, 0, Math.PI * 2);
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
