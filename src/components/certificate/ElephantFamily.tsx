import elephantsImg from '@/assets/elephants_gradient2.png';

export default function ElephantFamily({ hash, width, height }: { hash: string; width: number; height: number }) {
  return (
    <img
      src={elephantsImg}
      alt=""
      className="absolute bottom-0 left-0 pointer-events-none"
      style={{ width: '58%' }}
    />
  );
}
