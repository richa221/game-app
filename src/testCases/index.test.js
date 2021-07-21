import reducer, {initialState}   from '../reducers/index';

describe('Index reducer Test', () => {          
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toMatchSnapshot();
    });

    it('should handle Default Request', () => {
      expect(
        reducer(initialState,
          {
            type: '',
          }),
      ).toMatchSnapshot();
    });

    it('should handle Default Req.', () => {
      const initialGameState = {
        gameState: {
          squares: [{"color": "red",
              "_color": "orange",
              "height": 80,
              "position": 0,
              "width": 80,
              "x": 0,
              "y": 0}]
        },
        currentCount: 0,
        maxMoves: 25,
      };
      expect(
        reducer(initialGameState,
          {
            type: 'SQUARE_CLICKED',
          }),
      ).toMatchSnapshot();
    });

});

