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

const NormalText = ({ children, link, paddingY = 3 }) => {
  return (
    <div
      className={`${
        link ? 'cursor-pointer hover:text-gray-400' : ''
      } py-${paddingY} text-xs text-black`}
    >
      {children}
    </div>
  );
};

export default NormalText;
