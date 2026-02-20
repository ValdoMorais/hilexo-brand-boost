import logoHilexo from "@/assets/logo-hilexo.png";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <img src={logoHilexo} alt="Hilexo MZ" className="h-10 mb-4" />
          <p className="text-sm leading-relaxed max-w-xs text-muted-foreground">
            Produção de uniformes profissionais com bordado de alta qualidade para hotéis, restaurantes e empresas em Moçambique.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
            <li><a href="#galeria" className="hover:text-primary transition-colors">Galeria</a></li>
            <li><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Contactos</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MapPin size={16} /> Vilankulo, Moçambique</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +258 84 999 9999</li>
            <li className="flex items-center gap-2"><Mail size={16} /> info@hilexo.co.mz</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hilexo MZ. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
