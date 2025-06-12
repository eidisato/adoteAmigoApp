
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Pet } from "@/types/Pet";
import { petService } from "@/services/petService";
import PetListView from "./PetListView";
import PetFormModal from "./PetFormModal";
import DeleteConfirmModal from "./DeleteConfirmModal";

interface AdminPanelProps {
  onLogout: () => void;
}

const AdminPanel = ({ onLogout }: AdminPanelProps) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPetForm, setShowPetForm] = useState(false);
  const [editingPet, setEditingPet] = useState<Pet | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletingPet, setDeletingPet] = useState<Pet | null>(null);
  const { toast } = useToast();

  const token = localStorage.getItem('authToken');

  useEffect(() => {
    loadPets();
  }, []);

  const loadPets = async () => {
    if (!token) {
      toast({
        title: "Erro",
        description: "Token de autenticação não encontrado",
        variant: "destructive",
      });
      onLogout();
      return;
    }

    setIsLoading(true);
    try {
      const petsData = await petService.getAllPetsAdmin(token);
      console.log('Loaded pets data:', petsData);
      setPets(petsData);
    } catch (error) {
      console.error('Error loading pets:', error);
      toast({
        title: "Erro",
        description: "Erro ao carregar pets",
        variant: "destructive",
      });
      
      if (error instanceof Error && error.message.includes('401')) {
        onLogout();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddNew = () => {
    setEditingPet(null);
    setShowPetForm(true);
  };

  const handleEdit = (pet: Pet) => {
    setEditingPet(pet);
    setShowPetForm(true);
  };

  const handleDelete = (pet: Pet) => {
    console.log('Pet selected for deletion:', pet);
    console.log('Pet isAvailable:', pet.isAvailable);
    setDeletingPet(pet);
    setShowDeleteConfirm(true);
  };

  const handlePetSubmit = async (petData: Omit<Pet, 'idPet'>) => {
    if (!token) return;

    setIsLoading(true);
    try {
      if (editingPet) {
        await petService.updatePet(editingPet.idPet, petData, token);
        toast({
          title: "Pet atualizado!",
          description: `${petData.name} foi atualizado com sucesso.`,
        });
      } else {
        await petService.createPet(petData, token);
        toast({
          title: "Pet cadastrado!",
          description: `${petData.name} foi cadastrado com sucesso.`,
        });
      }
      
      setShowPetForm(false);
      setEditingPet(null);
      await loadPets();
    } catch (error) {
      console.error('Error saving pet:', error);
      toast({
        title: "Erro",
        description: error instanceof Error ? error.message : "Erro ao salvar pet",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!deletingPet || !token) return;

    console.log('Starting deletion process for pet:', deletingPet);
    console.log('Pet isAvailable:', deletingPet.isAvailable);

    setIsLoading(true);
    try {
      // Se o pet não está disponível (isAvailable: false), pode ter uma solicitação de adoção
      if (!deletingPet.isAvailable) {
        console.log('Pet is not available, searching for adoption request...');
        
        // Buscar se existe uma solicitação de adoção para este pet
        const adoptionRequestId = await petService.getAdoptionRequestByPetId(deletingPet.idPet, token);
        
        if (adoptionRequestId) {
          console.log('Found adoption request with ID:', adoptionRequestId);
          console.log('Using complete deletion endpoint');
          
          // Se tem solicitação de adoção, SEMPRE usar o endpoint completo
          await petService.deleteRequestComplete(adoptionRequestId, token);
          toast({
            title: "Pet e adoção excluídos!",
            description: `${deletingPet.name} e sua solicitação de adoção foram excluídos com sucesso.`,
          });
        } else {
          console.log('No adoption request found, using normal deletion');
          await petService.deletePet(deletingPet.idPet, token);
          toast({
            title: "Pet excluído!",
            description: `${deletingPet.name} foi excluído com sucesso.`,
          });
        }
      } else {
        console.log('Pet is available, using normal deletion');
        await petService.deletePet(deletingPet.idPet, token);
        toast({
          title: "Pet excluído!",
          description: `${deletingPet.name} foi excluído com sucesso.`,
        });
      }
      
      setShowDeleteConfirm(false);
      setDeletingPet(null);
      await loadPets();
    } catch (error) {
      console.error('Error deleting pet:', error);
      
      toast({
        title: "Erro",
        description: error instanceof Error ? error.message : "Erro ao excluir pet",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    onLogout();
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-foreground">Painel Administrativo</h2>
        <Button variant="outline" onClick={handleLogout}>
          Sair
        </Button>
      </div>

      {/* Pet Management */}
      <PetListView 
        pets={pets}
        mode="admin"
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAddNew={handleAddNew}
        isLoading={isLoading}
      />

      {/* Pet Form Modal */}
      <PetFormModal
        pet={editingPet}
        isOpen={showPetForm}
        onClose={() => {
          setShowPetForm(false);
          setEditingPet(null);
        }}
        onSubmit={handlePetSubmit}
        isLoading={isLoading}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        pet={deletingPet}
        isOpen={showDeleteConfirm}
        onClose={() => {
          setShowDeleteConfirm(false);
          setDeletingPet(null);
        }}
        onConfirm={handleDeleteConfirm}
        isLoading={isLoading}
      />
    </div>
  );
};

export default AdminPanel;
