import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Building2, CalendarDays, CheckCircle2, Circle, Clock, DollarSign, Mail, MessageSquare, Phone } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { StatusBadge, type StatusBadgeProps } from "@/components/ui/StatusBadge"

type Referral = {
  name: string
  initials: string
  service: string
  contact: string
  email: string
  createdAt: string
  status: string
  badge: StatusBadgeProps["status"]
  commission: string
  description: string
  currentStep: number
}

const referrals: Record<string, Referral> = {
  "0": {
    name: "Empresa XPTO",
    initials: "EX",
    service: "Sistema Web",
    contact: "(11) 98765-2210",
    email: "contato@empresaxpto.com.br",
    createdAt: "10 Out, 2024",
    status: "Projeto fechado",
    badge: "success",
    commission: "R$ 600,00",
    description: "Sistema web para centralizar pedidos, estoque e relatórios da operação.",
    currentStep: 4,
  },
  "1": {
    name: "Padaria do Bairro",
    initials: "PB",
    service: "Aplicativo Mobile",
    contact: "(11) 97654-8890",
    email: "atendimento@padariadobairro.com.br",
    createdAt: "15 Out, 2024",
    status: "Em negociação",
    badge: "warning",
    commission: "A definir",
    description: "Aplicativo para encomendas, entregas e programa de fidelidade.",
    currentStep: 2,
  },
  "2": {
    name: "Clínica Saúde",
    initials: "CS",
    service: "Site Institucional",
    contact: "(11) 96543-7741",
    email: "contato@clinicasaude.com.br",
    createdAt: "16 Out, 2024",
    status: "Contato iniciado",
    badge: "info",
    commission: "A definir",
    description: "Novo site institucional com apresentação das especialidades e captação de pacientes.",
    currentStep: 1,
  },
}

const timeline = [
  { title: "Indicação recebida", description: "Os dados foram enviados para a equipe comercial." },
  { title: "Contato e diagnóstico", description: "Entendemos a necessidade e o momento do cliente." },
  { title: "Proposta enviada", description: "A solução, o prazo e o investimento foram apresentados." },
  { title: "Projeto fechado", description: "A proposta foi aceita e a comissão foi registrada." },
]

export function generateStaticParams() {
  return Object.keys(referrals).map((id) => ({ id }))
}

export default async function IndicacaoDetalhesPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const referral = referrals[id]

  if (!referral) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Button variant="ghost" size="sm" className="-ml-3 gap-2" asChild>
          <Link href="/dashboard/indicacoes">
            <ArrowLeft className="h-4 w-4" /> Voltar para indicações
          </Link>
        </Button>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
              {referral.initials}
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{referral.name}</h1>
              <p className="mt-1 text-sm text-foreground/60">Indicação #{id.padStart(4, "0")}</p>
            </div>
          </div>
          <StatusBadge status={referral.badge}>{referral.status}</StatusBadge>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Andamento da indicação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative ml-2 space-y-7 border-l-2 border-border/70 pl-7">
                {timeline.map((step, index) => {
                  const stepNumber = index + 1
                  const completed = stepNumber < referral.currentStep || referral.currentStep === timeline.length
                  const current = stepNumber === referral.currentStep && referral.currentStep !== timeline.length

                  return (
                    <div key={step.title} className="relative">
                      <span className="absolute -left-[38px] top-0.5 rounded-full bg-card p-1">
                        {completed ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : current ? (
                          <span className="block h-5 w-5 rounded-full border-4 border-primary bg-card" />
                        ) : (
                          <Circle className="h-5 w-5 text-border" />
                        )}
                      </span>
                      <h3 className={`font-medium ${!completed && !current ? "text-foreground/45" : ""}`}>{step.title}</h3>
                      <p className={`mt-1 text-sm ${!completed && !current ? "text-foreground/35" : "text-foreground/60"}`}>{step.description}</p>
                      {current && (
                        <div className="mt-3 flex items-start gap-2 rounded-lg border border-primary/15 bg-primary/5 p-3 text-sm text-foreground/75">
                          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          Nossa equipe está trabalhando nesta etapa. Você será avisado assim que houver uma atualização.
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sobre a oportunidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-foreground/70">{referral.description}</p>
              <div className="mt-5 flex items-center gap-3 rounded-lg border border-border bg-card/60 p-4">
                <Building2 className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-foreground/50">Serviço de interesse</p>
                  <p className="text-sm font-medium">{referral.service}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-6">
          <Card className={referral.commission !== "A definir" ? "border-primary/30 bg-primary/5" : ""}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <DollarSign className="h-4 w-4" /> Comissão estimada
              </div>
              <p className="mt-2 text-2xl font-bold">{referral.commission}</p>
              <p className="mt-2 text-xs text-foreground/50">O valor é liberado conforme as regras do programa de indicações.</p>
              {referral.commission !== "A definir" && (
                <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/dashboard/ganhos">Ver meus ganhos</Link>
                </Button>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dados do contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-foreground/45" />
                <div>
                  <p className="text-xs text-foreground/50">Telefone</p>
                  <p className="font-medium">{referral.contact}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-foreground/45" />
                <div className="min-w-0">
                  <p className="text-xs text-foreground/50">E-mail</p>
                  <p className="truncate font-medium">{referral.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-0.5 h-4 w-4 text-foreground/45" />
                <div>
                  <p className="text-xs text-foreground/50">Enviada em</p>
                  <p className="font-medium">{referral.createdAt}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button variant="outline" className="w-full gap-2" asChild>
            <Link href="/dashboard/mensagens">
              <MessageSquare className="h-4 w-4" /> Falar com a equipe
            </Link>
          </Button>
        </aside>
      </div>
    </div>
  )
}
