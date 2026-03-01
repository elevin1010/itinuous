import { useMemo } from 'react';
import type { CertVariant } from '../CertificatePreview';

export default function MicroText({ hash, attestation, variant = 'dark' }: { hash: string; attestation: string; variant?: CertVariant }) {
  const lines = useMemo(() => {
    const phrases = [
      `INTINUOUS·VERIFIED·${hash.slice(2, 10).toUpperCase()}·`,
      `ATTESTATION·${attestation.toUpperCase().replace(/\./g, '·')}·`,
      `SOVEREIGN·IDENTITY·PROOF·${hash.slice(-8).toUpperCase()}·`,
      `DECENTRALIZED·TRUST·PROTOCOL·`,
      `NON·TRANSFERABLE·UNIQUE·IDENTITY·`,
    ];
    const rows: string[] = [];
    for (let i = 0; i < 80; i++) {
      rows.push(phrases[i % phrases.length].repeat(12));
    }
    return rows;
  }, [hash, attestation]);

  const textColor = variant === 'light' ? 'text-[hsl(43_50%_35%)]' : 'text-primary';

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.30]">
      <div className="absolute inset-0" style={{ transform: 'rotate(-3deg) scale(1.2)', transformOrigin: 'center center' }}>
        {lines.map((line, i) => (
          <p
            key={i}
            className={`whitespace-nowrap font-mono ${textColor} leading-none`}
            style={{ fontSize: '3px', letterSpacing: '0.5px', marginTop: i === 0 ? '-10px' : '0', lineHeight: '5px' }}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
