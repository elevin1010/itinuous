import { useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import badgeImg from '@/assets/intinuous-badge.png';

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
};

function truncateHash(hash: string) {
  if (hash.length <= 20) return hash;
  return `${hash.slice(0, 10)}...${hash.slice(-8)}`;
}

/** Deterministic seeded RNG from a hash string */
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

/** Pixelated color signature rendered on a canvas */
function PixelSignature({ hash, size = 80 }: { hash: string; size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellCount = 8;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cellSize = size / cellCount;
    const rng = seededRng(hash);

    // Gold/dark palette for the pixel blocks
    const palette = [
      [215, 178, 90],  // vault gold
      [180, 148, 68],  // darker gold
      [240, 210, 130], // light gold
      [30, 30, 30],    // near black
      [50, 50, 50],    // dark gray
      [80, 70, 50],    // warm dark
      [160, 130, 70],  // muted gold
      [20, 20, 20],    // deep black
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
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className="border border-border/50"
      style={{ imageRendering: 'pixelated' }}
    />
  );
}

/** Decorative corner bracket */
function CornerAccent({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const base = 'absolute w-4 h-4 border-primary/60';
  const styles: Record<string, string> = {
    tl: `${base} top-2 left-2 border-t border-l`,
    tr: `${base} top-2 right-2 border-t border-r`,
    bl: `${base} bottom-2 left-2 border-b border-l`,
    br: `${base} bottom-2 right-2 border-b border-r`,
  };
  return <div className={styles[position]} />;
}

export default function CertificatePreview(props: CertificateProps) {
  const d = useMemo(() => ({ ...defaults, ...props }), [props]);

  const mrzLine = `<<<INTINUOUS<${d.subjectId.replace(/-/g, '')}<<<${d.issuedAt.slice(0, 4)}<<<${d.chain.toUpperCase()}<<<`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full max-w-[420px] aspect-[3/4] border border-primary/30 bg-[hsl(0_0%_3%)] rounded-sm overflow-hidden shadow-lg"
    >
      {/* Security micro-pattern background */}
      <div className="certificate-pattern absolute inset-0 opacity-[0.04] pointer-events-none" />

      {/* Corner accents */}
      <CornerAccent position="tl" />
      <CornerAccent position="tr" />
      <CornerAccent position="bl" />
      <CornerAccent position="br" />

      {/* Watermark badge */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={badgeImg}
          alt=""
          className="w-48 h-48 object-contain opacity-[0.06]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-6 py-5 text-foreground">
        {/* Header */}
        <div className="flex items-start gap-3 mb-1">
          <img src={badgeImg} alt="Intinuous" className="w-8 h-8 object-contain mt-0.5" />
          <div>
            <h2
              className="text-[13px] font-light uppercase tracking-[0.2em] text-primary"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Identity Verification
            </h2>
            <h3
              className="text-[11px] font-light uppercase tracking-[0.25em] text-primary/70"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Certificate
            </h3>
          </div>
        </div>

        {/* Attestation */}
        <p className="text-[10px] font-mono text-muted-foreground mb-5">
          Attestation: {d.attestation}
        </p>

        {/* Main body: pixel sig + fields */}
        <div className="flex gap-4 mb-5">
          <div className="flex-shrink-0">
            <PixelSignature hash={d.verificationHash} size={88} />
            <p className="text-[7px] font-mono text-muted-foreground/60 mt-1 text-center">
              COLOR SIGNATURE
            </p>
          </div>

          <div className="flex-1 space-y-2 text-[10px]">
            {[
              ['Issuer', d.issuer],
              ['Issued To', d.issuedTo],
              ['Subject', d.subjectId],
              ['Provider', d.provider],
              ['Issued', d.issuedAt.slice(0, 10)],
              ['Chain', `${d.chain} (${d.chainId})`],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-border/30 pb-1">
                <span className="text-muted-foreground uppercase tracking-wider text-[9px]">{label}</span>
                <span className="font-mono text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hashes */}
        <div className="space-y-3 mb-auto">
          <div>
            <p className="text-[9px] uppercase tracking-wider text-muted-foreground mb-0.5">Verification Hash</p>
            <p className="font-mono text-[10px] text-primary/90 hover:text-primary transition-colors cursor-pointer" title={d.verificationHash}>
              {truncateHash(d.verificationHash)}
            </p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-wider text-muted-foreground mb-0.5">Transaction Hash</p>
            <p className="font-mono text-[10px] text-primary/90 hover:text-primary transition-colors cursor-pointer" title={d.transactionHash}>
              {truncateHash(d.transactionHash)}
            </p>
          </div>
        </div>

        {/* MRZ zone */}
        <div className="mt-4 pt-3 border-t border-border/40">
          <p className="font-mono text-[9px] text-muted-foreground/50 tracking-[0.15em] leading-relaxed break-all">
            {mrzLine}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between text-[8px] text-muted-foreground/50">
          <span className="font-mono">Issued {d.issuedAt}</span>
          <span>Intinuous · https://intinuous.com</span>
        </div>
      </div>
    </motion.div>
  );
}
