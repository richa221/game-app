import { gameHeight, numColumns, numRows } from "../utils/constants";
import { xyToPos } from "../utils/formulas";

function endBoard(initialGameState: any) {
  let squares = [];
  let squareSize = (gameHeight) / numRows;
  let colors = ["blue"];

  let x, y;
  for (x = 0; x < numColumns; x++) {
    for (y = 0; y < numRows; y++) {
      let color = colors[Math.floor(Math.random() * colors.length)];
      squares.push({
        x: y * squareSize,
        y: x * squareSize,
        width: squareSize,
        height: squareSize,
        color: color,
        position: xyToPos(y, x),
      })
    }
  }

  return {
    gameState: {
      ...initialGameState,
      squares: squares,
    }
  }
}

export default endBoard;
