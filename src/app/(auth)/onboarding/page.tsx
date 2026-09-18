"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Sparkles, LayoutDashboard, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

type Step = 1 | 2 | 3

export default function OnboardingPage() {
  const [step, setStep] = useState<Step>(1)
  const handleNext = () => setStep((s) => Math.min(s + 1, 3) as Step)

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-lg">
        
        {step === 1 && (
          <div className="text-center space-y-6 fade-in">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Bem-vindo à CAÇA.</h1>
            <p className="text-lg text-foreground/70 max-w-md mx-auto">
              Aqui você acompanha seus projetos, indica clientes e gerencia seus ganhos de forma simples.
            </p>
            <div className="pt-6">
              <Button size="lg" onClick={handleNext} className="gap-2">
                Começar <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="text-center space-y-8 fade-in">
            <h2 className="text-2xl font-bold tracking-tight">Tudo em um só lugar</h2>
            
            <div className="grid gap-4">
              <Card className="text-left border-border/50 bg-card/50">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <LayoutDashboard className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Projetos</h3>
                    <p className="text-sm text-foreground/60">Acompanhe cada etapa de desenvolvimento.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-left border-border/50 bg-card/50">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Indicações e Comissões</h3>
                    <p className="text-sm text-foreground/60">Indique, acompanhe o status e receba via PIX.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-2">
              <Button size="lg" onClick={handleNext}>
                Continuar
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center space-y-8 fade-in">
            <h2 className="text-2xl font-bold tracking-tight">O que deseja fazer primeiro?</h2>
            
            <div className="grid gap-4">
              <Button variant="outline" className="h-16 justify-between px-6 text-base group" asChild>
                <Link href="/dashboard/solicitar">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">+</div>
                    Criar projeto
                  </span>
                  <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>
              
              <Button variant="outline" className="h-16 justify-between px-6 text-base group" asChild>
                <Link href="/dashboard/indicacoes/nova">
                  <span className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary" />
                    Fazer indicação
                  </span>
                  <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>

              <Button variant="ghost" className="h-16 text-base" asChild>
                <Link href="/dashboard">
                  Apenas explorar painel
                </Link>
              </Button>
            </div>
          </div>
        )}

        {/* Indicador de passos */}
        <div className="flex justify-center gap-2 mt-12">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all ${step === i ? 'w-6 bg-primary' : 'w-1.5 bg-border'}`} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}
