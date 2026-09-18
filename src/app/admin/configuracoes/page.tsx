import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { StatusBadge } from "@/components/ui/StatusBadge"
import { Bell, Building2, Percent, Save, ShieldCheck } from "lucide-react"

const inputStyles =
  "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"

export default function AdminConfiguracoesPage() {
  return (
    <div className="space-y-6 pb-16 md:pb-0">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Configurações</h1>
          <p className="mt-1 text-sm text-foreground/60">
            Ajuste os dados da operação, regras de comissão e notificações.
          </p>
        </div>
        <Button className="gap-2 sm:shrink-0">
          <Save className="h-4 w-4" /> Salvar alterações
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader className="border-b border-border">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Building2 className="h-5 w-5 text-primary" /> Dados da operação
              </CardTitle>
              <p className="text-sm text-foreground/60">Informações exibidas nos contatos e documentos.</p>
            </CardHeader>
            <CardContent className="grid gap-4 pt-6 sm:grid-cols-2">
              <label className="text-sm font-medium sm:col-span-2">
                Nome da empresa
                <input className={inputStyles} type="text" defaultValue="CAÇA Soluções Digitais" />
              </label>
              <label className="text-sm font-medium">
                E-mail de atendimento
                <input className={inputStyles} type="email" defaultValue="contato@caca.digital" />
              </label>
              <label className="text-sm font-medium">
                Telefone
                <input className={inputStyles} type="tel" defaultValue="(11) 4002-8922" />
              </label>
              <label className="text-sm font-medium sm:col-span-2">
                Horário de atendimento
                <input className={inputStyles} type="text" defaultValue="Segunda a sexta, das 9h às 18h" />
              </label>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b border-border">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Percent className="h-5 w-5 text-primary" /> Regras de comissão
              </CardTitle>
              <p className="text-sm text-foreground/60">Parâmetros aplicados às novas indicações.</p>
            </CardHeader>
            <CardContent className="grid gap-4 pt-6 sm:grid-cols-2">
              <label className="text-sm font-medium">
                Comissão padrão
                <div className="relative">
                  <input className={`${inputStyles} pr-10`} type="number" defaultValue="10" min="0" max="100" />
                  <span className="absolute bottom-2 right-3 text-sm text-foreground/50">%</span>
                </div>
              </label>
              <label className="text-sm font-medium">
                Valor mínimo para saque
                <div className="relative">
                  <span className="absolute bottom-2 left-3 text-sm text-foreground/50">R$</span>
                  <input className={`${inputStyles} pl-10`} type="number" defaultValue="100" min="0" />
                </div>
              </label>
              <label className="text-sm font-medium">
                Prazo de liberação
                <select className={inputStyles} defaultValue="7">
                  <option value="3">3 dias após o pagamento</option>
                  <option value="7">7 dias após o pagamento</option>
                  <option value="15">15 dias após o pagamento</option>
                </select>
              </label>
              <label className="text-sm font-medium">
                Frequência de pagamentos
                <select className={inputStyles} defaultValue="twice-weekly">
                  <option value="weekly">Uma vez por semana</option>
                  <option value="twice-weekly">Segunda e quinta-feira</option>
                  <option value="monthly">Uma vez por mês</option>
                </select>
              </label>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b border-border">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bell className="h-5 w-5 text-primary" /> Notificações administrativas
              </CardTitle>
            </CardHeader>
            <CardContent className="divide-y divide-border pt-2">
              <NotificationOption
                title="Novos projetos"
                description="Receber um aviso quando uma nova solicitação for criada."
                defaultChecked
              />
              <NotificationOption
                title="Novas indicações"
                description="Avisar a equipe comercial sobre cada indicação recebida."
                defaultChecked
              />
              <NotificationOption
                title="Solicitações de saque"
                description="Notificar o financeiro quando houver um PIX para aprovar."
                defaultChecked
              />
              <NotificationOption
                title="Resumo semanal"
                description="Enviar os principais números da operação toda segunda-feira."
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <ShieldCheck className="h-5 w-5 text-green-600" /> Segurança
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between gap-3 rounded-lg border border-border p-3">
                <div>
                  <p className="text-sm font-medium">Autenticação em duas etapas</p>
                  <p className="mt-0.5 text-xs text-foreground/50">Proteção adicional para administradores.</p>
                </div>
                <StatusBadge status="success">Ativa</StatusBadge>
              </div>
              <Button variant="outline" className="w-full">
                Gerenciar acessos
              </Button>
              <Button variant="outline" className="w-full">
                Alterar senha
              </Button>
            </CardContent>
          </Card>

          <Card className="border-blue-100 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-900/10">
            <CardContent className="p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="font-semibold text-blue-900 dark:text-blue-100">Ambiente de produção</p>
                <StatusBadge status="success">Operacional</StatusBadge>
              </div>
              <p className="text-sm text-blue-800/80 dark:text-blue-300/80">
                A plataforma está disponível e todas as integrações respondem normalmente.
              </p>
              <p className="mt-3 text-xs text-blue-700/60 dark:text-blue-300/60">
                Última verificação: hoje, 14:20
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function NotificationOption({
  title,
  description,
  defaultChecked = false,
}: {
  title: string
  description: string
  defaultChecked?: boolean
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 py-4">
      <span>
        <span className="block text-sm font-medium">{title}</span>
        <span className="mt-0.5 block text-xs text-foreground/50">{description}</span>
      </span>
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="h-4 w-4 shrink-0 accent-primary"
        aria-label={title}
      />
    </label>
  )
}
