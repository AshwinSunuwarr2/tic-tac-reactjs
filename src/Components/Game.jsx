import React, { useState } from "react";
import Board from "./Board";

function Game() {
  const [xNext, setXNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXNext(!xNext);
  }

  return (
    <>
      <div className="flex flex-row gap-20">
        <Board xNext={xNext} squares={currentSquares} onPlay={handlePlay} />
        <div className="history">
          <ol className="text-gray-500 text-xl font-mono">helo</ol>
        </div>
      </div>
    </>
  );
}

export default Game;
