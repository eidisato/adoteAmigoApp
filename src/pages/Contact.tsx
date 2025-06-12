
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornaremos em breve!",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Entre em Contato
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto animate-fade-in">
            Estamos aqui para ajudar você a encontrar seu novo melhor amigo
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Fale Conosco</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua dos Animais, 123<br />
                    Bairro Pet Friendly<br />
                    São Paulo - SP, 01234-567
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Telefones</h3>
                  <p className="text-muted-foreground">
                    (11) 9999-8888<br />
                    (11) 3333-4444
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">E-mail</h3>
                  <p className="text-muted-foreground">
                    contato@adoteum amigo.com.br<br />
                    adocao@adotemumamigo.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábados: 8h às 14h<br />
                    Domingos: Fechado
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-card rounded-lg border border-border">
              <h3 className="font-bold text-foreground mb-3">Visitação</h3>
              <p className="text-muted-foreground">
                Para conhecer nossos pets pessoalmente, agende uma visita através 
                do formulário ao lado ou ligue para nós. As visitas são realizadas 
                de segunda a sábado, das 9h às 17h.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Envie uma Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-1"
                    placeholder="Conte-nos como podemos ajudar..."
                  />
                </div>

                <Button type="submit" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
