import React, { useState } from 'react';
import Confetti from 'react-confetti';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const handleClick = i => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    if (!squares.includes(null) && !calculateWinner(squares)) {
      setDraw(true);
    }
    const newSquares = squares.slice();
    if (isX) {
      newSquares[i] = 'X';
      setIsX(false);
    } else {
      newSquares[i] = 'O';
      setIsX(true);
    }
    setSquares(newSquares);
  };

  function handleNewGame() {
    setSquares(Array(9).fill(null));
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  const isDraw = winner === null && !squares.includes(null);

  const renderStatus = () => {
    if (winner) {
      return <span className='text-xl font-mono bg-green-100 px-4 py-1 rounded-full '>{winner && `WINNER:${winner}`}</span>;
    } else if (!winner && !isDraw) {
      return <span className='text-xl font-mono bg-blue-100 px-4 py-1 rounded-full'>Turn : {isX ? 'X' : 'O'}</span>;
    } else {
      return <span className='text-xl font-mono bg-yellow-100 px-4 py-1 rounded-full'>Draw</span>;
    }
  };

  return (
    <div className='mt-20 md:mt-0 ml-12 md:ml-0'>
      {renderStatus()}
      <div className='flex flex-wrap basis-1/3 w-[20rem] md:w-[30rem] gap-3 my-2 mt-5 '>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      {winner && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <button onClick={handleNewGame} type='button' className='text-white px-8 py-2.5 ml-16 md:ml-[8.8rem] mt-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-500/50  font-medium rounded-lg text-sm text-center  mb-2'>
        New Game
      </button>
    </div>
  );
};

export default Board;
