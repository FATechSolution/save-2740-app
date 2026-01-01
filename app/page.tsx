"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { HeroCard } from "@/components/hero-card"
import { StatCards } from "@/components/stat-cards"
import { SavingsBreakdown } from "@/components/savings-breakdown"
import { Achievements } from "@/components/achievements"
import { Sheet, SheetContent } from "@/components/ui/sheet"

export default function Dashboard() {
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
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="flex-1 p-2 sm:p-3 md:p-6 lg:p-8 xl:p-10">
          <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
          <HeroCard />
          <StatCards />
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
            <div className="flex-1">
              <SavingsBreakdown />
            </div>
            <div className="w-full lg:w-96">
              <Achievements />
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}
