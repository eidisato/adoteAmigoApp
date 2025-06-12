
export interface Pet {
  idPet: string;
  name: string;
  tipo: string;
  raca: string;
  idade: number;
  porte: string;
  descricao: string;
  imagemUrl?: string;
  isAvailable: boolean;
}

export interface AdoptionRequest {
  idPet: number | string;
  nomeAdotante: string;
  email: string;
  idAdocao?: string; // ID da solicitação de adoção retornado pela API
}
