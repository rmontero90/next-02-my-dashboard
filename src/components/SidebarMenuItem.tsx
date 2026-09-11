"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react/jsx-runtime";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
}

export const SidebarMenuItem = ({ path, icon, title }: Props) => {
  const currentPath = usePathname();
  return (
    <Link
      href={path}
      title={title}
      className={`w-full px-2 inline-flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150
        ${currentPath === path ? "bg-blue-800" : ""}`}
    >
      <div>{icon}</div>
      <div className="hidden md:flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
      </div>
    </Link>
  );
};
