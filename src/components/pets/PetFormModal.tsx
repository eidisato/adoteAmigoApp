import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pet } from "@/types/Pet";
import PetFormFields from "./PetFormFields";
import PetFormActions from "./PetFormActions";
import AdoptionRequestInfo from "./AdoptionRequestInfo";

interface PetFormModalProps {
  pet?: Pet | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (petData: Omit<Pet, 'idPet'>) => void;
  isLoading: boolean;
}

const PetFormModal = ({ pet, isOpen, onClose, onSubmit, isLoading }: PetFormModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    tipo: '',
    raca: '',
    idade: '',
    porte: '',
    descricao: '',
    imagemUrl: '',
    isAvailable: true
  });

  useEffect(() => {
    if (pet) {
      setFormData({
        name: pet.name,
        tipo: pet.tipo,
        raca: pet.raca,
        idade: pet.idade.toString(),
        porte: pet.porte,
        descricao: pet.descricao,
        imagemUrl: pet.imagemUrl || '',
        isAvailable: pet.isAvailable
      });
    } else {
      setFormData({
        name: '',
        tipo: '',
        raca: '',
        idade: '',
        porte: '',
        descricao: '',
        imagemUrl: '',
        isAvailable: true
      });
    }
  }, [pet]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name: formData.name,
      tipo: formData.tipo,
      raca: formData.raca,
      idade: Number(formData.idade),
      porte: formData.porte,
      descricao: formData.descricao,
      imagemUrl: formData.imagemUrl,
      isAvailable: formData.isAvailable
    });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      tipo: '',
      raca: '',
      idade: '',
      porte: '',
      descricao: '',
      imagemUrl: '',
      isAvailable: true
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <PlusCircle className="h-6 w-6 text-primary" />
            <span>{pet ? "Editar Pet" : "Cadastrar Novo Pet"}</span>
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <PetFormFields formData={formData} onChange={handleChange} />
            
            {/* Mostrar informações da adoção se o pet não estiver disponível */}
            {pet && !pet.isAvailable && (
              <AdoptionRequestInfo 
                petId={pet.idPet} 
                isAvailable={pet.isAvailable} 
              />
            )}
            
            <PetFormActions 
              pet={pet}
              isAvailable={formData.isAvailable}
              onChange={handleChange}
              onReset={handleReset}
              isLoading={isLoading}
            />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PetFormModal;
