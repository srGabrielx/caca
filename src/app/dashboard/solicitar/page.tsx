"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { ArrowLeft, Layout, Smartphone, Settings, Sparkles, HelpCircle, CheckCircle2 } from "lucide-react"
import Link from "next/link"

type Step = 1 | 2 | 3 | 4

export default function SolicitarProjetoPage() {
  const [step, setStep] = useState<Step>(1)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  
  const handleNext = () => setStep((s) => Math.min(s + 1, 4) as Step)
  const handleBack = () => setStep((s) => Math.max(s - 1, 1) as Step)

  const services = [
    { id: "site", icon: Layout, title: "Site", desc: "Institucional, landing page ou e-commerce." },
    { id: "app", icon: Smartphone, title: "Aplicativo", desc: "App mobile para iOS e Android." },
    { id: "sistema", icon: Settings, title: "Sistema", desc: "Software web sob medida." },
    { id: "automacao", icon: Sparkles, title: "Automação / IA", desc: "Otimização de processos e IA." },
    { id: "indeciso", icon: HelpCircle, title: "Não sei ainda", desc: "Preciso de ajuda para decidir." },
  ]

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        {step > 1 && step < 4 && (
          <button onClick={handleBack} className="p-2 hover:bg-border/50 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Novo Projeto</h1>
          {step < 4 && <p className="text-sm text-foreground/60 mt-1">Etapa {step} de 3</p>}
        </div>
      </div>

      <Card>
        {step === 1 && (
          <>
            <CardHeader>
              <CardTitle>O que você quer criar?</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <div
                  key={s.id}
                  onClick={() => setSelectedService(s.id)}
                  className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedService === s.id 
                      ? "border-primary bg-primary/5 ring-1 ring-primary" 
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${selectedService === s.id ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{s.title}</h3>
                    <p className="text-xs text-foreground/60 mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="justify-end">
              <Button onClick={handleNext} disabled={!selectedService}>
                Próximo passo
              </Button>
            </CardFooter>
          </>
        )}

        {step === 2 && (
          <>
            <CardHeader>
              <CardTitle>Conte um pouco sobre sua ideia</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Qual o objetivo principal?</label>
                <input 
                  type="text" 
                  placeholder="Ex: Vender mais, automatizar atendimento..." 
                  className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Detalhes adicionais (opcional)</label>
                <textarea 
                  rows={4}
                  placeholder="Escreva aqui qualquer informação que achar relevante..." 
                  className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button onClick={handleNext}>
                Próximo passo
              </Button>
            </CardFooter>
          </>
        )}

        {step === 3 && (
          <>
            <CardHeader>
              <CardTitle>Como prefere conversar?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-card">
                  <input type="radio" name="contact" className="w-4 h-4 text-primary" defaultChecked />
                  <span className="font-medium">WhatsApp</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-card">
                  <input type="radio" name="contact" className="w-4 h-4 text-primary" />
                  <span className="font-medium">Chat da Plataforma</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-card">
                  <input type="radio" name="contact" className="w-4 h-4 text-primary" />
                  <span className="font-medium">E-mail</span>
                </label>
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button onClick={handleNext}>
                Enviar pedido
              </Button>
            </CardFooter>
          </>
        )}

        {step === 4 && (
          <div className="flex flex-col items-center justify-center p-12 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <CardTitle className="text-2xl">Pedido recebido!</CardTitle>
            <p className="text-foreground/70 max-w-sm">
              Nossa equipe já está analisando sua solicitação. Você pode acompanhar tudo pelo seu painel.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button variant="outline" asChild>
                <Link href="/dashboard">Acompanhar pedido</Link>
              </Button>
              <Button asChild>
                <Link href="/dashboard/mensagens">Enviar mensagem</Link>
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
