import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Search, User } from 'react-feather';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import Banner from './banner';
import Navbar from './navbar';
import Overlay from './overlay';
import Sidebar from './sidebar';
import MinibagIcon from './icons/minibag';
import SearchIcon from './icons/search';
import Logo from './icons/logo';

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
    y: '-8rem',
    transition: {
      type: 'tween',
      duration: 0.2,
    },
  },
};

const Header = () => {
  const controls = useAnimation();
  const [isBannerDisplayed, setIsBannerDisplayed] = useState(true);
  const [isOverlayDisplayed, setIsOverlayDisplayed] = useState(false);

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y === 0) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    },
    [controls]
  );

  const handleHoverHeader = () => {
    controls.start('hovered');
    setIsOverlayDisplayed(true);
  };

  const handleUnhoverHeader = () => {
    controls.start('unhovered');
    setIsOverlayDisplayed(false);
  };

  return (
    <>
      <Overlay visible={isOverlayDisplayed} />

      <motion.header
        animate={controls}
        variants={variants}
        className='lg:hidden fixed w-full z-50 text-white'
      >
        {isBannerDisplayed && <Banner />}
        <div className='h-16 flex items-center px-5'>
          <Logo />

          <div className='ml-auto flex gap-4'>
            {/* <SearchIcon disabled /> */}
            <Search className='w-5 h-5 cursor-pointer' />
            <MinibagIcon disabled />
            <Sidebar />
          </div>
        </div>
      </motion.header>

      <motion.header
        animate={controls}
        initial='unhovered'
        variants={variants}
        className='hidden lg:block fixed w-full z-50 text-white'
        onHoverStart={handleHoverHeader}
        onHoverEnd={handleUnhoverHeader}
      >
        {isBannerDisplayed && (
          <Banner handleClose={() => setIsBannerDisplayed(false)} />
        )}
        <div className='relative'>
          <motion.div
            variants={backgroundVariants}
            className='bg-white absolute h-20 w-full z-30'
          />
          <div className='h-20 flex items-center px-7 xl:px-10'>
            <Logo />
            <Navbar />
            <div className='ml-auto flex gap-8'>
              <SearchIcon />
              <User className='relative z-50 cursor-pointer' />
              <MinibagIcon />
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
