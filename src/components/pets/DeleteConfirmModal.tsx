
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, X } from "lucide-react";
import { Pet } from "@/types/Pet";

interface DeleteConfirmModalProps {
  pet: Pet | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading: boolean;
}

const DeleteConfirmModal = ({ pet, isOpen, onClose, onConfirm, isLoading }: DeleteConfirmModalProps) => {
  if (!isOpen || !pet) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <CardTitle className="text-destructive">Confirmar Exclusão</CardTitle>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-muted-foreground mb-2">
              Você está prestes a excluir o pet:
            </p>
            <p className="font-bold text-lg">{pet.name}</p>
            <p className="text-sm text-muted-foreground">
              {pet.tipo} • {pet.raca} • {pet.idade} anos
            </p>
          </div>
          
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
            <p className="text-sm text-destructive font-medium">
              ⚠️ Esta ação não pode ser desfeita!
            </p>
          </div>
          
          <div className="flex justify-end space-x-2 pt-2">
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button 
              variant="destructive" 
              onClick={onConfirm}
              disabled={isLoading}
            >
              {isLoading ? "Excluindo..." : "Excluir"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeleteConfirmModal;
