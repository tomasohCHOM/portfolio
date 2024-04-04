import { Variants } from "framer-motion";

export const motionVariant: Variants = {
  offscreen: {
    y: 100,
    opacity: 0.13,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};
