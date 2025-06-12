
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2 } from "lucide-react";
import { Pet } from "@/types/Pet";

interface PetListViewProps {
  pets: Pet[];
  mode?: 'admin' | 'simple';
  title?: string;
  onEdit?: (pet: Pet) => void;
  onDelete?: (pet: Pet) => void;
  onAddNew?: () => void;
  isLoading?: boolean;
}

const PetListView = ({ 
  pets, 
  mode = 'simple',
  title,
  onEdit, 
  onDelete, 
  onAddNew, 
  isLoading = false 
}: PetListViewProps) => {
  
  if (mode === 'admin') {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{title || `Gerenciar Pets (${pets.length})`}</CardTitle>
          {onAddNew && (
            <Button onClick={onAddNew} disabled={isLoading}>
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Cadastrar Novo Pet
            </Button>
          )}
        </CardHeader>
        <CardContent>
          {pets.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">Nenhum pet cadastrado ainda.</p>
              {onAddNew && (
                <Button onClick={onAddNew}>
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Cadastrar Primeiro Pet
                </Button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Foto</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Raça</TableHead>
                    <TableHead>Idade</TableHead>
                    <TableHead>Porte</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pets.map((pet) => (
                    <TableRow key={pet.idPet}>
                      <TableCell>
                        {pet.imagemUrl ? (
                          <img 
                            src={pet.imagemUrl} 
                            alt={pet.name}
                            className="w-12 h-12 object-cover rounded-md"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=100&h=100&fit=crop&crop=faces";
                            }}
                          />
                        ) : (
                          <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">Sem foto</span>
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="font-medium">{pet.name}</TableCell>
                      <TableCell>{pet.tipo}</TableCell>
                      <TableCell>{pet.raca}</TableCell>
                      <TableCell>{pet.idade} anos</TableCell>
                      <TableCell>{pet.porte}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          pet.isAvailable 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {pet.isAvailable ? 'Disponível' : 'Indisponível'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          {onEdit && (
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => onEdit(pet)}
                              disabled={isLoading}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          )}
                          {onDelete && (
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => onDelete(pet)}
                              disabled={isLoading}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  // Simple card view mode
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title || `Pets Cadastrados (${pets.length})`}</CardTitle>
      </CardHeader>
      <CardContent>
        {pets.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">
            Nenhum pet cadastrado ainda.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((pet) => (
              <div key={pet.idPet} className="border border-border rounded-lg p-4 space-y-3">
                {pet.imagemUrl && (
                  <img 
                    src={pet.imagemUrl} 
                    alt={pet.name}
                    className="w-full h-32 object-cover rounded-md"
                  />
                )}
                <div>
                  <h3 className="font-bold text-lg">{pet.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {pet.tipo} • {pet.raca} • {pet.idade} anos • {pet.porte}
                  </p>
                  <p className="text-sm mt-2 line-clamp-2">{pet.descricao}</p>
                </div>
                {(onEdit || onDelete) && (
                  <div className="flex space-x-2">
                    {onEdit && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => onEdit(pet)}
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Editar
                      </Button>
                    )}
                    {onDelete && (
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => onDelete(pet)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Excluir
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PetListView;
