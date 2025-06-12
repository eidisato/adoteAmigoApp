
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface PetFormData {
  name: string;
  tipo: string;
  raca: string;
  idade: string;
  porte: string;
  descricao: string;
  imagemUrl: string;
  isAvailable: boolean;
}

interface PetFormFieldsProps {
  formData: PetFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const PetFormFields = ({ formData, onChange }: PetFormFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <Label htmlFor="name">Nome do Pet *</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={onChange}
          required
          className="mt-1"
          placeholder="Ex: Rex, Luna, Mimi..."
        />
      </div>

      <div>
        <Label htmlFor="tipo">Tipo de Animal *</Label>
        <Input
          id="tipo"
          name="tipo"
          type="text"
          value={formData.tipo}
          onChange={onChange}
          required
          className="mt-1"
          placeholder="Ex: Cão, Gato, Coelho..."
        />
      </div>

      <div>
        <Label htmlFor="raca">Raça *</Label>
        <Input
          id="raca"
          name="raca"
          type="text"
          value={formData.raca}
          onChange={onChange}
          required
          className="mt-1"
          placeholder="Ex: Labrador, SRD, Persa..."
        />
      </div>

      <div>
        <Label htmlFor="idade">Idade (anos) *</Label>
        <Input
          id="idade"
          name="idade"
          type="number"
          min="0"
          max="30"
          value={formData.idade}
          onChange={onChange}
          required
          className="mt-1"
          placeholder="Ex: 2"
        />
      </div>

      <div className="md:col-span-2">
        <Label htmlFor="porte">Porte *</Label>
        <Input
          id="porte"
          name="porte"
          type="text"
          value={formData.porte}
          onChange={onChange}
          required
          className="mt-1"
          placeholder="Ex: Pequeno, Médio, Grande"
        />
      </div>

      <div className="md:col-span-2">
        <Label htmlFor="imagemUrl">URL da Imagem</Label>
        <Input
          id="imagemUrl"
          name="imagemUrl"
          type="url"
          value={formData.imagemUrl}
          onChange={onChange}
          className="mt-1"
          placeholder="https://exemplo.com/foto-do-pet.jpg"
        />
      </div>

      <div className="md:col-span-2">
        <Label htmlFor="descricao">Descrição *</Label>
        <Textarea
          id="descricao"
          name="descricao"
          value={formData.descricao}
          onChange={onChange}
          required
          rows={4}
          className="mt-1"
          placeholder="Conte sobre a personalidade, cuidados especiais, comportamento..."
        />
      </div>
    </div>
  );
};

export default PetFormFields;
