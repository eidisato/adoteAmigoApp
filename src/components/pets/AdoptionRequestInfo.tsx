
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail } from "lucide-react";
import { petService } from "@/services/petService";

interface AdoptionRequestInfoProps {
  petId: string;
  isAvailable: boolean;
}

const AdoptionRequestInfo = ({ petId, isAvailable }: AdoptionRequestInfoProps) => {
  const [adoptionData, setAdoptionData] = useState<{
    nomeAdotante: string | null;
    email: string | null;
    idAdocao: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isAvailable) {
      fetchAdoptionData();
    }
  }, [petId, isAvailable]);

  const fetchAdoptionData = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) return;

    setIsLoading(true);
    try {
      console.log('Fetching adoption requests for pet:', petId);
      const response = await fetch(`https://pet-adoption-api-eq0h.onrender.com/api/requests`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const requests = await response.json();
        console.log('All requests:', requests);
        
        const adoptionRequest = requests.find((req: any) => 
          req.pet && String(req.pet.idPet) === String(petId)
        );

        if (adoptionRequest) {
          console.log('Found adoption request:', adoptionRequest);
          setAdoptionData({
            nomeAdotante: adoptionRequest.nomeAdotante,
            email: adoptionRequest.email,
            idAdocao: adoptionRequest.idAdocao
          });
        }
      }
    } catch (error) {
      console.error('Error fetching adoption data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isAvailable) {
    return null;
  }

  if (isLoading) {
    return (
      <Card className="mt-4">
        <CardContent className="p-4">
          <div className="animate-pulse text-muted-foreground">
            Carregando dados da adoção...
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!adoptionData) {
    return (
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <Badge variant="secondary">Pet Indisponível</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Não foi possível encontrar os dados da solicitação de adoção.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="text-sm flex items-center gap-2">
          <Badge variant="destructive">Pet Adotado</Badge>
          <span className="text-muted-foreground">Dados do Adotante</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-3">
          <User className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Nome do Adotante</p>
            <p className="text-sm text-muted-foreground">
              {adoptionData.nomeAdotante || 'Não informado'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">E-mail</p>
            <p className="text-sm text-muted-foreground">
              {adoptionData.email || 'Não informado'}
            </p>
          </div>
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground">
            ID da Adoção: {adoptionData.idAdocao}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdoptionRequestInfo;
