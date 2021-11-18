import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
};

const Overlay = () => {
  return (
    <motion.div
      animate='hover'
      initial='initial'
      exit='initial'
      variants={variants}
      className='fixed inset-0 bg-opacity-50 bg-black'
    />
  );
};

export default Overlay;
