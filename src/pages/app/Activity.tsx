import { Timeline } from "@/components/app/Timeline";
import { mockActivity } from "@/data/mockDashboard";

export default function ActivityPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Activity</h1>
        <p className="text-sm text-muted-foreground mt-1">Chronological feed of key events</p>
      </div>

      <Timeline items={mockActivity} />
    </div>
  );
}
