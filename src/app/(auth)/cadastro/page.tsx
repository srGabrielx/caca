import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"

const inputClassName =
  "w-full rounded-md border border-border bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"

export default function CadastroPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[1fr_460px]">
        <section className="hidden space-y-6 lg:block">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded bg-primary text-2xl font-bold text-primary-foreground">
              C
            </div>
            <span className="text-2xl font-bold tracking-tight">CAÇA</span>
          </div>

          <div className="max-w-lg space-y-3">
            <h1 className="text-4xl font-bold tracking-tight">
              Seus projetos e indicações em um só lugar.
            </h1>
            <p className="text-lg text-foreground/65">
              Crie sua conta gratuitamente para acompanhar entregas, conversar com a equipe e receber suas comissões.
            </p>
          </div>

          <ul className="space-y-3 text-sm text-foreground/75">
            {["Acompanhamento de projetos em tempo real", "Programa de indicações e comissões", "Atendimento direto com a equipe"].map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        <section className="w-full">
          <div className="mb-6 text-center lg:hidden">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded bg-primary text-2xl font-bold text-primary-foreground">
              C
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Crie sua conta</h1>
            <p className="mt-1 text-sm text-foreground/60">Comece a usar a plataforma CAÇA.</p>
          </div>

          <Card>
            <CardHeader className="hidden lg:flex">
              <CardTitle className="text-2xl">Crie sua conta</CardTitle>
              <p className="text-sm text-foreground/60">Preencha seus dados para começar.</p>
            </CardHeader>
            <CardContent className="space-y-4 pt-6 lg:pt-0">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nome completo
                </label>
                <input id="name" name="name" type="text" autoComplete="name" placeholder="Seu nome" className={inputClassName} />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </label>
                <input id="email" name="email" type="email" autoComplete="email" placeholder="seu@email.com" className={inputClassName} />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Senha
                  </label>
                  <input id="password" name="password" type="password" autoComplete="new-password" placeholder="Mínimo de 8 caracteres" className={inputClassName} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirm-password" className="text-sm font-medium">
                    Confirmar senha
                  </label>
                  <input id="confirm-password" name="confirm-password" type="password" autoComplete="new-password" placeholder="Repita a senha" className={inputClassName} />
                </div>
              </div>

              <label className="flex items-start gap-3 text-sm text-foreground/65">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border text-primary" />
                <span>Concordo com os termos de uso e com a política de privacidade da plataforma.</span>
              </label>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <Button className="w-full gap-2" asChild>
                <Link href="/onboarding">
                  Criar conta <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <p className="text-center text-sm text-foreground/60">
                Já possui uma conta?{" "}
                <Link href="/login" className="font-medium text-primary hover:underline">
                  Entrar
                </Link>
              </p>
            </CardFooter>
          </Card>
        </section>
      </div>
    </main>
  )
}
