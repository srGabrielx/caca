"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { ArrowLeft, User, Briefcase, MessageSquare, CheckCircle2 } from "lucide-react"
import Link from "next/link"

type Step = 1 | 2 | 3 | 4

export default function NovaIndicacaoPage() {
  const [step, setStep] = useState<Step>(1)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  
  const handleNext = () => setStep((s) => Math.min(s + 1, 4) as Step)
  const handleBack = () => setStep((s) => Math.max(s - 1, 1) as Step)

  const services = [
    { id: "site", title: "Site Institucional / E-commerce" },
    { id: "app", title: "Aplicativo Mobile" },
    { id: "sistema", title: "Sistema / Software" },
    { id: "automacao", title: "Automação / IA" },
    { id: "indeciso", title: "Não sei ainda" },
  ]

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        {step > 1 && step < 4 && (
          <button onClick={handleBack} className="p-2 hover:bg-border/50 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Nova Indicação</h1>
          {step < 4 && <p className="text-sm text-foreground/60 mt-1">Etapa {step} de 3</p>}
        </div>
      </div>

      <Card>
        {step === 1 && (
          <>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" /> Quem você está indicando?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nome completo da pessoa ou empresa</label>
                <input 
                  type="text" 
                  placeholder="Ex: Maria da Silva ou Padaria Pão Quente" 
                  className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Telefone ou WhatsApp</label>
                <input 
                  type="tel" 
                  placeholder="(00) 00000-0000" 
                  className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
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

        {step === 2 && (
          <>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" /> O que essa pessoa procura?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {services.map((s) => (
                <label 
                  key={s.id} 
                  className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-colors ${
                    selectedService === s.id ? "border-primary bg-primary/5" : "border-border hover:bg-card"
                  }`}
                  onClick={() => setSelectedService(s.id)}
                >
                  <input 
                    type="radio" 
                    name="service" 
                    checked={selectedService === s.id}
                    onChange={() => {}}
                    className="w-4 h-4 text-primary" 
                  />
                  <span className="font-medium text-sm">{s.title}</span>
                </label>
              ))}
            </CardContent>
            <CardFooter className="justify-end">
              <Button onClick={handleNext} disabled={!selectedService}>
                Próximo passo
              </Button>
            </CardFooter>
          </>
        )}

        {step === 3 && (
          <>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" /> Informações adicionais (opcional)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Você já avisou que entraremos em contato?</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="aviso" className="w-4 h-4 text-primary" /> Sim
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="aviso" className="w-4 h-4 text-primary" /> Não
                  </label>
                </div>
              </div>
              <div className="space-y-2 pt-4">
                <label className="text-sm font-medium">Alguma observação?</label>
                <textarea 
                  rows={3}
                  placeholder="Ex: O cliente tem urgência, prefere contato na parte da tarde..." 
                  className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button onClick={handleNext}>
                Enviar Indicação
              </Button>
            </CardFooter>
          </>
        )}

        {step === 4 && (
          <div className="flex flex-col items-center justify-center p-12 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <CardTitle className="text-2xl">Indicação registrada!</CardTitle>
            <p className="text-foreground/70 max-w-sm">
              Nossa equipe já recebeu os dados. Você poderá acompanhar o andamento pelo seu painel.
            </p>
            <div className="pt-6">
              <Button asChild>
                <Link href="/dashboard/indicacoes">
                  Acompanhar indicações
                </Link>
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
