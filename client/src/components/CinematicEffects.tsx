import React, { useEffect, useRef, useState, useCallback } from 'react';

declare const gsap: any;
declare const ScrollTrigger: any;

export function useTextScramble(ref: React.RefObject<HTMLElement | null>, text: string, trigger: 'scroll' | 'load' = 'scroll') {
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasRun.current) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
    const len = text.length;

    el.textContent = text;

    function scramble() {
      hasRun.current = true;
      let startTime: number | null = null;
      const duration = 1200;

      function frame(ts: number) {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        let html = '';
        for (let i = 0; i < len; i++) {
          if (text[i] === ' ') { html += ' '; continue; }
          const threshold = (i / len) * 0.7 + 0.15;
          if (progress >= threshold) {
            html += `<span style="display:inline-block;color:inherit">${text[i]}</span>`;
          } else {
            html += `<span style="display:inline-block;color:var(--color-crimson-500,#EF4444)">${chars[Math.floor(Math.random() * chars.length)]}</span>`;
          }
        }
        el!.innerHTML = html;
        if (progress < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }

    if (trigger === 'load') {
      setTimeout(scramble, 300);
    } else {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: scramble,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st: any) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [text, trigger]);
}

export function TypewriterCycler({ phrases, className = '' }: { phrases: string[]; className?: string }) {
  const [display, setDisplay] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);
  const pauseRef = useRef(false);

  useEffect(() => {
    // Respect reduced-motion: show the first phrase statically, no typing/cursor.
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(phrases[0] ?? '');
      setCursorVisible(false);
      return;
    }
    const cursorInterval = setInterval(() => setCursorVisible(v => !v), 530);
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      if (pauseRef.current) {
        timeoutId = setTimeout(tick, 100);
        return;
      }
      const currentPhrase = phrases[indexRef.current];

      if (!deletingRef.current) {
        charRef.current++;
        setDisplay(currentPhrase.slice(0, charRef.current));
        if (charRef.current === currentPhrase.length) {
          pauseRef.current = true;
          setTimeout(() => { pauseRef.current = false; deletingRef.current = true; }, 2000);
        }
      } else {
        charRef.current--;
        setDisplay(currentPhrase.slice(0, charRef.current));
        if (charRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % phrases.length;
        }
      }

      timeoutId = setTimeout(tick, deletingRef.current ? 40 : 80);
    }

    timeoutId = setTimeout(tick, 80);
    return () => { clearTimeout(timeoutId); clearInterval(cursorInterval); };
  }, [phrases]);

  return (
    <span className={`platinum-glass-text ${className}`}>
      {display}
      <span className="inline-block w-[3px] h-[0.85em] ml-0.5 align-text-bottom" style={{ background: 'var(--color-crimson-600, #DC2626)', opacity: cursorVisible ? 1 : 0 }}></span>
    </span>
  );
}

export function KineticMarquee({ items, direction = 'left', speed = 1, variant = 'giant', className = '' }: {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  variant?: 'giant' | 'outline' | 'tags' | 'dark';
  className?: string;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const content = row.querySelector('.marquee-content') as HTMLElement;
    if (!content) return;

    const existingClones = row.querySelectorAll('.marquee-clone');
    existingClones.forEach(c => c.remove());

    const clone = content.cloneNode(true) as HTMLElement;
    clone.classList.add('marquee-clone');
    row.appendChild(clone);

    const baseSpeed = 60;
    let x = direction === 'left' ? 0 : -content.offsetWidth;
    let animId: number;

    function animate() {
      const spd = baseSpeed * speed;
      x += (direction === 'left' ? -1 : 1) * spd / 60;
      const w = content.offsetWidth;
      if (direction === 'left' && x <= -w) x += w;
      if (direction === 'right' && x >= 0) x -= w;
      row!.style.transform = `translateX(${x}px)`;
      animId = requestAnimationFrame(animate);
    }
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      clone.remove();
    };
  }, [direction, speed]);

  const variantClasses: Record<string, string> = {
    giant: 'text-4xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase text-neutral-900',
    outline: 'text-4xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase text-transparent',
    tags: '',
    dark: 'text-xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight uppercase text-white',
  };

  return (
    <div className={`overflow-hidden ${variant === 'dark' ? 'marquee-glass-band py-4 sm:py-5' : 'py-3 sm:py-4'} ${className}`}>
      <div ref={rowRef} className="flex whitespace-nowrap will-change-transform">
        <div className="marquee-content flex items-center">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              {variant === 'tags' ? (
                <span className="marquee-glass-pill inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-display font-bold text-xs sm:text-sm uppercase tracking-widest mx-1.5 sm:mx-2 whitespace-nowrap">{item}</span>
              ) : (
                <span className={`${variantClasses[variant]} px-4 sm:px-8 whitespace-nowrap flex items-center gap-3 sm:gap-6`} style={variant === 'outline' ? { WebkitTextStroke: '1.5px var(--color-crimson-600, #DC2626)' } : undefined}>
                  {item}
                  <span className={`inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full ${variant === 'dark' ? 'bg-white/30' : 'bg-crimson-600/30'}`}></span>
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export function OdometerStat({ value, suffix = '', label }: { value: string; suffix?: string; label: string }) {
  const odoRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = odoRef.current;
    if (!el || hasAnimated.current) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const digits = value.split('');
    el.innerHTML = '';

    digits.forEach(d => {
      const digit = document.createElement('div');
      digit.className = 'inline-block overflow-hidden relative';
      digit.style.height = '1.15em';

      const strip = document.createElement('div');
      strip.className = 'flex flex-col transition-transform duration-[1500ms]';
      strip.style.transitionTimingFunction = 'cubic-bezier(0.16, 1, 0.3, 1)';

      for (let i = 0; i <= 9; i++) {
        const span = document.createElement('span');
        span.className = 'block';
        span.style.height = '1.15em';
        span.style.lineHeight = '1.15';
        span.textContent = String(i);
        strip.appendChild(span);
      }

      digit.appendChild(strip);
      el.appendChild(digit);
    });

    if (suffix) {
      const s = document.createElement('span');
      s.textContent = suffix;
      s.className = 'text-[0.6em] align-top ml-0.5';
      el.appendChild(s);
    }

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        hasAnimated.current = true;
        const strips = el.querySelectorAll('.flex.flex-col');
        strips.forEach((strip: any, i: number) => {
          const target = parseInt(digits[i]);
          const h = (strip.children[0] as HTMLElement).offsetHeight;
          strip.style.transform = `translateY(-${target * h}px)`;
          strip.style.transitionDelay = `${i * 0.12}s`;
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st: any) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [value, suffix]);

  return (
    <div className="text-center">
      <div ref={odoRef} className="font-mono text-3xl sm:text-5xl md:text-6xl font-bold text-crimson-600 tracking-tighter overflow-hidden h-[1.15em] flex justify-center" data-testid={`odometer-${label.toLowerCase().replace(/\s+/g, '-')}`}></div>
      <div className="text-xs sm:text-sm text-neutral-600 font-display font-bold uppercase tracking-widest mt-2">{label}</div>
    </div>
  );
}

export function useParticleClick() {
  return useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const colors = ['#DC2626', '#EF4444', '#FCA5A5', '#FECACA', '#ffffff'];

    for (let i = 0; i < 16; i++) {
      const p = document.createElement('div');
      p.style.cssText = `position:fixed;width:6px;height:6px;border-radius:50%;pointer-events:none;z-index:9999;background:${colors[Math.floor(Math.random() * colors.length)]};left:${cx}px;top:${cy}px;transition:all .6s cubic-bezier(.16,1,.3,1)`;
      document.body.appendChild(p);
      const angle = Math.random() * Math.PI * 2;
      const dist = 30 + Math.random() * 70;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist - 30;
      p.offsetHeight;
      p.style.transform = `translate(${dx}px,${dy}px) scale(0)`;
      p.style.opacity = '0';
      setTimeout(() => p.remove(), 700);
    }

    const ring = document.createElement('div');
    ring.style.cssText = `position:fixed;border-radius:50%;pointer-events:none;z-index:9998;border:2px solid #DC2626;opacity:0;left:${cx}px;top:${cy}px;width:10px;height:10px;margin-left:-5px;margin-top:-5px;transition:all .5s cubic-bezier(.16,1,.3,1)`;
    document.body.appendChild(ring);
    ring.offsetHeight;
    ring.style.width = '100px';
    ring.style.height = '100px';
    ring.style.marginLeft = '-50px';
    ring.style.marginTop = '-50px';
    ring.style.opacity = '1';
    setTimeout(() => { ring.style.opacity = '0'; }, 200);
    setTimeout(() => ring.remove(), 600);
  }, []);
}
