import { useState } from "react";
import { DataTable } from "@/components/app/DataTable";
import { StatusBadge } from "@/components/app/StatusBadge";
import { CopyField } from "@/components/app/CopyField";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { mockAttestations, type Attestation } from "@/data/mockDashboard";
import { Eye, Download, Globe } from "lucide-react";
import { toast } from "sonner";

export default function Attestations() {
  const [selected, setSelected] = useState<Attestation | null>(null);
  const selectAttestation = (item: Attestation) => setSelected(item);

  const columns = [
    { key: 'id', header: 'ID', render: (a: Attestation) => <span className="font-mono text-xs">{a.id}</span> },
    { key: 'type', header: 'Type', render: (a: Attestation) => <span className="capitalize">{a.type}</span> },
    { key: 'status', header: 'Status', render: (a: Attestation) => <StatusBadge status={a.status as any} /> },
    { key: 'issued', header: 'Issued', render: (a: Attestation) => new Date(a.issuedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) },
    { key: 'chain', header: 'Chain / Tx', render: (a: Attestation) => a.txHash ? <span className="font-mono text-xs">{a.txHash}</span> : <span className="text-muted-foreground">—</span> },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Attestations</h1>
        <p className="text-sm text-muted-foreground mt-1">View and manage your attestation records</p>
      </div>

      <DataTable
        columns={columns}
        data={mockAttestations}
        onRowClick={selectAttestation}
        actions={(a: Attestation) => (
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => selectAttestation(a)}>
              <Eye className="h-3.5 w-3.5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => toast.success("Proof link copied")}>
              <Globe className="h-3.5 w-3.5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => toast.success("Proof artifact downloaded")}>
              <Download className="h-3.5 w-3.5" />
            </Button>
          </div>
        )}
      />

      {/* Detail drawer */}
      <Sheet open={!!selected} onOpenChange={() => setSelected(null)}>
        <SheetContent className="w-full sm:max-w-md overflow-auto">
          {selected && (
            <>
              <SheetHeader>
                <SheetTitle className="font-mono text-sm">{selected.id}</SheetTitle>
              </SheetHeader>
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <StatusBadge status={selected.status as any} />
                  <span className="capitalize text-sm text-foreground">{selected.type} attestation</span>
                </div>
                <Separator />
                <CopyField label="Canonical Hash" value={selected.canonicalHash} />
                <CopyField label="Issuer" value={selected.issuer} mono={false} />
                <div className="space-y-1.5">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Verification Method</p>
                  <p className="text-sm text-foreground">{selected.verificationMethod}</p>
                </div>
                {selected.chainId && (
                  <>
                    <Separator />
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Anchor Metadata</p>
                    <div className="rounded-md border border-border bg-muted/30 p-3 text-xs font-mono text-muted-foreground space-y-1">
                      <p>Chain: {selected.chainId}</p>
                      <p>Tx: {selected.txHash}</p>
                      {selected.anchorMetadata && <p>{selected.anchorMetadata}</p>}
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
