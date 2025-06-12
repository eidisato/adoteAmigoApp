
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const DesignTokens = () => {
  const colors = [
    { name: "Primary", value: "hsl(var(--primary))", var: "--primary", usage: "Botões principais, links, elementos de destaque" },
    { name: "Secondary", value: "hsl(var(--secondary))", var: "--secondary", usage: "Botões secundários, backgrounds alternativos" },
    { name: "Accent", value: "hsl(var(--accent))", var: "--accent", usage: "Destaques, hover states" },
    { name: "Muted", value: "hsl(var(--muted))", var: "--muted", usage: "Texto secundário, placeholders" },
    { name: "Destructive", value: "hsl(var(--destructive))", var: "--destructive", usage: "Erros, ações de exclusão" },
    { name: "Background", value: "hsl(var(--background))", var: "--background", usage: "Fundo principal da aplicação" },
    { name: "Card", value: "hsl(var(--card))", var: "--card", usage: "Fundos de cartões e containers" },
    { name: "Border", value: "hsl(var(--border))", var: "--border", usage: "Bordas de elementos" }
  ];

  const spacing = [
    { name: "xs", value: "0.25rem", pixels: "4px", usage: "Espaçamento muito pequeno" },
    { name: "sm", value: "0.5rem", pixels: "8px", usage: "Espaçamento pequeno" },
    { name: "md", value: "1rem", pixels: "16px", usage: "Espaçamento médio padrão" },
    { name: "lg", value: "1.5rem", pixels: "24px", usage: "Espaçamento grande" },
    { name: "xl", value: "2rem", pixels: "32px", usage: "Espaçamento muito grande" },
    { name: "2xl", value: "3rem", pixels: "48px", usage: "Espaçamento entre seções" },
    { name: "3xl", value: "4rem", pixels: "64px", usage: "Espaçamento de layout" }
  ];

  const typography = [
    { name: "Heading 1", class: "text-4xl font-bold", size: "36px", weight: "700", usage: "Títulos principais" },
    { name: "Heading 2", class: "text-3xl font-semibold", size: "30px", weight: "600", usage: "Títulos de seção" },
    { name: "Heading 3", class: "text-2xl font-semibold", size: "24px", weight: "600", usage: "Subtítulos" },
    { name: "Heading 4", class: "text-xl font-medium", size: "20px", weight: "500", usage: "Títulos de cards" },
    { name: "Body Large", class: "text-lg", size: "18px", weight: "400", usage: "Texto destacado" },
    { name: "Body", class: "text-base", size: "16px", weight: "400", usage: "Texto principal" },
    { name: "Body Small", class: "text-sm", size: "14px", weight: "400", usage: "Texto secundário" },
    { name: "Caption", class: "text-xs", size: "12px", weight: "400", usage: "Legendas, labels" }
  ];

  const borderRadius = [
    { name: "Small", value: "calc(var(--radius) - 4px)", usage: "Elementos pequenos" },
    { name: "Medium", value: "calc(var(--radius) - 2px)", usage: "Botões, inputs" },
    { name: "Large", value: "var(--radius)", usage: "Cards, modais" },
    { name: "Full", value: "9999px", usage: "Avatars, badges circulares" }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <Link to="/design-guide" className="text-primary hover:underline mb-4 inline-block">
          ← Voltar ao Design Guide
        </Link>
        <h1 className="text-4xl font-bold mb-2">Design Tokens</h1>
        <p className="text-muted-foreground">Cores, fontes, espaçamentos e outros tokens de design</p>
      </div>

      {/* Colors */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Cores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {colors.map((color) => (
                <div key={color.name} className="flex items-center space-x-4">
                  <div 
                    className="w-16 h-16 rounded-lg border shadow-sm"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <div className="flex-1">
                    <h4 className="font-medium">{color.name}</h4>
                    <p className="text-sm text-muted-foreground font-mono">{color.var}</p>
                    <p className="text-xs text-muted-foreground mt-1">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Tipografia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {typography.map((type) => (
                <div key={type.name} className="border-b pb-4 last:border-b-0">
                  <div className={type.class + " mb-2"}>
                    {type.name} - Sample Text
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>Tamanho: {type.size}</span>
                    <span>Peso: {type.weight}</span>
                    <span>Classe: <code className="bg-muted px-1 rounded">{type.class}</code></span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{type.usage}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Spacing */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Espaçamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {spacing.map((space) => (
                <div key={space.name} className="flex items-center space-x-4">
                  <div className="w-20 text-sm font-medium">{space.name}</div>
                  <div 
                    className="bg-primary h-4"
                    style={{ width: space.value }}
                  ></div>
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <span>{space.value}</span>
                    <span>({space.pixels})</span>
                    <span>{space.usage}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Border Radius */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Border Radius</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {borderRadius.map((radius) => (
                <div key={radius.name} className="flex items-center space-x-4">
                  <div 
                    className="w-16 h-16 bg-primary/20 border-2 border-primary"
                    style={{ borderRadius: radius.value }}
                  ></div>
                  <div className="flex-1">
                    <h4 className="font-medium">{radius.name}</h4>
                    <p className="text-sm text-muted-foreground font-mono">{radius.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{radius.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Component Sizes */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Tamanhos de Componentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Botões</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline">sm</Badge>
                    <span className="text-sm">h-9 px-3 (36px height)</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline">default</Badge>
                    <span className="text-sm">h-10 px-4 (40px height)</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline">lg</Badge>
                    <span className="text-sm">h-11 px-8 (44px height)</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Inputs</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline">default</Badge>
                    <span className="text-sm">h-10 px-3 (40px height)</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Avatars</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline">default</Badge>
                    <span className="text-sm">h-10 w-10 (40x40px)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default DesignTokens;
