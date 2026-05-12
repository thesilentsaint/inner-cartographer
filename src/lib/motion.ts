import { cubicBezier } from "framer-motion";

export const smoothEase = cubicBezier(0.16, 1, 0.3, 1);

export const sectionVariant = {
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
      duration: 1,
      ease: smoothEase,
    },
  },
};

export const giantTitleVariant = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    y: 40,
  },

  show: {
    opacity: 0.7,
    scale: 2,
    y: 0,

    transition: {
      duration: 2,
      ease: smoothEase,
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
      duration: 1.2,
      ease: smoothEase,
    },
  },
};