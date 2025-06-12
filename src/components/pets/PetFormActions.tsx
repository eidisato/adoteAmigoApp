
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Pet } from "@/types/Pet";

interface PetFormActionsProps {
  pet?: Pet | null;
  isAvailable: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  isLoading: boolean;
}

const PetFormActions = ({ pet, isAvailable, onChange, onReset, isLoading }: PetFormActionsProps) => {
  return (
    <>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="isAvailable"
          name="isAvailable"
          checked={isAvailable}
          onChange={onChange}
          className="w-4 h-4"
        />
        <Label htmlFor="isAvailable">Disponível para adoção</Label>
      </div>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onReset}>
          {pet ? "Cancelar" : "Limpar"}
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Salvando..." : (pet ? "Atualizar Pet" : "Cadastrar Pet")}
        </Button>
      </div>
    </>
  );
};

export default PetFormActions;
