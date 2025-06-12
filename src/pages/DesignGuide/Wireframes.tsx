
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Wireframes = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <Link to="/design-guide" className="text-primary hover:underline mb-4 inline-block">
          ← Voltar ao Design Guide
        </Link>
        <h1 className="text-4xl font-bold mb-2">Wireframes</h1>
        <p className="text-muted-foreground">Wireframes simples em HTML/CSS para referência de estrutura</p>
      </div>

      <div className="space-y-8">
        {/* Homepage Wireframe */}
        <Card>
          <CardHeader>
            <CardTitle>Homepage Wireframe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-muted-foreground/30 p-4 space-y-4 bg-background">
              {/* Header */}
              <div className="border border-muted-foreground/50 h-12 flex items-center justify-between px-4">
                <div className="w-24 h-6 bg-muted-foreground/30"></div>
                <div className="flex space-x-4">
                  <div className="w-16 h-6 bg-muted-foreground/30"></div>
                  <div className="w-16 h-6 bg-muted-foreground/30"></div>
                  <div className="w-16 h-6 bg-muted-foreground/30"></div>
                </div>
              </div>
              
              {/* Hero Section */}
              <div className="border border-muted-foreground/50 h-32 flex flex-col items-center justify-center space-y-2">
                <div className="w-64 h-8 bg-muted-foreground/30"></div>
                <div className="w-48 h-4 bg-muted-foreground/20"></div>
                <div className="w-32 h-8 bg-muted-foreground/40"></div>
              </div>

              {/* Pet Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="border border-muted-foreground/50 p-4 space-y-2">
                    <div className="w-full h-32 bg-muted-foreground/20"></div>
                    <div className="w-3/4 h-4 bg-muted-foreground/30"></div>
                    <div className="w-1/2 h-3 bg-muted-foreground/20"></div>
                    <div className="w-full h-6 bg-muted-foreground/40"></div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border border-muted-foreground/50 h-16 flex items-center justify-center">
                <div className="w-48 h-4 bg-muted-foreground/30"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pet Detail Wireframe */}
        <Card>
          <CardHeader>
            <CardTitle>Pet Detail Modal Wireframe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-muted-foreground/30 p-4 max-w-md mx-auto bg-background">
              <div className="border border-muted-foreground/50 p-4 space-y-4">
                {/* Modal Header */}
                <div className="flex justify-between items-center">
                  <div className="w-32 h-6 bg-muted-foreground/30"></div>
                  <div className="w-6 h-6 bg-muted-foreground/30"></div>
                </div>
                
                {/* Pet Image */}
                <div className="w-full h-48 bg-muted-foreground/20"></div>
                
                {/* Pet Info */}
                <div className="space-y-2">
                  <div className="w-3/4 h-6 bg-muted-foreground/30"></div>
                  <div className="w-1/2 h-4 bg-muted-foreground/20"></div>
                  <div className="w-full h-16 bg-muted-foreground/10"></div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <div className="w-24 h-8 bg-muted-foreground/40"></div>
                  <div className="w-24 h-8 bg-muted-foreground/20"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Admin Panel Wireframe */}
        <Card>
          <CardHeader>
            <CardTitle>Admin Panel Wireframe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-muted-foreground/30 p-4 space-y-4 bg-background">
              {/* Header with Actions */}
              <div className="border border-muted-foreground/50 h-12 flex items-center justify-between px-4">
                <div className="w-48 h-6 bg-muted-foreground/30"></div>
                <div className="w-32 h-8 bg-muted-foreground/40"></div>
              </div>
              
              {/* Table Header */}
              <div className="border border-muted-foreground/50 p-2">
                <div className="grid grid-cols-8 gap-2">
                  <div className="h-4 bg-muted-foreground/30"></div>
                  <div className="h-4 bg-muted-foreground/30"></div>
                  <div className="h-4 bg-muted-foreground/30"></div>
                  <div className="h-4 bg-muted-foreground/30"></div>
                  <div className="h-4 bg-muted-foreground/30"></div>
                  <div className="h-4 bg-muted-foreground/30"></div>
                  <div className="h-4 bg-muted-foreground/30"></div>
                  <div className="h-4 bg-muted-foreground/30"></div>
                </div>
              </div>

              {/* Table Rows */}
              {[1,2,3,4].map(i => (
                <div key={i} className="border border-muted-foreground/50 p-2">
                  <div className="grid grid-cols-8 gap-2 items-center">
                    <div className="w-8 h-8 bg-muted-foreground/20"></div>
                    <div className="h-4 bg-muted-foreground/30"></div>
                    <div className="h-4 bg-muted-foreground/20"></div>
                    <div className="h-4 bg-muted-foreground/20"></div>
                    <div className="h-4 bg-muted-foreground/20"></div>
                    <div className="h-4 bg-muted-foreground/20"></div>
                    <div className="w-16 h-4 bg-muted-foreground/40"></div>
                    <div className="flex space-x-1">
                      <div className="w-6 h-6 bg-muted-foreground/30"></div>
                      <div className="w-6 h-6 bg-muted-foreground/30"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Form Wireframe */}
        <Card>
          <CardHeader>
            <CardTitle>Pet Registration Form Wireframe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-muted-foreground/30 p-4 max-w-lg mx-auto space-y-4 bg-background">
              <div className="w-48 h-6 bg-muted-foreground/30"></div>
              
              <div className="space-y-4">
                {/* Form Fields */}
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="space-y-1">
                    <div className="w-24 h-4 bg-muted-foreground/30"></div>
                    <div className="w-full h-8 border border-muted-foreground/50"></div>
                  </div>
                ))}
                
                {/* Textarea */}
                <div className="space-y-1">
                  <div className="w-24 h-4 bg-muted-foreground/30"></div>
                  <div className="w-full h-16 border border-muted-foreground/50"></div>
                </div>

                {/* File Upload */}
                <div className="space-y-1">
                  <div className="w-24 h-4 bg-muted-foreground/30"></div>
                  <div className="w-full h-12 border-2 border-dashed border-muted-foreground/50 flex items-center justify-center">
                    <div className="w-32 h-4 bg-muted-foreground/20"></div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="w-full h-10 bg-muted-foreground/40"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Wireframes;
