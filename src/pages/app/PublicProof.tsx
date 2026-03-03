import { StatusBadge } from "@/components/app/StatusBadge";
import { CopyField } from "@/components/app/CopyField";
import { IntinuousBadge } from "@/components/app/IntinuousBadge";
import { InfoCard } from "@/components/app/InfoCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { mockUser } from "@/data/mockDashboard";
import { toast } from "sonner";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger
} from "@/components/ui/alert-dialog";

export default function PublicProof() {
  const proofUrl = `https://proof.intinuous.com/${mockUser.publicId}`;
  const embedCode = `<div data-badge-id="${mockUser.publicId}" data-theme="dark" data-size="md"></div>\n<script src="https://cdn.intinuous.com/badge.js" async></script>`;

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Public Proof</h1>
        <p className="text-sm text-muted-foreground mt-1">Share and embed your verified status</p>
      </div>

      {/* Current state */}
      <InfoCard
        label="Proof Status"
        value={
          <div className="flex items-center gap-3">
            <StatusBadge status="active" label="Active" />
            <span className="text-sm text-muted-foreground">Public proof is live and verifiable</span>
          </div>
        }
      />

      {/* Public proof URL */}
      <CopyField label="Public Proof URL" value={proofUrl} />

      <Separator />

      {/* Badge preview */}
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Badge Preview</p>
        <div className="flex flex-wrap gap-4 items-center">
          <IntinuousBadge status="active" theme="dark" size="md" />
          <IntinuousBadge status="active" theme="dark" size="sm" />
        </div>
        <div className="flex flex-wrap gap-4 items-center rounded-lg bg-foreground/5 p-4">
          <IntinuousBadge status="active" theme="light" size="md" />
          <IntinuousBadge status="active" theme="light" size="sm" />
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <IntinuousBadge status="revoked" theme="dark" size="md" />
          <IntinuousBadge status="expired" theme="dark" size="md" />
        </div>
      </div>

      <Separator />

      {/* Embed code */}
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Embed Code</p>
        <div className="rounded-md border border-border bg-muted/30 p-4 font-mono text-xs text-muted-foreground whitespace-pre overflow-x-auto">
          {embedCode}
        </div>
        <Button variant="outline" size="sm" onClick={() => {
          navigator.clipboard.writeText(embedCode);
          toast.success("Embed code copied");
        }}>
          Copy Embed Code
        </Button>
      </div>

      <Separator />

      {/* Revocation controls */}
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Revocation Controls</p>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" size="sm">Revoke Public Proof</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Revoke public proof?</AlertDialogTitle>
              <AlertDialogDescription>
                This will immediately deactivate your public proof link and all embedded badges. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => toast.success("Public proof revoked")}>Revoke</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
