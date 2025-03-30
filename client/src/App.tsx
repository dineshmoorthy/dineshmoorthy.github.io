import { useState, useEffect, useCallback } from "react";
import { Route, Switch, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

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
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
