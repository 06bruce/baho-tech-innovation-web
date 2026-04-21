import type { ReactNode } from "react";

export function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | number;
  icon: ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-[#d8e4ec] bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef5f9] text-[#1A4F8D]">
        {icon}
      </div>
      <p className="text-3xl font-semibold text-gray-950">{value}</p>
      <p className="mt-1 text-sm text-gray-600">{label}</p>
    </article>
  );
}
