import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import galeria1 from "@/assets/chefe.png";
import galeria2 from "@/assets/avental.png";
import galeria3 from "@/assets/recepcao.png";
import galeria4 from "@/assets/seguranca.png";
import galeria5 from "@/assets/maquinas.png";
import galeria6 from "@/assets/construcao.png";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import {
  Factory,
  Scissors,
  Zap,
  Truck,
  Globe,
  MessageCircle,
  Quote,
  ArrowRight,
  XCircle,
  Award,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/258846777776?text=Olá%20Hilexo%2C%20gostaria%20de%20solicitar%20um%20orçamento.";

const slides = [
  {
    img: heroSlide1,
    headline: "Uniformes Profissionais para Hotéis e Restaurantes em Vilankulo",
  },
  { img: heroSlide2, headline: "Produção Local com Bordado de Alta Qualidade" },
  { img: heroSlide3, headline: "Eleve a Imagem da Sua Equipa" },
];

const diferenciais = [
  { icon: Factory, title: "Produção própria", desc: "Controlo total de qualidade em cada peça" },
  { icon: Scissors, title: "Bordado profissional", desc: "Acabamento premium com máquinas industriais" },
  { icon: Zap, title: "Atendimento rápido", desc: "Resposta em menos de 24 horas" },
  { icon: Truck, title: "Entregas organizadas", desc: "Prazos cumpridos com rigor" },
  { icon: Globe, title: "Todo Moçambique", desc: "Enviamos para qualquer província" },
];

const galeria = [
  { title: "Chefe de cozinha", img: galeria1 },
  { title: "Aventais", img: galeria2 },
  { title: "Recepção", img: galeria3 },
  { title: "Segurança ", img: galeria4 },
  { title: "Produção", img: galeria5 },
  { title: "construção civil", img: galeria6 },
];

const depoimentos = [
  {
    nome: "Carlos Machava",
    cargo: "Proprietário de Restaurante",
    texto: "A Hilexo transformou a imagem da nossa equipa. Uniformes de qualidade e entrega dentro do prazo.",
    foto: testimonial1,
  },
  {
    nome: "Fátima Nhantumbo",
    cargo: "Directora de Escola",
    texto: "Profissionalismo do início ao fim. O bordado ficou perfeito e o atendimento foi excelente.",
    foto: testimonial2,
  },
  {
    nome: "André Cossa",
    cargo: "Chef Executivo, Hotel Baía",
    texto: "Forneceram fardamentos para toda a equipa do hotel. Qualidade superior a um preço justo.",
    foto: testimonial3,
  },
];

const Index = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    // ✅ Dark global (sem refatorar classes em cada seção)
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Carousel */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.img}
              alt={slide.headline}
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />

            {/* ✅ Overlay preto premium para legibilidade */}
            <div className="absolute inset-0 bg-black/70" />
          </div>
        ))}

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1
                key={current}
                className="text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-7xl animate-fade-in"
              >
                {slides[current].headline.split(" ").map((word, wi) => {
                  const highlights = ["Hotéis", "Restaurantes", "Bordado", "Qualidade", "Imagem", "Equipa"];
                  return highlights.includes(word) ? (
                    <span key={wi} className="text-primary">
                      {word}{" "}
                    </span>
                  ) : (
                    <span key={wi}>{word} </span>
                  );
                })}
              </h1>

              {/* ✅ Melhor leitura no fundo escuro */}
              <p className="mt-6 text-lg text-foreground/80 max-w-lg">
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

            {/* Slide indicators */}
            <div className="mt-12 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === current ? "w-10 bg-primary" : "w-6 bg-foreground/30"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="servicos" className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-3xl text-foreground">Porquê Escolher a Hilexo?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Somos referência em fardamentos profissionais em Vilankulo e em todo Moçambique.
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {diferenciais.map((d) => (
              <div
                key={d.title}
                className="group rounded-xl bg-card p-6 border border-border hover:border-primary/40 transition-colors text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <d.icon size={26} />
                </div>
                <h3 className="font-semibold text-foreground">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-3xl text-foreground">Galeria de Trabalhos</h2>
          <p className="mt-3 text-muted-foreground">Alguns dos nossos trabalhos mais recentes.</p>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galeria.map((g) => (
              <div key={g.title} className="group relative overflow-hidden rounded-xl bg-card aspect-[4/3]">
                <img
                  src={g.img}
                  alt={g.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-5">
                  <span className="text-sm font-semibold text-foreground">{g.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problema e Solução */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="rounded-2xl bg-card p-8 md:p-10 border border-border">
              <div className="flex items-center gap-3 text-destructive mb-4">
                <XCircle size={28} />
                <span className="font-bold text-lg">O Problema</span>
              </div>
              <h3 className="text-xl font-bold md:text-2xl text-foreground">
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
              <h3 className="text-xl font-bold md:text-2xl">Hilexo: uniformes que elevam o padrão.</h3>
              <p className="mt-3 text-primary-foreground/80">
                Fardamentos personalizados com bordado profissional, entregues no prazo e com a qualidade que o seu negócio merece.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-6 py-3 font-semibold text-sm hover:bg-foreground/90 transition-colors"
              >
                Resolver agora <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-3xl text-foreground">O Que Dizem os Nossos Clientes</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {depoimentos.map((d) => (
              <div key={d.nome} className="rounded-xl bg-card p-6 border border-border text-left">
                <Quote size={24} className="text-primary/40 mb-4" />
                <p className="text-muted-foreground leading-relaxed">{d.texto}</p>
                <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                  <img
                    src={d.foto}
                    alt={d.nome}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/30"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{d.nome}</p>
                    <p className="text-xs text-muted-foreground">{d.cargo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-4xl text-foreground">
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