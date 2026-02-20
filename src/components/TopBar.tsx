"use client";

export function TopBar() {
  return (
    <div className="hidden sm:block w-full bg-[#1B4FD8] text-white text-xs sm:text-sm py-1.5 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-0">
          <span>Sun-Thu: 9AM-1PM & 4:30PM-9:30PM</span>
          <span className="hidden sm:inline">|</span>
          <span>Fri: 9AM-12PM & 4:30PM-9:30PM</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-0">
          <a
            href="mailto:Admin@alhaylmedicalcenter.com"
            className="hover:underline"
          >
            Admin@alhaylmedicalcenter.com
          </a>
          <a href="tel:+971547279513" className="hover:underline">
            054 727 9513
          </a>
        </div>
      </div>
    </div>
  );
}
