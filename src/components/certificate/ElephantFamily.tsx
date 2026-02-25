import elephantsImg from '@/assets/elephants_gradient2.png';

export default function ElephantFamily({ hash, width, height }: { hash: string; width: number; height: number }) {
  return (
    <img
      src={elephantsImg}
      alt=""
      className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-50"
      style={{ width: '70%', marginBottom: '-60px' }}
    />
  );
}
