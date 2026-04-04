import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { HeroPage, PackagesPage, SitesPage, PricingPage, ShuttlePage, FaqPage, ContactPage } from "@/pages/Home";
import logoImg from "@assets/PartynRide-Logo-New-Blue_1774034577921.png";

function IntroSplash({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 100);
    const t2 = setTimeout(() => setPhase('exit'), 2400);
    const t3 = setTimeout(onComplete, 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div className={`intro-splash ${phase}`}>
      <div className="intro-glow-ring" />
      <div className="intro-glow-ring intro-glow-ring-2" />
      <div className="intro-logo-wrapper">
        <img src={logoImg} alt="Party N Ride Nashville" className="intro-logo" />
      </div>
      <div className="intro-tagline">
        <span>Nashville's #1 Party Bus</span>
      </div>
      <div className="intro-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="intro-particle" style={{
            '--angle': `${(i / 20) * 360}deg`,
            '--delay': `${Math.random() * 0.5}s`,
            '--distance': `${120 + Math.random() * 80}px`,
          } as React.CSSProperties} />
        ))}
      </div>
    </div>
  );
}

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
  const [showIntro, setShowIntro] = useState(() => {
    if (sessionStorage.getItem('pnr-intro-seen')) return false;
    return true;
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem('pnr-intro-seen', '1');
    setShowIntro(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {showIntro && <IntroSplash onComplete={handleIntroComplete} />}
        {!showIntro && <Router />}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;