import { useState } from "react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/app/StatusBadge";
import { InfoCard } from "@/components/app/InfoCard";
import { CopyField } from "@/components/app/CopyField";
import { Timeline } from "@/components/app/Timeline";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { mockUser, mockActivity } from "@/data/mockDashboard";
import { toast } from "sonner";

export default function Identities() {
  const [includeName, setIncludeName] = useState(true);
  const [includeBirthdate, setIncludeBirthdate] = useState(false);
  const [includePhoto, setIncludePhoto] = useState(true);

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Identities</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your verified identity and certificate preferences</p>
      </div>

      {/* Primary identity */}
      <InfoCard
        label="Primary Identity"
        value={
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <StatusBadge status={mockUser.verificationStatus as any} />
              <span className="text-foreground font-medium">{mockUser.displayName}</span>
            </div>
          </div>
        }
      />

      <CopyField label="Public ID" value={mockUser.publicId} />

      <Separator />

      {/* Certificate preferences */}
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Certificate Preferences</p>
        <div className="space-y-4">
          {[
            { label: "Include name on certificate", checked: includeName, onChange: setIncludeName },
            { label: "Include birthdate", checked: includeBirthdate, onChange: setIncludeBirthdate },
            { label: "Include private photo", checked: includePhoto, onChange: setIncludePhoto },
          ].map(pref => (
            <div key={pref.label} className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3">
              <span className="text-sm text-foreground">{pref.label}</span>
              <Switch checked={pref.checked} onCheckedChange={pref.onChange} />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button size="sm" onClick={() => toast.success("Preferences saved")}>Save Preferences</Button>
          <Button variant="outline" size="sm" onClick={() => toast.success("Private certificate generated")}>Generate Certificate</Button>
          <Button variant="outline" size="sm" onClick={() => toast.success("Certificate downloaded")}>Download Certificate</Button>
        </div>
      </div>

      <Separator />

      {/* Verification timeline */}
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Verification Timeline</p>
        <Timeline items={mockActivity.filter(e => ['identity_created', 'verification_initiated', 'verification_passed', 'verification_failed'].includes(e.type))} />
      </div>
    </div>
  );
}
