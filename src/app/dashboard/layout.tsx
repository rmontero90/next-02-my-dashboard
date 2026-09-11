import { Sidebar } from "@/components/Sidebar";
import { Suspense } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex min-w-0">
        {/* Menu */}
        <Sidebar />
        <Suspense fallback={<div>Loading...</div>}>
          <div className="min-w-0 flex-1 text-slate-900">{children}</div>
        </Suspense>
      </div>
    </div>
  );
}
