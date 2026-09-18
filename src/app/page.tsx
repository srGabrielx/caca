import { ArrowRight, CheckCircle2, Layout, Smartphone, Settings, Sparkles, Send } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-5xl px-6 py-24 md:py-32 flex flex-col items-center text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Sua empresa tem um <span className="text-primary">alvo.</span>
          <br />A CAÇA desenvolve.
        </h1>
        <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl">
          Sites, aplicativos, sistemas e automações construídos para o seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-8 w-full justify-center">
          <Link href="/dashboard/solicitar" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity text-lg flex items-center justify-center gap-2">
            Quero meu projeto <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/dashboard/indicacoes/nova" className="bg-card text-card-foreground border border-border px-8 py-4 rounded-full font-semibold hover:bg-border/50 transition-colors text-lg">
            Indique e ganhe
          </Link>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="w-full max-w-5xl px-6 py-24 border-t border-border/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Como funciona</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">1</div>
            <h3 className="text-xl font-semibold">Escolha o que precisa</h3>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">2</div>
            <h3 className="text-xl font-semibold">Conte sua ideia</h3>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">3</div>
            <h3 className="text-xl font-semibold">Acompanhe o desenvolvimento</h3>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section className="w-full bg-card py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Soluções</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Layout, title: "Sites", desc: "Presença digital que converte." },
              { icon: Smartphone, title: "Aplicativos", desc: "Seu negócio no bolso do cliente." },
              { icon: Settings, title: "Sistemas", desc: "Gestão e controle total." },
              { icon: Sparkles, title: "Automação e IA", desc: "Processos inteligentes e rápidos." }
            ].map((sol, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors cursor-pointer group">
                <sol.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">{sol.title}</h3>
                <p className="text-sm text-foreground/60">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indicação */}
      <section className="w-full max-w-5xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Indique. Acompanhe. Ganhe.</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-foreground/70 mb-12 text-sm md:text-base font-medium">
          <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Indicação</span>
          <span className="hidden md:inline text-border">→</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Cliente interessado</span>
          <span className="hidden md:inline text-border">→</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Projeto fechado</span>
          <span className="hidden md:inline text-border">→</span>
          <span className="flex items-center gap-2 text-primary font-bold"><Sparkles className="w-5 h-5" /> Comissão</span>
        </div>
        <Link href="/dashboard/indicacoes/nova" className="bg-foreground text-background px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity text-lg flex items-center justify-center gap-2 mx-auto">
          Começar a indicar <Send className="w-5 h-5" />
        </Link>
      </section>
    </main>
  );
}
