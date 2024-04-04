import { Variants } from "framer-motion";

export const motionVariant: Variants = {
  hidden: {
    y: 100,
    opacity: 0.13,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
  horizontalHidden: {
    x: 100,
    opacity: 0.13,
  },
  horizontalVisible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};
