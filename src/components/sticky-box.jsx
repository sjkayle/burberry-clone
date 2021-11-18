import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'react-feather';

const variants = {
  hidden: {
    y: 192,
    transition: {
      type: 'tween',
      duration: 0.2,
    },
  },
  visible: {
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.4,
    },
  },
};

const StickyBox = ({
  position,
  pagination,
  currentPage,
  pages,
  title,
  options,
  isDisplayed,
  handleNext,
  handlePrev,
  controlledPagination,
}) => {
  const controls = useAnimation();
  const loadingControls = useAnimation();

  useEffect(() => {
    if (isDisplayed) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isDisplayed]);

  useEffect(() => {
    loadingControls.start({
      x: ['-24rem', '0rem'],
      transition: {
        ease: 'linear',
        type: 'tween',
        duration: 5,
        delay: 1,
      },
    });
  }, [loadingControls, currentPage]);

  return (
    <motion.div
      className={`${
        position === 'bottom' ? 'bottom-12' : 'top-1/2'
      } sticky font-semibold`}
      animate={controls}
      initial='hidden'
      variants={variants}
    >
      {controlledPagination ? (
        <div className='flex mb-7 text-white gap-7 justify-center items-center'>
          <ChevronLeft
            size={18}
            className='cursor-pointer'
            onClick={handlePrev}
          />
          <div className='text-sm text-center'>{`${currentPage} | ${pages}`}</div>
          <ChevronRight
            size={18}
            className='cursor-pointer'
            onClick={handleNext}
          />
        </div>
      ) : pagination ? (
        <div className='flex mb-7 gap-7 justify-center items-center'>
          <div className='text-sm text-center'>{`${currentPage} | ${pages}`}</div>
        </div>
      ) : null}

      <div className='flex flex-col justify-center bg-white w-96 h-24 uppercase relative overflow-x-hidden'>
        {controlledPagination && (
          <motion.div
            animate={loadingControls}
            className='h-0.5 w-full absolute top-0 bg-black'
          />
        )}
        <h5 className='text-xs text-center cursor-pointer'>{title}</h5>
        <ul className='mt-1 flex gap-5 justify-center'>
          {options.map((option, index) => (
            <li key={index} className='cursor-pointer'>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default StickyBox;
