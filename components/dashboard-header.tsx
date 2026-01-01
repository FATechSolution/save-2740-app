"use client"

import { Bell, Menu } from "lucide-react"

interface DashboardHeaderProps {
  title?: string
  onMenuClick?: () => void
}

export function DashboardHeader({ title = "Dashboard", onMenuClick }: DashboardHeaderProps) {
  return (
    <div className="bg-white w-full border-b border-slate-200 sticky top-0 z-10">
      <div className="px-4 sm:px-5 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6">
        <div className="flex items-center justify-between w-full gap-2 sm:gap-3 md:gap-4">
          {/* Left side - Menu and Title */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0 flex-1">
            <button onClick={onMenuClick} className="lg:hidden p-1.5 sm:p-2 -ml-1.5 sm:-ml-2 text-slate-600 shrink-0 hover:bg-slate-100 rounded transition-colors">
              <Menu className="w-5 h-5 sm:w-5 md:w-6 h-5 md:h-6" />
            </button>
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-slate-800 truncate">{title}</h1>
          </div>

          {/* Right side - Controls */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
            {/* Auto-save / Manual Toggle */}
            <div className="bg-slate-50 rounded-full p-0.5 sm:p-1 flex items-center shadow-sm border border-slate-200">
              <button className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-xs md:text-sm font-medium bg-white text-brand-green whitespace-nowrap transition-colors hover:bg-emerald-50 shadow-sm">
                <span className="hidden sm:inline">Auto-save</span>
                <span className="sm:hidden">Auto</span>
              </button>
              <button className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-xs md:text-sm font-medium text-slate-500 whitespace-nowrap hover:text-slate-700 transition-colors">
                Manual
              </button>
            </div>

            {/* Bell Icon */}
            <div className="relative bg-slate-50 p-1.5 sm:p-2 rounded-full shadow-sm cursor-pointer border border-slate-200 hover:bg-slate-100 transition-colors">
              <Bell className="w-4 h-4 sm:w-5 md:w-5 h-4 md:h-5 text-slate-600" />
              <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 w-2 h-2 bg-red-500 rounded-full border border-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
