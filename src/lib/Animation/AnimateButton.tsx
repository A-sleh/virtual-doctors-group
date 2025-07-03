import { motion } from 'motion/react';
import { standarAnimationProps } from './types/animationTypes';
import AnimateScale from './AnimateScale';

export default function AnimateButton({
  children,
  scale = 0.8,
  withInitialScale = false,
  ...props
}: standarAnimationProps) {
  if (withInitialScale)
    return (
      <AnimateScale {...props}>
        <motion.button whileTap={{ scale }}>{children}</motion.button>
      </AnimateScale>
    );
  return (
    <motion.button whileTap={{ scale }} {...props}>
      {children}
    </motion.button>
  );
}
