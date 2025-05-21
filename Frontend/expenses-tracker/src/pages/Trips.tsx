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
import { Button } from "../components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Checkbox } from "../components/ui/checkbox";
import { Home, User, CheckSquare, Settings, Filter, Heart, MoreVertical, PlusCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Trips = () => {
  const trips = [
    { id: 1, destination: "Paris", date: "May 5, 2025", cost: "€300.00", status: "Upcoming" },
    { id: 2, destination: "Berlin", date: "May 10, 2025", cost: "€450.00", status: "Ongoing" },
    { id: 3, destination: "Rome", date: "May 12, 2025", cost: "€220.00", status: "Completed" },
    { id: 4, destination: "Madrid", date: "May 20, 2025", cost: "€180.00", status: "Upcoming" },
    { id: 5, destination: "Lisbon", date: "May 22, 2025", cost: "€400.00", status: "Cancelled" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "upcoming":
        return <span className="px-3 py-1 text-xs text-white rounded-full bg-purple-600">Upcoming</span>;
      case "ongoing":
        return <span className="px-3 py-1 text-xs text-white rounded-full bg-green-600">Ongoing</span>;
      case "completed":
        return <span className="px-3 py-1 text-xs text-white rounded-full bg-blue-600">Completed</span>;
      case "cancelled":
        return <span className="px-3 py-1 text-xs text-white rounded-full bg-red-600">Cancelled</span>;
      default:
        return <span>{status}</span>;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-slate-950 text-white">
        {/* Sidebar */}
        <div className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col">
          <SidebarHeader className="flex flex-col items-center py-6 border-b border-slate-800">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100">
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <span className="mt-3 text-base font-medium text-blue-400">User Name</span>
          </SidebarHeader>

          <SidebarContent className="flex-1">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/" className="flex items-center px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-md">
                        <Home className="mr-3 h-5 w-5 text-blue-400" />
                        <span>Home</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/expenses" className="flex items-center px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-md">
                        <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded mr-3">
                          <span className="text-xs font-bold">$</span>
                        </div>
                        <span>Expenses</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/Approvals" className="flex items-center px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-md">
                        <CheckSquare className="mr-3 h-5 w-5 text-blue-400" />
                        <span>Approvals</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive>
                      <Link href="/Trips" className="flex items-center px-4 py-3 bg-blue-600 text-white rounded-md">
                        <div className="mr-3">
                          <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 14L18 11H13L10 8H6L3 11V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18 21L15 15L12 21L9 15L6 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span>Trips</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/settings" className="flex items-center px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-md">
                        <Settings className="mr-3 h-5 w-5 text-blue-400" />
                        <span>Settings</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <div className="p-4 border-t border-slate-800">
            <div className="flex items-center justify-center">
              <span className="text-xs text-blue-400 font-bold">TRACKRECORDS</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Header */}
          <div className="flex justify-between items-center p-4 border-b border-slate-800">
            <h1 className="text-2xl font-bold">Trips</h1>
            <div className="flex gap-3">
              <Button variant="outline" className="border-slate-700 bg-slate-800 hover:bg-slate-700 h-8 w-8 p-0">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-slate-700 bg-slate-800 hover:bg-slate-700 h-8 w-8 p-0">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-slate-700 bg-slate-800 hover:bg-slate-700 h-8 w-8 p-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Trips Table */}
          <div className="flex-1 p-6">
            <div className="bg-slate-900 border border-slate-800 rounded-md overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="text-blue-300">
                    <TableHead className="w-10"><Checkbox /></TableHead>
                    <TableHead>Destination</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Cost</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trips.map((trip) => (
                    <TableRow key={trip.id} className="border-b border-slate-800 hover:bg-slate-800/50">
                      <TableCell><Checkbox /></TableCell>
                      <TableCell className="font-medium">{trip.destination}</TableCell>
                      <TableCell>{trip.date}</TableCell>
                      <TableCell>{trip.cost}</TableCell>
                      <TableCell>{getStatusBadge(trip.status)}</TableCell>
                      <TableCell className="flex gap-2 items-center">
                        <Button variant="ghost" size="icon" className="text-blue-400 hover:bg-slate-700 p-1">
                          👁️
                        </Button>
                        <Button variant="ghost" size="icon" className="text-green-400 hover:bg-slate-700 p-1">
                          ✔️
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-500 hover:bg-slate-700 p-1">
                          ❌
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Trips;
