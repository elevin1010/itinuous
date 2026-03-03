import { cn } from "@/lib/utils";
import { ShieldCheck, ShieldAlert } from "lucide-react";

type BadgeStatus = 'active' | 'revoked' | 'expired';
type BadgeTheme = 'dark' | 'light';

interface IntinuousBadgeProps {
  status?: BadgeStatus;
  theme?: BadgeTheme;
  size?: 'sm' | 'md';
  className?: string;
}

export function IntinuousBadge({ status = 'active', theme = 'dark', size = 'md', className }: IntinuousBadgeProps) {
  const isActive = status === 'active';
  const Icon = isActive ? ShieldCheck : ShieldAlert;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border font-medium",
        size === 'sm' ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm",
        theme === 'dark'
          ? isActive
            ? "bg-card border-primary/30 text-primary"
            : "bg-card border-border text-muted-foreground"
          : isActive
            ? "bg-foreground/5 border-primary/30 text-primary"
            : "bg-foreground/5 border-border text-muted-foreground",
        className
      )}
    >
      <Icon className={cn(size === 'sm' ? "h-3.5 w-3.5" : "h-4 w-4")} />
      {isActive ? "Verified by Intinuous" : status === 'revoked' ? "Verification Revoked" : "Verification Expired"}
    </span>
  );
}
