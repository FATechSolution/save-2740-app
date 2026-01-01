"use client"

import {
  LayoutDashboard,
  Wallet,
  Clock,
  Trophy,
  Grid3x3,
  Users,
  Shield,
  ShieldCheck,
  Settings,
  X,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Wallet, label: "My Wallet", href: "/my-wallet" },
  { icon: Clock, label: "Transactions", href: "/transactions" },
  { icon: Trophy, label: "Achievements", href: "/achievements" },
  { icon: Grid3x3, label: "Saver Pockets", href: "/saver-pockets" },
  { icon: Users, label: "Referrals", href: "/referrals" },
  { icon: Shield, label: "Subscription", href: "/subscription" },
]

interface SidebarProps {
  onClose?: () => void
}

export function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className="w-full lg:w-64 bg-white h-full flex flex-col border-r border-slate-100 p-3 sm:p-4 md:p-6">
      <div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-10">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <img 
            src="/save2740-logo.svg" 
            alt="Save2740 Logo" 
            className="h-10 sm:h-12 md:h-14 w-auto"
          />
        </div>
        <button onClick={onClose} className="lg:hidden p-1.5 sm:p-2 text-slate-500 shrink-0 hover:bg-slate-100 rounded transition-colors">
          <X className="w-5 h-5 sm:w-5 md:w-6 h-5 md:h-6" />
        </button>
      </div>

      <nav className="flex-1 space-y-0.5 sm:space-y-1 md:space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 rounded-lg md:rounded-xl transition-colors text-xs sm:text-sm md:text-base",
                isActive ? "bg-emerald-50 text-brand-green font-medium" : "text-slate-500 hover:bg-slate-50",
              )}
            >
              <item.icon className="w-4 h-4 sm:w-5 md:w-5 h-4 md:h-5 shrink-0" />
              <span className="truncate">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto space-y-3 sm:space-y-4 md:space-y-6 pt-3 sm:pt-4 md:pt-6">
        <div className="bg-brand-green text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg flex items-center gap-2 text-xs md:text-sm font-medium w-fit">
          <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" />
          <span className="truncate">KYC Required</span>
        </div>

        <div className="pt-3 sm:pt-4 md:pt-6 border-t border-slate-100 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
            <img
              src="/placeholder.svg?key=9ifmt"
              alt="Alex Johnson"
              className="w-7 h-7 md:w-10 md:h-10 rounded-full object-cover shrink-0"
            />
            <div className="min-w-0 hidden sm:block">
              <p className="text-xs md:text-sm font-semibold text-slate-800 leading-none truncate">Alex Johnson</p>
              <p className="text-xs text-blue-500 font-medium mt-0.5">Pro member</p>
            </div>
          </div>
          <Settings className="w-4 h-4 md:w-5 md:h-5 text-slate-400 cursor-pointer shrink-0" />
        </div>
      </div>
    </div>
  )
}
