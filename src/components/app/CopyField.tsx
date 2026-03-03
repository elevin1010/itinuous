import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CopyFieldProps {
  label?: string;
  value: string;
  className?: string;
  mono?: boolean;
}

export function CopyField({ label, value, className, mono = true }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("space-y-1.5", className)}>
      {label && <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>}
      <div className="flex items-center gap-2 rounded-md border border-border bg-muted/50 px-3 py-2">
        <span className={cn("flex-1 text-sm text-foreground truncate", mono && "font-mono text-xs")}>{value}</span>
        <button
          onClick={handleCopy}
          className="shrink-0 rounded p-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
