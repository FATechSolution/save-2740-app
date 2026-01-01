import { Rocket, CheckCircle2 } from "lucide-react"

export function HeroCard() {
  return (
    <div className="bg-[#1E293B] rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row justify-between items-center lg:items-start text-white overflow-hidden relative mb-6 md:mb-8 gap-6 md:gap-8">
      <div className="space-y-4 sm:space-y-5 md:space-y-6 relative z-10 flex-1 w-full lg:w-auto">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-brand-green text-xs md:text-sm font-medium">
          <Rocket className="w-3 h-3 md:w-4 md:h-4" />
          <span className="hidden sm:inline">Yearly Challenge 2026</span>
          <span className="sm:hidden">2026 Challenge</span>
        </div>

        <div className="space-y-2 md:space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Save <span className="text-brand-green">$10,000</span> This Year
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base lg:text-lg">Just $27.40 a day. Small steps, big results.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4 pt-2 md:pt-4">
          <button className="w-full sm:w-auto bg-brand-green hover:bg-emerald-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors text-sm md:text-base">
            <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-3 h-3 text-white" />
            </span>
            <span className="hidden sm:inline">Processing Auto-Save...</span>
            <span className="sm:hidden">Auto-Save</span>
          </button>
          <button className="w-full sm:w-auto border border-slate-600 hover:bg-white/5 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-colors text-sm md:text-base">
            Withdraw
          </button>
        </div>
      </div>

      <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex items-center justify-center shrink-0">
        {/* Simple SVG Circular Progress */}
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="80"
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            className="text-slate-700"
          />
          <circle
            cx="96"
            cy="96"
            r="80"
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={2 * Math.PI * 80}
            strokeDashoffset={2 * Math.PI * 80 * (1 - 0.123)}
            strokeLinecap="round"
            className="text-brand-green transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">12.3%</span>
          <span className="text-slate-400 text-xs sm:text-sm">Complete</span>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-20 -mt-20" />
    </div>
  )
}
