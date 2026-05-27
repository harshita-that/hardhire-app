import { motionTokens } from "@/lib/design-system";

/**
 * Single source of truth for all animations
 * No duplicates, no aliases, no motionPresets
 */

export const motion = {
  page: {
    initial: {
      opacity: 0,
      y: motionTokens.pageOffsetY,
    },
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
    y: -2,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1] as const,
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