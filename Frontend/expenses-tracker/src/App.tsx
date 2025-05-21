import { Toaster } from "./components/ui/sonner";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Expenses from "./pages/expenses";
import Approvals from "./pages/Approvals";
import Trips from "./pages/Trips";
import Settings from "./pages/settings";
import NotFound from "./pages/NotFound";
import NewExpense from "./pages/NewExpense";
import Report from "./pages/reports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/Approvals" element={<Approvals />} />
          <Route path="/Trips" element={<Trips />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/NewExpense" element={<NewExpense />} />
          <Route path="/reports" element={<Report />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;