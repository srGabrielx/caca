import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Progress } from "@/components/ui/Progress"
import { StatusBadge } from "@/components/ui/StatusBadge"
import { ArrowRight, MessageSquare, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Olá, João.</h1>
        <p className="text-foreground/60 mt-1">Veja o que está acontecendo com seus projetos e indicações.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Projeto Ativo */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            Projeto ativo
          </h2>
          <Card>
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Seu Aplicativo Mobile</CardTitle>
                  <p className="text-sm text-foreground/60 mt-1">Última atualização hoje às 10:45</p>
                </div>
                <StatusBadge status="info">Desenvolvimento</StatusBadge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>Progresso</span>
                  <span>70%</span>
                </div>
                <Progress value={70} />
              </div>
              <div className="bg-primary/5 p-3 rounded-lg border border-primary/10">
                <span className="text-sm font-semibold block text-primary">Próxima etapa:</span>
                <span className="text-sm">Testes internos e ajustes de interface.</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full justify-between group" asChild>
                <Link href="/dashboard/projetos/123">
                  Ver projeto completo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* Ações Pendentes */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-yellow-600 dark:text-yellow-500">
            <AlertCircle className="w-5 h-5" /> Precisamos de você
          </h2>
          <Card className="border-yellow-200 dark:border-yellow-900/50 bg-yellow-50/50 dark:bg-yellow-900/10">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Aprovar layout inicial</h3>
                  <p className="text-sm text-foreground/70 mt-1">O layout das telas principais já está disponível para sua análise e aprovação.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="default" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                Resolver agora
              </Button>
            </CardFooter>
          </Card>

          {/* Atalhos */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Link href="/dashboard/mensagens" className="flex flex-col items-center justify-center p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors text-center gap-2">
              <MessageSquare className="w-6 h-6 text-foreground/70" />
              <span className="text-sm font-medium">Mensagens</span>
            </Link>
            <Link href="/dashboard/solicitar" className="flex flex-col items-center justify-center p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors text-center gap-2">
              <div className="w-6 h-6 rounded bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">+</div>
              <span className="text-sm font-medium">Novo projeto</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
