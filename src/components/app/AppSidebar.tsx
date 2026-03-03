import { useNavigate, useLocation } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem,
  SidebarMenuButton, SidebarFooter, SidebarSeparator
} from "@/components/ui/sidebar";
import {
  LayoutDashboard, Users, FileCheck, FolderOpen, Globe, CreditCard,
  Shield, Activity, Settings, LogOut
} from "lucide-react";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, path: "/app" },
  { label: "Identities", icon: Users, path: "/app/identities" },
  { label: "Attestations", icon: FileCheck, path: "/app/attestations" },
  { label: "Assets", icon: FolderOpen, path: "/app/assets" },
  { label: "Public Proof", icon: Globe, path: "/app/proof" },
  { label: "Billing", icon: CreditCard, path: "/app/billing" },
  { label: "Security", icon: Shield, path: "/app/security" },
  { label: "Activity", icon: Activity, path: "/app/activity" },
  { label: "Settings", icon: Settings, path: "/app/settings" },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 group">
          <span className="text-lg font-light tracking-[0.15em] text-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            INTINUOUS
          </span>
        </button>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Proof Dashboard</p>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="px-2 pt-2">
        <SidebarMenu>
          {navItems.map(item => {
            const isActive = location.pathname === item.path ||
              (item.path !== "/app" && location.pathname.startsWith(item.path));
            return (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  isActive={isActive}
                  onClick={() => navigate(item.path)}
                  tooltip={item.label}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => navigate("/")} tooltip="Sign out">
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
