// components/layout/sidebar-layout.tsx
import { SidebarProvider } from "../ui/sidebar";
import { Sidebar } from "../ui/sidebar";
import { ReactNode } from "react";

export default function SidebarLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-slate-950 text-white">
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <div className="flex-1 flex flex-col">{children}</div>
      </div>
    </SidebarProvider>
  );
}
