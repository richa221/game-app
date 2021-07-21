export const SQUARE_CLICKED = 'SQUARE_CLICKED';
export const CREATE_BOARD = 'CREATE_BOARD';
export const END_BOARD = 'END_BOARD';

export const squareClicked = (position:number) => ({
  type: SQUARE_CLICKED,
  position,
});

export const createBoard = () => ({
  type: CREATE_BOARD
});

export const endBoard = () => ({
  type: END_BOARD,
});
