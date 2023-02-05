import React, { useState } from 'react';
import Board from './components/Board';

const App = () => {
  return (
    <div className='flex justify-center  items-center h-screen bg-gray-50'>
      <Board />
    </div>
  );
};

export default App;
