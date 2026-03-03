// Mock data for the Intinuous backend dashboard

export type VerificationStatus = 'pending' | 'verified' | 'revoked';
export type ProofStatus = 'active' | 'revoked' | 'expired';
export type AttestationType = 'identity' | 'asset' | 'composite';
export type AssetType = 'image' | 'pdf' | 'audio' | 'video';
export type ActivityEventType =
  | 'identity_created'
  | 'verification_initiated'
  | 'verification_passed'
  | 'verification_failed'
  | 'attestation_anchored'
  | 'asset_uploaded'
  | 'proof_revoked';

export interface UserProfile {
  id: string;
  displayName: string;
  email: string;
  publicId: string;
  verificationStatus: VerificationStatus;
  plan: string;
  planStatus: 'active' | 'past_due' | 'canceled';
  currentPeriodEnd: string;
  lastLogin: string;
  createdAt: string;
}

export interface Attestation {
  id: string;
  type: AttestationType;
  status: ProofStatus;
  issuedAt: string;
  canonicalHash: string;
  issuer: string;
  verificationMethod: string;
  chainId?: string;
  txHash?: string;
  anchorMetadata?: string;
}

export interface Asset {
  id: string;
  filename: string;
  type: AssetType;
  hash: string;
  status: ProofStatus;
  uploadedAt: string;
  size: string;
}

export interface ActivityEvent {
  id: string;
  type: ActivityEventType;
  description: string;
  timestamp: string;
  metadata?: string;
}

export interface Session {
  id: string;
  device: string;
  browser: string;
  ip: string;
  lastActive: string;
  current: boolean;
}

export const mockUser: UserProfile = {
  id: 'usr_8f42b1c3',
  displayName: 'Alex Rivera',
  email: 'alex@example.com',
  publicId: 'int_proof_7x9k2m',
  verificationStatus: 'verified',
  plan: 'Intinuous Proof',
  planStatus: 'active',
  currentPeriodEnd: '2026-04-03',
  lastLogin: '2026-03-03T14:22:00Z',
  createdAt: '2025-11-15T09:00:00Z',
};

export const mockAttestations: Attestation[] = [
  {
    id: 'att_001',
    type: 'identity',
    status: 'active',
    issuedAt: '2026-02-15T10:30:00Z',
    canonicalHash: 'sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    issuer: 'Intinuous Attestation Authority',
    verificationMethod: 'Biometric + Document',
    chainId: 'ethereum',
    txHash: '0x1a2b3c4d5e6f...',
    anchorMetadata: 'Block #19234567',
  },
  {
    id: 'att_002',
    type: 'asset',
    status: 'active',
    issuedAt: '2026-02-20T14:00:00Z',
    canonicalHash: 'sha256:a7ffc6f8bf1ed76651c14756a061d662f580ff4de43b49fa82d80a4b80f8434a',
    issuer: 'Intinuous Attestation Authority',
    verificationMethod: 'Content Hash + Identity Bind',
  },
  {
    id: 'att_003',
    type: 'composite',
    status: 'revoked',
    issuedAt: '2026-01-10T08:00:00Z',
    canonicalHash: 'sha256:d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592',
    issuer: 'Intinuous Attestation Authority',
    verificationMethod: 'Multi-factor Composite',
  },
];

export const mockAssets: Asset[] = [
  {
    id: 'ast_001',
    filename: 'headshot-official.jpg',
    type: 'image',
    hash: 'sha256:9f86d08...',
    status: 'active',
    uploadedAt: '2026-02-18T12:00:00Z',
    size: '2.4 MB',
  },
  {
    id: 'ast_002',
    filename: 'voice-sample.mp3',
    type: 'audio',
    hash: 'sha256:a3c2b1e...',
    status: 'active',
    uploadedAt: '2026-02-22T09:15:00Z',
    size: '8.1 MB',
  },
  {
    id: 'ast_003',
    filename: 'brand-guidelines.pdf',
    type: 'pdf',
    hash: 'sha256:f4e5d6c...',
    status: 'expired',
    uploadedAt: '2025-12-01T16:30:00Z',
    size: '1.7 MB',
  },
];

export const mockActivity: ActivityEvent[] = [
  { id: 'ev_001', type: 'asset_uploaded', description: 'Uploaded voice-sample.mp3', timestamp: '2026-02-22T09:15:00Z' },
  { id: 'ev_002', type: 'attestation_anchored', description: 'Asset attestation anchored on-chain', timestamp: '2026-02-20T14:00:00Z' },
  { id: 'ev_003', type: 'asset_uploaded', description: 'Uploaded headshot-official.jpg', timestamp: '2026-02-18T12:00:00Z' },
  { id: 'ev_004', type: 'verification_passed', description: 'Identity verification completed', timestamp: '2026-02-15T10:30:00Z' },
  { id: 'ev_005', type: 'verification_initiated', description: 'Identity verification started', timestamp: '2026-02-15T09:00:00Z' },
  { id: 'ev_006', type: 'identity_created', description: 'Account and identity created', timestamp: '2025-11-15T09:00:00Z' },
];

export const mockSessions: Session[] = [
  { id: 'sess_001', device: 'MacBook Pro', browser: 'Chrome 122', ip: '192.168.1.***', lastActive: '2026-03-03T14:22:00Z', current: true },
  { id: 'sess_002', device: 'iPhone 16', browser: 'Safari', ip: '10.0.0.***', lastActive: '2026-03-02T20:10:00Z', current: false },
];
