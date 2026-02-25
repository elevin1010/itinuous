import elephantsImg from '@/assets/elephants_gradient2.png';
import type { CertVariant } from '../CertificatePreview';

export default function ElephantFamily({ hash, width, height, variant = 'dark' }: { hash: string; width: number; height: number; variant?: CertVariant }) {
  return (
    <img
      src={elephantsImg}
      alt=""
      className={`absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none ${variant === 'light' ? 'opacity-30' : 'opacity-50'}`}
      style={{ width: '70%', marginBottom: '-60px' }}
    />
  );
}
