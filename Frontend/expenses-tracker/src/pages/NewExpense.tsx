import React, { useState } from 'react';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "../components/ui/sidebar";
import { Avatar } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Home, FileText, CheckSquare, BarChart, Settings, User, Plus, X } from "lucide-react";
import  Link  from "next/link";
import { useRouter } from "next/router";
import { Card } from '../components/ui/card';

const NewExpense = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    subject: '',
    merchant: '',
    date: '',
    total: '',
    currency: 'USD',
    reimbursable: false,
    category: '',
    description: '',
    employee: '',
    addToReport: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleClose = () => {
    router.push('/expenses');
  };

  const handleSave = () => {
    console.log('Saving expense:', formData);
    router.push('/expenses');
  };

  const handleSaveDraft = () => {
    console.log('Saving draft:', formData);
    router.push('/expenses');
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-slate-950 text-white">
        {/* Sidebar */}
        <Sidebar className="border-r border-slate-800 w-20">
          <SidebarHeader className="flex flex-col items-center py-6 border-b border-slate-800">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600">
              <User className="h-8 w-8 text-white" />
            </div>
            <span className="mt-2 text-xs font-medium">User Name</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/" className="flex flex-col items-center py-4 px-2">
                        <Home className="h-6 w-6 text-blue-400" />
                        <span className="text-xs mt-1">Home</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={true}>
                      <Link href="/expenses" className="flex flex-col items-center py-4 px-2">
                        <FileText className="h-6 w-6 text-blue-400" />
                        <span className="text-xs mt-1">Expenses</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/Approvals" className="flex flex-col items-center py-4 px-2">
                        <CheckSquare className="h-6 w-6 text-blue-400" />
                        <span className="text-xs mt-1">Approvals</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/Trips" className="flex flex-col items-center py-4 px-2">
                        <BarChart className="h-6 w-6 text-blue-400" />
                        <span className="text-xs mt-1">Trips</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/settings" className="flex flex-col items-center py-4 px-2">
                        <Settings className="h-6 w-6 text-blue-400" />
                        <span className="text-xs mt-1">Settings</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 p-6 max-w-5xl mx-auto w-full">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">New Expense</h1>
            <button onClick={handleClose} className="hover:bg-slate-800 rounded-full p-2">
              <X className="h-6 w-6" />
            </button>
          </div>

          <hr className="border-slate-700 mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="grid grid-cols-1 gap-y-4">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-slate-900 border-slate-700 text-white"
                    placeholder="Title..."
                  />
                </div>

                <div>
                  <label htmlFor="merchant" className="block text-sm font-medium mb-2">Merchant</label>
                  <Input 
                    id="merchant" 
                    name="merchant"
                    value={formData.merchant}
                    onChange={handleInputChange}
                    className="bg-slate-900 border-slate-700 text-white"
                    placeholder="Name..."
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2">Date</label>
                  <Input 
                    id="date" 
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="bg-slate-900 border-slate-700 text-white"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-1/3">
                    <label htmlFor="total" className="block text-sm font-medium mb-2">Total</label>
                    <Input 
                      id="total" 
                      name="total"
                      type="number"
                      value={formData.total}
                      onChange={handleInputChange}
                      className="bg-slate-900 border-slate-700 text-white"
                      placeholder="0.00"
                    />
                  </div>
                  <div className="w-1/3">
                    <label htmlFor="currency" className="block text-sm font-medium mb-2">Currency</label>
                    <select 
                      id="currency" 
                      name="currency"
                      value={formData.currency}
                      onChange={handleSelectChange}
                      className="w-full rounded-md bg-slate-900 border-slate-700 text-white px-3 py-2 h-10"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="reimbursable" 
                    checked={formData.reimbursable}
                    onCheckedChange={(checked: boolean) => handleCheckboxChange('reimbursable', checked)}
                    className="border-blue-400 data-[state=checked]:bg-blue-500"
                  />
                  <label 
                    htmlFor="reimbursable"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Reimbursable
                  </label>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-2">Category</label>
                  <Input 
                    id="category" 
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="bg-slate-900 border-slate-700 text-white"
                    placeholder="Category..."
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2">Description</label>
                  <Input 
                    id="description" 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="bg-slate-900 border-slate-700 text-white"
                    placeholder="Text..."
                  />
                </div>

                <div>
                  <label htmlFor="employee" className="block text-sm font-medium mb-2">Employee</label>
                  <Input 
                    id="employee" 
                    name="employee"
                    value={formData.employee}
                    onChange={handleInputChange}
                    className="bg-slate-900 border-slate-700 text-white"
                    placeholder="Name..."
                  />
                </div>

                <div className="flex items-center space-x-4 pt-2">
                  <div className="font-medium">Add to report</div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="addToReport-yes" 
                      checked={formData.addToReport === true}
                      onCheckedChange={() => setFormData({...formData, addToReport: true})}
                      className="border-blue-400 data-[state=checked]:bg-blue-500"
                    />
                    <label htmlFor="addToReport-yes" className="text-sm">Yes</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="addToReport-no" 
                      checked={formData.addToReport === false}
                      onCheckedChange={() => setFormData({...formData, addToReport: false})}
                      className="border-blue-400 data-[state=checked]:bg-blue-500"
                    />
                    <label htmlFor="addToReport-no" className="text-sm">No</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Upload Invoice Area */}
            <div className="md:col-span-1">
              <div className="border border-dashed border-slate-600 rounded-lg h-56 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-900/50">
                <Plus className="h-10 w-10 text-white mb-2" />
                <p className="text-center text-sm">Upload an invoice</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end mt-10 space-x-4">
            <Button
              variant="outline"
              className="bg-slate-800 hover:bg-slate-700 border-slate-700"
              onClick={handleSaveDraft}
            >
              Save Draft
            </Button>
            <Button
              className="bg-green-600 hover:bg-green-700 border-none"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};
export default NewExpense;
