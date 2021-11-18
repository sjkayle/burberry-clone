import React from 'react';
import { ArrowRight } from 'react-feather';

import Section from '../section';

import { threeColumnData, twoColumnData } from '../../data/misc';

const ColumnItem = ({ children }) => {
  return (
    <div className='cursor-pointer flex items-center'>
      <ArrowRight size={18} className='mr-1' />
      {children}
    </div>
  );
};

const Column = ({ title, options, image }) => {
  return (
    <div className='w-full'>
      <div
        className='h-3/4 bg-cover'
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className='mt-5 uppercase font-semibold flex flex-col items-center'>
        <h4 className='cursor-pointer'>{title}</h4>
        <div className='mt-3 flex justify-center gap-6 text-sm'>
          {options.map((option, index) => (
            <ColumnItem key={index}>{option}</ColumnItem>
          ))}
        </div>
      </div>
    </div>
  );
};

const ColumnImages = ({ id }) => {
  const columns = id === 1 ? [...threeColumnData] : [...twoColumnData];
  return (
    <Section background='none'>
      <div className='flex flex-1 gap-px h-full'>
        {columns.map((column, index) => (
          <Column key={index} {...column} />
        ))}
      </div>
    </Section>
  );
};

export default ColumnImages;
