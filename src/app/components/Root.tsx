import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";
import logoSrc from "../../../images/Radiant Sun with Interlocking Arrow Logo.png";

export function Root() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = window.setTimeout(() => setIsLoading(false), 3000);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-[#FEC629] focus:px-5 focus:py-3 focus:font-semibold focus:text-gray-950"
      >
        Skip to main content
      </a>
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-[#FEC629]/30 animate-spin-slow"></div>
              <img
                src={logoSrc}
                alt="Baho Tech"
                className="w-20 h-20 object-contain animate-float"
              />
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Loading
            </div>
            <div className="h-1.5 w-40 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-1/2 rounded-full bg-[#1A4F8D] animate-loading-bar"></div>
            </div>
          </div>
        </div>
      )}
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
