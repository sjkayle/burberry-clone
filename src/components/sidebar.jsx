import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Menu, X as Close } from 'react-feather';

import Accordion from './accordion';
import Logo from './logo';
import Overlay from './overlay';
import NormalText, { BoldText } from './texts';

import data from '../data/header';

const variants = {
  hidden: {
    x: '24rem',
    transition: {
      type: 'tween',
    },
  },
  visible: {
    x: 0,
    transition: {
      type: 'tween',
    },
  },
};

const Sidebar = () => {
  const controls = useAnimation();
  const [isOverlayDisplayed, setIsOverlayDisplayed] = useState(false);

  const handleOpenSidebar = () => {
    controls.start('visible');
    setIsOverlayDisplayed(true);
    document.body.style.overflowY = 'hidden';
  };

  const handleCloseSidebar = () => {
    controls.start('hidden');
    setIsOverlayDisplayed(false);
    document.body.style.overflowY = 'unset';
  };

  return (
    <>
      <Overlay
        visible={isOverlayDisplayed}
        handleClickOverlay={handleCloseSidebar}
      />

      <motion.div onTap={handleOpenSidebar}>
        <Menu className='w-5 h-5 relative z-30 cursor-pointer' />
      </motion.div>

      <motion.div
        animate={controls}
        initial='hidden'
        variants={variants}
        className='py-4 pr-3 pl-6 w-96 h-full text-black bg-white fixed top-0 right-0 z-50 overflow-y-auto'
      >
        <div className='flex justify-between items-center mb-4'>
          <Logo />
          <motion.div onTap={handleCloseSidebar}>
            <Close className='relative z-50 cursor-pointer' />
          </motion.div>
        </div>

        <Accordion data={data} />

        <div className='my-4 h-px bg-gray-300 w-4' />
        <div>
          <BoldText>Customer Service</BoldText>
          <NormalText link>Store Locator</NormalText>
          <NormalText link>Customer Service</NormalText>
          <NormalText link>Legal &amp; Cookies</NormalText>
        </div>

        <div className='my-4 h-px bg-gray-300 w-4' />
        <div>
          <BoldText>Account</BoldText>
          <NormalText link>Sign in/Register</NormalText>
          <NormalText link>Bag</NormalText>
          <NormalText link>Favourites</NormalText>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
