import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface InfoCardProps {
  label: string;
  value: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function InfoCard({ label, value, action, className }: InfoCardProps) {
  return (
    <div className={cn("rounded-lg border border-border bg-card p-5", className)}>
      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}</p>
      <div className="text-foreground text-sm">{value}</div>
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}
