import { useState, useEffect, useCallback } from "react";
import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Create a custom hook for GitHub Pages compatible routing
const useHashLocation = () => {
  // Get the current location
  const [loc, setLoc] = useState(window.location.hash.replace("#", "") || "/");

  useEffect(() => {
    // Update location when the hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "/";
      setLoc(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Return setter that updates both location and hash
  const navigate = useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return [loc, navigate];
};

// Custom Router component that uses hash-based routing
const Router = () => {
  // Use the hash-based location hook for GitHub Pages compatibility
  const [location, navigate] = useHashLocation();
  
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
