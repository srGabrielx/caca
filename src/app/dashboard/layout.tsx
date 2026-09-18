import * as React from "react"
import Link from "next/link"
import { Home, LayoutDashboard, Send, Wallet, User, Bell } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Top Navigation (Mobile & Desktop) */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-card border-b border-border">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground">C</div>
          CAÇA
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-foreground/70 hover:bg-border/50 rounded-full transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-card"></span>
          </button>
          <div className="w-9 h-9 bg-border rounded-full flex items-center justify-center text-sm font-medium">
            US
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex flex-col w-64 border-r border-border p-4 gap-2">
          <NavItem href="/dashboard" icon={Home} label="Visão geral" />
          <NavItem href="/dashboard/projetos" icon={LayoutDashboard} label="Projetos" />
          <NavItem href="/dashboard/indicacoes" icon={Send} label="Indicações" />
          <NavItem href="/dashboard/ganhos" icon={Wallet} label="Ganhos" />
          <div className="flex-1" />
          <NavItem href="/dashboard/perfil" icon={User} label="Perfil" />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-8 pb-24 md:pb-8 max-w-6xl mx-auto w-full">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-2 flex items-center justify-between pb-4">
        <MobileNavItem href="/dashboard" icon={Home} label="Início" />
        <MobileNavItem href="/dashboard/projetos" icon={LayoutDashboard} label="Projetos" />
        <div className="relative -top-5">
          <Link href="/dashboard/indicacoes/nova" className="flex flex-col items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg">
            <Send className="w-6 h-6" />
          </Link>
        </div>
        <MobileNavItem href="/dashboard/ganhos" icon={Wallet} label="Ganhos" />
        <MobileNavItem href="/dashboard/perfil" icon={User} label="Perfil" />
      </nav>
    </div>
  )
}

function NavItem({ href, icon: Icon, label }: { href: string, icon: React.ElementType, label: string }) {
  return (
    <Link href={href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-foreground/80 hover:bg-border/50 hover:text-foreground font-medium transition-colors">
      <Icon className="w-5 h-5" />
      {label}
    </Link>
  )
}

function MobileNavItem({ href, icon: Icon, label }: { href: string, icon: React.ElementType, label: string }) {
  return (
    <Link href={href} className="flex flex-col items-center gap-1 p-2 text-foreground/60 hover:text-foreground">
      <Icon className="w-5 h-5" />
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  )
}
