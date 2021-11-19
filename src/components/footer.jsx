import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight } from 'react-feather';

import Accordion from './accordion';
import Text, { BoldText } from './texts';

const variants = {
  blurred: {
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.2,
    },
  },
  focused: {
    y: -20,
    transition: {
      type: 'tween',
      duration: 0.2,
    },
  },
};

const DisclaimerLink = ({ children }) => {
  return (
    <span className='cursor-pointer underline hover:text-gray-400'>
      {children}
    </span>
  );
};

const Footer = () => {
  const controls = useAnimation();
  const [value, setValue] = useState('');

  const handleBlur = () => {
    if (!value) {
      controls.start('blurred');
    }
  };

  return (
    <footer className='bg-white'>
      <div className='px-4 lg:px-10 py-8 flex flex-col lg:flex-row lg:gap-14'>
        <div className='flex-1 mb-12'>
          <BoldText>E-mail signup</BoldText>
          <Text>
            Sign up for email updates on the latest Burberry collections,
            campaigns and videos.
          </Text>
          <div className='mt-9 relative'>
            <input
              type='text'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => controls.start('focused')}
              onBlur={handleBlur}
              className='text-xs border-b rounded-none border-black w-full pb-2 focus:outline-none bg-transparent z-10 relative'
            />
            <motion.div
              animate={controls}
              variants={variants}
              className='text-gray-500 text-xs absolute bottom-0 mb-2'
            >
              Email*
            </motion.div>
            {value && (
              <ArrowRight
                size={18}
                className='mb-2 absolute bottom-0 right-0 cursor-pointer z-20'
              />
            )}
          </div>
        </div>

        <div className='flex-1'>
          <BoldText link>Store location</BoldText>
          <BoldText link>Download our app</BoldText>
        </div>

        <div className='flex-1'>
          <Accordion />
        </div>

        <div className='flex-1'>
          <div className='flex lg:flex-col items-center lg:items-start justify-between py-1'>
            <BoldText link>Language</BoldText>
            <Text link>English</Text>
          </div>
          <div className='flex lg:flex-col items-center lg:items-start justify-between lg:mt-7 py-1'>
            <BoldText link>Shipping to</BoldText>
            <Text link>Malaysia (MYR)</Text>
          </div>
        </div>
      </div>

      <div className='px-4 lg:px-9 pt-3 pb-7 border-t border-gray-300 text-gray-500 text-2xs leading-5'>
        If you are using a screen-reader and are having problems using this
        website, please call <DisclaimerLink>1 800 81 6567</DisclaimerLink> or{' '}
        <DisclaimerLink>contact us</DisclaimerLink> for assistance.
        <br />
        Burberry Limited, Horseferry House, Horseferry Road, London, SW1P 2AW
        <br />
        Registered in England & Wales
        <br />
        Registered Company Number: <DisclaimerLink>00162636</DisclaimerLink>
      </div>
    </footer>
  );
};

export default Footer;
