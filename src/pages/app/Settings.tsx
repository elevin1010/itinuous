import { useState } from "react";
import { InfoCard } from "@/components/app/InfoCard";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { mockUser } from "@/data/mockDashboard";

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Profile, communication, and legal</p>
      </div>

      {/* Profile */}
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Profile</p>
        <InfoCard label="Display Name" value={mockUser.displayName} />
        <InfoCard label="Email" value={mockUser.email} />
      </div>

      <Separator />

      {/* Communication */}
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Communication Preferences</p>
        {[
          { label: "Email notifications for verification events", checked: emailNotifications, onChange: setEmailNotifications },
          { label: "Marketing and product update emails", checked: marketingEmails, onChange: setMarketingEmails },
        ].map(pref => (
          <div key={pref.label} className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3">
            <span className="text-sm text-foreground">{pref.label}</span>
            <Switch checked={pref.checked} onCheckedChange={pref.onChange} />
          </div>
        ))}
        <Button size="sm" onClick={() => toast.success("Preferences saved")}>Save Preferences</Button>
      </div>

      <Separator />

      {/* Legal links */}
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Legal & Support</p>
        <div className="flex flex-wrap gap-4">
          {[
            { label: "Terms of Service", href: "/legal" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Contact Support", href: "/contact" },
          ].map(link => (
            <a key={link.label} href={link.href} className="text-sm text-primary hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
