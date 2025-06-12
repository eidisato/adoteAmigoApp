import { Pet, AdoptionRequest } from '../types/Pet';

const API_BASE_URL = 'https://pet-adoption-api-eq0h.onrender.com';

export const petService = {
  // Public methods (no auth required)
  async getAllPets(): Promise<Pet[]> {
    console.log('Fetching pets from API...');
    const response = await fetch(`${API_BASE_URL}/api/pets`);
    if (!response.ok) {
      throw new Error(`Failed to fetch pets: ${response.status}`);
    }
    const pets = await response.json();
    console.log('Pets fetched successfully:', pets);
    
    return pets.map((pet: any) => ({
      ...pet,
      id: pet.idPet || pet.id
    }));
  },

  async submitAdoptionRequest(request: AdoptionRequest): Promise<void> {
    console.log('Submitting adoption request:', request);
    
    if (!request.idPet) {
      throw new Error('Pet ID is required for adoption request');
    }
    
    const response = await fetch(`${API_BASE_URL}/api/requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`Failed to submit adoption request: ${response.status} - ${errorText}`);
    }
    console.log('Adoption request submitted successfully');
  },

  // Admin methods (auth required)
  async getAllPetsAdmin(token: string): Promise<Pet[]> {
    console.log('Fetching pets from API (admin)...');
    const response = await fetch(`${API_BASE_URL}/api/pets`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch pets: ${response.status}`);
    }
    
    const pets = await response.json();
    console.log('Pets fetched successfully:', pets);
    return pets;
  },

  async createPet(petData: Omit<Pet, 'idPet'>, token: string): Promise<Pet> {
    console.log('Creating pet:', petData);
    const response = await fetch(`${API_BASE_URL}/api/pets`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petData),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to create pet: ${response.status}`);
    }
    
    const newPet = await response.json();
    console.log('Pet created successfully:', newPet);
    return newPet;
  },

  async updatePet(idPet: string, petData: Partial<Pet>, token: string): Promise<Pet> {
    console.log('Updating pet:', idPet, petData);
    const response = await fetch(`${API_BASE_URL}/api/pets/${idPet}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petData),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to update pet: ${response.status}`);
    }
    
    const updatedPet = await response.json();
    console.log('Pet updated successfully:', updatedPet);
    return updatedPet;
  },

  async getAdoptionRequestByPetId(idPet: string, token: string): Promise<string | null> {
    console.log('Searching for adoption request for pet:', idPet);
    try {
      const response = await fetch(`${API_BASE_URL}/api/requests`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        console.log('Failed to fetch adoption requests:', response.status);
        return null;
      }
      
      const requests = await response.json();
      console.log('All adoption requests from API:', requests);
      
      // CORREÇÃO: A API retorna req.pet.idPet, não req.idPet
      const adoptionRequest = requests.find((req: any) => {
        console.log('Checking request pet ID:', req.pet?.idPet, 'against target petId:', idPet);
        return req.pet && String(req.pet.idPet) === String(idPet);
      });
      
      if (adoptionRequest?.idAdocao) {
        console.log('Found adoption request with ID:', adoptionRequest.idAdocao);
        return adoptionRequest.idAdocao;
      }
      
      console.log('No adoption request found for pet:', idPet);
      return null;
    } catch (error) {
      console.error('Error searching for adoption request:', error);
      return null;
    }
  },

  async deletePet(idPet: string, token: string): Promise<void> {
    console.log('Attempting to delete pet with ID:', idPet);
    console.log('Using token:', token ? 'Token present' : 'No token');
    
    const response = await fetch(`${API_BASE_URL}/api/pets/${idPet}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    console.log('Delete pet response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Delete pet API Error Response:', errorText);
      
      if (response.status === 403) {
        throw new Error(`Acesso negado. Verifique se você tem permissão para deletar este pet ou se o token de autenticação é válido.`);
      } else if (response.status === 404) {
        throw new Error(`Pet não encontrado. O pet pode já ter sido deletado.`);
      } else if (response.status === 401) {
        throw new Error(`Token de autenticação inválido. Faça login novamente.`);
      } else {
        throw new Error(`Erro ao deletar pet: ${response.status} - ${errorText || 'Erro desconhecido'}`);
      }
    }
    
    console.log('Pet deleted successfully');
  },

  async deleteRequestComplete(idAdocao: string, token: string): Promise<void> {
    console.log('Deleting adoption request and pet with adoption ID:', idAdocao);
    console.log('Using token:', token ? 'Token present' : 'No token');
    
    const response = await fetch(`${API_BASE_URL}/api/requests/${idAdocao}/completo`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    console.log('Delete complete response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Delete complete API Error Response:', errorText);
      
      if (response.status === 403) {
        throw new Error(`Acesso negado. Verifique se você tem permissão para deletar esta adoção ou se o token de autenticação é válido.`);
      } else if (response.status === 404) {
        throw new Error(`Solicitação de adoção não encontrada. A solicitação pode já ter sido deletada.`);
      } else if (response.status === 401) {
        throw new Error(`Token de autenticação inválido. Faça login novamente.`);
      } else {
        throw new Error(`Erro ao deletar solicitação e pet: ${response.status} - ${errorText || 'Erro desconhecido'}`);
      }
    }
    
    console.log('Adoption request and pet deleted successfully');
  },

  async login(username: string, password: string): Promise<{ success: boolean; token?: string; message?: string }> {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login: username, password }),
    });
    
    console.log('Login response status:', response.status);
    
    const responseText = await response.text();
    
    if (!response.ok) {
      if (responseText) {
        try {
          const errorResult = JSON.parse(responseText);
          throw new Error(errorResult.message || `Login failed: ${response.status}`);
        } catch (parseError) {
          throw new Error(`Login failed: ${response.status} - ${responseText}`);
        }
      } else {
        throw new Error(`Login failed: ${response.status} - No response body`);
      }
    }
    
    if (!responseText) {
      throw new Error('Empty response from server');
    }
    
    try {
      const result = JSON.parse(responseText);
      return { success: true, token: result.token, message: result.message };
    } catch (parseError) {
      console.error('Failed to parse response:', parseError);
      throw new Error('Invalid response format from server');
    }
  }
};
