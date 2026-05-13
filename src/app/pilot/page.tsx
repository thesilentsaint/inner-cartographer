"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";


export default function PilotPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [t, setT] = useState(0); // 0 → 1 scroll field

  /* -----------------------------
     LENIS + SCROLL FIELD
  ----------------------------- */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const updateScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const scrollTop = window.scrollY;
      const maxScroll =
        el.scrollHeight - window.innerHeight;

      const progress = Math.min(
        1,
        Math.max(0, scrollTop / maxScroll)
      );

      setT(progress);
    };

    window.addEventListener("scroll", updateScroll);
    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      lenis.destroy();
    };
  }, []);

  /* -----------------------------
     ATMOSPHERIC FIELDS
  ----------------------------- */

  const noise = 1 - smoothstep(0, 0.25, t);
  const signal =
    smoothstep(0.15, 0.5, t) *
    (1 - smoothstep(0.5, 0.65, t));

  const dream = smoothstep(0.45, 0.75, t);
  const threshold = smoothstep(0.7, 1, t);

  return (
    <div ref={containerRef} className="pilot">

      {/* =========================
          GLOBAL ATMOSPHERE LAYER
      ========================== */}
      <div
        className="noise-layer"
        style={{
          opacity: 0.2 + noise * 0.8,
        }}
      />

      <div
        className="fog-layer"
        style={{
          opacity: 0.1 + dream * 0.6,
        }}
      />

      {/* =========================
          SCENE 1 — STATIC / NOISE
      ========================== */}
      <section className="scene">
        <div
          className="scene-image"
          style={{
            opacity: noise * 0.6,
            filter: `blur(${18 * noise}px)`,
            transform: `scale(${1.08 - noise * 0.05})`,
          }}
        >
          THE HIDDEN GRACE
        </div>

        <div
          className="scene-text"
          style={{
            opacity: 0.2 + (1 - noise),
            transform: `translateY(${noise * 40}px)`,
          }}
        >
          <p>fragments of signal not yet formed</p>
          <p>pressure without origin</p>
        </div>
      </section>

      {/* =========================
          SCENE 2 — SIGNALS
      ========================== */}
      <section className="scene">
        <div
          className="scene-image"
          style={{
            opacity: signal * 0.3,
            transform: `rotate(${signal * 2}deg) scale(1.05)`,
          }}
        >
          M-CODE
        </div>

        <div className="scene-text">
          <p style={{ opacity: signal }}>
            Low probability coincidences
          </p>

          <p style={{ opacity: signal - 0.2 }}>
            Certain places feel familiar
          </p>

          <p style={{ opacity: signal - 0.4 }}>
            Dreams with unusual clarity
          </p>
        </div>
      </section>

      {/* =========================
          SCENE 3 — DREAMSPACE
      ========================== */}
      <section className="scene">
        <div
          className="scene-image"
          style={{
            opacity: dream * 0.7,
            filter: `blur(${6 - dream * 4}px)`,
            transform: `translateY(${dream * -20}px)`,
          }}
        >
          SPINAL SHAKTI
        </div>

        <div className="scene-text">
          <p>Not all dreams behave like memory</p>
          <p>Some arrive with atmosphere</p>
          <p>Instruction without language</p>
        </div>
      </section>

      {/* =========================
          SCENE 4 — THRESHOLD
      ========================== */}
      <section className="scene">
        <div
          className="scene-image"
          style={{
            opacity: threshold,
            transform: `scale(${1 - threshold * 0.02})`,
          }}
        >
          THE KNOT OPENING
        </div>

        <div className="scene-text">
          <h1 style={{ opacity: threshold }}>
            THRESHOLD
          </h1>

          <p>
            The system signals long before the mind understands
          </p>

          <p>
            Some begin listening
          </p>

          <div className="cta">
            The Inner Cartographer
          </div>
        </div>
      </section>

      {/* spacer for scroll depth */}
      <div style={{ height: "120vh" }} />
    </div>
  );
}

/* -----------------------------
   SMOOTHSTEP UTILITY
----------------------------- */
function smoothstep(min: number, max: number, value: number) {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}