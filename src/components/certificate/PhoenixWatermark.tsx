import { useEffect, useRef } from 'react';
import { seededRng } from './utils';
import type { CertVariant } from '../CertificatePreview';

const strokeStyle = {
  dark: 'rgba(215, 178, 90, 0.18)',
  light: 'rgba(140, 110, 50, 0.15)',
};

export default function PhoenixWatermark({ hash, width, height, variant = 'dark' }: { hash: string; width: number; height: number; variant?: CertVariant }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    const rng = seededRng(hash + 'phoenix');
    const cx = width * 0.78;
    const cy = height * 0.18;
    const scale = 1.8;

    ctx.strokeStyle = strokeStyle[variant];
    ctx.lineWidth = 1.2;
    ctx.lineCap = 'round';

    // ── Phoenix body — elongated teardrop ──
    const birdCy = cy;

    ctx.beginPath();
    ctx.moveTo(cx, birdCy + 12 * scale);
    ctx.quadraticCurveTo(cx - 4 * scale, birdCy, cx, birdCy - 10 * scale);
    ctx.quadraticCurveTo(cx + 4 * scale, birdCy, cx, birdCy + 12 * scale);
    ctx.stroke();

    // Left wing
    const wingSpan = 45; // ~100px total across both wings
    ctx.beginPath();
    ctx.moveTo(cx - 2 * scale, birdCy);
    ctx.bezierCurveTo(
      cx - wingSpan * scale * 0.4, birdCy - 20 * scale,
      cx - wingSpan * scale * 0.7, birdCy - 35 * scale,
      cx - wingSpan * scale, birdCy - 14 * scale
    );
    ctx.stroke();

    // Left wing feathers
    for (let f = 0; f < 5; f++) {
      const t = (f + 1) / 6;
      const fx = cx - wingSpan * scale * t;
      const fy = birdCy - (14 + 20 * Math.sin(t * Math.PI)) * scale;
      ctx.beginPath();
      ctx.moveTo(fx, fy);
      ctx.lineTo(fx - 5 * scale, fy + 8 * scale);
      ctx.stroke();
    }

    // Right wing
    ctx.beginPath();
    ctx.moveTo(cx + 2 * scale, birdCy);
    ctx.bezierCurveTo(
      cx + wingSpan * scale * 0.4, birdCy - 20 * scale,
      cx + wingSpan * scale * 0.7, birdCy - 35 * scale,
      cx + wingSpan * scale, birdCy - 14 * scale
    );
    ctx.stroke();

    // Right wing feathers
    for (let f = 0; f < 5; f++) {
      const t = (f + 1) / 6;
      const fx = cx + wingSpan * scale * t;
      const fy = birdCy - (14 + 20 * Math.sin(t * Math.PI)) * scale;
      ctx.beginPath();
      ctx.moveTo(fx, fy);
      ctx.lineTo(fx + 5 * scale, fy + 8 * scale);
      ctx.stroke();
    }

    // Tail feathers
    const tailCount = 4 + Math.floor(rng() * 3);
    for (let i = 0; i < tailCount; i++) {
      const spread = ((i / (tailCount - 1)) - 0.5) * 30 * scale;
      const len = 25 + rng() * 20;
      ctx.beginPath();
      ctx.moveTo(cx, birdCy + 10 * scale);
      ctx.bezierCurveTo(
        cx + spread * 0.5, birdCy + 16 * scale,
        cx + spread, birdCy + (len - 6) * scale,
        cx + spread * 1.2, birdCy + len * scale
      );
      ctx.stroke();
    }

    // Head crest
    ctx.beginPath();
    ctx.moveTo(cx, birdCy - 10 * scale);
    ctx.lineTo(cx - 2 * scale, birdCy - 18 * scale);
    ctx.moveTo(cx, birdCy - 10 * scale);
    ctx.lineTo(cx, birdCy - 20 * scale);
    ctx.moveTo(cx, birdCy - 10 * scale);
    ctx.lineTo(cx + 2 * scale, birdCy - 18 * scale);
    ctx.stroke();

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
