import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import heroTeam from "@/assets/hero-team.jpg";
import {
  Factory,
  Scissors,
  Zap,
  Truck,
  Globe,
  Upload,
  FileText,
  CheckCircle,
  Package,
  MessageCircle,
  Quote,
  ArrowRight,
  XCircle,
  Award,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/258849999999?text=Olá%20Hilexo%2C%20gostaria%20de%20solicitar%20um%20orçamento.";

const diferenciais = [
  { icon: Factory, title: "Produção própria", desc: "Controlo total de qualidade em cada peça" },
  { icon: Scissors, title: "Bordado profissional", desc: "Acabamento premium com máquinas industriais" },
  { icon: Zap, title: "Atendimento rápido", desc: "Resposta em menos de 24 horas" },
  { icon: Truck, title: "Entregas organizadas", desc: "Prazos cumpridos com rigor" },
  { icon: Globe, title: "Todo Moçambique", desc: "Enviamos para qualquer província" },
];

const galeria = [
  { title: "Polos Bordadas", img: "/placeholder.svg" },
  { title: "Aventais", img: "/placeholder.svg" },
  { title: "Uniformes Completos", img: "/placeholder.svg" },
  { title: "Bonés Personalizados", img: "/placeholder.svg" },
  { title: "Máquinas em Produção", img: "/placeholder.svg" },
  { title: "Estampagem", img: "/placeholder.svg" },
];

const passos = [
  { icon: Upload, num: "01", title: "Envia o logotipo", desc: "Partilha o logo e as necessidades da sua equipa" },
  { icon: FileText, num: "02", title: "Recebe proposta", desc: "Elaboramos orçamento detalhado" },
  { icon: CheckCircle, num: "03", title: "Aprova", desc: "Confirme os detalhes e avançamos" },
  { icon: Package, num: "04", title: "Produzimos e entregamos", desc: "Fabricação rápida com entrega garantida" },
];

const depoimentos = [
  {
    nome: "Carlos M.",
    cargo: "Gerente, Hotel Baía",
    texto: "A Hilexo transformou a imagem da nossa equipa. Uniformes de qualidade e entrega dentro do prazo.",
  },
  {
    nome: "Ana R.",
    cargo: "Proprietária, Restaurante Oceano",
    texto: "Profissionalismo do início ao fim. O bordado ficou perfeito e o atendimento foi excelente.",
  },
  {
    nome: "João S.",
    cargo: "Director, Escola Primária Sol",
    texto: "Forneceram fardamentos para toda a escola. Qualidade superior a um preço justo.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Uniformes Profissionais para{" "}
                <span className="text-primary">Hotéis e Restaurantes</span> em Vilankulo
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-lg">
                Produção local com prazo garantido, bordado de alta qualidade e acabamento profissional.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
              >
                <MessageCircle size={22} />
                Solicitar Orçamento no WhatsApp
              </a>
            </div>
            <div className="relative">
              <img
                src={heroTeam}
                alt="Equipa uniformizada profissionalmente pela Hilexo MZ"
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
                loading="eager"
              />
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-primary px-5 py-3 text-primary-foreground font-bold shadow-lg text-sm hidden md:block">
                +500 equipas fardadas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="servicos" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Porquê Escolher a Hilexo?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Somos referência em fardamentos profissionais em Vilankulo e em todo Moçambique.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {diferenciais.map((d) => (
              <div
                key={d.title}
                className="group rounded-xl bg-background p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <d.icon size={26} />
                </div>
                <h3 className="font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Galeria de Trabalhos</h2>
          <p className="mt-3 text-muted-foreground">Alguns dos nossos trabalhos mais recentes.</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galeria.map((g) => (
              <div key={g.title} className="group relative overflow-hidden rounded-xl bg-secondary aspect-[4/3]">
                <img
                  src={g.img}
                  alt={g.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/70 to-transparent p-5">
                  <span className="text-sm font-semibold text-background">{g.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problema e Solução */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="rounded-2xl bg-background p-8 md:p-10 border border-border">
              <div className="flex items-center gap-3 text-destructive mb-4">
                <XCircle size={28} />
                <span className="font-bold text-lg">O Problema</span>
              </div>
              <h3 className="text-xl font-bold md:text-2xl">
                Equipa sem fardamento transmite desorganização.
              </h3>
              <p className="mt-3 text-muted-foreground">
                Clientes julgam a qualidade do serviço pela aparência da equipa. Sem uniformes padronizados, a imagem do seu negócio é prejudicada.
              </p>
            </div>

            <div className="rounded-2xl bg-primary p-8 md:p-10 text-primary-foreground">
              <div className="flex items-center gap-3 mb-4">
                <Award size={28} />
                <span className="font-bold text-lg">A Solução</span>
              </div>
              <h3 className="text-xl font-bold md:text-2xl">
                Hilexo: uniformes que elevam o padrão.
              </h3>
              <p className="mt-3 text-primary-foreground/80">
                Fardamentos personalizados com bordado profissional, entregues no prazo e com a qualidade que o seu negócio merece.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-background text-primary px-6 py-3 font-semibold text-sm hover:bg-background/90 transition-colors"
              >
                Resolver agora <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section id="processo" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Processo Simples</h2>
          <p className="mt-3 text-muted-foreground">Do pedido à entrega em 4 passos.</p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((p) => (
              <div key={p.num} className="relative text-center">
                <span className="text-5xl font-black text-primary/10">{p.num}</span>
                <div className="mx-auto -mt-4 mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <p.icon size={24} />
                </div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">O Que Dizem os Nossos Clientes</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {depoimentos.map((d) => (
              <div key={d.nome} className="rounded-xl bg-background p-6 shadow-sm text-left">
                <Quote size={24} className="text-primary/30 mb-3" />
                <p className="text-muted-foreground leading-relaxed">{d.texto}</p>
                <div className="mt-5 border-t pt-4">
                  <p className="font-semibold">{d.nome}</p>
                  <p className="text-xs text-muted-foreground">{d.cargo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">
            Eleve o padrão da sua equipa <span className="text-primary">hoje.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Solicite já o seu orçamento sem compromisso. Resposta em menos de 24 horas.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary px-10 py-4 text-lg font-bold text-primary-foreground shadow-xl hover:bg-primary/90 transition-colors"
          >
            <MessageCircle size={24} />
            Solicitar Orçamento no WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
