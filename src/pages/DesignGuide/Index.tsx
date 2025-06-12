
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Layout, Grid, FileText } from "lucide-react";

const DesignGuideIndex = () => {
  const guides = [
    {
      title: "Style Guide",
      description: "Todos os componentes UI, botões, formulários e elementos visuais",
      icon: Palette,
      path: "/design-guide/style-guide",
      color: "bg-blue-500"
    },
    {
      title: "Layout Documentation", 
      description: "Documentação visual de todos os layouts e páginas",
      icon: Layout,
      path: "/design-guide/layouts",
      color: "bg-green-500"
    },
    {
      title: "Wireframes",
      description: "Wireframes simples em HTML/CSS para referência de estrutura",
      icon: Grid,
      path: "/design-guide/wireframes", 
      color: "bg-purple-500"
    },
    {
      title: "Design Tokens",
      description: "Cores, fontes, espaçamentos e outros tokens de design",
      icon: FileText,
      path: "/design-guide/tokens",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Design Guide</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Documentação completa do design system, componentes e layouts do projeto de adoção de pets
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {guides.map((guide) => {
          const Icon = guide.icon;
          return (
            <Card key={guide.path} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${guide.color} text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{guide.description}</p>
                <Button asChild className="w-full">
                  <Link to={guide.path}>
                    Ver {guide.title}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DesignGuideIndex;
