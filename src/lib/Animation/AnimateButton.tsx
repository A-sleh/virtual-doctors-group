import { motion } from 'motion/react';
import { standarAnimationProps } from './types/animationTypes';

export default function AnimateButton({
  children,
  scale = 0.7 ,
  ...props
}: standarAnimationProps) {
  return (
    <motion.button whileTap={{ scale }} {...props}>
      {children}
    </motion.button>
  );
}
