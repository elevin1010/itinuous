export default function SubjectPhoto({ url }: { url: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[160px] h-[160px] border border-primary/40 overflow-hidden bg-muted/20">
        <img src={url} alt="Subject" className="w-full h-full object-cover" />
      </div>
      <p className="text-[9px] font-mono text-muted-foreground/50 mt-1.5 uppercase tracking-wider">
        Subject Photo
      </p>
    </div>
  );
}
