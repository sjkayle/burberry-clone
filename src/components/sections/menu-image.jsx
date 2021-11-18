import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Section from '../section';

const variants = {
  hidden: {
    opacity: 0.3,
  },
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
      className='h-14 cursor-pointer'
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
    <Section background='url(/woods.jpeg)'>
      <motion.div
        className='text-center text-white text-3xl font-semibold uppercase'
        ref={ref}
      >
        <MenuItem inView={inView}>Women</MenuItem>
        <MenuItem inView={inView}>Men</MenuItem>
        <MenuItem inView={inView}>Children</MenuItem>
        <MenuItem inView={inView}>Bags</MenuItem>
      </motion.div>
    </Section>
  );
};

export default MenuImage;
