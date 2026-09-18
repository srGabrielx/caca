import Link from "next/link"
import { Bell, CreditCard, LogOut, Mail, Phone, ShieldCheck, User } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"

const inputClassName =
  "w-full rounded-md border border-border bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"

export default function PerfilPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Perfil</h1>
        <p className="mt-1 text-sm text-foreground/60">Gerencie seus dados pessoais e preferências.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <User className="h-5 w-5 text-primary" /> Dados pessoais
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="profile-name" className="text-sm font-medium">Nome completo</label>
                <input id="profile-name" type="text" defaultValue="João Silva" autoComplete="name" className={inputClassName} />
              </div>
              <div className="space-y-2">
                <label htmlFor="profile-email" className="text-sm font-medium">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-4 w-4 text-foreground/40" />
                  <input id="profile-email" type="email" defaultValue="joao@email.com" autoComplete="email" className={`${inputClassName} pl-10`} />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="profile-phone" className="text-sm font-medium">Telefone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 h-4 w-4 text-foreground/40" />
                  <input id="profile-phone" type="tel" defaultValue="(11) 98765-4321" autoComplete="tel" className={`${inputClassName} pl-10`} />
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-end border-t border-border/70 pt-4">
              <Button type="button">Salvar alterações</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bell className="h-5 w-5 text-primary" /> Notificações
              </CardTitle>
            </CardHeader>
            <CardContent className="divide-y divide-border p-0">
              {[
                { title: "Atualizações dos projetos", description: "Avise quando uma etapa for concluída.", checked: true },
                { title: "Novas mensagens", description: "Receba alertas de mensagens da equipe.", checked: true },
                { title: "Indicações e comissões", description: "Acompanhe mudanças de status e pagamentos.", checked: true },
                { title: "Novidades da CAÇA", description: "Conteúdos, dicas e novos serviços.", checked: false },
              ].map((preference) => (
                <label key={preference.title} className="flex cursor-pointer items-start justify-between gap-4 p-4 hover:bg-card/60">
                  <span>
                    <span className="block text-sm font-medium">{preference.title}</span>
                    <span className="mt-0.5 block text-xs text-foreground/55">{preference.description}</span>
                  </span>
                  <input type="checkbox" defaultChecked={preference.checked} className="mt-1 h-4 w-4 shrink-0 rounded border-border text-primary" />
                </label>
              ))}
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-6">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">JS</div>
              <h2 className="mt-4 text-lg font-semibold">João Silva</h2>
              <p className="text-sm text-foreground/55">Cliente desde outubro de 2024</p>
              <div className="mt-5 flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                <ShieldCheck className="h-4 w-4" /> Conta verificada
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Atalhos da conta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start gap-2" asChild>
                <Link href="/dashboard/ganhos">
                  <CreditCard className="h-4 w-4" /> Dados de recebimento
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 text-red-600 hover:text-red-600" asChild>
                <Link href="/login">
                  <LogOut className="h-4 w-4" /> Sair da conta
                </Link>
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  )
}
