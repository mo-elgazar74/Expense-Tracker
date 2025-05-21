"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"; // reuse sidebar from approvals
import { Home, CheckSquare, Settings, User, Check, X, Filter, MoreVertical } from "lucide-react";
import Link from "next/link";

type Expense = {
  id: number;
  title: string;
  amount: string; // in "€123.45" format
};

type Income = {
  _id: string;
  title: string;
  amount: number;
};

const Report = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [income, setIncome] = useState<Income[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const incomeRes = await axios.get<{ income: Income[] }>("/api/income/index");
        const expensesRes = await axios.get<{ expenses: Expense[] }>("/api/expenses/index");

        setIncome(incomeRes.data.income || []);
        setExpenses(expensesRes.data.expenses || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const parseEuroAmount = (amountStr: string) =>
    parseFloat(amountStr.replace("€", "").replace(",", ""));

  const totalExpenses = expenses.reduce(
    (sum, e) => sum + parseEuroAmount(e.amount),
    0
  );
  const totalIncome = income.reduce((sum, i) => sum + Number(i.amount), 0);
  const netBalance = totalIncome - totalExpenses;

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Monthly Financial Report", 14, 22);

    doc.setFontSize(12);
    doc.text(`Total Income: €${totalIncome.toFixed(2)}`, 14, 35);
    doc.text(`Total Expenses: €${totalExpenses.toFixed(2)}`, 14, 42);
    doc.text(`Net Balance: €${netBalance.toFixed(2)}`, 14, 49);

    autoTable(doc, {
      startY: 60,
      head: [["Title", "Amount"]],
      body: expenses.map((e) => [e.title, e.amount]),
    });

    doc.save("financial-report.pdf");
  };

  if (loading) {
    return (
      <div className="text-white bg-slate-950 flex items-center justify-center h-screen">
        Loading report...
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-slate-950 text-white">
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
                      <Link href="/approvals" className="flex items-center px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-md">
                        <CheckSquare className="mr-3 h-5 w-5 text-blue-400" />
                        <span>Approvals</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/trips" className="flex items-center px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-md">
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
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">Report</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
              <p className="text-sm text-slate-400">Total Income</p>
              <p className="text-2xl font-bold text-green-400">€{totalIncome.toFixed(2)}</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
              <p className="text-sm text-slate-400">Total Expenses</p>
              <p className="text-2xl font-bold text-red-400">€{totalExpenses.toFixed(2)}</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
              <p className="text-sm text-slate-400">Net Balance</p>
              <p className="text-2xl font-bold text-blue-400">€{netBalance.toFixed(2)}</p>
            </div>
          </div>

          <Button onClick={handleDownloadPDF} className="bg-purple-600 hover:bg-purple-700">
            Download PDF
          </Button>
        </div>
      </div>
    </SidebarProvider>
  );
};
export default Report;
