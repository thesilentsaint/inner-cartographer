"use client";

import { easeInOut } from "framer-motion";

/* =========================
   1. CORE MOTION TOKENS
========================= */

export const easeSmooth = [0.16, 1, 0.3, 1];

export const duration = {
  fast: 0.4,
  medium: 1,
  slow: 1.8,
};

/* =========================
   2. SCENE ANIMATIONS
========================= */

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: duration.medium,
      ease: easeSmooth,
    },
  },
};

export const sceneReveal = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration.slow,
      ease: easeSmooth,
    },
  },
};

export const parallaxVariant = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.medium,
      ease: easeSmooth,
    },
  },
};

/* =========================
   3. HERO / KEY MOMENTS
========================= */

export const heroTitle = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    y: 40,
  },
  show: {
    opacity: 0.8,
    scale: 2,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easeSmooth,
    },
  },
};