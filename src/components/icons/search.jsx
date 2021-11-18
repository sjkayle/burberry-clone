import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { ArrowRight, Search } from 'react-feather';

const variants = {
  hidden: {
    y: '-29.5rem',
    transition: {
      type: 'tween',
      when: 'afterChildren',
      duration: 0.2,
    },
  },
  visible: {
    y: 0,
    transition: {
      type: 'tween',
      when: 'beforeChildren',
      duration: 0.2,
    },
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    transition: {
      type: 'tween',
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
    },
  },
};

const SearchIcon = () => {
  const controls = useAnimation();
  const searchInput = useRef(null);
  const [value, setValue] = useState('');

  return (
    <>
      <motion.div
        onHoverStart={() => {
          controls.start('visible');
          searchInput.current.focus();
        }}
        onHoverEnd={() => {
          controls.start('hidden');
          setValue('');
        }}
        className='cursor-pointer w-max'
      >
        <Search className='relative z-50' />
      </motion.div>

      <AnimatePresence>
        <motion.div
          animate={controls}
          initial='hidden'
          variants={variants}
          className='absolute bg-white w-full top-0 left-0 px-10 pt-32'
          style={{ height: '29.5rem' }}
        >
          <motion.div variants={childrenVariants} className='relative'>
            <input
              ref={searchInput}
              type='text'
              placeholder='Search'
              value={value}
              className='text border-b rounded-none border-black w-full pb-4 focus:outline-none bg-transparent'
              onChange={(e) => setValue(e.target.value)}
            />
            {value && (
              <ArrowRight
                size={18}
                className='mb-4 absolute bottom-0 right-0 cursor-pointer z-20'
              />
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default SearchIcon;
