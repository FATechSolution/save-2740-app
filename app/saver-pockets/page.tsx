"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Sidebar } from "@/components/sidebar"
import { Plus, PiggyBank } from "lucide-react"
import { Sheet, SheetContent } from "@/components/ui/sheet"

const pockets = [
  {
    id: 1,
    name: "Vacation",
    dailyContribution: "27.40",
    multiplier: "x1",
    saved: "120.00",
    progress: 40,
  },
  {
    id: 2,
    name: "New Car",
    dailyContribution: "54.80",
    multiplier: "x2",
    saved: "450.00",
    progress: 15,
  },
]

export default function SaverPocketsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block h-full">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </SheetContent>
      </Sheet>

      <main className="flex-1 overflow-y-auto flex flex-col">
        <DashboardHeader title="Saver Pockets" onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="flex-1 p-2 sm:p-3 md:p-6 lg:p-8 xl:p-10">
          <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">

          {/* New Pocket Action */}
          <button className="flex items-center gap-2 bg-brand-green hover:bg-emerald-500 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl font-semibold transition-colors shadow-sm">
            <Plus className="w-4 md:w-5 h-4 md:h-5" />
            New Pocket
          </button>

          {/* Pockets Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {pockets.map((pocket) => (
              <div key={pocket.id} className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border border-slate-100 shadow-sm space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                    <PiggyBank className="w-5 h-5 md:w-6 md:h-6 text-slate-400" />
                  </div>
                  <div className="bg-emerald-50 text-brand-green px-2 md:px-3 py-1 rounded-full text-xs font-bold border border-emerald-100 whitespace-nowrap">
                    {pocket.multiplier} Multiplier
                  </div>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800">{pocket.name}</h3>
                  <p className="text-xs md:text-sm text-slate-500 mt-1">Daily Contribution: ${pocket.dailyContribution}</p>
                </div>

                <div className="space-y-2">
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-green rounded-full" style={{ width: `${pocket.progress}%` }} />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs md:text-sm font-medium text-slate-600">Saved: ${pocket.saved}</p>
                    <button className="text-xs md:text-sm font-bold text-brand-green hover:underline">Edit Goal</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}
