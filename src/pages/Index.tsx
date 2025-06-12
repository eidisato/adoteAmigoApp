
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PetCard from "@/components/PetCard";
import AdoptionModal from "@/components/AdoptionModal";
import { Pet } from "@/types/Pet";
import { petService } from "@/services/petService";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const { data: pets = [], isLoading, error, refetch } = useQuery({
    queryKey: ['pets'],
    queryFn: petService.getAllPets,
    retry: 3,
    retryDelay: 1000,
  });

  // Ordenar pets: disponíveis primeiro, depois indisponíveis
  const sortedPets = [...pets].sort((a, b) => {
    if (a.isAvailable && !b.isAvailable) return -1;
    if (!a.isAvailable && b.isAvailable) return 1;
    return 0;
  });

  useEffect(() => {
    if (error) {
      console.error('Error fetching pets:', error);
      toast({
        title: "Erro ao carregar pets",
        description: "Não foi possível carregar a lista de pets. Tentando novamente...",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  const handleAdopt = (pet: Pet) => {
    console.log('Opening adoption modal for pet:', pet);
    setSelectedPet(pet);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPet(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <div className="animate-pulse">
                <div className="h-8 bg-muted rounded w-64 mx-auto mb-4"></div>
                <div className="h-4 bg-muted rounded w-96 mx-auto mb-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="bg-card rounded-lg p-4 border border-border">
                      <div className="h-48 bg-muted rounded mb-4"></div>
                      <div className="h-6 bg-muted rounded mb-2"></div>
                      <div className="h-4 bg-muted rounded mb-1"></div>
                      <div className="h-4 bg-muted rounded mb-4"></div>
                      <div className="h-10 bg-muted rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            🐾 Adote um Amigo
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto animate-fade-in">
            Encontre seu companheiro perfeito e transforme duas vidas para sempre
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12" id="pets">
        {error ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😿</div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Ops! Algo deu errado</h2>
            <p className="text-muted-foreground mb-6">
              Não conseguimos carregar os pets disponíveis. Verifique sua conexão e tente novamente.
            </p>
            <button
              onClick={() => refetch()}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Tentar Novamente
            </button>
          </div>
        ) : sortedPets.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🐕</div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Nenhum pet disponível</h2>
            <p className="text-muted-foreground">
              No momento não temos pets disponíveis para adoção. Volte em breve!
            </p>
          </div>
        ) : (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Pets Disponíveis para Adoção
              </h2>
              <p className="text-muted-foreground text-lg">
                {sortedPets.filter(pet => pet.isAvailable).length} pets aguardando uma família amorosa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedPets.map((pet) => (
                <div key={pet.idPet} className="animate-fade-in">
                  <PetCard pet={pet} onAdopt={handleAdopt} />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />

      <AdoptionModal
        pet={selectedPet}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
