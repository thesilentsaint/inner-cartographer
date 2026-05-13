"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { easeSmooth } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PilotPage() {
  const containerRef = useRef(null);

  return (
    <main ref={containerRef} className="bg-[#0b0b0f] text-[#e5e5e5]">
      {/* NOISE OVERLAY - Global Grain System */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('https://res.cloudinary.com/dn7vsyasl/image/upload/v1613312328/noise_v9pssq.png')]" />

      {/* SCENE 1: STATIC / NOISE — "The Hidden Grace" */}
      <section className="relative h-[300vh] w-full bg-black flex flex-col items-center">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* IMAGE: Emerges through blur/opacity */}
          <motion.img 
            src="/images/hidden-grace.jpg" 
            className="absolute w-full h-full object-cover opacity-20 filter blur-xl scale-110"
            style={{ 
                opacity: useTransform(useScroll().scrollYProgress, [0, 0.15], [0, 0.3]),
                filter: useTransform(useScroll().scrollYProgress, [0, 0.15], ["blur(40px)", "blur(10px)"]),
                scale: useTransform(useScroll().scrollYProgress, [0, 0.2], [1.2, 1.05])
            }}
          />
          
          <div className="z-10 text-center px-6 max-w-2xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              transition={{ duration: 3 }}
              className="text-[10px] uppercase tracking-[1em] mb-20"
            >
              Unresolved Pressure
            </motion.p>
            <h2 className="text-xl font-extralight tracking-widest leading-relaxed">
              There are phases where the system <br/> begins resisting its own momentum.
            </h2>
          </div>
        </div>
      </section>

      {/* SCENE 2: SIGNALS — "The M-Code" */}
      <section className="relative h-[400vh] w-full">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-[#0b0b0f]">
          {/* Subliminal M-Code Image */}
          <motion.div 
             className="absolute inset-0 opacity-5 grayscale pointer-events-none"
             style={{ rotate: useTransform(useScroll().scrollYProgress, [0.3, 0.6], [0, 2]) }}
          >
             <img src="/images/m-code.jpg" className="w-full h-full object-cover scale-150" />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.h1 
              style={{ 
                opacity: useTransform(useScroll().scrollYProgress, [0.35, 0.45, 0.55], [0, 0.8, 0]),
                scale: useTransform(useScroll().scrollYProgress, [0.35, 0.55], [0.8, 1.1]),
                letterSpacing: "1.5em"
              }}
              className="text-[12vw] font-thin uppercase pointer-events-none"
            >
              Signal
            </motion.h1>
            
            <div className="mt-[-5vh] space-y-[40vh] text-center italic opacity-40 font-light">
                <p>Low probability coincidences.</p>
                <p>Certain places feeling strangely familiar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SCENE 3: DREAMSPACE — "Spinal Shakti" */}
      <section className="relative h-[300vh] w-full bg-[#050507]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <motion.img 
            src="/images/spinal-shakti.jpg"
            className="absolute w-full h-full object-cover opacity-10 blur-sm"
            style={{ 
                y: useTransform(useScroll().scrollYProgress, [0.6, 0.9], ["10%", "-10%"]),
                scale: 1.5 
            }}
          />
          <div className="z-10 text-center">
             <h2 className="text-8xl font-thin tracking-tighter opacity-20 uppercase">Dreamspace</h2>
             <p className="mt-10 max-w-md mx-auto text-muted tracking-wide leading-loose">
               Instruction without language. <br/> Symbolic density.
             </p>
          </div>
        </div>
      </section>

      {/* SCENE 4: THRESHOLD — "The Knot Opening" */}
      <section className="relative h-[200vh] w-full flex items-center justify-center">
         <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
            <motion.div 
               style={{ opacity: useTransform(useScroll().scrollYProgress, [0.85, 0.95], [0, 0.6]) }}
               className="mb-10"
            >
               <img src="/images/knot-opening.jpg" className="w-64 h-auto opacity-50 mix-blend-screen" />
            </motion.div>

            <div className="text-center z-10">
                <p className="text-sm opacity-40 tracking-[0.5em] mb-4">THE INNER CARTOGRAPHER</p>
                <h3 className="text-2xl font-light mb-20">The system signals long before the mind understands.</h3>
                
                <nav className="flex gap-12 justify-center">
                    <button className="text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors duration-1000 border-b border-white/10 pb-2">
                        Enter Atlas
                    </button>
                    <button className="text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors duration-1000 border-b border-white/10 pb-2">
                        Continue Mapping
                    </button>
                </nav>
            </div>
         </div>
      </section>
    </main>
  );
}