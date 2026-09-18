import Link from "next/link"
import { ArrowRight, CalendarDays, CheckCircle2, Clock, FolderKanban, Plus } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Progress } from "@/components/ui/Progress"
import { StatusBadge } from "@/components/ui/StatusBadge"

export default function ProjetosPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Meus projetos</h1>
          <p className="mt-1 text-sm text-foreground/60">Acompanhe o andamento das suas solicitações.</p>
        </div>
        <Button className="gap-2" asChild>
          <Link href="/dashboard/solicitar">
            <Plus className="h-4 w-4" /> Novo projeto
          </Link>
        </Button>
      </div>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Em andamento</h2>
          <span className="text-sm text-foreground/50">1 projeto</span>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="border-b border-border/70 bg-primary/5">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <FolderKanban className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-xl">Seu Aplicativo Mobile</CardTitle>
                  <p className="mt-1 text-sm text-foreground/60">ID #PRJ-9824</p>
                </div>
              </div>
              <StatusBadge status="info">Desenvolvimento</StatusBadge>
            </div>
          </CardHeader>
          <CardContent className="grid gap-6 pt-6 md:grid-cols-[1fr_auto] md:items-center">
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-medium">
                <span>Progresso geral</span>
                <span className="text-primary">57%</span>
              </div>
              <Progress value={57} />
              <p className="text-sm text-foreground/60">Etapa 4 de 7 · Próxima etapa: revisão</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm md:min-w-72">
              <div className="rounded-lg border border-border p-3">
                <span className="flex items-center gap-2 text-xs text-foreground/50">
                  <CalendarDays className="h-3.5 w-3.5" /> Início
                </span>
                <p className="mt-1 font-medium">10 Out, 2024</p>
              </div>
              <div className="rounded-lg border border-border p-3">
                <span className="flex items-center gap-2 text-xs text-foreground/50">
                  <Clock className="h-3.5 w-3.5" /> Atualização
                </span>
                <p className="mt-1 font-medium">Hoje, 10:45</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-end border-t border-border/70 pt-4">
            <Button variant="outline" className="w-full gap-2 sm:w-auto" asChild>
              <Link href="/dashboard/projetos/123">
                Ver detalhes <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Projetos concluídos</h2>
        <Card>
          <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-100 p-2 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Landing page de lançamento</h3>
                <p className="text-xs text-foreground/55">Concluído em 18 Jul, 2024</p>
              </div>
            </div>
            <StatusBadge status="success">Entregue</StatusBadge>
          </CardContent>
        </Card>
      </section>

      <Card className="border-dashed bg-card/40">
        <CardContent className="flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="font-semibold">Tem uma nova ideia?</h2>
            <p className="mt-1 text-sm text-foreground/60">Conte o que precisa e receba uma análise da nossa equipe.</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/solicitar">Solicitar projeto</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
