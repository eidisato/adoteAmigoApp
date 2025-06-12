
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RegisterPet from "./pages/RegisterPet";
import DesignGuideIndex from "./pages/DesignGuide/Index";
import StyleGuide from "./pages/DesignGuide/StyleGuide";
import Layouts from "./pages/DesignGuide/Layouts";
import Wireframes from "./pages/DesignGuide/Wireframes";
import DesignTokens from "./pages/DesignGuide/DesignTokens";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/cadastrar-pet" element={<RegisterPet />} />
          <Route path="/design-guide" element={<DesignGuideIndex />} />
          <Route path="/design-guide/style-guide" element={<StyleGuide />} />
          <Route path="/design-guide/layouts" element={<Layouts />} />
          <Route path="/design-guide/wireframes" element={<Wireframes />} />
          <Route path="/design-guide/tokens" element={<DesignTokens />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
