"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Sidebar } from "@/components/sidebar"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Wallet, ArrowUp, Download } from "lucide-react"

const walletTransactions = [
  {
    id: 1,
    description: "Welcome Bonus",
    date: "25 Jan 2026",
    amount: "+$27.40",
    icon: "gift",
  },
]

export default function MyWalletPage() {
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
        <DashboardHeader title="My Wallet" onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="flex-1 p-2 sm:p-3 md:p-6 lg:p-8 xl:p-10">
          <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">

          {/* Identity Verification Alert */}
          <Card className="border-2 border-emerald-200 bg-emerald-50 rounded-2xl md:rounded-3xl overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-brand-green shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">Identity Verification Required</h3>
                  <p className="text-sm md:text-base text-slate-600 mb-4">
                    To enable wallet features and comply with financial regulations, please verify your identity.
                  </p>
                  <button className="bg-brand-green hover:bg-emerald-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold flex items-center gap-2 transition-colors text-xs sm:text-sm md:text-base">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 sm:h-4 md:h-4" />
                    <span className="hidden sm:inline">Start KYC Verification</span>
                    <span className="sm:hidden">Start KYC</span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Wallet Balance Card */}
            <div className="lg:col-span-1">
              <Card className="bg-[#1E293B] border-none rounded-2xl md:rounded-3xl overflow-hidden h-full">
                <CardContent className="p-4 sm:p-6 md:p-8 text-white flex flex-col justify-between h-full">
                  <div>
                    <p className="text-slate-400 text-xs sm:text-sm md:text-base mb-2">Wallet Balance</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">$0.00</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-slate-700/50 rounded-xl p-3 flex items-center justify-center">
                      <Wallet className="w-8 h-8 text-slate-400" />
                    </div>
                    <button className="w-full bg-brand-green hover:bg-emerald-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors text-sm md:text-base">
                      <CheckCircle2 className="w-4 h-4" />
                      Top Up
                    </button>
                    <button className="w-full bg-slate-700 hover:bg-slate-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors text-sm md:text-base">
                      <ArrowUp className="w-4 h-4" />
                      Withdraw
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* About Your Wallet */}
            <div className="lg:col-span-2">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800">About Your Wallet</h3>
                  <button className="text-brand-green text-sm font-semibold hover:underline flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Export CSV
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <Card className="bg-white border border-slate-100 rounded-2xl md:rounded-3xl">
                    <CardContent className="p-4 md:p-6">
                      <h4 className="text-base md:text-lg font-bold text-slate-800 mb-2">Prepaid for Success</h4>
                      <p className="text-xs md:text-sm text-slate-600">
                        Use wallet funds to pay for challenge fees, subscriptions, and exclusive add-ons.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-slate-100 rounded-2xl md:rounded-3xl">
                    <CardContent className="p-4 md:p-6">
                      <h4 className="text-base md:text-lg font-bold text-slate-800 mb-2">Secure & Regulated</h4>
                      <p className="text-xs md:text-sm text-slate-600 mb-3">
                        Funds are held securely. KYC ensures compliance and protects your account.
                      </p>
                      <button className="text-brand-green text-xs md:text-sm font-semibold hover:underline">
                        Fee Schedule & Terms
                      </button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Wallet Transactions */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-bold text-slate-800">Wallet Transactions</h3>
              <button className="text-brand-green text-sm font-semibold hover:underline flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>

            <Card className="bg-white border border-slate-100 rounded-2xl md:rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  {walletTransactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="p-4 md:p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
                          <span className="text-lg md:text-xl">🎁</span>
                        </div>
                        <div>
                          <p className="text-sm md:text-base font-semibold text-slate-800">{tx.description}</p>
                          <p className="text-xs md:text-sm text-slate-500">{tx.date}</p>
                        </div>
                      </div>
                      <p className="text-sm md:text-base font-bold text-brand-green">{tx.amount}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}
