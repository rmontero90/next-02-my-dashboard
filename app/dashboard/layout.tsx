import { Sidebar } from "@/components/Sidebar";
import { Suspense } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        {/* Menu */}
        <Sidebar />
        <Suspense fallback={<div>Loading...</div>}>
          <div className="w-full text-slate-900">{children}</div>
        </Suspense>
      </div>
    </div>
  );
}
