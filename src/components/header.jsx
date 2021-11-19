import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import Banner from './banner';
import Navbar from './navbar';
import MinibagIcon from './icons/minibag';
import SearchIcon from './icons/search';
import UserIcon from './icons/user';

const variants = {
  hidden: {
    y: -124,
    transition: {
      type: 'tween',
      duration: 0.07,
    },
  },
  visible: {
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.2,
    },
  },
  hovered: {
    color: 'black',
  },
  unhovered: {
    color: 'white',
  },
};

const backgroundVariants = {
  hovered: {
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.2,
    },
  },
  unhovered: {
    y: '-7rem',
    transition: {
      type: 'tween',
      duration: 0.2,
    },
  },
};

const Header = () => {
  const controls = useAnimation();
  const [isBannerDisplayed, setIsBannerDisplayed] = useState(true);

  useScrollPosition(({ currPos }) => {
    if (currPos.y === 0) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, []);

  return (
    <motion.header
      animate={controls}
      initial='unhovered'
      variants={variants}
      className='fixed w-full z-50 text-white'
      onHoverStart={() => controls.start('hovered')}
      onHoverEnd={() => controls.start('unhovered')}
    >
      {isBannerDisplayed && (
        <Banner onClick={() => setIsBannerDisplayed(false)} />
      )}

      <div className='relative'>
        <motion.div
          variants={backgroundVariants}
          className='bg-white absolute h-20 w-full z-40'
        />

        <div className='h-20 flex items-center px-7 xl:px-10'>
          <div className='uppercase font-bold text-3xl cursor-pointer relative z-50'>
            Burberry
          </div>

          <Navbar />

          <div className='ml-auto flex gap-8 bg-red-100'>
            <SearchIcon />
            <UserIcon />
            <MinibagIcon />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
