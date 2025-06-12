
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import LoginForm from "@/components/auth/LoginForm";
import AdminPanel from "@/components/pets/AdminPanel";

const RegisterPet = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Verificar se já existe um token válido
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = () => {
    console.log('handleLogin called');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Carregando...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            {!isAuthenticated ? "Login Administrativo" : "Gerenciar Pets"}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto animate-fade-in">
            {!isAuthenticated 
              ? "Faça login para acessar o painel de gerenciamento"
              : "Cadastre, edite e gerencie todos os pets disponíveis"
            }
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        {!isAuthenticated ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <AdminPanel onLogout={handleLogout} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default RegisterPet;
