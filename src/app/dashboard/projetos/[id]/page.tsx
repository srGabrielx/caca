import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { StatusBadge } from "@/components/ui/StatusBadge"
import { Progress } from "@/components/ui/Progress"
import { Button } from "@/components/ui/Button"
import { CheckCircle2, Circle, Clock, MessageSquare, Download, FileText } from "lucide-react"

export default function ProjetoDetalhesPage() {
  const steps = [
    { title: "Pedido recebido", status: "completed", date: "10 Out, 2024" },
    { title: "Análise", status: "completed", date: "12 Out, 2024" },
    { title: "Planejamento", status: "completed", date: "15 Out, 2024" },
    { title: "Desenvolvimento", status: "current", date: "Hoje" },
    { title: "Revisão", status: "pending", date: "" },
    { title: "Testes", status: "pending", date: "" },
    { title: "Entrega", status: "pending", date: "" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Seu Aplicativo Mobile</h1>
          <p className="text-sm text-foreground/60 flex items-center gap-2 mt-1">
            ID: #PRJ-9824 <span className="w-1 h-1 bg-border rounded-full" /> Criado em 10 Out, 2024
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <MessageSquare className="w-4 h-4" /> Mensagens
          </Button>
          <StatusBadge status="info">Em andamento</StatusBadge>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Timeline Col */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Progresso</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Visual Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Etapa 4 de 7</span>
                    <span className="text-primary">57%</span>
                  </div>
                  <Progress value={57} />
                </div>

                {/* Vertical Timeline */}
                <div className="relative pl-3 space-y-6 border-l-2 border-border/50 ml-2">
                  {steps.map((step, i) => (
                    <div key={i} className="relative pl-6">
                      {/* Node indicator */}
                      <span className="absolute -left-[27px] top-1 bg-card rounded-full p-1">
                        {step.status === "completed" ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 bg-card" />
                        ) : step.status === "current" ? (
                          <div className="w-5 h-5 rounded-full border-4 border-primary bg-card" />
                        ) : (
                          <Circle className="w-5 h-5 text-border bg-card" />
                        )}
                      </span>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className={`font-medium ${step.status === "pending" ? "text-foreground/50" : "text-foreground"}`}>
                          {step.title}
                        </h4>
                        {step.date && (
                          <span className="text-xs text-foreground/50 font-medium flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {step.date}
                          </span>
                        )}
                      </div>
                      
                      {/* Contextual content for current step */}
                      {step.status === "current" && (
                        <div className="mt-3 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                          <p className="text-sm text-foreground/80 mb-3">
                            Estamos codificando a interface principal e integrando com o banco de dados.
                          </p>
                          <Button size="sm" variant="outline" className="gap-2">
                            <Download className="w-4 h-4" /> Baixar APK de Teste
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Info Col */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Detalhes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="space-y-1">
                <span className="text-foreground/50 font-medium">Serviço</span>
                <p className="font-medium">Aplicativo Mobile (iOS e Android)</p>
              </div>
              <div className="space-y-1">
                <span className="text-foreground/50 font-medium">Objetivo</span>
                <p className="font-medium">Plataforma de delivery próprio.</p>
              </div>
              <div className="space-y-1">
                <span className="text-foreground/50 font-medium">Responsável CAÇA</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">AL</div>
                  <p className="font-medium">Alex Silva</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Arquivos (2)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <a href="#" className="flex items-center gap-3 p-2 rounded hover:bg-card border border-transparent hover:border-border transition-colors group">
                <FileText className="w-8 h-8 text-blue-500" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Contrato_Prestacao_Servico.pdf</p>
                  <p className="text-xs text-foreground/50">2.4 MB</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 p-2 rounded hover:bg-card border border-transparent hover:border-border transition-colors group">
                <FileText className="w-8 h-8 text-orange-500" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Briefing_Inicial.pdf</p>
                  <p className="text-xs text-foreground/50">1.1 MB</p>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
