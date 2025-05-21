"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "../components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Settings, Home, FileText, CheckSquare, BarChart, User } from "lucide-react";
import Link from "next/link";
import UserName from "@/components/UserName";
import LogoutButton from "@/components/LogoutButton";
import { Separator } from "@/components/ui/separator";

const SettingsPage = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-slate-950 text-white">
        {/* Sidebar */}
        <Sidebar className="border-r border-slate-800 w-64">
          <SidebarHeader className="flex flex-col items-center py-6 border-b border-slate-800">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600">
              <User className="h-8 w-8 text-white" />
            </div>
            <UserName />
            <span className="text-xs text-slate-400">Administrator</span>
          </SidebarHeader>
          <SidebarContent className="py-4">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/dashboard" className="flex items-center px-4 py-3 w-full hover:bg-slate-800 rounded-md">
                        <Home className="mr-3 h-5 w-5 text-blue-400" />
                        <span>Home</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/expenses" className="flex items-center px-4 py-3 w-full hover:bg-slate-800 rounded-md">
                        <FileText className="mr-3 h-5 w-5 text-blue-400" />
                        <span>Expenses</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/Approvals" className="flex items-center px-4 py-3 w-full hover:bg-slate-800 rounded-md">
                        <CheckSquare className="mr-3 h-5 w-5 text-blue-400" />
                        <span>Approvals</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/Trips" className="flex items-center px-4 py-3 w-full hover:bg-slate-800 rounded-md">
                        <BarChart className="mr-3 h-5 w-5 text-blue-400" />
                        <span>Trips</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive>
                      <Link href="/settings" className="flex items-center px-4 py-3 w-full bg-slate-800 rounded-md">
                        <Settings className="mr-3 h-5 w-5 text-blue-400" />
                        <span>Settings</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Page Content */}
        <div className="flex-1 p-6 bg-slate-950">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Settings</h1>
              <p className="text-slate-400">Manage your account settings and preferences.</p>
            </div>
            <div className="flex gap-2">
              <Link href="/auth/profile">
                <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-9 px-4 py-2 has-[>svg]:px-3 bg-blue-600 hover:bg-blue-700 border-none">
                  Profile
                </Button>
              </Link>
              <LogoutButton />
            </div>
          </div>

          {/* Account Settings Section */}
          <Card className="mb-8 bg-slate-900 border-slate-800">
            <CardHeader className="border-b border-slate-800 px-6 py-4">
              <CardTitle className="text-lg font-medium">Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Change Password</p>
                  <p className="text-sm text-slate-400">Update your account password.</p>
                </div>
                <Button variant="outline">Change</Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Update Email</p>
                  <p className="text-sm text-slate-400">Change the email associated with your account.</p>
                </div>
                <Button variant="outline">Update</Button>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings Section */}
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="border-b border-slate-800 px-6 py-4">
              <CardTitle className="text-lg font-medium">Notifications</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enable Alerts</p>
                  <p className="text-sm text-slate-400">Receive updates about important activity.</p>
                </div>
                <Button variant="outline">Enable</Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Notification Preferences</p>
                  <p className="text-sm text-slate-400">Customize when and how you're notified.</p>
                </div>
                <Button variant="outline">Manage</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarProvider>
  );

};
export default SettingsPage;
