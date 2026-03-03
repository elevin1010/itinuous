import { cn } from "@/lib/utils";

type StatusVariant = 'active' | 'verified' | 'pending' | 'revoked' | 'expired';

interface StatusBadgeProps {
  status: StatusVariant;
  label?: string;
  className?: string;
}

const variantStyles: Record<StatusVariant, string> = {
  active: 'bg-primary/15 text-primary border-primary/30',
  verified: 'bg-primary/15 text-primary border-primary/30',
  pending: 'bg-muted text-muted-foreground border-border',
  revoked: 'bg-destructive/15 text-destructive-foreground border-destructive/30',
  expired: 'bg-muted text-muted-foreground border-border',
};

const defaultLabels: Record<StatusVariant, string> = {
  active: 'Active',
  verified: 'Verified',
  pending: 'Pending',
  revoked: 'Revoked',
  expired: 'Expired',
};

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide uppercase",
        variantStyles[status],
        className
      )}
    >
      <span className={cn(
        "h-1.5 w-1.5 rounded-full",
        (status === 'active' || status === 'verified') && "bg-primary",
        status === 'pending' && "bg-muted-foreground",
        status === 'revoked' && "bg-destructive",
        status === 'expired' && "bg-muted-foreground",
      )} />
      {label || defaultLabels[status]}
    </span>
  );
}
