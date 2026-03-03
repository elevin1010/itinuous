import { useNavigate } from "react-router-dom";
import { ShieldCheck, FileCheck, Upload, Copy, ExternalLink, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/app/StatusBadge";
import { MetricCard } from "@/components/app/MetricCard";
import { InfoCard } from "@/components/app/InfoCard";
import { mockUser, mockAttestations, mockAssets } from "@/data/mockDashboard";
import { toast } from "sonner";

export default function Overview() {
  const navigate = useNavigate();
  const latestAttestation = mockAttestations[0];

  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Overview</h1>
        <p className="text-sm text-muted-foreground mt-1">Welcome back, {mockUser.displayName}</p>
      </div>

      {/* Status cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricCard
          icon={ShieldCheck}
          label="Verification"
          value="Active"
          subtext="Verified Feb 15, 2026"
        />
        <MetricCard
          icon={FileCheck}
          label="Attestations"
          value={mockAttestations.length}
          subtext={`${mockAttestations.filter(a => a.status === 'active').length} active`}
        />
        <MetricCard
          icon={BarChart3}
          label="Plan"
          value={mockUser.plan}
          subtext={`Renews ${new Date(mockUser.currentPeriodEnd).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`}
        />
      </div>

      {/* Verification status */}
      <InfoCard
        label="Identity Status"
        value={
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <StatusBadge status="verified" />
              <span className="text-sm text-muted-foreground font-mono">{mockUser.publicId}</span>
            </div>
          </div>
        }
      />

      {/* Latest attestation */}
      {latestAttestation && (
        <InfoCard
          label="Latest Attestation"
          value={
            <div className="space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <StatusBadge status={latestAttestation.status as any} />
                <span className="text-xs text-muted-foreground font-mono">{latestAttestation.id}</span>
                <span className="text-xs text-muted-foreground">
                  {new Date(latestAttestation.issuedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{latestAttestation.verificationMethod} · {latestAttestation.issuer}</p>
            </div>
          }
          action={
            <Button variant="outline" size="sm" onClick={() => navigate("/app/attestations")}>
              View all attestations
            </Button>
          }
        />
      )}

      {/* Quick actions */}
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Quick Actions</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" size="sm" className="gap-2" onClick={() => navigate("/app/identities")}>
            <ExternalLink className="h-3.5 w-3.5" /> View Certificate
          </Button>
          <Button variant="outline" size="sm" className="gap-2" onClick={() => {
            navigator.clipboard.writeText(`https://proof.intinuous.com/${mockUser.publicId}`);
            toast.success("Public proof link copied");
          }}>
            <Copy className="h-3.5 w-3.5" /> Copy Public Proof Link
          </Button>
          <Button variant="outline" size="sm" className="gap-2" onClick={() => navigate("/app/assets")}>
            <Upload className="h-3.5 w-3.5" /> Upload Asset
          </Button>
        </div>
      </div>
    </div>
  );
}
