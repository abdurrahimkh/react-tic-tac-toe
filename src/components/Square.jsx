import React from 'react';

const Square = ({ value, onSquareClick }) => {
  const setColor = {
    color: value === 'X' ? 'red' : 'green',
  };
  return (
    <button className='w-20 h-20 md:w-32 md:h-32 border border-gray-300 rounded-lg bg-white' onClick={onSquareClick}>
      <span className='text-5xl font-[Kola]' style={setColor}>
        {value}
      </span>
    </button>
  );
};

export default Square;
