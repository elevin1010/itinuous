import { useEffect, useRef } from 'react';
import { seededRng } from './utils';

interface Props {
  hash: string;
  width?: number;
  height?: number;
}

export default function GenerativeLandscape({ hash, width = 460, height = 140 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = 2;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const rng = seededRng(hash);

    // Sky gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
    skyGrad.addColorStop(0, `hsl(${170 + rng() * 30}, ${10 + rng() * 10}%, ${88 + rng() * 6}%)`);
    skyGrad.addColorStop(1, `hsl(${160 + rng() * 20}, ${12 + rng() * 8}%, ${82 + rng() * 8}%)`);
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, height);

    // Draw mountain ranges (3 layers, back to front)
    const layers = 3;
    for (let layer = 0; layer < layers; layer++) {
      const baseY = height * (0.3 + layer * 0.18);
      const peakVariance = height * (0.25 - layer * 0.06);
      const lightness = 65 + layer * 8 + rng() * 5;
      const saturation = 10 + rng() * 12;
      const hue = 160 + rng() * 40;

      ctx.beginPath();
      ctx.moveTo(0, height);

      const segments = 8 + Math.floor(rng() * 6);
      const segWidth = width / segments;

      ctx.lineTo(0, baseY - rng() * peakVariance * 0.5);

      for (let i = 1; i <= segments; i++) {
        const x = i * segWidth;
        const peakY = baseY - rng() * peakVariance;
        const cpx = (i - 0.5) * segWidth;
        const cpy = baseY - rng() * peakVariance * 1.2;
        ctx.quadraticCurveTo(cpx, cpy, x, peakY);
      }

      ctx.lineTo(width, height);
      ctx.closePath();

      ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      ctx.fill();
    }

    // Water / foreground band
    const waterY = height * (0.75 + rng() * 0.05);
    const waterHue = 175 + rng() * 15;
    const waterGrad = ctx.createLinearGradient(0, waterY, 0, height);
    waterGrad.addColorStop(0, `hsl(${waterHue}, ${15 + rng() * 10}%, ${72 + rng() * 8}%)`);
    waterGrad.addColorStop(1, `hsl(${waterHue + 5}, ${12 + rng() * 8}%, ${78 + rng() * 6}%)`);

    ctx.beginPath();
    ctx.moveTo(0, waterY);
    // Gentle wave
    for (let x = 0; x <= width; x += 20) {
      const waveY = waterY + Math.sin((x / width) * Math.PI * (2 + rng() * 2)) * (3 + rng() * 4);
      ctx.lineTo(x, waveY);
    }
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fillStyle = waterGrad;
    ctx.fill();

    // Subtle horizontal reflections
    ctx.globalAlpha = 0.15;
    for (let i = 0; i < 5; i++) {
      const y = waterY + 5 + rng() * (height - waterY - 10);
      ctx.beginPath();
      ctx.moveTo(rng() * width * 0.3, y);
      ctx.lineTo(width * (0.4 + rng() * 0.6), y);
      ctx.strokeStyle = `hsl(${waterHue}, 8%, ${85 + rng() * 10}%)`;
      ctx.lineWidth = 0.5 + rng();
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }, [hash, width, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width, height, borderRadius: '8px' }}
      className="block"
    />
  );
}
