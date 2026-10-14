import Link from "next/link";
import { Bell, CalendarDays, ChartNoAxesCombined, CircleHelp, CreditCard, LayoutDashboard, LogOut, Settings, ShieldCheck, Users, Scissors, UserRound, Plus, Search } from "lucide-react";
import { Brand } from "@/components/Brand";

const items = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard#calendar", label: "Calendar", icon: CalendarDays },
  { href: "/dashboard#bookings", label: "Bookings", icon: CalendarDays },
  { href: "/dashboard#services", label: "Services & staff", icon: Scissors },
  { href: "/dashboard#customers", label: "Customers", icon: Users },
  { href: "/dashboard#reports", label: "Reports", icon: ChartNoAxesCombined },
  { href: "/dashboard#billing", label: "Plan & billing", icon: CreditCard },
  { href: "/dashboard#settings", label: "Settings", icon: Settings },
];
export function DashboardShell({ children, admin = false }: { children: React.ReactNode; admin?: boolean }) {
  return <div className="min-h-screen bg-[#F7F8FC] md:flex">
    <aside className="hidden w-[252px] shrink-0 flex-col bg-[#1B1B3A] px-4 py-6 md:flex">
      <div className="px-2 pb-9"><Brand light /></div>
      <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.17em] text-[#8888a8]">Workspace</p>
      <nav className="flex flex-col gap-1">{items.map((item, i) => {const Icon=item.icon;return <Link key={item.label} href={item.href} className={`side-link ${i===0?"active":""}`}><Icon size={17}/>{item.label}</Link>})}</nav>
      {admin && <div className="mt-8 border-t border-white/10 pt-5"><p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.17em] text-[#8888a8]">Platform</p><Link className="side-link" href="/admin"><ShieldCheck size={17}/>Admin console</Link></div>}
      <div className="mt-auto rounded-2xl border border-white/10 bg-white/[.06] p-4"><p className="text-sm font-semibold text-white">Need a hand?</p><p className="mt-1 text-xs leading-5 text-[#b9b8cf]">Our support team is here to help you get booked.</p><a className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#bba3ff]" href="mailto:support@brellbook.com"><CircleHelp size={14}/>Contact support</a></div>
      <Link href="/" className="side-link mt-4"><LogOut size={17}/>Back to website</Link>
    </aside>
    <main className="min-w-0 flex-1">
      <header className="flex h-[76px] items-center justify-between border-b border-[#e9e9f2] bg-white px-5 md:px-9">
        <div className="md:hidden"><Brand compact /></div><div className="hidden items-center gap-3 rounded-xl border border-[#e9e9f2] bg-[#fafaff] px-3 py-2 md:flex"><Search size={16} className="text-[#9292a7]"/><span className="text-sm text-[#9292a7]">Search bookings, customers...</span><kbd className="ml-10 rounded border bg-white px-1.5 py-0.5 text-[10px] text-[#9292a7]">⌘ K</kbd></div>
        <div className="flex items-center gap-3"><button aria-label="Notifications" className="relative rounded-xl p-2.5 hover:bg-[#f7f5ff]"><Bell size={19}/><span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#FF5A4E]"/></button><div className="flex items-center gap-2.5 border-l border-[#e9e9f2] pl-3"><div className="grid h-9 w-9 place-items-center rounded-full bg-[#eee7ff] text-sm font-bold text-[#6C2BFF]">BB</div><div className="hidden sm:block"><p className="text-sm font-semibold text-[#1B1B3A]">Demo Business</p><p className="text-xs text-[#9292a7]">Free plan</p></div></div></div>
      </header>
      <div className="p-5 md:p-9">{children}</div>
    </main>
  </div>;
}
