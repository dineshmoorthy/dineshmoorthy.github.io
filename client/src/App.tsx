import { useState, useEffect, useCallback } from "react";
import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ContactModal from "@/components/ContactModal";
import { portfolioData } from "@/data/portfolio-data";

// Create a simple hash-based routing hook for GitHub Pages
const useHashLocation = () => {
  const [loc, setLoc] = useState(() => window.location.hash.slice(1) || "/");
  
  useEffect(() => {
    const handler = () => {
      setLoc(window.location.hash.slice(1) || "/");
    };
    
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  
  const navigate = useCallback((to: string) => {
    window.location.hash = to;
  }, []);
  
  return [loc, navigate] as const;
};

// Custom Router component that uses hash-based routing
const Router = () => {
  const [location] = useHashLocation();
  
  return (
    <Switch location={location}>
      {/* Add pages below */}
      <Route path="/" component={Home} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
};

function App() {
  // Add theme transition class to body when component mounts
  useEffect(() => {
    document.body.classList.add('theme-transition');
    
    // Function to remove transition class after user interaction
    const handleUserInteraction = () => {
      document.body.classList.add('theme-transition');
      
      // Remove class after transitions have likely completed
      setTimeout(() => {
        document.body.classList.remove('theme-transition');
      }, 500);
    };
    
    // Add event listeners for user interactions
    window.addEventListener('mousedown', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);
    
    return () => {
      window.removeEventListener('mousedown', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      document.body.classList.remove('theme-transition');
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <Router />
        <ContactModal profile={portfolioData.profile} />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
