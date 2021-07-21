import Adapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';

describe('Store Tests', () => {
  it('should create store', () => {
    const statsObj = { gameState: { squares: [], currentCount: 0, maxMoves: 25 } };
    let store = createStore(rootReducer);
    expect(store.getState()).toEqual(statsObj);    
  });
});