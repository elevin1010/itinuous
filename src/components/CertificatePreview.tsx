import { useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import QRCode from 'qrcode';
import badgeImg from '@/assets/intinuous-badge.png';

/* ─── Types ─── */

interface CertificateProps {
  issuer?: string;
  issuedTo?: string;
  subjectId?: string;
  provider?: string;
  chain?: string;
  chainId?: number;
  verificationHash?: string;
  transactionHash?: string;
  issuedAt?: string;
  attestation?: string;
  photoUrl?: string;
  verifyBaseUrl?: string;
}

const defaults: Required<CertificateProps> = {
  issuer: 'Intinuous',
  issuedTo: 'Private',
  subjectId: 'A-8287108928',
  provider: 'persona',
  chain: 'polygon',
  chainId: 137,
  verificationHash: '0xa0dfb7dd4a46f22de15702c12b571c03a8b625e4fc54a576de20c48c5aaea4d6',
  transactionHash: '0x82cdb5d84ebc3e26f36a746e5c1dbb4c2c3eae5a9a00e1f3b1a5d58d73585eef',
  issuedAt: '2026-01-27T16:20:17.000Z',
  attestation: 'identity.likeness.observed',
  photoUrl: '',
  verifyBaseUrl: 'https://intinuous.com/verify/',
};

/* ─── Utilities ─── */

function truncateHash(hash: string) {
  if (hash.length <= 20) return hash;
  return `${hash.slice(0, 10)}...${hash.slice(-8)}`;
}

function seededRng(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  }
  return () => {
    h = (h * 16807 + 0) % 2147483647;
    return (h & 0x7fffffff) / 0x7fffffff;
  };
}

/* ─── Sub-components ─── */

/** Pixelated color signature rendered on a canvas */
function PixelSignature({ hash, size = 160 }: { hash: string; size?: number }) {
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

/** Moiré / Guilloche interference pattern — unique per certificate */
function MoirePattern({ hash, width, height }: { hash: string; width: number; height: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    const rng = seededRng(hash);
    const cx1 = width * (0.3 + rng() * 0.4);
    const cy1 = height * (0.3 + rng() * 0.4);
    const cx2 = cx1 + (rng() - 0.5) * width * 0.25;
    const cy2 = cy1 + (rng() - 0.5) * height * 0.25;
    const freq1 = 5 + rng() * 5;
    const freq2 = 5 + rng() * 5;
    const maxR = Math.max(width, height) * 0.8;

    // Set 1
    ctx.strokeStyle = 'rgba(215, 178, 90, 0.14)';
    ctx.lineWidth = 0.6;
    for (let r = freq1; r < maxR; r += freq1) {
      ctx.beginPath();
      ctx.ellipse(cx1, cy1, r, r * 0.85, rng() * 0.3, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Set 2
    ctx.strokeStyle = 'rgba(215, 178, 90, 0.12)';
    for (let r = freq2; r < maxR; r += freq2) {
      ctx.beginPath();
      ctx.ellipse(cx2, cy2, r * 0.9, r, rng() * 0.3, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Set 3 — tighter spirals
    const cx3 = width * (0.4 + rng() * 0.2);
    const cy3 = height * (0.4 + rng() * 0.2);
    const freq3 = 3 + rng() * 4;
    ctx.strokeStyle = 'rgba(215, 178, 90, 0.08)';
    ctx.lineWidth = 0.4;
    for (let r = freq3; r < maxR * 0.6; r += freq3) {
      ctx.beginPath();
      ctx.ellipse(cx3, cy3, r * 1.1, r * 0.7, rng() * 0.5, 0, Math.PI * 2);
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

/** Algorithmic gradient overlay seeded from attestation string */
function AttestationGradient({ attestation, hash }: { attestation: string; hash: string }) {
  const style = useMemo(() => {
    const rng = seededRng(attestation + hash);
    const hue1 = 35 + rng() * 20; // gold range
    const hue2 = 38 + rng() * 15;
    const angle = Math.floor(rng() * 360);
    const x1 = Math.floor(rng() * 60 + 10);
    const y1 = Math.floor(rng() * 60 + 10);
    const x2 = Math.floor(rng() * 60 + 30);
    const y2 = Math.floor(rng() * 60 + 30);

    return {
      background: `
        linear-gradient(${angle}deg, hsla(${hue1}, 70%, 55%, 0.07) 0%, transparent 60%),
        radial-gradient(ellipse at ${x1}% ${y1}%, hsla(${hue2}, 60%, 50%, 0.06) 0%, transparent 55%),
        radial-gradient(ellipse at ${x2}% ${y2}%, hsla(${hue1}, 50%, 40%, 0.05) 0%, transparent 50%)
      `,
    };
  }, [attestation, hash]);

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={style}
    />
  );
}

/** QR code rendered in gold-on-transparent */
function QRBlock({ data, size = 80 }: { data: string; size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    QRCode.toCanvas(canvas, data, {
      width: size,
      margin: 1,
      color: {
        dark: '#D7B25A',
        light: '#00000000',
      },
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

/** Optional subject headshot photo */
function SubjectPhoto({ url }: { url: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[160px] h-[160px] border border-primary/40 overflow-hidden bg-muted/20">
        <img src={url} alt="Subject" className="w-full h-full object-cover" />
      </div>
      <p className="text-[9px] font-mono text-muted-foreground/50 mt-1.5 uppercase tracking-wider">
        Subject Photo
      </p>
    </div>
  );
}

/** Decorative corner bracket */
function CornerAccent({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const base = 'absolute w-5 h-5 border-primary/60';
  const styles: Record<string, string> = {
    tl: `${base} top-3 left-3 border-t border-l`,
    tr: `${base} top-3 right-3 border-t border-r`,
    bl: `${base} bottom-3 left-3 border-b border-l`,
    br: `${base} bottom-3 right-3 border-b border-r`,
  };
  return <div className={styles[position]} />;
}

/* ─── Main Certificate ─── */

export default function CertificatePreview(props: CertificateProps) {
  const d = useMemo(() => ({ ...defaults, ...props }), [props]);

  const mrzLine = `<<<INTINUOUS<${d.subjectId.replace(/-/g, '')}<<<${d.issuedAt.slice(0, 4)}<<<${d.chain.toUpperCase()}<<<`;
  const qrData = `${d.verifyBaseUrl}${d.verificationHash}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full max-w-[540px] aspect-[5/7] border border-primary/30 bg-[hsl(0_0%_3%)] rounded-sm overflow-hidden shadow-lg"
    >
      {/* Security micro-pattern background */}
      <div className="certificate-pattern absolute inset-0 opacity-[0.04] pointer-events-none" />

      {/* Moiré interference layer */}
      <MoirePattern hash={d.transactionHash} width={540} height={756} />

      {/* Algorithmic attestation gradient */}
      <AttestationGradient attestation={d.attestation} hash={d.verificationHash} />

      {/* Corner accents */}
      <CornerAccent position="tl" />
      <CornerAccent position="tr" />
      <CornerAccent position="bl" />
      <CornerAccent position="br" />

      {/* Watermark badge */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src={badgeImg} alt="" className="w-56 h-56 object-contain opacity-[0.04]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-8 py-7 text-foreground">
        {/* Header */}
        <div className="flex items-start gap-4 mb-2">
          <img src={badgeImg} alt="Intinuous" className="w-10 h-10 object-contain mt-0.5" />
          <div>
            <h2
              className="text-base font-light uppercase tracking-[0.2em] text-primary"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Identity Verification
            </h2>
            <h3
              className="text-sm font-light uppercase tracking-[0.25em] text-primary/70"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Certificate
            </h3>
          </div>
        </div>

        {/* Attestation */}
        <p className="text-xs font-mono text-muted-foreground mb-6">
          Attestation: {d.attestation}
        </p>

        {/* Main body: photo + color sig + fields */}
        <div className="flex gap-5 mb-6">
          {/* Left column: photo (optional) + color signature */}
          <div className="flex-shrink-0 flex flex-col gap-4">
            {d.photoUrl && <SubjectPhoto url={d.photoUrl} />}
            <PixelSignature hash={d.verificationHash} size={160} />
          </div>

          {/* Right column: data fields */}
          <div className="flex-1 space-y-2.5 text-sm">
            {[
              ['Issuer', d.issuer],
              ['Issued To', d.issuedTo],
              ['Subject', d.subjectId],
              ['Provider', d.provider],
              ['Issued', d.issuedAt.slice(0, 10)],
              ['Chain', `${d.chain} (${d.chainId})`],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-border/30 pb-1.5">
                <span className="text-muted-foreground uppercase tracking-wider text-xs">{label}</span>
                <span className="font-mono text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hashes — two-column layout */}
        <div className="grid grid-cols-2 gap-5 mb-auto">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Verification Hash</p>
            <p className="font-mono text-xs text-primary/90 hover:text-primary transition-colors cursor-pointer" title={d.verificationHash}>
              {truncateHash(d.verificationHash)}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Transaction Hash</p>
            <p className="font-mono text-xs text-primary/90 hover:text-primary transition-colors cursor-pointer" title={d.transactionHash}>
              {truncateHash(d.transactionHash)}
            </p>
          </div>
        </div>

        {/* MRZ zone + QR code */}
        <div className="mt-5 pt-4 border-t border-border/40 flex items-end justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="font-mono text-[10px] text-muted-foreground/40 tracking-[0.12em] leading-relaxed break-all">
              {mrzLine}
            </p>
          </div>
          <QRBlock data={qrData} size={80} />
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between text-[9px] text-muted-foreground/40">
          <span className="font-mono">Issued {d.issuedAt}</span>
          <span>Intinuous · intinuous.com</span>
        </div>
      </div>
    </motion.div>
  );
}
