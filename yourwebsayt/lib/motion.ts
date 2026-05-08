export const luxuryEase = [0.22, 1, 0.36, 1] as const;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

export const fadeUp = {
  hidden: {
    opacity: 1,
    y: 18
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: luxuryEase
    }
  }
};

export const fadeIn = {
  hidden: {
    opacity: 1
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: luxuryEase
    }
  }
};

export const scaleIn = {
  hidden: {
    opacity: 1,
    scale: 0.985
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: luxuryEase
    }
  }
};

export const pageTransition = {
  initial: {
    opacity: 1,
    y: 14
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: luxuryEase
    }
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.45,
      ease: luxuryEase
    }
  }
};
