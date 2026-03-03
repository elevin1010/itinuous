import { DataTable } from "@/components/app/DataTable";
import { StatusBadge } from "@/components/app/StatusBadge";
import { EmptyState } from "@/components/app/EmptyState";
import { Button } from "@/components/ui/button";
import { mockAssets, type Asset } from "@/data/mockDashboard";
import { Upload, ShieldCheck, XCircle, Globe, FolderOpen } from "lucide-react";
import { toast } from "sonner";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger
} from "@/components/ui/alert-dialog";

export default function Assets() {
  const columns = [
    { key: 'filename', header: 'Filename', render: (a: Asset) => <span className="font-medium">{a.filename}</span> },
    { key: 'type', header: 'Type', render: (a: Asset) => <span className="uppercase text-xs text-muted-foreground">{a.type}</span> },
    { key: 'hash', header: 'Hash', render: (a: Asset) => <span className="font-mono text-xs">{a.hash}</span> },
    { key: 'status', header: 'Status', render: (a: Asset) => <StatusBadge status={a.status as any} /> },
    { key: 'size', header: 'Size', render: (a: Asset) => <span className="text-muted-foreground">{a.size}</span> },
    { key: 'date', header: 'Uploaded', render: (a: Asset) => new Date(a.uploadedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Assets</h1>
        <p className="text-sm text-muted-foreground mt-1">Upload and manage verified assets</p>
      </div>

      {/* Upload area */}
      <div className="rounded-lg border-2 border-dashed border-border bg-card/50 p-8 text-center hover:border-primary/30 transition-colors">
        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
        <p className="text-sm text-foreground mb-1">Drag and drop files here</p>
        <p className="text-xs text-muted-foreground mb-4">Supports image, PDF, audio, and video files</p>
        <Button size="sm" variant="outline" onClick={() => toast.info("File picker would open here")}>
          Browse Files
        </Button>
      </div>

      {mockAssets.length > 0 ? (
        <DataTable
          columns={columns}
          data={mockAssets}
          actions={(a) => (
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => toast.success("Asset verification initiated")}>
                <ShieldCheck className="h-3.5 w-3.5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => toast.info("Viewing public proof")}>
                <Globe className="h-3.5 w-3.5" />
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive-foreground">
                    <XCircle className="h-3.5 w-3.5" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Revoke asset?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will revoke the public proof for {a.filename}. This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => toast.success("Asset revoked")}>Revoke</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          )}
        />
      ) : (
        <EmptyState icon={FolderOpen} title="No assets yet" description="Upload your first asset to get started with verified proof." actionLabel="Upload Asset" onAction={() => {}} />
      )}
    </div>
  );
}
