import * as React from "react"
import Link from "next/link"
import { LayoutDashboard, Send, Wallet, Users, Settings, LogOut, Activity } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white">A</div>
          CAÇA Admin
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <span className="opacity-70">Operação em tempo real</span>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        </div>
      </header>

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex flex-col w-64 border-r border-border p-4 gap-2 bg-slate-50 dark:bg-card">
          <div className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-2 mt-2 px-3">Principal</div>
          <NavItem href="/admin" icon={Activity} label="Visão Geral" />
          <NavItem href="/admin/clientes" icon={Users} label="Clientes e Perfis" />
          
          <div className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-2 mt-6 px-3">Operação</div>
          <NavItem href="/admin/projetos" icon={LayoutDashboard} label="Projetos" />
          <NavItem href="/admin/indicacoes" icon={Send} label="Indicações" />
          <NavItem href="/admin/comissoes" icon={Wallet} label="Comissões" />
          
          <div className="flex-1" />
          <NavItem href="/admin/configuracoes" icon={Settings} label="Configurações" />
          <NavItem href="/dashboard" icon={LogOut} label="Voltar ao site" />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 w-full max-w-7xl mx-auto">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation for Admin (simplified) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 text-white border-t border-slate-800 px-4 py-2 flex items-center justify-between pb-4">
        <MobileNavItem href="/admin" icon={Activity} label="Visão Geral" />
        <MobileNavItem href="/admin/projetos" icon={LayoutDashboard} label="Projetos" />
        <MobileNavItem href="/admin/indicacoes" icon={Send} label="Indicações" />
        <MobileNavItem href="/admin/comissoes" icon={Wallet} label="Comissões" />
      </nav>
    </div>
  )
}

function NavItem({ href, icon: Icon, label }: { href: string, icon: React.ElementType, label: string }) {
  return (
    <Link href={href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-foreground/80 hover:bg-slate-200 dark:hover:bg-border/50 hover:text-foreground font-medium transition-colors">
      <Icon className="w-5 h-5" />
      {label}
    </Link>
  )
}

function MobileNavItem({ href, icon: Icon, label }: { href: string, icon: React.ElementType, label: string }) {
  return (
    <Link href={href} className="flex flex-col items-center gap-1 p-2 text-white/60 hover:text-white">
      <Icon className="w-5 h-5" />
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  )
}
