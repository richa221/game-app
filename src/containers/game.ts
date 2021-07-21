import { connect } from 'react-redux';
import App from '../App';
import { squareClicked, createBoard, endBoard } from '../actions/index';

const mapStateToProps = (state: any) => ({
  gameState: state.gameState,
});

const mapDispatchToProps = (dispatch: any) => ({
  squareClicked: (position: any) => {
    dispatch(squareClicked(position));
  },
  createBoard: () => {
    dispatch(createBoard());
  },
  endBoard: () => {
    dispatch(endBoard());
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;
