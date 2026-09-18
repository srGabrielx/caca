import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { StatusBadge, type StatusBadgeProps } from "@/components/ui/StatusBadge"
import { Filter, MoreHorizontal, Search, Send, Target, TrendingUp, UserPlus } from "lucide-react"

type Referral = {
  company: string
  contact: string
  referrer: string
  service: string
  createdAt: string
  status: StatusBadgeProps["status"]
  statusLabel: string
}

const referrals: Referral[] = [
  {
    company: "Clínica Saúde",
    contact: "Fernanda Lima",
    referrer: "Marcos Silva",
    service: "Site institucional",
    createdAt: "Hoje, 10:45",
    status: "info",
    statusLabel: "Contato iniciado",
  },
  {
    company: "Padaria do Bairro",
    contact: "Roberto Alves",
    referrer: "Maria Souza",
    service: "Aplicativo",
    createdAt: "Ontem, 16:20",
    status: "warning",
    statusLabel: "Em negociação",
  },
  {
    company: "Empresa XPTO",
    contact: "Paula Mendes",
    referrer: "João Silva",
    service: "Sistema web",
    createdAt: "15 Out 2024",
    status: "success",
    statusLabel: "Projeto fechado",
  },
  {
    company: "Mercado Central",
    contact: "Luiz Rocha",
    referrer: "Ana Vendas",
    service: "Automação",
    createdAt: "12 Out 2024",
    status: "error",
    statusLabel: "Sem interesse",
  },
]

export default function AdminIndicacoesPage() {
  return (
    <div className="space-y-6 pb-16 md:pb-0">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Gestão de Indicações</h1>
          <p className="mt-1 text-sm text-foreground/60">
            Acompanhe os contatos enviados e avance cada oportunidade no funil.
          </p>
        </div>
        <Button className="gap-2 sm:shrink-0">
          <UserPlus className="h-4 w-4" /> Registrar indicação
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card>
          <CardContent className="p-5">
            <div className="mb-2 flex items-center gap-2 text-foreground/60">
              <Send className="h-4 w-4" />
              <span className="text-sm font-medium">Recebidas</span>
            </div>
            <p className="text-2xl font-bold">45</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="mb-2 flex items-center gap-2 text-foreground/60">
              <Target className="h-4 w-4" />
              <span className="text-sm font-medium">Em negociação</span>
            </div>
            <p className="text-2xl font-bold">10</p>
          </CardContent>
        </Card>
        <Card className="border-green-100 bg-green-50 dark:border-green-900/50 dark:bg-green-900/10">
          <CardContent className="p-5">
            <div className="mb-2 flex items-center gap-2 text-green-700 dark:text-green-400">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">Convertidas</span>
            </div>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">14</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="mb-2 flex items-center gap-2 text-foreground/60">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">Conversão</span>
            </div>
            <p className="text-2xl font-bold text-primary">31%</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <div className="flex flex-col justify-between gap-4 border-b border-border p-4 sm:flex-row">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
            <input
              type="search"
              aria-label="Buscar indicações"
              placeholder="Buscar empresa, contato ou indicador..."
              className="w-full rounded-md border border-border bg-background p-2 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" /> Todos os status
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead className="border-b border-border bg-card/50 text-xs uppercase text-foreground/60">
              <tr>
                <th className="px-6 py-4 font-medium">Empresa / Contato</th>
                <th className="px-6 py-4 font-medium">Indicador</th>
                <th className="px-6 py-4 font-medium">Interesse</th>
                <th className="px-6 py-4 font-medium">Recebida em</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 text-right font-medium">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {referrals.map((referral) => (
                <tr key={referral.company} className="transition-colors hover:bg-card/50">
                  <td className="px-6 py-4">
                    <p className="font-semibold">{referral.company}</p>
                    <p className="text-xs text-foreground/50">{referral.contact}</p>
                  </td>
                  <td className="px-6 py-4 font-medium">{referral.referrer}</td>
                  <td className="px-6 py-4 text-foreground/70">{referral.service}</td>
                  <td className="px-6 py-4 text-foreground/70">{referral.createdAt}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={referral.status}>{referral.statusLabel}</StatusBadge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-foreground/50 hover:text-foreground"
                      aria-label={`Ver ações de ${referral.company}`}
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border p-4 text-sm text-foreground/60 sm:flex-row">
          <span>Mostrando 1-4 de 45 indicações</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Anterior
            </Button>
            <Button variant="outline" size="sm">
              Próxima
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
