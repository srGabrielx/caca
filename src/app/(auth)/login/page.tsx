import { Card, CardContent, CardFooter } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary rounded flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4">C</div>
          <h1 className="text-2xl font-bold tracking-tight">Bem-vindo à CAÇA</h1>
          <p className="text-sm text-foreground/60 mt-1">Acesse sua conta para continuar.</p>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">E-mail</label>
              <input 
                type="email" 
                placeholder="seu@email.com" 
                className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Senha</label>
                <Link href="#" className="text-xs text-primary hover:underline">Esqueci a senha</Link>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <Button className="w-full gap-2" asChild>
              <Link href="/dashboard">
                Entrar <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-foreground/50 font-medium">Ou</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Continuar com Google
            </Button>
          </CardFooter>
        </Card>

        <p className="text-center text-sm text-foreground/60">
          Não tem uma conta? <Link href="/cadastro" className="text-primary font-medium hover:underline">Criar conta</Link>
        </p>
      </div>
    </div>
  )
}
