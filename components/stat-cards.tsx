import { CircleDollarSign, Target, CalendarDays, Hourglass } from "lucide-react"

const stats = [
  {
    label: "Total Saved",
    value: "$1,233.00",
    icon: CircleDollarSign,
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    label: "Remaining Goal",
    value: "$8,767.00",
    icon: Target,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    label: "Days Completed",
    value: "45",
    icon: CalendarDays,
    iconColor: "text-pink-500",
    bgColor: "bg-pink-50",
  },
  {
    label: "Days Remaining",
    value: "320",
    icon: Hourglass,
    iconColor: "text-teal-500",
    bgColor: "bg-teal-50",
  },
]

export function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white p-3 sm:p-4 md:p-6 rounded-2xl md:rounded-3xl flex flex-col md:flex-row items-center md:gap-4 gap-3 shadow-sm border border-slate-100">
          <div className={`${stat.bgColor} p-2 sm:p-3 rounded-lg md:rounded-2xl shrink-0`}>
            <stat.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 ${stat.iconColor}" />
          </div>
          <div className="text-center md:text-left w-full">
            <p className="text-slate-500 text-xs sm:text-xs md:text-sm font-medium">{stat.label}</p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
