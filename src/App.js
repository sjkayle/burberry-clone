import React from 'react';

import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/sections/hero';
import Message from './components/sections/message';
import MenuImage from './components/sections/menu-image';
import ColumnImages from './components/sections/column-images';
import SingleImage from './components/sections/single-image';
import SlideshowImages from './components/sections/slideshow-images';
import CarouselImages from './components/sections/carousel-images';

function App() {
  return (
    <>
      <Header />

      <Hero />
      <Message />
      <ColumnImages id={1} />
      <SlideshowImages />
      <CarouselImages />
      <SingleImage />
      <ColumnImages id={2} />
      <MenuImage />

      <Footer />
    </>
  );
}

/**
 * TODO: fix menu image
 */

export default App;
