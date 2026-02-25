import { useEffect, useRef } from 'react';
import { seededRng } from './utils';

/**
 * Elephant family in the bottom-left of the certificate.
 * A lead adult carries a Statue-of-Liberty-style torch; its radial glow
 * illuminates the path forward (leftward) for two calves walking ahead.
 * Elephants are only visible where the torchlight reaches — rendered via
 * clipping the radial gradient to the elephant silhouette paths.
 *
 * Procession (right to left): lead adult → second adult → calf → calf
 */
export default function ElephantFamily({ hash, width, height }: { hash: string; width: number; height: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    const rng = seededRng(hash + 'elephants');

    // Scene anchored bottom-left
    const baseY = height * 0.80;
    const startX = width * 0.42; // rightmost elephant (lead adult) starts here

    // ── Helper: draw an elephant silhouette as a closed path ──
    function elephantPath(
      ox: number, oy: number, s: number, trunkUp: boolean
    ) {
      // ox,oy = bottom-center of elephant, s = scale (1 = ~55px tall adult)
      const h = 55 * s;
      const w = 42 * s;

      ctx.beginPath();

      // Start at bottom-left foot
      const blx = ox - w * 0.45;
      const bly = oy;
      ctx.moveTo(blx, bly);

      // Left front leg
      ctx.lineTo(blx, oy - h * 0.35);

      // Chest curve up to head
      ctx.quadraticCurveTo(
        ox - w * 0.5, oy - h * 0.6,
        ox - w * 0.4, oy - h * 0.75
      );

      // Ear bump
      ctx.quadraticCurveTo(
        ox - w * 0.55, oy - h * 0.85,
        ox - w * 0.35, oy - h * 0.9
      );

      // Top of head
      ctx.quadraticCurveTo(
        ox - w * 0.2, oy - h * 1.0,
        ox - w * 0.05, oy - h * 0.92
      );

      // Trunk
      if (trunkUp) {
        // Trunk raised high (torch bearer)
        ctx.quadraticCurveTo(
          ox - w * 0.15, oy - h * 0.85,
          ox - w * 0.1, oy - h * 1.15
        );
        ctx.quadraticCurveTo(
          ox + w * 0.0, oy - h * 1.18,
          ox + w * 0.05, oy - h * 1.1
        );
        ctx.quadraticCurveTo(
          ox + w * 0.05, oy - h * 0.95,
          ox + w * 0.1, oy - h * 0.88
        );
      } else {
        // Trunk hanging down
        ctx.quadraticCurveTo(
          ox + w * 0.0, oy - h * 0.82,
          ox + w * 0.05, oy - h * 0.7
        );
        ctx.quadraticCurveTo(
          ox + w * 0.12, oy - h * 0.6,
          ox + w * 0.08, oy - h * 0.55
        );
        ctx.quadraticCurveTo(
          ox + w * 0.15, oy - h * 0.6,
          ox + w * 0.1, oy - h * 0.75
        );
      }

      // Back of head down to back
      ctx.quadraticCurveTo(
        ox + w * 0.2, oy - h * 0.85,
        ox + w * 0.3, oy - h * 0.88
      );

      // Rounded back
      ctx.quadraticCurveTo(
        ox + w * 0.45, oy - h * 0.92,
        ox + w * 0.5, oy - h * 0.8
      );

      // Rump down to hind legs
      ctx.quadraticCurveTo(
        ox + w * 0.5, oy - h * 0.6,
        ox + w * 0.45, oy - h * 0.35
      );

      // Right hind leg
      ctx.lineTo(ox + w * 0.45, oy);

      // Gap between hind legs
      ctx.lineTo(ox + w * 0.25, oy);
      ctx.lineTo(ox + w * 0.25, oy - h * 0.3);
      ctx.lineTo(ox + w * 0.15, oy - h * 0.3);
      ctx.lineTo(ox + w * 0.15, oy);

      // Belly
      ctx.lineTo(ox - w * 0.1, oy);
      ctx.lineTo(ox - w * 0.1, oy - h * 0.3);
      ctx.lineTo(ox - w * 0.2, oy - h * 0.3);
      ctx.lineTo(ox - w * 0.2, oy);

      // Close back to start
      ctx.lineTo(blx, bly);
      ctx.closePath();
    }

    // ── Define the 4 elephants (right to left) ──
    const jitter = () => (rng() - 0.5) * 3;

    // Lead adult (rightmost, largest, trunk up for torch)
    const lead = { x: startX + jitter(), y: baseY + jitter(), s: 1.0, trunkUp: true };
    // Second adult
    const adult2 = { x: startX - 60 + jitter(), y: baseY + 2 + jitter(), s: 0.85, trunkUp: false };
    // Calf 1 (in front)
    const calf1 = { x: startX - 115 + jitter(), y: baseY + 5 + jitter(), s: 0.55, trunkUp: false };
    // Calf 2 (furthest ahead)
    const calf2 = { x: startX - 150 + jitter(), y: baseY + 6 + jitter(), s: 0.48, trunkUp: false };

    const elephants = [lead, adult2, calf1, calf2];

    // ── Torch flame position (tip of lead adult's raised trunk) ──
    const flameX = lead.x - 42 * lead.s * 0.1 + 2;
    const flameY = lead.y - 55 * lead.s * 1.18;

    // ── Draw torch handle + flame (always visible) ──
    ctx.save();
    ctx.strokeStyle = 'rgba(215, 178, 90, 0.5)';
    ctx.lineWidth = 1.5;

    // Torch cup (Liberty-style fluted cup)
    const cupW = 6;
    const cupH = 8;
    ctx.beginPath();
    ctx.moveTo(flameX - cupW, flameY + cupH);
    ctx.quadraticCurveTo(flameX - cupW * 1.2, flameY + 2, flameX - cupW * 0.5, flameY);
    ctx.quadraticCurveTo(flameX, flameY - 3, flameX + cupW * 0.5, flameY);
    ctx.quadraticCurveTo(flameX + cupW * 1.2, flameY + 2, flameX + cupW, flameY + cupH);
    ctx.stroke();

    // Flame
    ctx.fillStyle = 'rgba(215, 178, 90, 0.55)';
    ctx.beginPath();
    ctx.moveTo(flameX - 4, flameY);
    ctx.quadraticCurveTo(flameX - 5, flameY - 8, flameX, flameY - 14);
    ctx.quadraticCurveTo(flameX + 5, flameY - 8, flameX + 4, flameY);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // ── Subtle ground-line glow ahead of calves ──
    ctx.save();
    const groundGrad = ctx.createLinearGradient(flameX, baseY + 8, calf2.x - 30, baseY + 8);
    groundGrad.addColorStop(0, 'rgba(215, 178, 90, 0.15)');
    groundGrad.addColorStop(1, 'rgba(215, 178, 90, 0)');
    ctx.strokeStyle = groundGrad;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(flameX, baseY + 8);
    ctx.lineTo(calf2.x - 30, baseY + 8);
    ctx.stroke();
    ctx.restore();

    // ── Draw elephants clipped to torch radial gradient ──
    ctx.save();

    // Build combined clipping path from all elephants
    for (const e of elephants) {
      elephantPath(e.x, e.y, e.s, e.trunkUp);
    }
    ctx.clip('evenodd');

    // Radial gradient biased leftward from the flame
    const grad = ctx.createRadialGradient(
      flameX, flameY, 8,
      flameX - 80, flameY + 40, 200
    );
    grad.addColorStop(0, 'rgba(215, 178, 90, 0.55)');
    grad.addColorStop(0.25, 'rgba(215, 178, 90, 0.40)');
    grad.addColorStop(0.5, 'rgba(215, 178, 90, 0.25)');
    grad.addColorStop(0.75, 'rgba(215, 178, 90, 0.12)');
    grad.addColorStop(1, 'rgba(215, 178, 90, 0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    ctx.restore();

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
