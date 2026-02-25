import { useMemo } from 'react';
import { motion } from 'framer-motion';
import badgeImg from '@/assets/intinuous-badge.png';
import { truncateHash } from './certificate/utils';
import PixelSignature from './certificate/PixelSignature';
import MoirePattern from './certificate/MoirePattern';
import AttestationGradient from './certificate/AttestationGradient';
import QRBlock from './certificate/QRBlock';
import SubjectPhoto from './certificate/SubjectPhoto';
import CornerAccent from './certificate/CornerAccent';
import GuillochePattern from './certificate/GuillochePattern';
import MicroText from './certificate/MicroText';
import PhoenixWatermark from './certificate/PhoenixWatermark';
import ElephantFamily from './certificate/ElephantFamily';

/* ─── Types ─── */

export type CertVariant = 'dark' | 'light';

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
  variant?: CertVariant;
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
  variant: 'dark',
};

/* ─── Variant styles ─── */

const variantStyles = {
  dark: {
    container: 'bg-[hsl(0_0%_3%)] border-primary/30 text-foreground',
    title: 'text-primary',
    subtitle: 'text-primary/70',
    attestation: 'text-muted-foreground',
    label: 'text-muted-foreground',
    value: 'text-foreground',
    borderRow: 'border-border/30',
    hashLabel: 'text-muted-foreground',
    hashValue: 'text-primary/90 hover:text-primary',
    mrzText: 'text-muted-foreground/40',
    footerBorder: 'border-border/40',
    footerText: 'text-muted-foreground/40',
    patternOpacity: 'opacity-[0.04]',
  },
  light: {
    container: 'bg-[hsl(40_20%_97%)] border-[hsl(43_40%_70%)]/40 text-[hsl(0_0%_10%)]',
    title: 'text-[hsl(43_60%_35%)]',
    subtitle: 'text-[hsl(43_50%_40%)]',
    attestation: 'text-[hsl(0_0%_40%)]',
    label: 'text-[hsl(0_0%_45%)]',
    value: 'text-[hsl(0_0%_10%)]',
    borderRow: 'border-[hsl(43_30%_75%)]/40',
    hashLabel: 'text-[hsl(0_0%_45%)]',
    hashValue: 'text-[hsl(43_60%_35%)] hover:text-[hsl(43_70%_30%)]',
    mrzText: 'text-[hsl(0_0%_60%)]',
    footerBorder: 'border-[hsl(43_30%_75%)]/40',
    footerText: 'text-[hsl(0_0%_60%)]',
    patternOpacity: 'opacity-[0.06]',
  },
};

/* ─── Main Certificate ─── */

export default function CertificatePreview(props: CertificateProps) {
  const d = useMemo(() => ({ ...defaults, ...props }), [props]);
  const v = variantStyles[d.variant];

  const mrzLine = `<<<INTINUOUS<${d.subjectId.replace(/-/g, '')}<<<${d.issuedAt.slice(0, 4)}<<<${d.chain.toUpperCase()}<<<`;
  const qrData = `${d.verifyBaseUrl}${d.verificationHash}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative w-full max-w-[540px] aspect-[5/7] border rounded-sm overflow-hidden shadow-lg ${v.container}`}
    >
      {/* ── Security layers (bottom to top) ── */}
      <MicroText hash={d.verificationHash} attestation={d.attestation} variant={d.variant} />
      <MoirePattern hash={d.transactionHash} width={540} height={756} variant={d.variant} />
      <GuillochePattern hash={d.verificationHash} width={540} height={756} variant={d.variant} />
      <PhoenixWatermark hash={d.transactionHash} width={540} height={756} variant={d.variant} />
      <ElephantFamily hash={d.verificationHash} width={540} height={756} variant={d.variant} />
      <AttestationGradient attestation={d.attestation} hash={d.verificationHash} variant={d.variant} />

      <div className={`certificate-pattern absolute inset-0 ${v.patternOpacity} pointer-events-none`} />

      <CornerAccent position="tl" variant={d.variant} />
      <CornerAccent position="tr" variant={d.variant} />
      <CornerAccent position="bl" variant={d.variant} />
      <CornerAccent position="br" variant={d.variant} />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col h-full px-8 py-7">
        {/* Header */}
        <div className="flex items-start gap-4 mb-2">
          <img src={badgeImg} alt="Intinuous" className="w-10 h-10 object-contain mt-0.5" />
          <div>
            <h2
              className={`text-base font-light uppercase tracking-[0.2em] ${v.title}`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Identity Verification
            </h2>
            <h3
              className={`text-sm font-light uppercase tracking-[0.25em] ${v.subtitle}`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Certificate
            </h3>
          </div>
        </div>

        <p className={`text-xs font-mono ${v.attestation} mb-6`}>
          Attestation: {d.attestation}
        </p>

        <div className="flex gap-5 mb-6">
          <div className="flex-shrink-0 flex flex-col gap-4">
            {d.photoUrl && <SubjectPhoto url={d.photoUrl} variant={d.variant} />}
            <PixelSignature hash={d.verificationHash} size={160} variant={d.variant} />
          </div>

          <div className="flex-1 space-y-2.5 text-sm">
            {[
              ['Issuer', d.issuer],
              ['Issued To', d.issuedTo],
              ['Subject', d.subjectId],
              ['Provider', d.provider],
              ['Issued', d.issuedAt.slice(0, 10)],
              ['Chain', `${d.chain} (${d.chainId})`],
            ].map(([label, value]) => (
              <div key={label} className={`flex justify-between border-b ${v.borderRow} pb-1.5`}>
                <span className={`${v.label} uppercase tracking-wider text-xs`}>{label}</span>
                <span className={`font-mono ${v.value}`}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hashes */}
        <div className="grid grid-cols-2 gap-5 mb-auto">
          <div>
            <p className={`text-[10px] uppercase tracking-wider ${v.hashLabel} mb-1`}>Verification Hash</p>
            <p className={`font-mono text-xs ${v.hashValue} transition-colors cursor-pointer`} title={d.verificationHash}>
              {truncateHash(d.verificationHash)}
            </p>
          </div>
          <div>
            <p className={`text-[10px] uppercase tracking-wider ${v.hashLabel} mb-1`}>Transaction Hash</p>
            <p className={`font-mono text-xs ${v.hashValue} transition-colors cursor-pointer`} title={d.transactionHash}>
              {truncateHash(d.transactionHash)}
            </p>
          </div>
        </div>

        {/* MRZ zone + QR code */}
        <div className={`mt-5 pt-4 border-t ${v.footerBorder} flex items-end justify-between gap-4`}>
          <div className="flex-1 min-w-0">
            <p className={`font-mono text-[10px] ${v.mrzText} tracking-[0.12em] leading-relaxed break-all`}>
              {mrzLine}
            </p>
          </div>
          <QRBlock data={qrData} size={80} variant={d.variant} />
        </div>

        {/* Footer */}
        <div className={`mt-3 flex items-center justify-between text-[9px] ${v.footerText}`}>
          <span className="font-mono">Issued {d.issuedAt}</span>
          <span>Intinuous · intinuous.com</span>
        </div>
      </div>
    </motion.div>
  );
}
