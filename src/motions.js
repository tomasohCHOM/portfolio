export const motionVariant = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
      delay: custom?.delay ?? 0,
    },
  }),
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
