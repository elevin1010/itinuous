import { useMemo } from 'react';
import type { CertVariant } from '../CertificatePreview';

export default function MicroText({ hash, attestation, variant = 'dark' }: { hash: string; attestation: string; variant?: CertVariant }) {
  const phrases = useMemo(() => [
    `INTINUOUS·VERIFIED·${hash.slice(2, 10).toUpperCase()}·`,
    `ATTESTATION·${attestation.toUpperCase().replace(/\./g, '·')}·`,
    `SOVEREIGN·IDENTITY·PROOF·${hash.slice(-8).toUpperCase()}·`,
    `DECENTRALIZED·TRUST·PROTOCOL·`,
    `NON·TRANSFERABLE·UNIQUE·IDENTITY·`,
  ], [hash, attestation]);

  const combined = useMemo(() => phrases.join(''), [phrases]);

  // Build a string that fills a given pixel width without cutting mid-phrase
  const fillEdge = useMemo(() => {
    return (widthPx: number) => {
      const charWidth = 3.5; // approx px per char at 5px font with letter-spacing
      const charsNeeded = Math.ceil(widthPx / charWidth);
      // Repeat combined string enough times
      const repeated = combined.repeat(Math.ceil(charsNeeded / combined.length) + 1);
      // Truncate at nearest · boundary without exceeding charsNeeded
      let cutoff = charsNeeded;
      // Find the last · at or before cutoff
      while (cutoff > 0 && repeated[cutoff - 1] !== '·') {
        cutoff--;
      }
      return cutoff > 0 ? repeated.slice(0, cutoff) : repeated.slice(0, charsNeeded);
    };
  }, [combined]);

  // Certificate is 540x756 (5:7 aspect). Edges minus some padding.
  const horizText = useMemo(() => fillEdge(540), [fillEdge]);
  const vertText = useMemo(() => fillEdge(756), [fillEdge]);

  const textColor = variant === 'light' ? 'text-[hsl(43_50%_35%)]' : 'text-primary';
  const fontSize = '5px';
  const letterSpacing = '0.5px';

  const baseStyle = {
    fontSize,
    letterSpacing,
    lineHeight: '1',
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.30]">
      {/* Top edge */}
      <p
        className={`absolute whitespace-nowrap font-mono ${textColor}`}
        style={{ ...baseStyle, top: '2px', left: '0', right: '0', textAlign: 'center' }}
      >
        {horizText}
      </p>

      {/* Bottom edge */}
      <p
        className={`absolute whitespace-nowrap font-mono ${textColor}`}
        style={{ ...baseStyle, bottom: '2px', left: '0', right: '0', textAlign: 'center' }}
      >
        {horizText}
      </p>

      {/* Right edge */}
      <p
        className={`absolute whitespace-nowrap font-mono ${textColor}`}
        style={{
          ...baseStyle,
          top: '0',
          right: '2px',
          writingMode: 'vertical-lr',
          height: '100%',
          textAlign: 'center',
        }}
      >
        {vertText}
      </p>

      {/* Left edge */}
      <p
        className={`absolute whitespace-nowrap font-mono ${textColor}`}
        style={{
          ...baseStyle,
          top: '0',
          left: '2px',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          height: '100%',
          textAlign: 'center',
        }}
      >
        {vertText}
      </p>
    </div>
  );
}
