import CertificatePreview2 from '@/components/CertificatePreview2';

export default function CertificateDemo2() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center gap-10 p-6">
      <h2 className="text-xl font-light uppercase tracking-[0.2em] text-primary">
        Certificate V2 — Norwegian Passport Style
      </h2>
      <CertificatePreview2
        photoUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop&crop=face"
      />
    </main>
  );
}
