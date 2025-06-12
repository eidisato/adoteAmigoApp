
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Sobre Nós
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto animate-fade-in">
            Conectando corações e transformando vidas.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nossa Missão</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Acreditamos que todo animal merece uma família amorosa. Nossa missão é facilitar 
              o processo de adoção responsável, conectando pets acolhidos por ONG's parceiras com pessoas 
              que podem oferecer amor, cuidado e um lar seguro.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Amor e Compaixão</h3>
              <p className="text-muted-foreground">
                Tratamos cada animal com o amor e cuidado que eles merecem, 
                garantindo seu bem-estar até encontrarem um lar.
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Adoção Responsável</h3>
              <p className="text-muted-foreground">
                Promovemos a adoção consciente, educando sobre as responsabilidades 
                e cuidados necessários para ter um pet.
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Comunidade</h3>
              <p className="text-muted-foreground">
                Construímos uma comunidade de pessoas que se importam com o 
                bem-estar animal e trabalham juntas por essa causa.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="bg-card rounded-lg border border-border p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Nossa História</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Fundada em 2025, a <strong>Adote um Amigo</strong> nasceu de um projeto universitário da Universidade São Judas Tadeu, para o curso de Usabilidade, desenvolvimento web, mobile e jogos para o curso de Ciência da Computação e do sonho de criar 
                uma ponte entre animais abandonados e famílias dispostas a amar. 
                Começamos como um pequeno grupo de voluntários apaixonados por animais.
              </p>
              <p>
                Almejamos um crescimento e que nos tornamos uma das principais organizações 
                de adoção da região. Facilitando adoções bem-sucedidas 
                e continuando um trabalho incansavel para dar uma segunda chance 
                a cada animal que chega até nós.
              </p>
              <p>
                Hoje, contamos com uma equipe de 1 Desenvolvedor: Vinicius Eidi Sato, que garante que cada pet receba os melhores cuidados possíveis 
                enquanto aguarda sua nova família.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Nosso Impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">2.500+</div>
              <div className="text-muted-foreground">Adoções Realizadas</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">10</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Voluntários Ativos</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Pets Disponíveis</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
