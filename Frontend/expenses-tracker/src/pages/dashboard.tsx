import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "../components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Avatar } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { SidebarInset } from "../components/ui/sidebar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import MonthlyReportChart from "../components/MonthlyReportChart";
import { BarChart, CheckSquare, FileText, Home, PlusCircle, Settings, User } from "lucide-react";
import Link from "next/link";
import UserName from "@/components/UserName";
import LogoutButton from "@/components/LogoutButton";

const Dashboard = () => {
  const recentExpenses = [
    { id: 1, category: "Office Supplies", employee: "Yourself", status: "Pending", amount: "$120" },
    { id: 2, category: "Office Supplies", employee: "Lisa", status: "Denied", amount: "$70" },
    { id: 3, category: "Travel Expense", employee: "Melissa", status: "Approved", amount: "$210" },
    { id: 4, category: "Client Dinner", employee: "Raymond", status: "Pending", amount: "$180" },
    { id: 5, category: "Hotel", employee: "John", status: "Approved", amount: "$211" },
  ];

  const pendingTasks = [
    { id: 1, text: "Pending Approvals", icon: "⚪" },
    { id: 2, text: "New/Due Expenses", icon: "⭐" },
    { id: 3, text: "Unapproved Expenses", icon: "📄" },
    { id: 4, text: "Upcoming Expenses", icon: "📅" },
    { id: 5, text: "Unexpected Advances", icon: "📦" },
  ];

  const quickAccessActions = [
    { id: 1, label: "+New expense", onClick: () => {} },
    { id: 2, label: "+Add receipt", onClick: () => {} },
    { id: 3, label: "+Create report", onClick: () => {} },
    { id: 4, label: "+Create trip", onClick: () => {} },
  ];

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case "denied":
        return <Badge variant="destructive">Denied</Badge>;
      case "accepted":
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-slate-950 text-white">
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
                    <SidebarMenuButton asChild isActive>
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
                    <SidebarMenuButton asChild>
                      <Link href="/settings" className="flex items-center px-4 py-3 w-full hover:bg-slate-800 rounded-md">
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

        <div className="flex-1 bg-slate-950 p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Home</h1>
            <div className="flex gap-2">
              <Link href="/auth/profile">
                  <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-9 px-4 py-2 has-[>svg]:px-3 bg-blue-600 hover:bg-blue-700 border-none">
                    {/* <PlusCircle className="h-4 w-4" /> */}
                    Profile
                  </Button>
              </Link>
              <Link href="/settings">
                  <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-9 px-4 py-2 has-[>svg]:px-3 bg-blue-600 hover:bg-blue-700 border-none">
                    {/* <PlusCircle className="h-4 w-4" /> */}
                    Settings
                  </Button>
              </Link>
              <LogoutButton />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader className="border-b border-slate-800 px-6 py-4">
                <CardTitle className="text-lg font-medium">Pending Tasks</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="space-y-3">
                  {pendingTasks.map((task) => (
                    <li key={task.id} className="flex items-center gap-3 p-3 bg-slate-800 hover:bg-slate-700 rounded-md cursor-pointer transition-colors">
                      <span className="text-lg">{task.icon}</span>
                      <span>{task.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardHeader className="border-b border-slate-800 px-6 py-4">
                <CardTitle className="text-lg font-medium">Recent Expenses</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-slate-950">
                    <TableRow className="border-slate-800">
                      <TableHead className="text-slate-400">Category</TableHead>
                      <TableHead className="text-slate-400">Employee</TableHead>
                      <TableHead className="text-slate-400">Status</TableHead>
                      <TableHead className="text-slate-400 text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentExpenses.map((expense) => (
                      <TableRow key={expense.id} className="border-slate-800">
                        <TableCell className="font-medium">{expense.category}</TableCell>
                        <TableCell>{expense.employee}</TableCell>
                        <TableCell>{getStatusBadge(expense.status)}</TableCell>
                        <TableCell className="text-right">{expense.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
{/* 

          <Card className="mb-8 bg-slate-900 border-slate-800">
            <CardHeader className="border-b border-slate-800 px-6 py-4">
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {quickAccessActions.map((action) => (
                  <Dialog key={action.id}>
                    <DialogTrigger asChild>
                      <Button 
                        className="h-24 w-full bg-slate-800 hover:bg-slate-700 border-none text-white" 
                        variant="outline"
                      >
                        {action.label}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-900 border-slate-800 text-white">
                      <DialogHeader>
                        <DialogTitle>{action.label.substring(1)}</DialogTitle>
                      </DialogHeader>
                      <p>This functionality is not implemented yet.</p>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </CardContent> */}
{/* 
          </Card> */}

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="border-b border-slate-800 px-6 py-4">
              <CardTitle className="text-lg font-medium">Monthly Report</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <MonthlyReportChart />
                </div>
                <div className="space-y-4 md:w-1/4">
                  <Button className="w-full h-16 bg-blue-500 hover:bg-blue-600">
                    Request
                  </Button>
                  <Button className="w-full h-16 bg-green-500 hover:bg-green-600">
                    Budget
                  </Button>
                  <Link href="/reports">





                    <Button className="w-full h-16 bg-yellow-500 hover:bg-yellow-600">
                      {/* <PlusCircle className="h-4 w-4" /> */}
                      Report
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarProvider>
  );

};export default Dashboard;
