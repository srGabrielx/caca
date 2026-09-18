import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Progress } from "@/components/ui/Progress"
import { Button } from "@/components/ui/Button"
import { StatusBadge, type StatusBadgeProps } from "@/components/ui/StatusBadge"
import { Users, Target, DollarSign, Percent, ShieldCheck, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function IndicacoesPage() {
  return (
    <div className="space-y-8">
      {/* Resumo de Desempenho */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Indicações e Ganhos</h1>
            <p className="text-sm text-foreground/60 mt-1">Acompanhe suas indicações e desempenho.</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/indicacoes/nova">
              Nova Indicação
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-foreground/60 mb-2">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Enviadas</span>
              </div>
              <div className="text-2xl font-bold">12</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-foreground/60 mb-2">
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">Fechadas</span>
              </div>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-foreground/60 mb-2">
                <Percent className="w-4 h-4" />
                <span className="text-sm font-medium">Conversão</span>
              </div>
              <div className="text-2xl font-bold text-primary">25%</div>
            </CardContent>
          </Card>
          <Card className="bg-primary text-primary-foreground border-primary">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-primary-foreground/80 mb-2">
                <DollarSign className="w-4 h-4" />
                <span className="text-sm font-medium">Comissões</span>
              </div>
              <div className="text-2xl font-bold">R$ 1.450</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gamificação / Próximo Objetivo */}
      <section>
        <Card className="border-border/50 bg-gradient-to-br from-card to-card relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <ShieldCheck className="w-32 h-32" />
          </div>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <CardTitle className="text-lg">Nível Rastreador</CardTitle>
                <p className="text-sm text-foreground/60">Falta 1 projeto fechado para você subir de nível.</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-w-md">
              <div className="flex justify-between text-sm font-medium">
                <span>3/4 Projetos</span>
                <span className="text-primary">75%</span>
              </div>
              <Progress value={75} className="h-3" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Lista de Indicações */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Minhas Indicações</h2>
        <div className="grid gap-3">
          {[
            { name: "Empresa XPTO", service: "Sistema Web", status: "Projeto fechado", badge: "success", date: "10 Out" },
            { name: "Padaria do Bairro", service: "Aplicativo", status: "Em negociação", badge: "warning", date: "15 Out" },
            { name: "Clínica Saúde", service: "Site Institucional", status: "Contato iniciado", badge: "info", date: "16 Out" },
          ].map((item, i) => (
            <Link key={i} href={`/dashboard/indicacoes/${i}`}>
              <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex w-10 h-10 rounded-full bg-border items-center justify-center font-bold text-sm text-foreground/60">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-xs text-foreground/60">{item.service} • {item.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <StatusBadge status={item.badge as StatusBadgeProps["status"]}>{item.status}</StatusBadge>
                    <ChevronRight className="w-5 h-5 text-foreground/30 group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action Contextual */}
      <section>
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-lg">Potencialize seus ganhos</h3>
              <p className="text-foreground/70 text-sm mt-1">Automação está entre os serviços mais procurados esta semana.</p>
            </div>
            <Button className="shrink-0 w-full md:w-auto" asChild>
              <Link href="/dashboard/indicacoes/nova">
                Indicar Automação
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
