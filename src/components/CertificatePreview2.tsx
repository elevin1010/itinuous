import { useMemo } from 'react';
import { motion } from 'framer-motion';
import badgeImg from '@/assets/intinuous-badge.png';
import { truncateHash } from './certificate/utils';
import PixelSignature from './certificate/PixelSignature';
import QRBlock from './certificate/QRBlock';
import SubjectPhoto from './certificate/SubjectPhoto';
import MicroText from './certificate/MicroText';
import GenerativeLandscape from './certificate/GenerativeLandscape';

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

const defaults = {
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

/* Colors */
const c = {
  bg: 'hsl(160, 15%, 94%)',
  text: 'hsl(200, 10%, 20%)',
  textMuted: 'hsl(200, 8%, 45%)',
  accent: 'hsl(43, 50%, 45%)',
  accentLight: 'hsl(43, 40%, 70%)',
  border: 'hsl(160, 10%, 86%)',
};

export default function CertificatePreview2(props: CertificateProps) {
  const d = useMemo(() => ({ ...defaults, ...props }), [props]);

  const mrzLine = `<<<INTINUOUS<${d.subjectId.replace(/-/g, '')}<<<${d.issuedAt.slice(0, 4)}<<<${d.chain.toUpperCase()}<<<`;
  const qrData = `${d.verifyBaseUrl}${d.verificationHash}`;

  const fields = [
    ['Issuer', d.issuer],
    ['Issued To', d.issuedTo],
    ['Subject', d.subjectId],
    ['Provider', d.provider],
    ['Issued', d.issuedAt.slice(0, 10)],
    ['Chain', `${d.chain} (${d.chainId})`],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full max-w-[540px] aspect-[5/7] rounded-xl overflow-hidden shadow-lg"
      style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
    >
      {/* Micro-text border */}
      <MicroText hash={d.verificationHash} attestation={d.attestation} variant="light" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-10 py-9">
        {/* Header */}
        <div className="flex items-center gap-3.5 mb-1">
          <img src={badgeImg} alt="Intinuous" className="w-9 h-9 object-contain" />
          <div>
            <h2
              className="text-[15px] font-light uppercase tracking-[0.22em]"
              style={{ fontFamily: "'Montserrat', sans-serif", color: c.text }}
            >
              Intinuous
            </h2>
            <h3
              className="text-[11px] font-light uppercase tracking-[0.25em]"
              style={{ fontFamily: "'Montserrat', sans-serif", color: c.textMuted }}
            >
              Identity Certificate
            </h3>
          </div>
        </div>

        <p className="text-[10px] font-mono mb-7" style={{ color: c.textMuted }}>
          {d.attestation}
        </p>

        {/* Photo + Fields */}
        <div className="flex gap-6 mb-6">
          <div className="flex-shrink-0">
            {d.photoUrl && (
              <div className="w-[120px] h-[120px] rounded-lg overflow-hidden" style={{ border: `1px solid ${c.accentLight}` }}>
                <img src={d.photoUrl} alt="Subject" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div className="flex-1 space-y-2 text-[13px]">
            {fields.map(([label, value]) => (
              <div key={label} className="flex justify-between pb-1.5" style={{ borderBottom: `1px solid ${c.border}` }}>
                <span className="uppercase tracking-wider text-[10px]" style={{ color: c.textMuted }}>{label}</span>
                <span className="font-mono" style={{ color: c.text }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Generative Landscape */}
        <div className="mb-5">
          <GenerativeLandscape hash={d.verificationHash + d.transactionHash} width={460} height={130} />
        </div>

        {/* Bottom row: pixel sig + hashes + QR */}
        <div className="flex items-end justify-between gap-4 mb-auto">
          <PixelSignature hash={d.verificationHash} size={80} variant="light" />

          <div className="flex-1 space-y-2">
            <div>
              <p className="text-[9px] uppercase tracking-wider" style={{ color: c.textMuted }}>Verification</p>
              <p className="font-mono text-[10px] cursor-pointer" style={{ color: c.accent }} title={d.verificationHash}>
                {truncateHash(d.verificationHash)}
              </p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-wider" style={{ color: c.textMuted }}>Transaction</p>
              <p className="font-mono text-[10px] cursor-pointer" style={{ color: c.accent }} title={d.transactionHash}>
                {truncateHash(d.transactionHash)}
              </p>
            </div>
          </div>

          <QRBlock data={qrData} size={70} variant="light" />
        </div>

        {/* MRZ */}
        <div className="mt-5 pt-3" style={{ borderTop: `1px solid ${c.border}` }}>
          <p className="font-mono text-[9px] tracking-[0.12em] leading-relaxed break-all" style={{ color: c.textMuted }}>
            {mrzLine}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-2 flex items-center justify-between text-[8px]" style={{ color: c.textMuted }}>
          <span className="font-mono">Issued {d.issuedAt}</span>
          <span>Intinuous · intinuous.com</span>
        </div>
      </div>
    </motion.div>
  );
}
