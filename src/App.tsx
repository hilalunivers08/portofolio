import { useEffect, useRef, useState } from "react";
import falcon from "./assets/millenniumfalcon.webp";

type Star = {
  top: string;
  left: string;
  size: number;
  rotate: number;
  delay: string;
  duration: string;
};

const stars: Star[] = [
  { top: "8%", left: "6%", size: 14, rotate: -12, delay: "0s", duration: "4.2s" },
  { top: "15%", left: "18%", size: 9, rotate: 20, delay: "1.1s", duration: "3.4s" },
  { top: "6%", left: "34%", size: 12, rotate: -30, delay: "2.3s", duration: "5.1s" },
  { top: "22%", left: "48%", size: 8, rotate: 8, delay: "0.6s", duration: "3.8s" },
  { top: "10%", left: "62%", size: 16, rotate: -18, delay: "1.7s", duration: "4.6s" },
  { top: "18%", left: "78%", size: 10, rotate: 26, delay: "0.3s", duration: "3.2s" },
  { top: "5%", left: "90%", size: 13, rotate: -8, delay: "2.8s", duration: "5.4s" },
  { top: "30%", left: "10%", size: 9, rotate: 14, delay: "1.4s", duration: "4s" },
  { top: "35%", left: "26%", size: 18, rotate: -22, delay: "0.9s", duration: "5.8s" },
  { top: "28%", left: "40%", size: 8, rotate: 32, delay: "2.1s", duration: "3.6s" },
  { top: "33%", left: "58%", size: 11, rotate: -14, delay: "0.2s", duration: "4.4s" },
  { top: "25%", left: "70%", size: 9, rotate: 18, delay: "1.9s", duration: "3.9s" },
  { top: "38%", left: "86%", size: 14, rotate: -26, delay: "2.6s", duration: "5.2s" },
  { top: "46%", left: "4%", size: 10, rotate: 10, delay: "0.7s", duration: "4.1s" },
  { top: "50%", left: "20%", size: 21, rotate: -16, delay: "1.2s", duration: "6s" },
  { top: "44%", left: "36%", size: 8, rotate: 24, delay: "2.4s", duration: "3.3s" },
  { top: "52%", left: "52%", size: 17, rotate: -10, delay: "0.4s", duration: "4.8s" },
  { top: "47%", left: "66%", size: 9, rotate: 30, delay: "1.6s", duration: "3.7s" },
  { top: "41%", left: "82%", size: 12, rotate: -20, delay: "2.9s", duration: "5.5s" },
  { top: "58%", left: "12%", size: 9, rotate: 16, delay: "0.5s", duration: "3.5s" },
  { top: "62%", left: "30%", size: 13, rotate: -28, delay: "1.8s", duration: "4.9s" },
  { top: "55%", left: "44%", size: 8, rotate: 12, delay: "2.2s", duration: "3.1s" },
  { top: "60%", left: "60%", size: 19, rotate: -6, delay: "0.8s", duration: "5.6s" },
  { top: "56%", left: "74%", size: 10, rotate: 22, delay: "1.3s", duration: "4.3s" },
  { top: "64%", left: "90%", size: 12, rotate: -24, delay: "2.7s", duration: "5.3s" },
  { top: "70%", left: "6%", size: 11, rotate: 18, delay: "0.1s", duration: "4.5s" },
  { top: "74%", left: "22%", size: 8, rotate: -12, delay: "1.5s", duration: "3.6s" },
  { top: "68%", left: "38%", size: 15, rotate: 28, delay: "2.5s", duration: "5.7s" },
  { top: "76%", left: "54%", size: 9, rotate: -18, delay: "0.6s", duration: "4s" },
  { top: "71%", left: "68%", size: 12, rotate: 14, delay: "1.9s", duration: "5s" },
  { top: "66%", left: "84%", size: 8, rotate: -32, delay: "2.0s", duration: "3.4s" },
  { top: "82%", left: "14%", size: 16, rotate: 20, delay: "0.3s", duration: "4.7s" },
  { top: "86%", left: "32%", size: 10, rotate: -8, delay: "1.1s", duration: "3.8s" },
  { top: "80%", left: "48%", size: 9, rotate: 26, delay: "2.3s", duration: "5.1s" },
  { top: "88%", left: "64%", size: 13, rotate: -22, delay: "0.9s", duration: "4.2s" },
  { top: "84%", left: "78%", size: 8, rotate: 10, delay: "1.7s", duration: "3.2s" },
  { top: "92%", left: "40%", size: 11, rotate: -16, delay: "2.6s", duration: "5.9s" },
  { top: "94%", left: "8%", size: 14, rotate: 24, delay: "0.4s", duration: "4.6s" },
  { top: "90%", left: "92%", size: 9, rotate: -28, delay: "1.4s", duration: "3.9s" },
  { top: "12%", left: "96%", size: 10, rotate: 18, delay: "2.1s", duration: "4.4s" },
  { top: "40%", left: "96%", size: 8, rotate: -14, delay: "0.7s", duration: "3.7s" },
  { top: "78%", left: "96%", size: 12, rotate: 30, delay: "1.6s", duration: "5.2s" },
  { top: "20%", left: "4%", size: 8, rotate: -24, delay: "2.8s", duration: "3.5s" },
  { top: "48%", left: "92%", size: 15, rotate: 12, delay: "0.2s", duration: "5.8s" },
  { top: "72%", left: "96%", size: 9, rotate: -20, delay: "1.0s", duration: "4.1s" },
];

const navItems = [{ label: "About", href: "#about" }];

function App() {
  const falconRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    let lastScrollY = window.scrollY;
    let scrollDirection = 0;
    let scrollDistance = 0;
    const bubble = bubbleRef.current;

    if (bubble && lastScrollY >= 20) {
      bubble.classList.add("is-hidden");
    }

    const update = () => {
      frame = 0;

      const el = falconRef.current;
      if (!el) return;

      const travel = window.innerHeight * 0.7;
      const progress = Math.min(1, Math.max(0, window.scrollY / travel));
      const eased = progress * progress * (3 - 2 * progress);

      const x = eased * window.innerWidth * 0.85;
      const y = eased * window.innerHeight * 1.3;
      const rotate = -4 + eased * 40;
      const scale = 1 - eased * 0.35;
      const opacity = 1 - eased * eased * eased;

      el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) scale(${scale})`;
      el.style.opacity = `${opacity}`;
    };

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      lastScrollY = currentY;

      if (bubble && delta !== 0) {
        const direction = delta > 0 ? 1 : -1;

        if (direction !== scrollDirection) {
          scrollDirection = direction;
          scrollDistance = 0;
        }

        scrollDistance += Math.abs(delta);

        if (currentY < 20) {
          bubble.classList.remove("is-hidden");
          scrollDistance = 0;
        } else if (scrollDistance > 6) {
          bubble.classList.toggle("is-hidden", direction > 0);
          scrollDistance = 0;
        }
      }

      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!navOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node;

      if (navRef.current?.contains(target)) return;
      if (triggerRef.current?.contains(target)) return;

      setNavOpen(false);
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      setNavOpen(false);
      triggerRef.current?.focus();
    };

    const closeOnScroll = () => setNavOpen(false);

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("scroll", closeOnScroll, { passive: true });

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("scroll", closeOnScroll);
    };
  }, [navOpen]);

  return (
    <main className="site-canvas">
      <div className="starfield" aria-hidden="true">
        {stars.map((star, index) => {
          const dotSize = Math.max(2, Math.round(star.size / 5));

          return (
            <span
              key={index}
              className="star-dot"
              style={{
                top: star.top,
                left: star.left,
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            />
          );
        })}
      </div>

      <div className="scene">
        <div className="falcon-slot">
          <div className="falcon-scroll" ref={falconRef}>
            <div className="falcon-bubble" ref={bubbleRef}>
              Where you headed visitor?
            </div>
            <button
              className="falcon-trigger"
              ref={triggerRef}
              type="button"
              aria-expanded={navOpen}
              aria-controls="falcon-nav"
              aria-label={navOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setNavOpen((open) => !open)}
            >
              <img
                className="falcon"
                src={falcon}
                alt="Millennium Falcon"
                draggable={false}
              />
            </button>
          </div>

          {navOpen && (
            <nav
              id="falcon-nav"
              className="falcon-nav"
              ref={navRef}
              aria-label="Section navigation"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setNavOpen(false)}
                >
                  {item.label}
                  <span aria-hidden="true">↓</span>
                </a>
              ))}
            </nav>
          )}
        </div>

        <section className="portfolio">
          {/* <p className="portfolio-eyebrow">Portfolio — 2026</p> */}

          <h1 className="portfolio-title">
            Hi, I&apos;m Hilal.
            <br />
            <em>I build things</em>
          </h1>

          <p className="portfolio-text">
           Happinesse is a warm gun
          </p>
        </section>
      </div>

      <section className="about-section" id="about">
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">
          Curious about technology,
          <br />
          <em>driven by ideas.</em>
        </h2>
        <p className="about-text">
          I enjoy exploring technology, building digital experiences, and
          turning ideas into something useful. This is where I document the
          things I create and learn along the way.
        </p>
      </section>
    </main>
  );
}

export default App;
