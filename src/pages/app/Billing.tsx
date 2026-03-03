import { InfoCard } from "@/components/app/InfoCard";
import { StatusBadge } from "@/components/app/StatusBadge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { mockUser } from "@/data/mockDashboard";
import { CreditCard } from "lucide-react";
import { toast } from "sonner";

export default function Billing() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Billing</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your subscription and plan</p>
      </div>

      <InfoCard
        label="Current Plan"
        value={
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-foreground">{mockUser.plan}</span>
              <StatusBadge status="active" label="Active" />
            </div>
            <p className="text-sm text-muted-foreground">
              Current period ends {new Date(mockUser.currentPeriodEnd).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        }
        action={
          <Button size="sm" className="gap-2" onClick={() => toast.info("Stripe billing portal would open here")}>
            <CreditCard className="h-3.5 w-3.5" /> Manage Subscription
          </Button>
        }
      />

      <Separator />

      <div className="space-y-3">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">What's Included</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Identity verification & attestation",
            "Public proof page & badge",
            "Up to 10 verified assets",
            "On-chain anchoring",
            "Certificate generation",
            "Priority support",
          ].map(feature => (
            <div key={feature} className="flex items-center gap-2 text-sm text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
