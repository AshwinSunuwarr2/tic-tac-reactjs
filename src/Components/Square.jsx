import React, { useState } from "react";

function Square({ className, onSquareClick, value }) {
  return (
    <>
      <button
        className={`bg-white w-20 h-20 border-2 font-bold text-[25px] ${className}`}
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
}

export default Square;
