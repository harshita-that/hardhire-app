import { motionTokens } from "@/lib/design-system";

/** Framer Motion constants — keep in sync with design-system motionTokens */
export const motion = {
  page: {
    initial: { opacity: 0, y: motionTokens.pageOffsetY },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motionTokens.durationMs.page / 1000,
        ease: motionTokens.ease,
      },
    },
  },
  cardHover: {
    y: motionTokens.cardLiftY,
    transition: {
      duration: motionTokens.durationMs.normal / 1000,
      ease: "easeOut",
    },
  },
  sidebarSpring: {
    type: "spring" as const,
    stiffness: 380,
    damping: 30,
  },
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: motionTokens.listStagger,
      },
    },
  },
  staggerItem: {
    initial: { opacity: 0, y: 6 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motionTokens.durationMs.normal / 1000,
        ease: motionTokens.ease,
      },
    },
  },
};
