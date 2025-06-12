
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Heart, Star, Edit, Trash2, Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

const StyleGuide = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <Link to="/design-guide" className="text-primary hover:underline mb-4 inline-block">
          ← Voltar ao Design Guide
        </Link>
        <h1 className="text-4xl font-bold mb-2">Style Guide</h1>
        <p className="text-muted-foreground">Todos os componentes UI do sistema</p>
      </div>

      {/* Buttons */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Botões</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Heart className="h-4 w-4" /></Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button disabled>Disabled</Button>
              <Button><Plus className="h-4 w-4 mr-2" />Com Ícone</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Form Elements */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Elementos de Formulário</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="input1">Input Padrão</Label>
                <Input id="input1" placeholder="Digite algo..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="input2">Input com Erro</Label>
                <Input id="input2" className="border-destructive" placeholder="Campo obrigatório" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="textarea">Textarea</Label>
              <Textarea id="textarea" placeholder="Digite uma descrição..." />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="check1" />
                <Label htmlFor="check1">Checkbox</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="switch1" />
                <Label htmlFor="switch1">Switch</Label>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Badges */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Alerts */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Alertas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertDescription>
                Este é um alerta padrão com informações importantes.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertDescription>
                Este é um alerta de erro ou aviso crítico.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </section>

      {/* Progress */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Progresso</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={33} />
            <Progress value={66} />
            <Progress value={100} />
          </CardContent>
        </Card>
      </section>

      {/* Avatars */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Avatares</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Table */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Tabela</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Pet Example</TableCell>
                  <TableCell><Badge>Disponível</Badge></TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline"><Edit className="h-4 w-4" /></Button>
                      <Button size="sm" variant="destructive"><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* Icons */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Ícones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-6 gap-4">
              <div className="flex flex-col items-center">
                <Heart className="h-6 w-6 mb-2" />
                <span className="text-xs">Heart</span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="h-6 w-6 mb-2" />
                <span className="text-xs">Star</span>
              </div>
              <div className="flex flex-col items-center">
                <Edit className="h-6 w-6 mb-2" />
                <span className="text-xs">Edit</span>
              </div>
              <div className="flex flex-col items-center">
                <Trash2 className="h-6 w-6 mb-2" />
                <span className="text-xs">Trash</span>
              </div>
              <div className="flex flex-col items-center">
                <Plus className="h-6 w-6 mb-2" />
                <span className="text-xs">Plus</span>
              </div>
              <div className="flex flex-col items-center">
                <Search className="h-6 w-6 mb-2" />
                <span className="text-xs">Search</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default StyleGuide;
