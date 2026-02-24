import { useEffect, useRef } from 'react';
import { seededRng } from './utils';

/**
 * A fine-line engraving-style phoenix rising from an inverted torch.
 * Drawn algorithmically on canvas in gold at very low opacity.
 * The phoenix symbolizes sovereignty and resurrection of identity rights.
 * The inverted torch = extinguished tyranny / defiance.
 */
export default function PhoenixWatermark({ hash, width, height }: { hash: string; width: number; height: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    const rng = seededRng(hash + 'phoenix');
    const cx = width * 0.5;
    const cy = height * 0.48;
    const scale = Math.min(width, height) * 0.0028;

    ctx.strokeStyle = 'rgba(215, 178, 90, 0.055)';
    ctx.lineWidth = 0.8;
    ctx.lineCap = 'round';

    // ── Inverted Torch (handle up, flame down) ──
    const torchTop = cy + 30 * scale;
    const torchBottom = cy + 100 * scale;
    const handleTop = cy - 10 * scale;

    // Handle
    ctx.beginPath();
    ctx.moveTo(cx - 4 * scale, handleTop);
    ctx.lineTo(cx - 4 * scale, torchTop);
    ctx.lineTo(cx - 14 * scale, torchTop + 8 * scale);
    ctx.lineTo(cx - 14 * scale, torchTop + 20 * scale);
    ctx.lineTo(cx + 14 * scale, torchTop + 20 * scale);
    ctx.lineTo(cx + 14 * scale, torchTop + 8 * scale);
    ctx.lineTo(cx + 4 * scale, torchTop);
    ctx.lineTo(cx + 4 * scale, handleTop);
    ctx.stroke();

    // Handle cross-hatching (engraving style)
    for (let y = handleTop; y < torchTop; y += 4 * scale) {
      ctx.beginPath();
      ctx.moveTo(cx - 3 * scale, y);
      ctx.lineTo(cx + 3 * scale, y);
      ctx.stroke();
    }

    // Inverted flame (dripping down)
    const flamePoints = 7 + Math.floor(rng() * 4);
    ctx.beginPath();
    ctx.moveTo(cx - 12 * scale, torchTop + 20 * scale);
    for (let i = 0; i <= flamePoints; i++) {
      const t = i / flamePoints;
      const x = cx + (t - 0.5) * 24 * scale;
      const flickerY = torchBottom + (Math.sin(t * Math.PI * 3) * 15 + rng() * 20) * scale;
      ctx.quadraticCurveTo(
        x + (rng() - 0.5) * 10 * scale,
        flickerY + rng() * 10 * scale,
        x,
        flickerY
      );
    }
    ctx.quadraticCurveTo(cx + 18 * scale, torchTop + 30 * scale, cx + 12 * scale, torchTop + 20 * scale);
    ctx.stroke();

    // Dripping embers
    for (let i = 0; i < 5; i++) {
      const ex = cx + (rng() - 0.5) * 20 * scale;
      const ey = torchBottom + 10 * scale + rng() * 30 * scale;
      ctx.beginPath();
      ctx.arc(ex, ey, 1 + rng() * 1.5, 0, Math.PI * 2);
      ctx.stroke();
    }

    // ── Phoenix Rising (above the torch) ──
    const birdCy = cy - 40 * scale;

    // Body — elongated curve
    ctx.beginPath();
    ctx.moveTo(cx, birdCy + 20 * scale);
    ctx.quadraticCurveTo(cx - 5 * scale, birdCy, cx, birdCy - 15 * scale);
    ctx.quadraticCurveTo(cx + 5 * scale, birdCy, cx, birdCy + 20 * scale);
    ctx.stroke();

    // Left wing — sweeping arc with feather detail
    const wingSpan = 70 + rng() * 30;
    ctx.beginPath();
    ctx.moveTo(cx - 3 * scale, birdCy);
    ctx.bezierCurveTo(
      cx - wingSpan * scale * 0.4, birdCy - 30 * scale,
      cx - wingSpan * scale * 0.7, birdCy - 50 * scale,
      cx - wingSpan * scale, birdCy - 20 * scale
    );
    ctx.stroke();

    // Left wing feathers
    for (let f = 0; f < 6; f++) {
      const t = (f + 1) / 7;
      const fx = cx - wingSpan * scale * t;
      const fy = birdCy - (20 + 30 * Math.sin(t * Math.PI)) * scale;
      ctx.beginPath();
      ctx.moveTo(fx, fy);
      ctx.lineTo(fx - 8 * scale, fy + 12 * scale);
      ctx.stroke();
    }

    // Right wing
    ctx.beginPath();
    ctx.moveTo(cx + 3 * scale, birdCy);
    ctx.bezierCurveTo(
      cx + wingSpan * scale * 0.4, birdCy - 30 * scale,
      cx + wingSpan * scale * 0.7, birdCy - 50 * scale,
      cx + wingSpan * scale, birdCy - 20 * scale
    );
    ctx.stroke();

    // Right wing feathers
    for (let f = 0; f < 6; f++) {
      const t = (f + 1) / 7;
      const fx = cx + wingSpan * scale * t;
      const fy = birdCy - (20 + 30 * Math.sin(t * Math.PI)) * scale;
      ctx.beginPath();
      ctx.moveTo(fx, fy);
      ctx.lineTo(fx + 8 * scale, fy + 12 * scale);
      ctx.stroke();
    }

    // Tail feathers — flowing down and outward
    const tailCount = 5 + Math.floor(rng() * 4);
    for (let i = 0; i < tailCount; i++) {
      const spread = ((i / (tailCount - 1)) - 0.5) * 50 * scale;
      const len = 40 + rng() * 35;
      ctx.beginPath();
      ctx.moveTo(cx, birdCy + 15 * scale);
      ctx.bezierCurveTo(
        cx + spread * 0.5, birdCy + 25 * scale,
        cx + spread, birdCy + (len - 10) * scale,
        cx + spread * 1.2, birdCy + len * scale
      );
      ctx.stroke();
    }

    // Head crest / crown
    ctx.beginPath();
    ctx.moveTo(cx, birdCy - 15 * scale);
    ctx.lineTo(cx - 3 * scale, birdCy - 25 * scale);
    ctx.moveTo(cx, birdCy - 15 * scale);
    ctx.lineTo(cx, birdCy - 28 * scale);
    ctx.moveTo(cx, birdCy - 15 * scale);
    ctx.lineTo(cx + 3 * scale, birdCy - 25 * scale);
    ctx.stroke();

    // Radiating lines (resurrection glow)
    ctx.strokeStyle = 'rgba(215, 178, 90, 0.03)';
    ctx.lineWidth = 0.4;
    const rays = 24;
    for (let i = 0; i < rays; i++) {
      const angle = (i / rays) * Math.PI * 2;
      const innerR = 30 * scale;
      const outerR = (80 + rng() * 40) * scale;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(angle) * innerR, birdCy + Math.sin(angle) * innerR);
      ctx.lineTo(cx + Math.cos(angle) * outerR, birdCy + Math.sin(angle) * outerR);
      ctx.stroke();
    }

    // Broken chain links scattered around base
    ctx.strokeStyle = 'rgba(215, 178, 90, 0.04)';
    ctx.lineWidth = 0.6;
    for (let i = 0; i < 4; i++) {
      const lx = cx + (rng() - 0.5) * 100 * scale;
      const ly = torchBottom + 20 * scale + rng() * 20 * scale;
      const linkW = 6 * scale;
      const linkH = 3 * scale;
      // Open chain link (broken)
      ctx.beginPath();
      ctx.ellipse(lx, ly, linkW, linkH, rng() * Math.PI, 0.3, Math.PI * 1.7);
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
