import CertificatePreview from '@/components/CertificatePreview';

export default function CertificateDemo() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center gap-12 p-6">
      <h2 className="text-xl font-light uppercase tracking-[0.2em] text-primary">Dark Variant</h2>
      <CertificatePreview
        photoUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop&crop=face"
        variant="dark"
      />

      <h2 className="text-xl font-light uppercase tracking-[0.2em] text-primary mt-8">Light Variant</h2>
      <CertificatePreview
        photoUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop&crop=face"
        variant="light"
      />
    </main>
  );
}
