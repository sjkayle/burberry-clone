import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'react-feather';
import { motion, useAnimation } from 'framer-motion';

import Text, { BoldText } from './texts';

import data from '../data/footer';

const variants = {
  unrotated: {
    rotate: 0,
    transition: {
      type: 'tween',
    },
  },
  rotated: {
    rotate: 180,
    transition: {
      type: 'tween',
    },
  },
};

const AccordionItem = ({ item, isItemOpen, handleClick }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isItemOpen) {
      controls.start('rotated');
    } else {
      controls.start('unrotated');
    }
  }, [controls, isItemOpen]);

  return (
    <>
      <div
        onClick={() => {
          handleClick(item.id);
        }}
      >
        <BoldText link>
          {item.title}
          <motion.div animate={controls} variants={variants}>
            <ChevronDown width={16} />
          </motion.div>
        </BoldText>
      </div>
      {isItemOpen &&
        item.links.map((link, j) => (
          <div key={j} className='py-3'>
            <Text link>{link}</Text>
          </div>
        ))}
    </>
  );
};

const Accordion = () => {
  const [openItems, setOpenItems] = useState(Array(data.length).fill(false));

  const handleClick = (id) => {
    let updated = [...openItems];
    updated.fill(false);
    updated[id] = !openItems[id];
    setOpenItems(updated);
  };

  return (
    <>
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isItemOpen={openItems[item.id]}
          handleClick={handleClick}
        />
      ))}
    </>
  );
};

export default Accordion;
