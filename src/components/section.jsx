import React, { forwardRef } from 'react';

export const ImageSection = forwardRef(({ children, image }, ref) => {
  return (
    <div
      className='flex justify-center items-end my-0.5 h-screen bg-cover relative pb-12'
      style={{ backgroundImage: `url(${image})` }}
      ref={ref}
    >
      {children}
    </div>
  );
});

const Section = ({ children, background }) => {
  return (
    <div
      className='flex justify-center items-center my-0.5 h-screen bg-cover relative'
      style={{ background: background }}
    >
      {children}
    </div>
  );
};

export default Section;
