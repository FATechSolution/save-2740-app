"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Download, ArrowUpCircle, ArrowDownCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const transactions = [
  {
    id: "#12548796",
    description: "Daily Auto-Save",
    bank: "1234 ****",
    date: "19 Jan 2026",
    amount: "+$27.40",
    status: "Completed",
    type: "in",
  },
  {
    id: "#12548796",
    description: "Daily Auto-Save",
    bank: "1234 ****",
    date: "18 Jan 2026",
    amount: "+$27.40",
    status: "Completed",
    type: "out",
  },
  {
    id: "#12548796",
    description: "Daily Auto-Save",
    bank: "1234 ****",
    date: "17 Jan 2026",
    amount: "-",
    status: "Failed",
    type: "in",
  },
  {
    id: "#12548796",
    description: "Daily Auto-Save",
    bank: "1234 ****",
    date: "16 Jan 2026",
    amount: "+$27.40",
    status: "Completed",
    type: "in",
  },
  {
    id: "#12548796",
    description: "Daily Auto-Save",
    bank: "1234 ****",
    date: "15 Jan 2026",
    amount: "+$27.40",
    status: "Completed",
    type: "out",
  },
]

export default function TransactionsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      <div className="hidden lg:block h-full">
        <Sidebar />
      </div>

      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </SheetContent>
      </Sheet>

      <main className="flex-1 overflow-y-auto flex flex-col">
        <DashboardHeader title="Transactions" onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="flex-1 p-2 sm:p-3 md:p-6 lg:p-8 xl:p-10">
          <div className="max-w-7xl mx-auto space-y-3 sm:space-y-4 md:space-y-6">

          <div className="flex justify-end mb-4 md:mb-6">
            <button className="bg-brand-green hover:bg-emerald-600 text-white px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl flex items-center gap-2 text-xs md:text-sm font-semibold transition-colors shadow-sm shadow-emerald-200">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export CSV</span>
              <span className="sm:hidden">Export</span>
            </button>
          </div>

          <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-[32px] overflow-hidden border border-slate-100 shadow-sm mb-6 md:mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-slate-400 text-xs md:text-sm font-medium bg-slate-50">
                    <th className="px-3 md:px-8 py-4 md:py-6 font-medium text-left">Description</th>
                    <th className="px-3 md:px-8 py-4 md:py-6 font-medium text-left hidden sm:table-cell">Trans. ID</th>
                    <th className="px-3 md:px-8 py-4 md:py-6 font-medium text-left hidden md:table-cell">Bank</th>
                    <th className="px-3 md:px-8 py-4 md:py-6 font-medium text-left">Date</th>
                    <th className="px-3 md:px-8 py-4 md:py-6 font-medium text-right">Amount</th>
                    <th className="px-3 md:px-8 py-4 md:py-6 font-medium text-left hidden sm:table-cell">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {transactions.map((tx, i) => (
                    <tr key={i} className="text-slate-700 hover:bg-slate-50 transition-colors text-xs md:text-sm">
                      <td className="px-3 md:px-8 py-4 md:py-5">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                            {tx.type === "in" ? (
                              <ArrowUpCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                            ) : (
                              <ArrowDownCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                            )}
                          </div>
                          <span className="font-semibold text-slate-800 truncate">{tx.description}</span>
                        </div>
                      </td>
                      <td className="px-3 md:px-8 py-4 md:py-5 font-medium hidden sm:table-cell">{tx.id}</td>
                      <td className="px-3 md:px-8 py-4 md:py-5 font-medium hidden md:table-cell">{tx.bank}</td>
                      <td className="px-3 md:px-8 py-4 md:py-5 font-medium whitespace-nowrap">{tx.date}</td>
                      <td
                        className={cn(
                          "px-3 md:px-8 py-4 md:py-5 font-bold text-right whitespace-nowrap",
                          tx.status === "Failed" ? "text-red-400" : "text-brand-green",
                        )}
                      >
                        {tx.amount}
                      </td>
                      <td className="px-3 md:px-8 py-4 md:py-5 hidden sm:table-cell">
                        <span
                          className={cn(
                            "px-2 py-1 md:px-4 md:py-1.5 rounded-full text-xs font-semibold border inline-block",
                            tx.status === "Completed"
                              ? "bg-emerald-50 text-brand-green border-emerald-200"
                              : "bg-red-50 text-red-400 border-red-200",
                          )}
                        >
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-end gap-1 md:gap-2 text-xs md:text-sm font-medium overflow-x-auto">
            <button className="flex items-center gap-1 text-brand-green hover:underline px-2 py-1 whitespace-nowrap">
              <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                className={cn(
                  "w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center transition-colors text-xs md:text-sm",
                  page === 1 ? "bg-brand-green text-white" : "text-slate-400 hover:bg-slate-100",
                )}
              >
                {page}
              </button>
            ))}
            <button className="flex items-center gap-1 text-brand-green hover:underline px-2 py-1 whitespace-nowrap">
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}
