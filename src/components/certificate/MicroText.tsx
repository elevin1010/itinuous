import { useMemo } from 'react';

/**
 * Micro-text security layer — repeated tiny text that looks like a texture
 * at normal zoom but becomes readable when zoomed in. Like currency bills.
 */
export default function MicroText({ hash, attestation }: { hash: string; attestation: string }) {
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
      const phrase = phrases[i % phrases.length];
      // Repeat phrase enough times to fill a wide row
      rows.push(phrase.repeat(12));
    }
    return rows;
  }, [hash, attestation]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06]">
      <div
        className="absolute inset-0"
        style={{
          transform: 'rotate(-3deg) scale(1.2)',
          transformOrigin: 'center center',
        }}
      >
        {lines.map((line, i) => (
          <p
            key={i}
            className="whitespace-nowrap font-mono text-primary leading-none"
            style={{
              fontSize: '3px',
              letterSpacing: '0.5px',
              marginTop: i === 0 ? '-10px' : '0',
              lineHeight: '5px',
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
