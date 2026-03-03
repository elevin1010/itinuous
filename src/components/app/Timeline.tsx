import { cn } from "@/lib/utils";
import {
  User, ShieldCheck, ShieldAlert, Anchor, Upload, XCircle, Play
} from "lucide-react";
import type { ActivityEventType } from "@/data/mockDashboard";

interface TimelineItem {
  id: string;
  type: ActivityEventType;
  description: string;
  timestamp: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const iconMap: Record<ActivityEventType, typeof User> = {
  identity_created: User,
  verification_initiated: Play,
  verification_passed: ShieldCheck,
  verification_failed: ShieldAlert,
  attestation_anchored: Anchor,
  asset_uploaded: Upload,
  proof_revoked: XCircle,
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative space-y-0", className)}>
      {items.map((item, i) => {
        const Icon = iconMap[item.type] || User;
        const isLast = i === items.length - 1;
        return (
          <div key={item.id} className="relative flex gap-4 pb-6">
            {!isLast && (
              <div className="absolute left-[17px] top-9 h-[calc(100%-24px)] w-px bg-border" />
            )}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card">
              <Icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="pt-1.5">
              <p className="text-sm text-foreground">{item.description}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {new Date(item.timestamp).toLocaleDateString('en-US', {
                  month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
