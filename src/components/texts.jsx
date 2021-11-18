import React from 'react';

export const BoldText = ({ children, link }) => {
  return (
    <div
      className={`${
        link ? 'cursor-pointer hover:text-gray-400' : ''
      } flex items-center justify-between py-3 uppercase font-semibold text-xs text-black`}
    >
      {children}
    </div>
  );
};

const NormalText = ({ children, link }) => {
  return (
    <div
      className={`${
        link ? 'cursor-pointer hover:text-gray-400' : ''
      } text-xs text-black`}
    >
      {children}
    </div>
  );
};

export default NormalText;
