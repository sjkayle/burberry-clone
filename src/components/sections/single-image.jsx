import React from 'react';
import { useInView } from 'react-intersection-observer';

import useDisplaySticky from '../../hooks/useDisplaySticky';

import { ImageSection } from '../section';
import StickyBox from '../sticky-box';

const SingleImage = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.45,
  });
  const isStickyBoxDisplayed = useDisplaySticky(entry, inView);

  return (
    <ImageSection image='/background.jpeg' ref={ref}>
      <StickyBox
        title='Gift an icon'
        options={['Women', 'Men']}
        isDisplayed={isStickyBoxDisplayed}
        position='bottom'
      />
    </ImageSection>
  );
};

export default SingleImage;
