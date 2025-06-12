import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { petService } from "@/services/petService";

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [loginData, setLoginData] = useState({ login: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      console.log('Login attempt with API:', loginData.login);
      
      const result = await petService.login(loginData.login, loginData.password);
      
      if (result.success) {
        if (result.token) {
          localStorage.setItem('authToken', result.token);
        }
        
        onLogin();
        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo ao painel de gerenciamento de pets.",
        });
      } else {
        throw new Error(result.message || 'Falha na autenticação');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Erro no login",
        description: error instanceof Error ? error.message : "Usuário ou senha incorretos.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Lock className="h-6 w-6 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl">Acesso Administrativo</CardTitle>
          <p className="text-muted-foreground">
            Faça login para gerenciar os pets
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="login">Usuário</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="login"
                  name="login"
                  type="text"
                  value={loginData.login}
                  onChange={handleLoginChange}
                  className="pl-10"
                  placeholder="Digite seu usuário"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="pl-10"
                  placeholder="Digite sua senha"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
