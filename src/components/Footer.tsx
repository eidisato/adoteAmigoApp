
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">
                Adote um Amigo
              </span>
            </div>
            <p className="text-sm">
              Conectando pets com famílias amorosas. Transformando vidas através da adoção responsável.
            </p>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#pets" className="hover:text-primary transition-colors">
                  Pets Disponíveis
                </a>
              </li>
              <li>
                <a href="#como-adotar" className="hover:text-primary transition-colors">
                  Como Adotar
                </a>
              </li>
              <li>
                <a href="#doacoes" className="hover:text-primary transition-colors">
                  Doações
                </a>
              </li>
              <li>
                <a href="#voluntarios" className="hover:text-primary transition-colors">
                  Seja Voluntário
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contato@adoteumamigo.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs">
              Nos siga nas redes sociais para acompanhar nossas histórias de sucesso!
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2024 Adote um Amigo. Todos os direitos reservados. 
            Feito com <Heart className="h-4 w-4 inline text-red-500" /> para conectar pets e famílias.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
