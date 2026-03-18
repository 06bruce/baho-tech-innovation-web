import { Calendar } from "lucide-react";

export function NewsCarousel() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
      <div className="flex justify-center mb-4">
        <span className="px-3 py-1 rounded-full bg-green-200/40 text-green-900 text-xs uppercase tracking-wide">
          Upcoming Updates
        </span>
      </div>
      <div className="flex items-center justify-center text-gray-500 text-sm mb-3">
        <Calendar className="w-4 h-4 mr-2" />
        <span>Updates</span>
      </div>
      <h3 className="text-2xl text-gray-900 mb-3">Coming Soon</h3>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We are preparing updates and announcements. Check back shortly for the latest news from Baho Tech.
      </p>
    </div>
  );
}
