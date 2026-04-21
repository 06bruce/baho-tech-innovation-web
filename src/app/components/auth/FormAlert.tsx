import type { ReactNode } from "react";

export function FormAlert({
  tone,
  children,
}: {
  tone: "error" | "success" | "info";
  children: ReactNode;
}) {
  const toneClasses = {
    error: "border-red-200 bg-red-50 text-red-800",
    success: "border-green-200 bg-green-50 text-green-800",
    info: "border-[#d8e4ec] bg-[#eef5f9] text-[#1A4F8D]",
  };

  return (
    <div className={`rounded-2xl border px-4 py-3 text-sm ${toneClasses[tone]}`} role={tone === "error" ? "alert" : "status"}>
      {children}
    </div>
  );
}
