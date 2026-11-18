import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 26,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* painted-sign hairline with a marigold diamond */
export function Rule({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 12"
      aria-hidden="true"
      className={`h-3 w-full text-marigold ${className}`}
    >
      <line x1="0" y1="6" x2="190" y2="6" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M200 0 L207.5 6 L200 12 L192.5 6 Z" fill="currentColor" />
      <line x1="210" y1="6" x2="400" y2="6" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

/* ------------------------------------------------------------------ HERO */
export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-8 pt-28 sm:px-10 sm:pb-12"
    >
      <div
        className="lamp pointer-events-none absolute -left-40 -top-52 h-[78vh] w-[78vh] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,182,92,.42) 0%, rgba(232,121,43,.14) 45%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-64 -right-32 h-[70vh] w-[70vh] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(232,121,43,.28) 0%, rgba(122,46,18,.18) 50%, transparent 72%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
        className="relative flex items-center justify-between text-sand"
      >
        <span className="label">est. tonight</span>
        <span className="label hidden text-amber sm:block">open 24 hours</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 60, filter: "blur(16px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.15 }}
        className="sheen display relative mt-4 font-black leading-[0.78] tracking-[-0.04em]"
        style={{ fontSize: "clamp(4.75rem, 26vw, 23rem)" }}
      >
        Theka
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.55 }}
        className="relative mt-7 grid gap-7 border-t border-sand/25 pt-6 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-12"
      >
        <p className="max-w-[38ch] text-[0.98rem] leading-relaxed text-sand">
          <span className="italic text-paper">Theka</span> (n.) — a fixed place to stand.
          Somewhere to set the weight down for a while, for exactly as long as you need it.
        </p>
        <div className="flex items-end gap-6">
          <span className="label text-amber">someone is awake</span>
          <span className="cue block h-14 w-px shrink-0" aria-hidden="true" />
        </div>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------- PORTRAIT */
export function Portrait() {
  return (
    <section id="randy" className="relative scroll-mt-14 border-t border-sand/15">
      <div className="grid lg:grid-cols-[1fr_0.82fr]">
        <div className="flex flex-col justify-center gap-8 px-6 py-16 sm:px-10 lg:min-h-screen lg:py-28">
          <Reveal>
            <span className="label text-marigold">01 — the person</span>
          </Reveal>

          <Reveal delay={0.08}>
            <p
              className="display italic leading-[1.05] text-sand"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              the name is Randy
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p
              className="display font-bold leading-[1.02] tracking-[-0.02em] text-paper"
              style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.9rem)" }}
            >
              a Emotional support giver in
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-1 flex flex-wrap items-baseline gap-x-5">
              <span
                className="hard display font-black leading-[0.82] tracking-[-0.05em]"
                style={{ fontSize: "clamp(4.5rem, 15vw, 13rem)" }}
              >
                HARD
              </span>
              <span
                className="display italic leading-none text-paper"
                style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
              >
                times
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.32} className="max-w-[46ch]">
            <p className="text-[0.98rem] leading-relaxed text-sand">
              19 years old and already on the other end of the line. He does not flinch, he does not rush
              you, and he has never once asked you to start from the beginning.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <Rule className="max-w-md" />
          </Reveal>

          <Reveal delay={0.46}>
            <dl className="flex flex-wrap gap-x-10 gap-y-4">
              {[
                ["age", "19"],
                ["hours", "24 / 7"],
                ["appointment", "none"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="label text-sand/75">{k}</dt>
                  <dd className="display num mt-1 text-lg text-amber">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="relative lg:sticky lg:top-0 lg:h-screen">
          <img
            src="images/randy.jpg"
            alt="Randy leaning against a fort wall with green hills behind him"
            className="h-[70vh] w-full object-cover object-[50%_25%] lg:h-full"
            loading="lazy"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(20,11,6,.95) 0%, rgba(20,11,6,.4) 35%, rgba(20,11,6,.18) 55%, rgba(232,121,43,.15) 100%)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 border-l border-sand/20" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
            <span className="label text-amber">Randy · on shift</span>
            <span className="label num text-sand/70">03:14</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- WHAT HAPPENS */
const STEPS = [
  {
    n: "01",
    t: "You call at 2am.",
    d: "Someone picks up on the second ring. No queue, no hold music, no menu of options.",
  },
  {
    n: "02",
    t: "You don't start from the beginning.",
    d: "Say it in any order. Say one word if that's all there is. The rest can wait.",
  },
  {
    n: "03",
    t: "Sit as long as you need.",
    d: "The chair does not get tired. There is no hour limit and no clock on the wall.",
  },
  {
    n: "04",
    t: "Leave when you're ready.",
    d: "Not when the session ends, not when someone decides you've taken enough time.",
  },
];

export function WhatHappens() {
  return (
    <section id="room" className="scroll-mt-14 bg-paper text-night">
      <div className="px-6 py-20 sm:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <Reveal>
              <span className="label text-clay">02 — the room</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                className="display mt-4 font-black leading-[0.9] tracking-[-0.04em]"
                style={{ fontSize: "clamp(2.6rem, 7.5vw, 6.5rem)" }}
              >
                What happens
                <br />
                <span className="italic font-normal text-rust">here.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <figure>
              <img
                src="images/hands.jpg"
                alt="A cup of tea passed across a wooden table"
                className="aspect-[3/2] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="label mt-3 text-taupe/70">
                tea, first. always tea.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <ul className="mt-14 lg:mt-20">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <li className="group -mx-4 grid grid-cols-[3.2rem_1fr] items-baseline gap-x-4 border-t border-taupe/25 px-4 py-7 transition-colors duration-500 hover:bg-marigold/15 sm:grid-cols-[5rem_1fr] sm:gap-x-8">
                <span className="display num text-2xl text-clay transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-rust sm:text-3xl">
                  {s.n}
                </span>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <h3
                    className="display font-bold leading-[1.05] tracking-[-0.02em] transition-colors duration-500 group-hover:text-clay"
                    style={{ fontSize: "clamp(1.35rem, 3vw, 2.3rem)" }}
                  >
                    {s.t}
                  </h3>
                  <p className="max-w-[44ch] text-[0.95rem] leading-relaxed text-taupe">
                    {s.d}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
        <div className="border-t border-taupe/25" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ THE STREET */
export function StreetBand() {
  return (
    <section className="relative isolate flex min-h-[78svh] items-center overflow-hidden">
      <img
        src="images/street.jpg"
        alt="A wet street at night lit by warm sodium lamps"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(20,11,6,.96) 0%, rgba(20,11,6,.82) 45%, rgba(20,11,6,.35) 100%)",
        }}
      />
      <div className="relative w-full px-6 py-24 sm:px-10">
        <Reveal>
          <span className="label text-amber">03 — the rule</span>
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote
            className="display mt-6 max-w-[15ch] font-normal italic leading-[1.02] tracking-[-0.02em] text-paper"
            style={{ fontSize: "clamp(2.3rem, 6.5vw, 5.6rem)" }}
          >
            You don't have to be okay to be here.
          </blockquote>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-9 flex max-w-lg items-center gap-5">
            <span className="block w-28 shrink-0">
              <Rule />
            </span>
            <span className="label text-sand">the only one</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- THE LIGHT ON */
const HOURS: [string, string][] = [
  ["open", "24 hours, every day"],
  ["cost", "nothing"],
  ["reason", "not required"],
  ["notice", "none"],
];

export function LargeClock() {
  const [t, setT] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setT(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const p = (n: number) => String(n).padStart(2, "0");
  return (
    <span
      className="display num text-amber"
      style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
      aria-label="local time"
    >
      {p(t.getHours())}
      <span className="text-paper/50">:</span>
      {p(t.getMinutes())}
      <span className="text-paper/50">:</span>
      {p(t.getSeconds())}
    </span>
  );
}

export function LightStaysOn() {
  return (
    <section id="hours" className="relative scroll-mt-14 border-t border-sand/15">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[52vh] overflow-hidden lg:min-h-[80vh]">
          <img
            src="images/chair.jpg"
            alt="An empty armchair beside a glowing lamp at night"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(20,11,6,.55), rgba(20,11,6,.1) 55%, rgba(20,11,6,.85))",
            }}
          />
          <div
            className="lamp pointer-events-none absolute left-1/2 top-1/2 h-[46vh] w-[46vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
            style={{
              background:
                "radial-gradient(circle, rgba(255,182,92,.5) 0%, rgba(242,169,59,.18) 45%, transparent 70%)",
              mixBlendMode: "screen",
            }}
          />
          <span className="label absolute bottom-5 left-5 text-amber">the chair, waiting</span>
        </div>

        <div className="flex flex-col justify-center gap-8 px-6 py-16 sm:px-10 lg:py-24">
          <Reveal>
            <span className="label text-marigold">04 — the hours</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="display font-black leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)" }}
            >
              The light
              <br />
              <span className="text-amber">stays on.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <dl className="mt-2">
              {HOURS.map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-6 border-b border-sand/20 py-4"
                >
                  <dt className="label text-sand/70">{k}</dt>
                  <dd className="display text-lg text-paper sm:text-xl">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-2 flex flex-wrap items-end gap-x-6 gap-y-2">
              <LargeClock />
              <span className="label pb-2 text-sand/70">your local time · still open</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- FOOTER */
const TICKER = [
  "someone is awake",
  "the light stays on",
  "no appointment",
  "sit as long as you need",
  "hard times welcome",
];

export function Footer() {
  const line = TICKER.join("  ·  ") + "  ·  ";
  return (
    <footer className="border-t border-sand/15 bg-ink">
      <div className="marquee border-b border-sand/15 py-4">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <span key={k} className="label px-2 text-amber">
              {line.repeat(2)}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <p
            className="sheen display font-black leading-[0.85] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3.5rem, 15vw, 12rem)" }}
          >
            Theka
          </p>
          <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-sand">
            A fixed place to stand. Come back whenever the night gets loud again.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-6 lg:justify-end">
          {[
            ["the person", "#randy"],
            ["the room", "#room"],
            ["the hours", "#hours"],
          ].map(([t, href]) => (
            <a
              key={t}
              href={href}
              className="label border-b border-transparent pb-1 text-sand transition-colors duration-300 hover:border-amber hover:text-amber"
            >
              {t}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-sand/15 px-6 py-5 sm:px-10">
        <span className="label text-sand/75">© theka — since tonight</span>
        <span className="label flex items-center gap-2 text-sand/75">
          <span className="dot-flicker inline-block h-1.5 w-1.5 rounded-full bg-amber" />
          light on
        </span>
      </div>
    </footer>
  );
}
