import React from 'react';
import { gameHeight, gameWidth } from "../utils/constants";
import Squares from "./squares";
import Border from "./border";

interface CanvasProps {    
   gameState: any;
   endBoard(): void;
   createBoard(): void;
   squareClicked(): void;
}
const Canvas = (props: CanvasProps) => {
  const viewBox: any = [0, 0, gameWidth, gameHeight];

  return (
    <svg
      id="color-game-app"
      preserveAspectRatio="xMidYMid meet"
      height="100%"
      width="100%"
      viewBox={ viewBox }
    >
      <Squares gameState={ props.gameState } squareClicked={ props.squareClicked }/>
      <Border/>
    </svg>
  );
};

export default Canvas;
