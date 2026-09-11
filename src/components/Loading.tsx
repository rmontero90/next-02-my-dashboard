interface Props {
  className?: string;
}

export const Loading = ({ className = "" }: Props) => {
  return (
    <div
      className={`flex min-h-40 flex-col items-center justify-center gap-3 text-slate-600 ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className="relative h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-500">
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500" />
      </div>
      <span className="text-sm font-semibold tracking-wide">Loading...</span>
    </div>
  );
};
