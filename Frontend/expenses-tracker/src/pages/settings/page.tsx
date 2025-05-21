"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Settings = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="border-b border-slate-800 px-6 py-4">
            <CardTitle className="text-lg font-medium">User Preferences</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Change Password</Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Update Email</Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="border-b border-slate-800 px-6 py-4">
            <CardTitle className="text-lg font-medium">Notifications</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <Button className="w-full bg-green-600 hover:bg-green-700">Enable Alerts</Button>
            <Button className="w-full bg-green-600 hover:bg-green-700">Manage Preferences</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings ;