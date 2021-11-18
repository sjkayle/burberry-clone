import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import useDisplaySticky from '../../hooks/useDisplaySticky';

import Section from '../section';
import StickyBox from '../sticky-box';

import { carouselData } from '../../data/misc';

const variants = {
  carousel: {
    x: `-${carouselData.length * 30}rem`,
    transition: {
      ease: 'linear',
      repeat: 'Infinity',
      repeatType: 'loop',
      duration: carouselData.length * 16,
    },
  },
};

const CarouselImages = () => {
  const controls = useAnimation();
  const { ref, inView, entry } = useInView();
  const isStickyBoxDisplayed = useDisplaySticky(entry, inView);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
    }, 16000);

    return () => {
      clearInterval(t);
    };
  }, []);

  useEffect(() => {
    controls.start('carousel');
  }, [controls]);

  return (
    <Section background='none'>
      <div ref={ref} className='flex py-11 h-full w-full'>
        <div>
          <StickyBox
            pagination
            currentPage={current + 1}
            pages={carouselData.length}
            title='All wrapped up'
            options={[carouselData[current].title]}
            isDisplayed={isStickyBoxDisplayed}
            position='top'
          />
        </div>
        <div className='overflow-x-hidden'>
          <motion.div
            animate={controls}
            variants={variants}
            className='h-full flex-grow flex w-min'
            whileHover={() => controls.stop()}
            onMouseLeave={() => controls.start('carousel')}
          >
            {carouselData.map((item) => (
              <div
                key={item.id}
                style={{
                  width: '30rem',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-full object-cover cursor-pointer'
                />
              </div>
            ))}
            {carouselData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                style={{
                  width: '30rem',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-full object-cover cursor-pointer'
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default CarouselImages;
