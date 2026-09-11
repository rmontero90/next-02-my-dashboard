import { Sidebar } from "@/components/Sidebar";
import { Loading } from "@/components/Loading";
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
        <Suspense fallback={<Loading className="min-h-screen" />}>
          <Sidebar />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <div className="min-w-0 flex-1 text-slate-900">{children}</div>
        </Suspense>
      </div>
    </div>
  );
}
