import React from 'react';

interface EndBoardProps {
   endBoard(): void;
}

const EndGame = (props: EndBoardProps) => {
  return (
    <div id={ "endBoard" }>
      <button
        onMouseUp={ () => {
          props.endBoard();
        } }
      >
        End Game
      </button>
    </div>
  );
};

export default EndGame;
