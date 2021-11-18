import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X as Close } from 'react-feather';

import data from '../data/newsflash';

const variants = {
  visible: {
    transition: {
      staggerChildren: 0.01,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.01,
    },
  },
};

const iconVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.01,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.01,
    },
  },
};

const Banner = ({ onClick }) => {
  const [currentData, setCurrentData] = useState(0);

  useEffect(() => {
    const t = setInterval(async () => {
      setCurrentData((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(t);
    };
  }, [currentData]);

  const handleNext = () => {
    setCurrentData((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentData((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return (
    <div className='w-full bg-black text-white h-11 flex justify-between items-center uppercase font-semibold text-xs px-14 relative z-50'>
      <div />

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={currentData}
          className='flex items-center gap-3'
          animate='visible'
          initial='hidden'
          exit='exit'
        >
          <motion.div variants={iconVariants}>
            <ChevronLeft
              size={18}
              className='cursor-pointer'
              onClick={handlePrevious}
            />
          </motion.div>
          <motion.div variants={variants} className='cursor-pointer'>
            {data[currentData].split('').map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div variants={iconVariants}>
            <ChevronRight
              size={18}
              className='cursor-pointer'
              onClick={handleNext}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <Close
        size={18}
        className='hidden md:block cursor-pointer'
        onClick={onClick}
      />
    </div>
  );
};

export default Banner;
