// pages/approvals.tsx

import {Sidebar,SidebarContent,SidebarGroup,SidebarGroupContent,SidebarHeader,SidebarMenu,SidebarMenuButton,SidebarMenuItem,SidebarProvider,} from "../components/ui/sidebar";
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from "../components/ui/table";
import { Button } from "../components/ui/button";
import {Home,CheckSquare,Settings,User,Filter,MoreVertical,Eye,Check,X,} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Checkbox } from "../components/ui/checkbox";

const Approval = () => {
    const approvals = [
      { owner: "Samson Zap", category: "Food", amount: "€250.00", frequency: "Once" },
      { owner: "Jessica Bowers", category: "Travel", amount: "€150.00", frequency: "Once" },
      { owner: "John Wilson", category: "Food", amount: "€75.50", frequency: "Monthly" },
      { owner: "Hannah Gomez", category: "Softwares", amount: "€400.25", frequency: "Bi-Monthly" },
      { owner: "Laura Polis", category: "Food", amount: "€200.00", frequency: "Monthly" },
      { owner: "Barbara Jones", category: "Softwares", amount: "€100.00", frequency: "Once" },
      { owner: "Zach Moss", category: "Travel", amount: "€30.00", frequency: "Bi-Monthly" },
    ];
  
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
                      <SidebarMenuButton asChild isActive>
                        <Link href="/approvals" className="flex items-center px-4 py-3 bg-blue-600 text-white rounded-md">
                          <CheckSquare className="mr-3 h-5 w-5 text-white" />
                          <span>Approvals</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
  
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/Trips" className="flex items-center px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-md">
                          <svg className="h-5 w-5 text-blue-400 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 14L18 11H13L10 8H6L3 11V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18 21L15 15L12 21L9 15L6 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
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
  
            <div className="p-4 border-t border-slate-800 text-center">
              <span className="text-xs text-blue-400 font-bold">TRACKRECORD</span>
            </div>
          </div>
  
          {/* Main Content */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Approval</h1>
              <div className="flex gap-3">
                <Button variant="outline" className="border-slate-700 bg-slate-800 hover:bg-slate-700 h-8 w-8 p-0">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-slate-700 bg-slate-800 hover:bg-slate-700 h-8 w-8 p-0">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
  
            <div className="border border-slate-700 rounded-md overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-900">
                    <TableHead className="w-10">
                      <Checkbox className="border-slate-600" />
                    </TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {approvals.map((item, index) => (
                    <TableRow key={index} className="bg-slate-800 border-t border-slate-700">
                      <TableCell><Checkbox className="border-slate-600" /></TableCell>
                      <TableCell>{item.owner}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.amount}</TableCell>
                      <TableCell>{item.frequency}</TableCell>
                      <TableCell className="flex justify-center gap-4 text-blue-400">
                        <Eye className="cursor-pointer hover:text-blue-200" />
                        <Check className="text-green-500 cursor-pointer hover:text-green-300" />
                        <X className="text-red-500 cursor-pointer hover:text-red-300" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </SidebarProvider>
    );
  };
  
  export default Approval;
  