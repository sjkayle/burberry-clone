import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
  reveal: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  hover: {
    opacity: 1,
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
  },
  reveal: {
    opacity: 1,
  },
};

const MenuItem = ({ children, inView }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('reveal');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className='h-14 cursor-pointer opacity-1 lg:opacity-30'
      animate={controls}
      whileHover='hover'
      initial='hidden'
      variants={variants}
    >
      {children.split('').map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const MenuImage = () => {
  const { ref, inView } = useInView();

  return (
    <div
      className='flex justify-center items-center my-0.5 h-screen bg-cover'
      style={{
        backgroundImage: 'url(/woods.jpeg)',
      }}
    >
      <motion.div
        className='text-center text-white text-2xl lg:text-3xl font-semibold uppercase'
        ref={ref}
      >
        <MenuItem inView={inView}>Women</MenuItem>
        <MenuItem inView={inView}>Men</MenuItem>
        <MenuItem inView={inView}>Children</MenuItem>
        <MenuItem inView={inView}>Bags</MenuItem>
      </motion.div>
    </div>
  );
};

export default MenuImage;
