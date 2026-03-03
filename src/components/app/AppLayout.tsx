import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { AppTopBar } from "./AppTopBar";
import { PasswordGate } from "./PasswordGate";

export function AppLayout() {
  return (
    <PasswordGate>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <AppTopBar />
          <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </PasswordGate>
  );
}
