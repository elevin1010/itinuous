import { InfoCard } from "@/components/app/InfoCard";
import { DataTable } from "@/components/app/DataTable";
import { mockUser, mockSessions, type Session } from "@/data/mockDashboard";
import { StatusBadge } from "@/components/app/StatusBadge";
import { Separator } from "@/components/ui/separator";

export default function Security() {
  const columns = [
    { key: 'device', header: 'Device', render: (s: Session) => (
      <div className="flex items-center gap-2">
        <span className="font-medium">{s.device}</span>
        {s.current && <StatusBadge status="active" label="Current" className="text-[10px] px-1.5 py-0" />}
      </div>
    )},
    { key: 'browser', header: 'Browser', render: (s: Session) => s.browser },
    { key: 'ip', header: 'IP Address', render: (s: Session) => <span className="font-mono text-xs">{s.ip}</span> },
    { key: 'lastActive', header: 'Last Active', render: (s: Session) => new Date(s.lastActive).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) },
  ];

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Security</h1>
        <p className="text-sm text-muted-foreground mt-1">Sessions, devices, and account security</p>
      </div>

      <InfoCard
        label="Last Login"
        value={new Date(mockUser.lastLogin).toLocaleDateString('en-US', {
          month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
        })}
      />

      <Separator />

      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Active Sessions</p>
        <DataTable columns={columns} data={mockSessions} />
      </div>

      <Separator />

      <InfoCard
        label="Recovery & Security Notes"
        value={
          <p className="text-sm text-muted-foreground">
            Recovery options and advanced security settings will be available in a future update. Your account is secured through the primary authentication method.
          </p>
        }
      />
    </div>
  );
}
