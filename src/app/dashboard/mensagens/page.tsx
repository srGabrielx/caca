import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { Send, Paperclip } from "lucide-react"

export default function MensagensPage() {
  const mensagens = [
    {
      id: 1,
      sender: "CAÇA",
      role: "Equipe",
      time: "10:30",
      content: "Olá João! O layout inicial foi finalizado e anexamos o PDF no seu painel. Pode nos dar um feedback quando possível?",
      isMe: false,
      status: "read",
    },
    {
      id: 2,
      sender: "Você",
      role: "Cliente",
      time: "11:15",
      content: "Oi equipe, acabei de ver. Gostei bastante da paleta de cores. Só pediria para mudarmos o ícone do menu principal, achei muito pequeno.",
      isMe: true,
      status: "read",
    },
    {
      id: 3,
      sender: "CAÇA",
      role: "Equipe",
      time: "11:20",
      content: "Anotado! Vamos fazer esse ajuste ainda hoje e subimos uma nova versão.",
      isMe: false,
      status: "read",
    }
  ]

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] md:h-[calc(100vh-100px)]">
      <div className="flex items-center justify-between pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Mensagens</h1>
          <p className="text-sm text-foreground/60 flex items-center gap-2 mt-1">
            Projeto: <Link href="/dashboard/projetos/123" className="text-primary hover:underline font-medium">Seu Aplicativo Mobile</Link>
          </p>
        </div>
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden border-border shadow-sm">
        {/* Chat Area */}
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-6">
          {mensagens.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.isMe ? 'items-end' : 'items-start'}`}>
              <div className="flex items-center gap-2 mb-1.5 px-1">
                <span className="text-sm font-semibold">{msg.sender}</span>
                <span className="text-xs text-foreground/50">{msg.time}</span>
              </div>
              <div 
                className={`max-w-[85%] sm:max-w-[70%] p-3.5 rounded-2xl text-sm shadow-sm ${
                  msg.isMe 
                    ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                    : 'bg-card border border-border text-card-foreground rounded-tl-sm'
                }`}
              >
                {msg.content}
              </div>
              {msg.isMe && (
                <div className="mt-1 text-xs text-foreground/50 pr-1">
                  Enviado.
                </div>
              )}
            </div>
          ))}
        </CardContent>

        {/* Input Area */}
        <div className="p-4 border-t border-border bg-card/50">
          <div className="flex items-end gap-2">
            <button className="p-3 text-foreground/50 hover:bg-border/50 hover:text-foreground rounded-full transition-colors shrink-0">
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="flex-1 bg-background border border-border rounded-2xl focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all">
              <textarea 
                rows={1}
                placeholder="Escreva sua mensagem..." 
                className="w-full bg-transparent p-3 max-h-32 resize-none focus:outline-none text-sm"
              />
            </div>
            <Button size="icon" className="shrink-0 h-[46px] w-[46px] rounded-full">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
