import Board from "./Components/Board";

function App() {
  return (
    <>
      <div className="bg-orange-400 flex flex-col items-center min-h-screen">
        <h1 className="text-white font-serif text-3xl text-center font-bold py-4">
          Tic-Tac-Toe
        </h1>
        <Board />
      </div>
    </>
  );
}

export default App;
