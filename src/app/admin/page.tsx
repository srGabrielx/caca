import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Users, LayoutDashboard, Target, Wallet, AlertTriangle } from "lucide-react"

export default function AdminOverviewPage() {
  return (
    <div className="space-y-8 pb-16 md:pb-0">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Visão Geral da Operação</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-blue-50 border-blue-100 dark:bg-blue-900/10 dark:border-blue-900/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 mb-2">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Novos Leads</span>
            </div>
            <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">24</div>
            <p className="text-xs text-blue-600/80 mt-1">+12% nesta semana</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-foreground/60 mb-2">
              <LayoutDashboard className="w-4 h-4" />
              <span className="text-sm font-medium">Projetos Ativos</span>
            </div>
            <div className="text-3xl font-bold">18</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-foreground/60 mb-2">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">Indicações</span>
            </div>
            <div className="text-3xl font-bold">45</div>
            <p className="text-xs text-foreground/50 mt-1">10 pendentes de contato</p>
          </CardContent>
        </Card>

        <Card className="bg-red-50 border-red-100 dark:bg-red-900/10 dark:border-red-900/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-red-700 dark:text-red-400 mb-2">
              <Wallet className="w-4 h-4" />
              <span className="text-sm font-medium">PIX Pendentes</span>
            </div>
            <div className="text-3xl font-bold text-red-900 dark:text-red-100">4</div>
            <p className="text-xs text-red-600/80 mt-1">R$ 2.450,00 a pagar</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" /> Requer Atenção
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-border">
              <div className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-sm">Aprovar comissão #492</p>
                  <p className="text-xs text-foreground/60">Indicador: Marcos Silva</p>
                </div>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded font-medium">Ação rápida</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-sm">Cliente atrasou entrega de conteúdo</p>
                  <p className="text-xs text-foreground/60">Projeto: E-commerce XYZ</p>
                </div>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded font-medium">Ação rápida</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative pl-3 space-y-4 border-l-2 border-border/50 ml-2">
              {[
                { time: "10:45", msg: "João solicitou um novo projeto de Aplicativo." },
                { time: "09:30", msg: "Comissão de R$ 400 liberada para Maria." },
                { time: "Ontem", msg: "Projeto 'Site Institucional' foi marcado como Entregue." }
              ].map((act, i) => (
                <div key={i} className="relative pl-6">
                  <span className="absolute -left-[27px] top-1.5 w-3 h-3 bg-primary rounded-full ring-4 ring-card" />
                  <p className="text-sm font-medium">{act.msg}</p>
                  <span className="text-xs text-foreground/50">{act.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
