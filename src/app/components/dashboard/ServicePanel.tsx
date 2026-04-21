import type { ReactNode } from "react";

export function ServicePanel({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-[#1A4F8D] px-6 py-10 text-white md:px-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#FEC629]">{eyebrow}</p>
        <h2 className="max-w-3xl text-4xl font-semibold md:text-5xl">{title}</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/90">{description}</p>
      </div>
      {children}
    </section>
  );
}
