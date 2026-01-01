import { ArrowUp } from "lucide-react"

const breakdownItems = [
  { label: "This Week", value: "$82.20", progress: 40 },
  { label: "This Month", value: "$82.20", progress: 35 },
  { label: "Year To Date", value: "$1,233.00", progress: 12.3 },
  { label: "Projected Goal", value: "$10,001.00", isProjected: true },
]

const recentDeposits = [
  { label: "Auto-Save Deposit", date: "25 Jan 2026", amount: "+$27.40" },
  { label: "Auto-Save Deposit", date: "25 Jan 2026", amount: "+$27.40" },
]

export function SavingsBreakdown() {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm flex-1 border border-slate-100">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h3 className="text-base sm:text-lg md:text-lg font-bold text-slate-800">Savings Breakdown</h3>
        <button className="text-brand-green text-xs sm:text-sm font-semibold hover:underline">View Report</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-8 md:mb-12">
        {breakdownItems.map((item) => (
          <div key={item.label} className="bg-slate-50/50 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 border border-slate-100">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">{item.label}</p>
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">{item.value}</p>
              {item.isProjected && (
                <div className="bg-emerald-100 p-1 rounded-md">
                  <ArrowUp className="w-4 h-4 text-brand-green" />
                </div>
              )}
            </div>
            {item.progress !== undefined && (
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-green transition-all duration-500"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div>
        <h4 className="text-xs sm:text-sm font-bold text-slate-800 mb-4 md:mb-6 uppercase tracking-wider">Recent Deposits</h4>
        <div className="space-y-4 md:space-y-6">
          {recentDeposits.map((deposit, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                  <ArrowUp className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-800">{deposit.label}</p>
                  <p className="text-xs text-slate-400 font-medium">{deposit.date}</p>
                </div>
              </div>
              <span className="text-brand-green font-bold text-xs sm:text-sm">{deposit.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
