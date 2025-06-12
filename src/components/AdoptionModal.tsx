
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pet, AdoptionRequest } from "@/types/Pet";
import { petService } from "@/services/petService";
import { useToast } from "@/hooks/use-toast";

interface AdoptionModalProps {
  pet: Pet | null;
  isOpen: boolean;
  onClose: () => void;
}

const AdoptionModal = ({ pet, isOpen, onClose }: AdoptionModalProps) => {
  const [formData, setFormData] = useState({
    nomeAdotante: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pet) return;

    setIsSubmitting(true);
    
    try {
      const idPet = pet.idPet;
      
      console.log('Pet data:', pet);
      console.log('Using idPet:', idPet);
      
      const request: AdoptionRequest = {
        idPet: idPet,
        ...formData
      };
      
      console.log('Submitting adoption request:', request);
      
      await petService.submitAdoptionRequest(request);
      
      toast({
        title: "Solicitação enviada!",
        description: `Sua solicitação para adotar ${pet.name} foi enviada com sucesso. Entraremos em contato em breve.`,
      });
      
      // Reset form
      setFormData({
        nomeAdotante: '',
        email: ''
      });
      
      onClose();
    } catch (error) {
      console.error('Error submitting adoption request:', error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Ocorreu um erro ao enviar sua solicitação. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!pet) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Adotar {pet.name}</DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo para solicitar a adoção de {pet.name}.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo *</Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.nomeAdotante}
              onChange={(e) => handleInputChange('nomeAdotante', e.target.value)}
              placeholder="Seu nome completo"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="seu@email.com"
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdoptionModal;
