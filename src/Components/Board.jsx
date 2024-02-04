import React, { useState } from "react";
import Square from "./Square";

function Board({ squares, xNext, onPlay }) {
  const handleClick = (i) => {
    if (squares[i] || calcWinner(squares)) {
      return;
    }
    const nextSquare = squares.slice();
    if (xNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    onPlay(nextSquare);
  };

  const calcWinner = (box) => {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return;
  };

  const winner = calcWinner(squares);
  var status;

  if (winner) {
    status = winner + " won🎊🥳";
  } else {
    status = "Turn: " + (xNext ? "X" : "O");
  }
  return (
    <div className="flex flex-col items-center">
      <div className="text-blue-100 text-lg font-serif py-2 font-bold ">
        {status}
      </div>

      <div className="bg-gray-600 h-60 w-60 flex flex-row flex-wrap">
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
    </div>
  );
}

export default Board;
