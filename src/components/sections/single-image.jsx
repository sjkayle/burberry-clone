import React from 'react';
import { useInView } from 'react-intersection-observer';

import useDisplaySticky from '../../hooks/useDisplaySticky';

import StickyBox from '../sticky-box';

const SingleImage = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.45,
  });
  const isStickyBoxDisplayed = useDisplaySticky(entry, inView);

  return (
    <div
      className='flex justify-center items-end my-0.5 h-screen bg-cover relative lg:pb-12'
      style={{ backgroundImage: 'url(/background.jpeg)' }}
      ref={ref}
    >
      <StickyBox
        title='Gift an icon'
        options={['Women', 'Men']}
        isDisplayed={isStickyBoxDisplayed}
        position='bottom'
      />
    </div>
  );
};

export default SingleImage;
