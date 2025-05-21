import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "../components/ui/sidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Button } from "../components/ui/button";
import { Heart, Home, BarChart3, CheckSquare, Settings, User, Filter, MoreVertical, PlusCircle } from "lucide-react";
import { Checkbox } from "../components/ui/checkbox";
import Link from "next/link";
import { useState } from "react";

const ExpensesPage = () => {
  const [activeTab, setActiveTab] = useState('details');
  
  const expenses = [
    { 
      id: 1,
      title: "Food Catering", 
      merchant: "Food", 
      amount: "€250.00", 
      reportDate: "November, 2022", 
      status: "Not Submitted" 
    },
    { 
      id: 2, 
      title: "Office Supplies", 
      merchant: "Office", 
      amount: "€150.00", 
      reportDate: "November, 2022", 
      status: "pending" 
    },
    { 
      id: 3, 
      title: "Business Lunch", 
      merchant: "Restaurant", 
      amount: "€75.50", 
      reportDate: "November, 2022", 
      status: "done" 
    },
    { 
      id: 4, 
      title: "Travel Expenses", 
      merchant: "Airlines", 
      amount: "€400.25", 
      reportDate: "November, 2022", 
      status: "urgent" 
    },
    { 
      id: 5, 
      title: "Client Dinner", 
      merchant: "Bistro", 
      amount: "€200.00", 
      reportDate: "November, 2022", 
      status: "paid" 
    },
    { 
      id: 6, 
      title: "Accommodation", 
      merchant: "Hotel", 
      amount: "€100.00", 
      reportDate: "November, 2022", 
      status: "pending" 
    },
    { 
      id: 7, 
      title: "News Subscription", 
      merchant: "News", 
      amount: "€30.00", 
      reportDate: "November, 2022", 
      status: "pending" 
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return <span className="px-3 py-1 text-white text-xs rounded-full bg-purple-600">pending</span>;
      case "done":
        return <span className="px-3 py-1 text-white text-xs rounded-full bg-orange-500">done</span>;
      case "urgent":
        return <span className="px-3 py-1 text-white text-xs rounded-full bg-red-600">urgent</span>;
      case "paid":
        return <span className="px-3 py-1 text-white text-xs rounded-full bg-green-500">paid</span>;
      case "not submitted":
        return <span className="text-white">Not Submitted</span>;
      default:
        return <span>{status}</span>;
    }
  };
  const tabs = [
    { id: 'details', label: 'Details' },
    { id: 'merchant', label: 'Merchant' },
    { id: 'amount', label: 'Amount' },
    { id: 'report', label: 'Report' },
    { id: 'status', label: 'Status' },
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
                    <SidebarMenuButton asChild isActive>
                      <Link href="/expenses" className="flex items-center px-4 py-3 bg-blue-600 text-white rounded-md">
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
                    <SidebarMenuButton asChild>
                      <Link href="/Trips" className="flex items-center px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-md">
                        <div className="mr-3">
                          <svg className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <h1 className="text-2xl font-bold">Expenses</h1>
            <div className="flex gap-3">
            <Link href="/NewExpense">
              <Button className="bg-green-600 hover:bg-green-700 text-xs flex items-center gap-1 h-8 px-3">
                <PlusCircle className="h-4 w-4" />
                New Expense
              </Button>
            </Link>
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

          {/* Expenses Table */}
          <div className="flex-1 p-6">
            <div className="bg-slate-900 border border-slate-800 rounded-md overflow-hidden">
              {/* Table Tabs */}
              <div className="flex border-b border-slate-800">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`px-6 py-3 text-sm ${activeTab === tab.id ? 'border-b-2 border-purple-600' : 'text-slate-400'}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              
              {/* Table Content */}
              <div>
                <Table>
                  <TableBody>
                    {expenses.map((expense) => (
                      <TableRow key={expense.id} className="border-b border-slate-800 hover:bg-slate-800/50">
                        <TableCell className="w-10">
                          <Checkbox id={`select-${expense.id}`} className="border-slate-700" />
                        </TableCell>
                        <TableCell className="font-medium">{expense.title}</TableCell>
                        <TableCell>{expense.merchant}</TableCell>
                        <TableCell>{expense.amount}</TableCell>
                        <TableCell>{expense.reportDate}</TableCell>
                        <TableCell>{getStatusBadge(expense.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ExpensesPage;