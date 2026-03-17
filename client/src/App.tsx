import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { HeroPage, PackagesPage, SitesPage, PricingPage, ShuttlePage, FaqPage, ContactPage } from "@/pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HeroPage}/>
      <Route path="/packages" component={PackagesPage}/>
      <Route path="/sites" component={SitesPage}/>
      <Route path="/pricing" component={PricingPage}/>
      <Route path="/shuttle" component={ShuttlePage}/>
      <Route path="/faq" component={FaqPage}/>
      <Route path="/contact" component={ContactPage}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;