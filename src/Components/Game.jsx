import React, { useState } from "react";
import Board from "./Board";

function Game() {
  const [xNext, setXNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const [currentMove, setCurrentMove] = useState(0);
  const squares = history[currentMove];

  const handleJump = (i) => {
    setCurrentMove(i);
    setXNext(i % 2 === 0);
  };

  const movesRecord = history.map((move, index) => {
    let description;
    if (index > 0) {
      description = "Go to move #" + index;
    } else {
      description = "Go to start";
    }
    return (
      <li key={index}>
        <button onClick={() => handleJump(index)}>{description}</button>
      </li>
    );
  });

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXNext(!xNext);
  }

  return (
    <>
      <div className="flex flex-row gap-20">
        <Board xNext={xNext} squares={squares} onPlay={handlePlay} />
        <div className="history">
          <ol className="text-gray-600 text-xl font-mono list-decimal">
            {movesRecord}
          </ol>
        </div>
      </div>
    </>
  );
}

export default Game;
