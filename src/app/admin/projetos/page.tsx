import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { StatusBadge } from "@/components/ui/StatusBadge"
import { Button } from "@/components/ui/Button"
import { Filter, Search, Plus, MoreHorizontal } from "lucide-react"

export default function AdminProjetosPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Gestão de Projetos</h1>
          <p className="text-sm text-foreground/60 mt-1">Gerencie e atualize o status dos projetos ativos.</p>
        </div>
        <Button className="gap-2 shrink-0">
          <Plus className="w-4 h-4" /> Novo Projeto
        </Button>
      </div>

      <Card>
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
            <input 
              type="text" 
              placeholder="Buscar por ID, Cliente ou Projeto..." 
              className="w-full pl-9 p-2 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" /> Filtros
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-foreground/60 uppercase bg-card/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">ID / Projeto</th>
                <th className="px-6 py-4 font-medium">Cliente</th>
                <th className="px-6 py-4 font-medium">Serviço</th>
                <th className="px-6 py-4 font-medium">Status / Etapa</th>
                <th className="px-6 py-4 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { id: "PRJ-9824", name: "Seu Aplicativo Mobile", client: "João Silva", service: "Aplicativo", status: "Desenvolvimento", badge: "info" },
                { id: "PRJ-9825", name: "E-commerce Completo", client: "Maria Souza", service: "Site", status: "Planejamento", badge: "default" },
                { id: "PRJ-9826", name: "Sistema de Gestão", client: "Carlos Empresa", service: "Sistema", status: "Revisão", badge: "warning" },
                { id: "PRJ-9827", name: "Landing Page", client: "Ana Vendas", service: "Site", status: "Entrega", badge: "success" },
              ].map((prj, i) => (
                <tr key={i} className="hover:bg-card/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-foreground">{prj.name}</div>
                    <div className="text-xs text-foreground/50 mt-0.5">#{prj.id}</div>
                  </td>
                  <td className="px-6 py-4 font-medium">{prj.client}</td>
                  <td className="px-6 py-4 text-foreground/70">{prj.service}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={prj.badge as any}>{prj.status}</StatusBadge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground/50 hover:text-foreground">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-border flex items-center justify-between text-sm text-foreground/60">
          <span>Mostrando 1-4 de 18 projetos</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Anterior</Button>
            <Button variant="outline" size="sm">Próxima</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
