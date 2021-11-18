import React from 'react';
import { ArrowRight } from 'react-feather';

const HeroOption = ({ children }) => {
  return (
    <div className='cursor-pointer flex items-center'>
      <ArrowRight size={18} className='mr-1' />
      {children}
    </div>
  );
};

const Hero = () => {
  return (
    <div
      className='py-52 flex justify-center items-center'
      style={{ backgroundImage: 'url(/hero.jpeg)' }}
    >
      <div className='text-center text-white uppercase font-semibold w-2/5'>
        <h1 className='cursor-pointer text-4xl'>
          Your luxury gifting destination
        </h1>
        <div className='mt-3 flex justify-center gap-6 text-sm'>
          <HeroOption>Women's gifts</HeroOption>
          <HeroOption>Men's gifts</HeroOption>
          <HeroOption>Children's gifts</HeroOption>
        </div>
      </div>
    </div>
  );
};

export default Hero;
