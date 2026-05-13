"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  fadeUp,
  sceneReveal,
  heroTitle,
  parallaxVariant,
} from "@/lib/motion";

export default function Home() {
  return (
    <main className="bg-[#0b0b0f] text-[#e5e5e5] overflow-x-hidden">

      {/* =========================
          SCENE 01 — EMERGENCE
      ========================= */}
      <section className="scene">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          variants={sceneReveal}
          className="scene-content"
        >
          <motion.h1
            variants={heroTitle}
            className="text-4xl font-light tracking-tight"
          >
            Before Form
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-[#a1a1aa]"
          >
            A quiet system begins to assemble itself
          </motion.p>
        </motion.div>
      </section>

      {/* =========================
          SCENE 02 — THRESHOLD
      ========================= */}
      <section className="scene">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          variants={fadeUp}
          className="scene-content"
        >
          <motion.h2
            variants={heroTitle}
            className="text-3xl font-light tracking-tight"
          >
            The Skull Gate
          </motion.h2>

          <p className="mt-4 text-[#a1a1aa]">
            A threshold without announcement. <br />
            Structure dissolves at the edge of perception.
          </p>
        </motion.div>
      </section>

      {/* =========================
          SCENE 03 — DESCENT
      ========================= */}
      <section className="scene">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          variants={parallaxVariant}
          className="scene-content"
        >

          <motion.h2
            variants={heroTitle}
            className="text-[140px] font-light tracking-tight opacity-70"
          >
            Descent
          </motion.h2>

          <p className="mt-4 text-[#a1a1aa]">
            Movement inward is not travel. It is removal of resistance.
          </p>

        </motion.div>
      </section>

      {/* =========================
          SCENE 04 — INNER MAP
      ========================= */}
      <section className="scene">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeUp}
        className="scene-content"
      >
        <h2 className="text-3xl font-light">
          Inner Cartography
        </h2>

        <p className="mt-4 text-[#a1a1aa]">
          The map is not drawn. It is remembered through movement.
        </p>

        {/* ISOLATED LINK LAYER (IMPORTANT FIX) */}
        <div className="mt-10">
          <Link
            href="/pilot"
            className="text-sm tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity duration-700 inline-block"
          >
            Enter Signal
          </Link>
        </div>
      </motion.div>
    </section>

    </main>
  );
}