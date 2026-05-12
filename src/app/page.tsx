"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import {
  smoothEase,
  sectionVariant,
  giantTitleVariant,
  parallaxVariant,
} from "@/lib/motion";




export default function Home() {

  // SCROLL PROGRESS
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <>

      {/* MINIMAL TOP MENU */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
        <div className="mt-4 flex gap-8 px-6 py-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-[11px] uppercase tracking-[0.3em] text-[#d4d4d8]">
          <a href="#act1" className="hover:text-white transition-colors">
            Section 1
          </a>

          <a href="#act2" className="hover:text-white transition-colors">
            Section 2
          </a>

          <a href="#act3" className="hover:text-white transition-colors">
            Section 3
          </a>

          <a href="#act4" className="hover:text-white transition-colors">
            Section 4
          </a>
        </div>
      </div>

      {/* GLOBAL SCROLL BAR */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-16 left-0 right-0 h-[2px] origin-left bg-[#e5e5e5] z-40"
      />

      <main className="bg-[#0b0b0f] text-[#e5e5e5] overflow-x-hidden">

        {/* ACT 1 */}
        <section
          id="act1"
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >

          {/* BACKGROUND IMAGE */}
          <motion.img
            src="/Test2.png"
            alt="Temple-Mother"
            initial={{ opacity: 0, scale: 1.15 }}
            whileInView={{ opacity: 0.8, scale: 1.02 }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
            }}
            viewport={{ once: false, amount: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover blur-sm"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            variants={sectionVariant}
            className="relative z-10 text-center"
          >

            <motion.h1
              variants={giantTitleVariant}
              className="font-light tracking-tight text-[#f5f5f5]"
              style={{ fontSize: "140px" }}
            >
              Before Form
            </motion.h1>

            <p className="text-[#d4d4d8] mt-8 text-lg">
              A quiet system begins to assemble itself
            </p>

          </motion.div>
        </section>

        {/* ACT 2 */}
        <section
          id="act2"
          className="h-screen flex items-center justify-center overflow-hidden"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            variants={sectionVariant}
            className="text-center max-w-3xl"
          >

            <motion.h2
              variants={giantTitleVariant}
              className="font-light tracking-tight text-[#e5e5e5]"
              style={{ fontSize: "140px" }}
            >
              The Skull Gate
            </motion.h2>

            <p className="text-[#a1a1aa] mt-8 leading-relaxed text-lg">
              A threshold without announcement.
              <br />
              Structure dissolves at the edge of perception.
            </p>

          </motion.div>
        </section>

        {/* ACT 3 */}
        <section
          id="act3"
          className="h-screen flex items-center justify-start pl-16 overflow-hidden"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            variants={parallaxVariant}
            className="max-w-5xl"
          >

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 60 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              viewport={{ once: false, amount: 0.5 }}
              className="mb-10"
            >
              <img
                src="/skull-gate.png"
                alt="Skull Gate Vision"
                className="w-[340px] md:w-[520px] opacity-80"
              />
            </motion.div>

            {/* TITLE */}
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              variants={giantTitleVariant}
              className="font-light tracking-tight text-[#f5f5f5] text-left"
              style={{ fontSize: "160px" }}
            >
              Descent
            </motion.h2>

            <p className="text-[#a1a1aa] mt-8 text-lg max-w-xl">
              Movement inward is not travel.
              It is removal of resistance.
            </p>

          </motion.div>
        </section>

        {/* ACT 4 */}
        <section
          id="act4"
          className="h-screen flex items-center justify-center overflow-hidden"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            variants={sectionVariant}
            className="text-center max-w-4xl"
          >

            <motion.h2
              variants={giantTitleVariant}
              className="font-light tracking-tight text-[#f5f5f5]"
              style={{ fontSize: "140px" }}
            >
              Inner Cartography
            </motion.h2>

            <p className="text-[#a1a1aa] mt-8 text-lg">
              The map is not drawn.
              <br />
              It is remembered through movement.
            </p>

          </motion.div>
        </section>

      </main>
    </>
  );
}