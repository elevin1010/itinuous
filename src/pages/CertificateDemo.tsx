import CertificatePreview from '@/components/CertificatePreview';

export default function CertificateDemo() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center gap-12 p-6">
      {/* Certificate with headshot */}
      <CertificatePreview
        photoUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop&crop=face"
      />

      {/* Certificate without headshot */}
      <CertificatePreview
        verificationHash="0xb1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2"
        transactionHash="0xf9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a6f5e4d3c2b1a0f9e8"
        subjectId="B-4421907765"
        issuedAt="2026-02-15T09:45:22.000Z"
      />
    </main>
  );
}
