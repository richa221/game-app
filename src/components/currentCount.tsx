import React from 'react';

interface CountProps {
   gameState: {
   	currentCount: number,
   	maxMoves: number
   }
}

const CurrentCount = (props: CountProps) => {
  return (
    <div id={ "currentCount" }>
      <div>
        { props.gameState.currentCount }
      </div>
    </div>
  );
};

export default CurrentCount;
