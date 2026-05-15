"use client";

import { useEffect } from "react";
import { Howl } from "howler";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PilotPage() {
  const { scrollY } = useScroll();

  /* ==========================================================
     SCENE 1: EMERGENCE
  ========================================================== */

  const opacity = useTransform(scrollY, [0, 800], [0, 1]);

  const scale = useTransform(scrollY, [0, 1200], [1.08, 1]);

  const textOpacity = useTransform(scrollY, [900, 1500], [0, 1]);

  const sceneOneExit = useTransform(
    scrollY,
    [2500, 3200],
    [1, 0]
  );

  /* ==========================================================
     SCENE 2: THE SIGNAL
  ========================================================== */

  const sceneTwoOpacity = useTransform(
    scrollY,
    [3000, 3800],
    [0, 1]
  );

  const sceneTwoY = useTransform(
    scrollY,
    [3000, 4000],
    [100, 0]
  );

  /* ==========================================================
     OPENING VEIL
  ========================================================== */

  const veilOpacity = useTransform(
    scrollY,
    [0, 300],
    [1, 0]
  );

  const veilTextOpacity = useTransform(
    scrollY,
    [0, 180],
    [1, 0]
  );

  const veilTextY = useTransform(
    scrollY,
    [0, 300],
    [0, -20]
  );

  /* ==========================================================
     AUDIO LAYER
  ========================================================== */

  useEffect(() => {
    const ambient = new Howl({
      src: ["/audio/static-1.mp3"],
      loop: true,
      volume: 0.05,
      html5: true,
    });

    const startAudio = () => {
      ambient.play();
      window.removeEventListener("click", startAudio);
    };

    window.addEventListener("click", startAudio);

    return () => {
      ambient.stop();
      window.removeEventListener("click", startAudio);
    };
  }, []);

  return (
    <main className="bg-[#f5f3ee] relative">

      {/* ==========================================================
          GRAIN OVERLAY
      ========================================================== */}

      <div
        className="
          fixed
          inset-0
          pointer-events-none
          opacity-[0.04]
          z-[999]
        "
        style={{
          backgroundImage: "url('/whiteGrain_01.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />

      {/* ==========================================================
          OPENING VEIL
      ========================================================== */}

      <motion.div
        className="
          fixed
          inset-0
          z-[998]
          flex
          items-center
          justify-center
          bg-[#f5f3ee]
          pointer-events-none
        "
        style={{
          opacity: veilOpacity,
        }}
      >
        <motion.p
          className="
            text-[#1f1f1f]/40
            text-[10px]
            uppercase
            tracking-[0.6em]
            font-light
          "
          style={{
            opacity: veilTextOpacity,
            y: veilTextY,
          }}
        >
          The signal appears slowly.
        </motion.p>
      </motion.div>

      {/* ==========================================================
          SCENE 1 — LOCKED VIEWPORT
      ========================================================== */}

      <motion.div
        className="fixed inset-0 overflow-hidden"
        style={{
          opacity: sceneOneExit,
          pointerEvents: useTransform(
            scrollY,
            [3100, 3200],
            ["auto", "none"]
          ),
        }}
      >
        <motion.img
          src="/InvisibleHand.png"
          alt=""
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            will-change-transform
          "
          style={{
            opacity,
            scale,
          }}
        />

        {/* Warm Atmospheric Diffusion */}

        <div
          className="absolute inset-0 z-10"
          style={{
            background: `
              radial-gradient(
                circle at center,
                rgba(245,243,238,0.08),
                rgba(245,243,238,0.22)
              )
            `,
          }}
        />

        {/* Typography Layer */}

        <motion.div
          className="
            absolute
            inset-0
            z-20
            flex
            items-center
            justify-center
            text-center
            px-10
          "
          style={{
            opacity: textOpacity,
          }}
        >
          <div>
            <h1
              className="
                text-[#1f1f1f]
                text-xl
                uppercase
                tracking-[1em]
                font-extralight
              "
            >
              Emergence
            </h1>

            <p
              className="
                mt-8
                text-[#1f1f1f]/40
                text-sm
                italic
              "
            >
              When times are tough... an Invisible Hand appears.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* ==========================================================
          SCROLL SPACE + SCENE 2
      ========================================================== */}

      <div className="relative z-30">

        {/* Scene 1 Scroll Duration */}

        <div className="h-[3500px]" />

        {/* ==========================================================
            SCENE 2 — THE SIGNAL
        ========================================================== */}

        <section
          className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-[#f5f3ee]
            px-10
          "
        >
          <motion.div
            style={{
              opacity: sceneTwoOpacity,
              y: sceneTwoY,
            }}
            className="text-center"
          >
            <h2
              className="
                text-[#1f1f1f]/40
                text-xs
                uppercase
                tracking-[2em]
                mb-12
              "
            >
              The Signal
            </h2>

            <p
              className="
                max-w-md
                mx-auto
                text-[#1f1f1f]/80
                font-light
                leading-relaxed
              "
            >
              The boundary between inner and outer begins softening.
              <br />
              A threshold without announcement.
            </p>
          </motion.div>
        </section>

        {/* Scene 2 Exit Space */}

        <div className="h-screen" />
      </div>
    </main>
  );
}