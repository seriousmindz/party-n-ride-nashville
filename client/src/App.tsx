import React, { useState, useEffect } from "react";
import Landing from "@/pages/Landing";
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
        <img src={logoImg} alt="Party 'N Ride Nashville" className="intro-logo" />
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

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('pnr-intro-seen')) return false;
    return true;
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem('pnr-intro-seen', '1');
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroSplash onComplete={handleIntroComplete} />}
      {!showIntro && <Landing />}
    </>
  );
}

export default App;
