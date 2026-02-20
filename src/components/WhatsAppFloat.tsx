import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/258849999999?text=Olá%20Hilexo%2C%20gostaria%20de%20solicitar%20um%20orçamento.";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale connosco no WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] text-white shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppFloat;
