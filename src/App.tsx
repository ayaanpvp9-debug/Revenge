import { useEffect, useRef, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import {
  Hero,
  Portrait,
  WhatHappens,
  StreetBand,
  LightStaysOn,
  Footer,
  EASE,
} from "./sections";

function Clock() {
  const [t, setT] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setT(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const hh = String(t.getHours()).padStart(2, "0");
  const mm = String(t.getMinutes()).padStart(2, "0");
  const ss = String(t.getSeconds()).padStart(2, "0");
  return (
    <span className="num label hidden text-sand/80 sm:block" aria-label="local time">
      {hh}:{mm}
      <span className="text-sand/55">:{ss}</span>
    </span>
  );
}

export default function App() {
  const [lights, setLights] = useState(true);
  const glowRef = useRef<HTMLDivElement>(null);

  /* warm pool of lamplight that follows the cursor */
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let x = -600;
    let y = -600;
    const paint = () => {
      raf = 0;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
        glowRef.current.style.opacity = "1";
      }
    };
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = window.requestAnimationFrame(paint);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
    <div className="grain relative min-h-screen bg-night">
      {/* ---- warm lightning outside the window ---- */}
      <div className="lightning" aria-hidden="true" />
      <div className="lightning b" aria-hidden="true" />

      {/* ---- dimmer ---- */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-[85] bg-[#070301] transition-opacity duration-[900ms] ${
          lights ? "opacity-0" : "opacity-[0.62]"
        }`}
      />

      {/* ---- lamplight following the cursor ---- */}
      {lights && (
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[100] h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-700"
          style={{
            mixBlendMode: "screen",
            background:
              "radial-gradient(circle, rgba(255,182,92,.16) 0%, rgba(232,121,43,.07) 40%, transparent 68%)",
          }}
        />
      )}

      {/* ---- nav ---- */}
      <header className="fixed inset-x-0 top-0 z-[120] border-b border-sand/15 bg-night/70 backdrop-blur-md">
        <div className="flex h-14 items-center justify-between px-6 sm:px-10">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="dot-flicker block h-2 w-2 rounded-full bg-amber shadow-[0_0_14px_5px_rgba(255,182,92,0.55)]" />
            <span className="display text-[1.1rem] font-black tracking-[-0.01em] text-paper">
              Theka
            </span>
          </a>

          <nav className="hidden gap-8 md:flex">
            {[
              ["the person", "#randy"],
              ["the room", "#room"],
              ["the hours", "#hours"],
            ].map(([t, href]) => (
              <a
                key={t}
                href={href}
                className="label text-sand/70 transition-colors duration-300 hover:text-amber"
              >
                {t}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Clock />
            <button
              type="button"
              onClick={() => setLights((v) => !v)}
              aria-pressed={lights}
              title={lights ? "dim the room" : "light the room"}
              className="label rounded-full border border-sand/30 px-3 py-1.5 text-sand transition-all duration-300 hover:border-amber hover:text-amber"
            >
              {lights ? "dim" : "light"}
              <span className="sr-only"> the room</span>
            </button>
          </div>
        </div>
      </header>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: EASE }}
      >
        <Hero />
        <Portrait />
        <WhatHappens />
        <StreetBand />
        <LightStaysOn />
        <Footer />
      </motion.main>
    </div>
    </MotionConfig>
  );
}
