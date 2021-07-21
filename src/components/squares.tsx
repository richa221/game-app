import React from 'react';

interface SquarProps {
   gameState: any;
   squareClicked: any;
}

const Squares = (props: SquarProps) => {
  return (
    <React.Fragment>
      {
        props.gameState.squares.map((square: any, index: number) => {
          return <rect
            x={ square.x }
            y={ square.y }
            width={ square.width }
            height={ square.height }
            fill={ square.color }
            stroke={ square.color }
            onClick={ () => props.squareClicked(square.position) }
            id={ "square-" + index }
            key={ "square-" + index }
          />;
        })
      }
    </React.Fragment>
  );
};

export default Squares;
