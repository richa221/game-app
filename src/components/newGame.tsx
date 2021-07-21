import React from 'react';

interface newGameProps {
   createBoard(): void;
}

const NewGame = (props: newGameProps) => {
  return (
    <div id={ "newGame" }>
      <button
        onMouseUp={ () => {
          props.createBoard();
        } }
      >
        Restart Game
      </button>
    </div>
  );
};

export default NewGame;
