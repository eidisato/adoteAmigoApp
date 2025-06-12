
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Layouts = () => {
  const layouts = [
    {
      name: "Homepage",
      route: "/",
      description: "Página principal com hero section, lista de pets e seções informativas",
      components: ["Navbar", "Hero", "PetList", "Footer"],
      breakpoints: "Responsivo para mobile, tablet e desktop"
    },
    {
      name: "About",
      route: "/about", 
      description: "Página sobre a organização com missão e informações",
      components: ["Navbar", "Hero Section", "Content Cards", "Footer"],
      breakpoints: "Layout simples responsivo"
    },
    {
      name: "Contact",
      route: "/contact",
      description: "Página de contato com formulário e informações",
      components: ["Navbar", "Contact Form", "Contact Info", "Footer"],
      breakpoints: "Grid responsivo para formulário e informações"
    },
    {
      name: "Register Pet",
      route: "/register-pet",
      description: "Página administrativa para cadastro de novos pets",
      components: ["Navbar", "PetForm", "AdminPanel", "Footer"],
      breakpoints: "Layout focado em formulário"
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <Link to="/design-guide" className="text-primary hover:underline mb-4 inline-block">
          ← Voltar ao Design Guide
        </Link>
        <h1 className="text-4xl font-bold mb-2">Layout Documentation</h1>
        <p className="text-muted-foreground">Documentação visual de todos os layouts e páginas</p>
      </div>

      <div className="grid gap-6">
        {layouts.map((layout) => (
          <Card key={layout.route}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{layout.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">Route: {layout.route}</p>
                </div>
                <Link 
                  to={layout.route} 
                  className="text-primary hover:underline text-sm"
                  target="_blank"
                >
                  Ver Página →
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{layout.description}</p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Componentes utilizados:</h4>
                <div className="flex flex-wrap gap-2">
                  {layout.components.map((component) => (
                    <Badge key={component} variant="secondary">
                      {component}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Responsividade:</h4>
                <p className="text-sm text-muted-foreground">{layout.breakpoints}</p>
              </div>

              {/* Layout Visual Mockup */}
              <div className="border rounded-lg p-4 bg-muted/20">
                <h4 className="font-medium mb-3">Estrutura Visual:</h4>
                {layout.name === "Homepage" && (
                  <div className="space-y-2">
                    <div className="h-8 bg-primary/20 rounded flex items-center px-3 text-sm">Navbar</div>
                    <div className="h-24 bg-accent/30 rounded flex items-center justify-center text-sm">Hero Section</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="h-16 bg-card border rounded flex items-center justify-center text-xs">
                          Pet Card {i}
                        </div>
                      ))}
                    </div>
                    <div className="h-12 bg-muted rounded flex items-center px-3 text-sm">Footer</div>
                  </div>
                )}
                {layout.name === "About" && (
                  <div className="space-y-2">
                    <div className="h-8 bg-primary/20 rounded flex items-center px-3 text-sm">Navbar</div>
                    <div className="h-20 bg-accent/30 rounded flex items-center justify-center text-sm">Hero Section</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="h-24 bg-card border rounded flex items-center justify-center text-xs">Missão</div>
                      <div className="h-24 bg-card border rounded flex items-center justify-center text-xs">Visão</div>
                    </div>
                    <div className="h-12 bg-muted rounded flex items-center px-3 text-sm">Footer</div>
                  </div>
                )}
                {layout.name === "Contact" && (
                  <div className="space-y-2">
                    <div className="h-8 bg-primary/20 rounded flex items-center px-3 text-sm">Navbar</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="h-32 bg-card border rounded flex items-center justify-center text-xs">Contact Form</div>
                      <div className="h-32 bg-accent/30 rounded flex items-center justify-center text-xs">Contact Info</div>
                    </div>
                    <div className="h-12 bg-muted rounded flex items-center px-3 text-sm">Footer</div>
                  </div>
                )}
                {layout.name === "Register Pet" && (
                  <div className="space-y-2">
                    <div className="h-8 bg-primary/20 rounded flex items-center px-3 text-sm">Navbar</div>
                    <div className="h-40 bg-card border rounded flex items-center justify-center text-xs">Pet Registration Form</div>
                    <div className="h-12 bg-muted rounded flex items-center px-3 text-sm">Footer</div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Layouts;
