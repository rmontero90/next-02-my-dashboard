import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const InfoPanel = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`flex w-full flex-col rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg md:w-[calc(50%-0.5rem)] ${className}`}
    >
      {children}
    </div>
  );
};