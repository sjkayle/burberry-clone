import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Footer from './components/footer';
import Navbar from './components/header';
import Overlay from './components/overlay';
import Hero from './components/sections/hero';
import Message from './components/sections/message';
import MenuImage from './components/sections/menu-image';
import ColumnImages from './components/sections/column-images';
import SingleImage from './components/sections/single-image';
import SlideshowImages from './components/sections/slideshow-images';
import CarouselImages from './components/sections/carousel-images';

function App() {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  return (
    <>
      <motion.div
        onHoverStart={() => setIsHeaderHovered(true)}
        onHoverEnd={() => setIsHeaderHovered(false)}
      >
        <Navbar />
      </motion.div>

      <Hero />
      <Message />
      <ColumnImages id={1} />
      <SlideshowImages />
      <CarouselImages />
      <SingleImage />
      <ColumnImages id={2} />
      <MenuImage />

      <Footer />

      <AnimatePresence>{isHeaderHovered && <Overlay />}</AnimatePresence>
    </>
  );
}

export default App;
