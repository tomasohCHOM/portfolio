export const containerVariantsV1 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      delayChildren: 1.1,
      staggerChildren: 0.1,
    },
  },
};

export const childVariantsV1 = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.4,
    },
  },
};

export const containerVariantsV0 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
  verticalHidden: {
    y: 100,
    opacity: 0,
  },
  verticalVisible: {
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
    opacity: 0,
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
