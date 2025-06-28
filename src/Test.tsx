import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { useRef, useState } from 'react';

export default function Test() {
  return (
    <div className=" items-center justify-center h-[100vh] flex  overflow-scroll">
      <motion.div
        animate={{ baseFrequency: 0.5,rotate: 180  }}
        transition={{ type: 'spring', mass: 0.5 }}
        drag dragSnapToOrigin
        dragMomentum={false}
        className="w-20 h-20 bg-black"
      ></motion.div>
      <motion.div
        animate={{ baseFrequency: 0.5,rotate: 180  }}
        transition={{ type: 'spring', mass: 0.5 }}
        drag dragSnapToOrigin
        className="w-20 h-20 bg-black"
      ></motion.div>
    </div>
  );
}
