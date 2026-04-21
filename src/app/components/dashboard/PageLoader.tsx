import logoSrc from "../../../../images/Radiant Sun with Interlocking Arrow Logo.png";

export function PageLoader({ label = "Loading" }: { label?: string }) {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-4" aria-live="polite">
      <div className="flex flex-col items-center gap-4 text-center">
        <img src={logoSrc} alt="Baho Tech" className="h-16 w-16 object-contain animate-float" />
        <p className="text-sm uppercase tracking-[0.25em] text-gray-600">{label}</p>
        <div className="h-1.5 w-40 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-1/2 rounded-full bg-[#1A4F8D] animate-loading-bar" />
        </div>
      </div>
    </main>
  );
}
