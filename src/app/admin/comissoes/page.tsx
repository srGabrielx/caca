import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { StatusBadge, type StatusBadgeProps } from "@/components/ui/StatusBadge"
import { Check, Clock, Download, MoreHorizontal, Wallet } from "lucide-react"

type Commission = {
  id: string
  referrer: string
  project: string
  amount: string
  requestedAt: string
  pixKey: string
  status: StatusBadgeProps["status"]
  statusLabel: string
}

const pendingCommissions: Commission[] = [
  {
    id: "#492",
    referrer: "Marcos Silva",
    project: "Sistema de Gestão",
    amount: "R$ 600,00",
    requestedAt: "Hoje, 09:30",
    pixKey: "CPF •••.456.789-••",
    status: "warning",
    statusLabel: "Aguardando aprovação",
  },
  {
    id: "#491",
    referrer: "Maria Souza",
    project: "E-commerce Completo",
    amount: "R$ 450,00",
    requestedAt: "Ontem, 14:10",
    pixKey: "E-mail •••@email.com",
    status: "warning",
    statusLabel: "Aguardando aprovação",
  },
  {
    id: "#489",
    referrer: "João Silva",
    project: "Aplicativo Delivery",
    amount: "R$ 800,00",
    requestedAt: "16 Out 2024",
    pixKey: "Celular (11) •••••-4400",
    status: "info",
    statusLabel: "Pagamento agendado",
  },
]

const recentPayments: Commission[] = [
  {
    id: "#488",
    referrer: "Ana Vendas",
    project: "Landing Page",
    amount: "R$ 300,00",
    requestedAt: "15 Out 2024",
    pixKey: "CPF •••.321.654-••",
    status: "success",
    statusLabel: "Pago",
  },
  {
    id: "#486",
    referrer: "Carlos Lima",
    project: "Site Institucional",
    amount: "R$ 400,00",
    requestedAt: "10 Out 2024",
    pixKey: "E-mail •••@empresa.com",
    status: "success",
    statusLabel: "Pago",
  },
]

export default function AdminComissoesPage() {
  return (
    <div className="space-y-6 pb-16 md:pb-0">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Comissões e Pagamentos</h1>
          <p className="mt-1 text-sm text-foreground/60">
            Aprove solicitações e acompanhe os pagamentos enviados por PIX.
          </p>
        </div>
        <Button variant="outline" className="gap-2 sm:shrink-0">
          <Download className="h-4 w-4" /> Exportar relatório
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-red-100 bg-red-50 dark:border-red-900/50 dark:bg-red-900/10">
          <CardContent className="p-5">
            <div className="mb-2 flex items-center gap-2 text-red-700 dark:text-red-400">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">Aguardando aprovação</span>
            </div>
            <p className="text-2xl font-bold text-red-900 dark:text-red-100">R$ 2.450,00</p>
            <p className="mt-1 text-xs text-red-700/70 dark:text-red-300/70">4 solicitações pendentes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="mb-2 flex items-center gap-2 text-foreground/60">
              <Wallet className="h-4 w-4" />
              <span className="text-sm font-medium">Agendado para pagamento</span>
            </div>
            <p className="text-2xl font-bold">R$ 1.200,00</p>
            <p className="mt-1 text-xs text-foreground/50">Próxima janela: quinta-feira</p>
          </CardContent>
        </Card>
        <Card className="border-green-100 bg-green-50 dark:border-green-900/50 dark:bg-green-900/10">
          <CardContent className="p-5">
            <div className="mb-2 flex items-center gap-2 text-green-700 dark:text-green-400">
              <Check className="h-4 w-4" />
              <span className="text-sm font-medium">Pago neste mês</span>
            </div>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">R$ 8.740,00</p>
            <p className="mt-1 text-xs text-green-700/70 dark:text-green-300/70">18 pagamentos concluídos</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0 border-b border-border">
          <div>
            <CardTitle className="text-lg">Solicitações pendentes</CardTitle>
            <p className="mt-1 text-sm text-foreground/60">Revise os dados antes de liberar o pagamento.</p>
          </div>
          <StatusBadge status="warning">3 nesta lista</StatusBadge>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="border-b border-border bg-card/50 text-xs uppercase text-foreground/60">
              <tr>
                <th className="px-6 py-4 font-medium">Solicitação</th>
                <th className="px-6 py-4 font-medium">Indicador / Projeto</th>
                <th className="px-6 py-4 font-medium">Chave PIX</th>
                <th className="px-6 py-4 font-medium">Valor</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 text-right font-medium">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {pendingCommissions.map((commission) => (
                <tr key={commission.id} className="transition-colors hover:bg-card/50">
                  <td className="px-6 py-4">
                    <p className="font-semibold">{commission.id}</p>
                    <p className="text-xs text-foreground/50">{commission.requestedAt}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium">{commission.referrer}</p>
                    <p className="text-xs text-foreground/50">{commission.project}</p>
                  </td>
                  <td className="px-6 py-4 text-foreground/70">{commission.pixKey}</td>
                  <td className="px-6 py-4 font-bold">{commission.amount}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={commission.status}>{commission.statusLabel}</StatusBadge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      {commission.status === "warning" ? (
                        <Button size="sm" className="gap-2">
                          <Check className="h-4 w-4" /> Aprovar
                        </Button>
                      ) : null}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 text-foreground/50 hover:text-foreground"
                        aria-label={`Ver ações da solicitação ${commission.id}`}
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <CardHeader className="border-b border-border">
          <CardTitle className="text-lg">Pagamentos recentes</CardTitle>
        </CardHeader>
        <div className="divide-y divide-border">
          {recentPayments.map((payment) => (
            <div key={payment.id} className="flex flex-col justify-between gap-3 p-5 sm:flex-row sm:items-center">
              <div>
                <p className="font-semibold">
                  {payment.referrer} <span className="font-normal text-foreground/50">{payment.id}</span>
                </p>
                <p className="text-sm text-foreground/60">{payment.project} • {payment.requestedAt}</p>
              </div>
              <div className="flex items-center justify-between gap-4 sm:justify-end">
                <span className="font-bold text-green-600 dark:text-green-500">{payment.amount}</span>
                <StatusBadge status={payment.status}>{payment.statusLabel}</StatusBadge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
