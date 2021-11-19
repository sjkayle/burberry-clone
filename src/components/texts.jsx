import React from 'react';

export const BoldText = ({ children, link }) => {
  return (
    <div
      className={`${
        link ? 'cursor-pointer hover:text-gray-400' : ''
      } flex items-center justify-between py-4 uppercase font-semibold text-xs text-black`}
    >
      {children}
    </div>
  );
};

const Text = ({ children, link, height = 12 }) => {
  return (
    <div
      className={`${
        link ? 'cursor-pointer hover:text-gray-400' : ''
      } flex items-center h-${height} text-xs text-black`}
    >
      {children}
    </div>
  );
};

export default Text;
