import type { ReactNode } from "react";
import logoSrc from "../../../../images/Radiant Sun with Interlocking Arrow Logo.png";

export function AuthSplitLayout({
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
    <section className="bg-[#F5F7FA] px-4 py-12 dark:bg-[#071A2D] sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-[#d8e4ec] bg-white dark:border-white/10 dark:bg-[#0B1F33] lg:min-h-[660px] lg:grid-cols-[1fr_0.95fr]">
        <div className="flex items-center px-5 py-8 sm:px-8 lg:px-12">
          <div className="w-full">{children}</div>
        </div>

        <aside className="relative hidden overflow-hidden bg-[#1A4F8D] lg:flex" aria-label="Baho Tech accessibility platform">
          <img
            src={logoSrc}
            alt=""
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 scale-110 object-contain opacity-25 blur-xl"
          />
          <div className="absolute inset-0 bg-[#1A4F8D]/75" />
          <div className="relative z-10 flex h-full flex-col justify-between p-10 text-white">
            <img src={logoSrc} alt="Baho Tech logo" className="h-20 w-20 object-contain" />
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#FEC629]">{eyebrow}</p>
              <h2 className="text-4xl font-semibold leading-tight">{title}</h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-white/90">{description}</p>
            </div>
            <p className="text-sm text-white/75">Role-aware access. Disability-specific services. One secure workspace.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
