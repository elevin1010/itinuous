import { useMemo } from 'react';
import { seededRng } from './utils';
import type { CertVariant } from '../CertificatePreview';

export default function AttestationGradient({ attestation, hash, variant = 'dark' }: { attestation: string; hash: string; variant?: CertVariant }) {
  const style = useMemo(() => {
    const rng = seededRng(attestation + hash);
    const hue1 = 35 + rng() * 20;
    const hue2 = 38 + rng() * 15;
    const angle = Math.floor(rng() * 360);
    const x1 = Math.floor(rng() * 60 + 10);
    const y1 = Math.floor(rng() * 60 + 10);
    const x2 = Math.floor(rng() * 60 + 30);
    const y2 = Math.floor(rng() * 60 + 30);

    const opacity = variant === 'light' ? 0.04 : 0.07;
    const o2 = variant === 'light' ? 0.03 : 0.06;
    const o3 = variant === 'light' ? 0.025 : 0.05;

    return {
      background: `
        linear-gradient(${angle}deg, hsla(${hue1}, 70%, 55%, ${opacity}) 0%, transparent 60%),
        radial-gradient(ellipse at ${x1}% ${y1}%, hsla(${hue2}, 60%, 50%, ${o2}) 0%, transparent 55%),
        radial-gradient(ellipse at ${x2}% ${y2}%, hsla(${hue1}, 50%, 40%, ${o3}) 0%, transparent 50%)
      `,
    };
  }, [attestation, hash, variant]);

  return <div className="absolute inset-0 pointer-events-none" style={style} />;
}
