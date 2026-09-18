import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { StatusBadge } from "@/components/ui/StatusBadge"
import { Wallet, ArrowDownLeft, Landmark, Plus, Info, KeyRound } from "lucide-react"

export default function GanhosPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Ganhos e Comissões</h1>
        <p className="text-sm text-foreground/60 mt-1">Gerencie seus recebíveis e chaves de pagamento.</p>
      </div>

      {/* Visão Geral Financeira */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="bg-primary text-primary-foreground border-primary">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-primary-foreground/80 mb-2">
              <Wallet className="w-4 h-4" />
              <span className="text-sm font-medium">Disponível para saque</span>
            </div>
            <div className="text-3xl font-bold">R$ 850,00</div>
          </CardContent>
          <CardFooter className="pt-0 pb-6 border-t border-primary-foreground/10 mt-4">
            <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold mt-4">
              Solicitar PIX
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardContent className="p-6 h-full flex flex-col justify-center">
            <div className="flex items-center gap-2 text-foreground/60 mb-2">
              <ArrowDownLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Pendente (Em aprovação)</span>
            </div>
            <div className="text-2xl font-bold text-foreground/80">R$ 600,00</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 h-full flex flex-col justify-center">
            <div className="flex items-center gap-2 text-foreground/60 mb-2">
              <Landmark className="w-4 h-4" />
              <span className="text-sm font-medium">Recebido (Total)</span>
            </div>
            <div className="text-2xl font-bold text-foreground/80">R$ 1.450,00</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Histórico */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold">Histórico de Lançamentos</h2>
          <Card>
            <div className="divide-y divide-border">
              {[
                { projeto: "Site Institucional - Clínica", valor: "R$ 450,00", status: "Liberada", badge: "success", date: "Hoje" },
                { projeto: "App Delivery - Pizzaria", valor: "R$ 400,00", status: "Liberada", badge: "success", date: "Ontem" },
                { projeto: "Sistema de Gestão", valor: "R$ 600,00", status: "Pendente", badge: "warning", date: "12 Out" },
                { projeto: "Saque via PIX", valor: "-R$ 1.000,00", status: "Pago", badge: "default", date: "05 Out", isSaque: true },
              ].map((item, i) => (
                <div key={i} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-card/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.isSaque ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                      {item.isSaque ? <ArrowDownLeft className="w-5 h-5" /> : <Wallet className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="font-semibold">{item.projeto}</p>
                      <p className="text-xs text-foreground/50">{item.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:justify-end">
                    <span className={`font-bold ${item.isSaque ? 'text-foreground' : 'text-green-600 dark:text-green-500'}`}>{item.valor}</span>
                    <StatusBadge status={item.badge as any}>{item.status}</StatusBadge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Chave PIX */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Dados de Recebimento</h2>
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-base">
                <KeyRound className="w-4 h-4" /> Chave PIX
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Active Key */}
              <div className="p-3 border border-border rounded-lg bg-card flex justify-between items-center">
                <div>
                  <p className="text-xs text-foreground/60 mb-0.5">CPF</p>
                  <p className="font-medium text-sm">***.123.456-**</p>
                </div>
                <Button variant="ghost" size="sm" className="text-xs">Editar</Button>
              </div>

              {/* Add New Key */}
              <Button variant="outline" className="w-full gap-2 border-dashed">
                <Plus className="w-4 h-4" /> Adicionar nova chave
              </Button>

              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/50 p-3 rounded-lg flex gap-3 mt-4">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <p className="text-xs text-blue-800 dark:text-blue-300">
                  Os pagamentos são processados toda segunda e quinta-feira. Certifique-se de que sua chave PIX está correta.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
