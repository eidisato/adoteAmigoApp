
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pet } from "@/types/Pet";

interface PetCardProps {
  pet: Pet;
  onAdopt: (pet: Pet) => void;
}

const PetCard = ({ pet, onAdopt }: PetCardProps) => {
  const placeholderImage = pet.imagemUrl || `https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop&crop=faces`;

  return (
    <Card className={`overflow-hidden transition-all duration-300 bg-card border-border ${
      pet.isAvailable 
        ? 'hover:shadow-lg hover:scale-105' 
        : 'opacity-60 grayscale cursor-not-allowed'
    }`}>
      <div className="relative">
        <img
          src={placeholderImage}
          alt={pet.name}
          className={`w-full h-48 object-cover ${!pet.isAvailable ? 'opacity-50' : ''}`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop&crop=faces";
          }}
        />
        <div className="absolute top-3 right-3">
          {pet.isAvailable ? (
            <Badge className="bg-green-500 hover:bg-green-600 text-white">
              Disponível
            </Badge>
          ) : (
            <Badge variant="secondary" className="bg-muted text-muted-foreground">
              Adotado
            </Badge>
          )}
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className={`text-xl font-bold mb-2 ${
          pet.isAvailable ? 'text-foreground' : 'text-muted-foreground'
        }`}>
          {pet.name}
        </h3>
        <div className={`space-y-1 ${
          pet.isAvailable ? 'text-muted-foreground' : 'text-muted-foreground/70'
        }`}>
          <p><span className="font-medium">Espécie:</span> {pet.tipo}</p>
          <p><span className="font-medium">Raça:</span> {pet.raca}</p>
          <p><span className="font-medium">Idade:</span> {pet.idade} anos</p>
        </div>
        {pet.descricao && (
          <p className={`text-sm mt-3 line-clamp-2 ${
            pet.isAvailable ? 'text-muted-foreground' : 'text-muted-foreground/70'
          }`}>
            {pet.descricao}
          </p>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => onAdopt(pet)}
          disabled={!pet.isAvailable}
          className={`w-full transition-colors ${
            pet.isAvailable 
              ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
              : 'bg-muted text-muted-foreground cursor-not-allowed'
          }`}
        >
          {pet.isAvailable ? 'Adotar' : 'Não Disponível'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PetCard;
