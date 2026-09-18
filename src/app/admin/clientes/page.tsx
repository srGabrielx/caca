import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { StatusBadge, type StatusBadgeProps } from "@/components/ui/StatusBadge"
import { Filter, MoreHorizontal, Search, UserCheck, UserPlus, Users } from "lucide-react"

type Client = {
  name: string
  email: string
  phone: string
  profile: string
  projects: number
  joinedAt: string
  status: StatusBadgeProps["status"]
  statusLabel: string
}

const clients: Client[] = [
  {
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 99912-4400",
    profile: "Cliente",
    projects: 2,
    joinedAt: "18 Out 2024",
    status: "success",
    statusLabel: "Ativo",
  },
  {
    name: "Maria Souza",
    email: "maria.souza@email.com",
    phone: "(21) 98845-1203",
    profile: "Cliente e indicador",
    projects: 1,
    joinedAt: "16 Out 2024",
    status: "success",
    statusLabel: "Ativo",
  },
  {
    name: "Marcos Silva",
    email: "marcos.indica@email.com",
    phone: "(31) 99773-9821",
    profile: "Indicador",
    projects: 0,
    joinedAt: "12 Out 2024",
    status: "info",
    statusLabel: "Em análise",
  },
  {
    name: "Ana Vendas",
    email: "ana@vendas.com.br",
    phone: "(41) 99108-7754",
    profile: "Cliente",
    projects: 3,
    joinedAt: "05 Out 2024",
    status: "default",
    statusLabel: "Inativo",
  },
]

export default function AdminClientesPage() {
  return (
    <div className="space-y-6 pb-16 md:pb-0">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Clientes e Perfis</h1>
          <p className="mt-1 text-sm text-foreground/60">
            Consulte cadastros, perfis e o histórico de relacionamento.
          </p>
        </div>
        <Button className="gap-2 sm:shrink-0">
          <UserPlus className="h-4 w-4" /> Novo cliente
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <div className="mb-2 flex items-center gap-2 text-foreground/60">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Perfis cadastrados</span>
            </div>
            <p className="text-2xl font-bold">128</p>
            <p className="mt-1 text-xs text-foreground/50">24 novos neste mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="mb-2 flex items-center gap-2 text-foreground/60">
              <UserCheck className="h-4 w-4" />
              <span className="text-sm font-medium">Clientes ativos</span>
            </div>
            <p className="text-2xl font-bold">84</p>
            <p className="mt-1 text-xs text-foreground/50">65,6% da base</p>
          </CardContent>
        </Card>
        <Card className="border-blue-100 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-900/10">
          <CardContent className="p-5">
            <div className="mb-2 flex items-center gap-2 text-blue-700 dark:text-blue-400">
              <UserPlus className="h-4 w-4" />
              <span className="text-sm font-medium">Indicadores</span>
            </div>
            <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">36</p>
            <p className="mt-1 text-xs text-blue-700/70 dark:text-blue-300/70">8 também são clientes</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <div className="flex flex-col justify-between gap-4 border-b border-border p-4 sm:flex-row">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
            <input
              type="search"
              aria-label="Buscar clientes"
              placeholder="Buscar por nome, e-mail ou telefone..."
              className="w-full rounded-md border border-border bg-background p-2 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" /> Filtros
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="border-b border-border bg-card/50 text-xs uppercase text-foreground/60">
              <tr>
                <th className="px-6 py-4 font-medium">Cliente</th>
                <th className="px-6 py-4 font-medium">Perfil</th>
                <th className="px-6 py-4 font-medium">Projetos</th>
                <th className="px-6 py-4 font-medium">Cadastro</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 text-right font-medium">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {clients.map((client) => (
                <tr key={client.email} className="transition-colors hover:bg-card/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold">{client.name}</p>
                        <p className="text-xs text-foreground/50">{client.email}</p>
                        <p className="text-xs text-foreground/50">{client.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-foreground/70">{client.profile}</td>
                  <td className="px-6 py-4 font-medium">{client.projects}</td>
                  <td className="px-6 py-4 text-foreground/70">{client.joinedAt}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={client.status}>{client.statusLabel}</StatusBadge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-foreground/50 hover:text-foreground"
                      aria-label={`Ver ações de ${client.name}`}
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
          <span>Mostrando 1-4 de 128 perfis</span>
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
